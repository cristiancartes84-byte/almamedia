import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface HistoricalDataPoint {
  fecha: string;
  valor: number;
}

interface HistoricalResponse {
  version: string;
  autor: string;
  codigo: string;
  nombre: string;
  unidad_medida: string;
  serie: HistoricalDataPoint[];
}

/**
 * GET /api/indicators/historical?indicator=dolar&days=30
 *
 * Obtiene datos históricos desde mindicador.cl
 * Parámetros:
 * - indicator: 'dolar', 'uf', 'utm', 'euro', 'bitcoin', etc.
 * - days: cantidad de días (opcional, por defecto 30)
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const indicator = searchParams.get('indicator') || 'dolar';
    const days = parseInt(searchParams.get('days') || '30', 10);

    // Validar días
    const validDays = Math.min(Math.max(days, 1), 365); // Entre 1 y 365 días

    // Obtener datos históricos
    const response = await fetch(`https://mindicador.cl/api/${indicator}`, {
      cache: 'no-store',
      headers: {
        'User-Agent': 'DivisaChile/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data: HistoricalResponse = await response.json();

    if (!data.serie || !Array.isArray(data.serie)) {
      throw new Error('No hay datos históricos disponibles');
    }

    // Tomar solo los últimos N días solicitados
    const historicalData = data.serie
      .slice(0, validDays)
      .map(item => ({
        date: new Date(item.fecha).toISOString().split('T')[0],
        value: item.valor,
        formattedDate: new Date(item.fecha).toLocaleDateString('es-CL', {
          day: 'numeric',
          month: 'short'
        })
      }))
      .reverse(); // Del más antiguo al más reciente

    // Calcular estadísticas
    const values = historicalData.map(d => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const avgValue = values.reduce((a, b) => a + b, 0) / values.length;
    const lastValue = values[values.length - 1];
    const firstValue = values[0];
    const change = lastValue - firstValue;
    const changePercent = ((change / firstValue) * 100);

    return NextResponse.json({
      success: true,
      indicator: {
        code: data.codigo,
        name: data.nombre,
        unit: data.unidad_medida
      },
      stats: {
        current: lastValue,
        min: minValue,
        max: maxValue,
        avg: avgValue,
        change: change,
        changePercent: changePercent,
        period: `${validDays} días`
      },
      data: historicalData
    });

  } catch (error) {
    console.error('Error fetching historical data:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Error al obtener datos históricos',
        message: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    );
  }
}
