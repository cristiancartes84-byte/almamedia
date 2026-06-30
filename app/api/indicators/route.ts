import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface IndicatorResponse {
  version: string;
  autor: string;
  fecha: string;
  [key: string]: any;
}

/**
 * GET /api/indicators
 *
 * Obtiene valores oficiales desde mindicador.cl (API del Banco Central de Chile)
 * Fuente oficial: https://mindicador.cl/api
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const indicator = searchParams.get('indicator'); // 'dolar', 'uf', 'utm', etc.

    // Si se solicita un indicador específico
    if (indicator) {
      const response = await fetch(`https://mindicador.cl/api/${indicator}`, {
        cache: 'no-store',
        headers: {
          'User-Agent': 'DivisaChile/1.0'
        }
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      return NextResponse.json(data);
    }

    // Obtener todos los indicadores principales
    const response = await fetch('https://mindicador.cl/api', {
      cache: 'no-store',
      headers: {
        'User-Agent': 'DivisaChile/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data: IndicatorResponse = await response.json();

    // Transformar al formato de nuestra app
    const indicators = {
      timestamp: new Date().toISOString(),
      source: 'Banco Central de Chile (vía mindicador.cl)',
      fecha: data.fecha,
      dolar: {
        name: 'Dólar Observado',
        symbol: 'USD',
        value: data.dolar?.valor || 0,
        date: data.dolar?.fecha || data.fecha,
        unit: 'CLP',
        source: 'Banco Central'
      },
      euro: {
        name: 'Euro',
        symbol: 'EUR',
        value: data.euro?.valor || 0,
        date: data.euro?.fecha || data.fecha,
        unit: 'CLP',
        source: 'Banco Central'
      },
      uf: {
        name: 'UF',
        symbol: 'UF',
        value: data.uf?.valor || 0,
        date: data.uf?.fecha || data.fecha,
        unit: 'CLP',
        source: 'Banco Central'
      },
      utm: {
        name: 'UTM',
        symbol: 'UTM',
        value: data.utm?.valor || 0,
        date: data.utm?.fecha || data.fecha,
        unit: 'CLP',
        source: 'SII'
      },
      ipc: {
        name: 'IPC',
        symbol: 'IPC',
        value: data.ipc?.valor || 0,
        date: data.ipc?.fecha || data.fecha,
        unit: '%',
        source: 'INE'
      },
      libra: {
        name: 'Libra Esterlina',
        symbol: 'GBP',
        value: data.libra_cobre?.valor || 0,
        date: data.libra_cobre?.fecha || data.fecha,
        unit: 'CLP',
        source: 'Banco Central'
      },
      tpm: {
        name: 'TPM',
        symbol: 'TPM',
        value: data.tpm?.valor || 0,
        date: data.tpm?.fecha || data.fecha,
        unit: '%',
        source: 'Banco Central'
      },
      bitcoin: {
        name: 'Bitcoin',
        symbol: 'BTC',
        value: data.bitcoin?.valor || 0,
        date: data.bitcoin?.fecha || data.fecha,
        unit: 'CLP',
        source: 'CoinGecko'
      }
    };

    return NextResponse.json({
      success: true,
      data: indicators,
      raw: data
    });

  } catch (error) {
    console.error('Error fetching indicators:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Error al obtener indicadores',
        message: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    );
  }
}
