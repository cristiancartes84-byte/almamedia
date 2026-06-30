'use client';

import { useState, useEffect } from 'react';

export interface TickerValue {
  name: string;
  symbol: string;
  value: number;
  change: number;
  changePercent: number;
  unit: string;
  source: string;
}

interface IndicatorData {
  name: string;
  symbol: string;
  value: number;
  date: string;
  unit: string;
  source: string;
}

interface IndicatorsResponse {
  success: boolean;
  data: {
    timestamp: string;
    source: string;
    fecha: string;
    dolar: IndicatorData;
    euro: IndicatorData;
    uf: IndicatorData;
    utm: IndicatorData;
    ipc: IndicatorData;
    libra: IndicatorData;
    tpm: IndicatorData;
    bitcoin: IndicatorData;
  };
}

/**
 * Hook para obtener indicadores económicos en tiempo real
 * desde la API oficial del Banco Central vía mindicador.cl
 */
export function useIndicators() {
  const [data, setData] = useState<TickerValue[]>([]);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  useEffect(() => {
    async function fetchIndicators() {
      try {
        setLoading(true);
        const response = await fetch('/api/indicators', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          }
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result: IndicatorsResponse = await response.json();

        if (!result.success) {
          throw new Error('Error al obtener indicadores');
        }

        // Transformar al formato TickerValue
        const indicators: TickerValue[] = [
          {
            name: result.data.dolar.name,
            symbol: result.data.dolar.symbol,
            value: result.data.dolar.value,
            change: 0, // TODO: calcular cambio desde histórico
            changePercent: 0,
            unit: result.data.dolar.unit,
            source: result.data.dolar.source,
          },
          {
            name: result.data.euro.name,
            symbol: result.data.euro.symbol,
            value: result.data.euro.value,
            change: 0,
            changePercent: 0,
            unit: result.data.euro.unit,
            source: result.data.euro.source,
          },
          {
            name: result.data.libra.name,
            symbol: result.data.libra.symbol,
            value: result.data.libra.value,
            change: 0,
            changePercent: 0,
            unit: result.data.libra.unit,
            source: result.data.libra.source,
          },
          {
            name: result.data.uf.name,
            symbol: result.data.uf.symbol,
            value: result.data.uf.value,
            change: 0,
            changePercent: 0,
            unit: result.data.uf.unit,
            source: result.data.uf.source,
          },
          {
            name: result.data.utm.name,
            symbol: result.data.utm.symbol,
            value: result.data.utm.value,
            change: 0,
            changePercent: 0,
            unit: result.data.utm.unit,
            source: result.data.utm.source,
          },
          {
            name: result.data.ipc.name,
            symbol: result.data.ipc.symbol,
            value: result.data.ipc.value,
            change: 0,
            changePercent: 0,
            unit: result.data.ipc.unit,
            source: result.data.ipc.source,
          },
          {
            name: result.data.tpm.name,
            symbol: result.data.tpm.symbol,
            value: result.data.tpm.value,
            change: 0,
            changePercent: 0,
            unit: result.data.tpm.unit,
            source: result.data.tpm.source,
          },
          {
            name: result.data.bitcoin.name,
            symbol: result.data.bitcoin.symbol,
            value: result.data.bitcoin.value,
            change: 0,
            changePercent: 0,
            unit: result.data.bitcoin.unit,
            source: result.data.bitcoin.source,
          },
        ];

        // Crear objeto de tasas de cambio
        const rates: Record<string, number> = {
          CLP: 1,
          USD: result.data.dolar.value,
          EUR: result.data.euro.value,
          GBP: result.data.libra.value,
          UF: result.data.uf.value,
          UTM: result.data.utm.value,
          BTC: result.data.bitcoin.value,
          // Valores aproximados para otras monedas no disponibles en la API
          ARS: 2.85,
          BRL: 180.45,
          MXN: 52.30,
          JPY: 6.15,
          CNY: 128.90,
          ETH: 3256890,
          USDT: result.data.dolar.value - 0.70,
        };

        setData(indicators);
        setExchangeRates(rates);
        setLastUpdate(result.data.timestamp);
        setError(null);

      } catch (err) {
        console.error('Error fetching indicators:', err);
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }

    fetchIndicators();

    // Refrescar cada 5 minutos
    const interval = setInterval(fetchIndicators, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { data, exchangeRates, loading, error, lastUpdate };
}
