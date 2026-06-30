'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockTickerData, generateHistoricalData } from '@/data/mockData';
import { formatCLP, formatPercent } from '@/lib/utils';
import PriceChart from './PriceChart';
import { useIndicators } from '@/lib/hooks/useIndicators';

export default function Hero() {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const { data: realData, loading, error } = useIndicators();

  // Usar datos reales si están disponibles, sino usar mock como fallback
  const tickerData = realData.length > 0 ? realData : mockTickerData;

  const dolarObservado = tickerData.find(item => item.symbol === 'USD');
  const uf = tickerData.find(item => item.symbol === 'UF');
  const utm = tickerData.find(item => item.symbol === 'UTM');

  return (
    <section className="relative text-white py-20" style={{
      background: 'linear-gradient(135deg, #064E38 0%, #065F46 50%, #10B981 100%)'
    }}>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {loading ? '⏳ Cargando datos oficiales...' : error ? '⚠️ Usando datos de respaldo' : '✓ Actualizado hoy • Fuente: Banco Central de Chile'}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Dólar Observado Hoy en Chile
          </h1>

          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Consulta valores oficiales de divisas, UF, UTM y Bitcoin actualizados en tiempo real.
            La referencia financiera más confiable de Chile.
          </p>

          {/* Valores destacados - Grid responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto mb-8">
            {tickerData.map((item, index) => (
              <div
                key={item.symbol}
                className={`backdrop-blur-sm rounded-xl p-5 border transition-all cursor-pointer hover:scale-105 ${
                  selectedSymbol === item.symbol
                    ? 'bg-white/25 border-white/40 shadow-lg'
                    : 'bg-white/10 border-white/20 hover:bg-white/15'
                }`}
                onClick={() => setSelectedSymbol(selectedSymbol === item.symbol ? null : item.symbol)}
              >
                <div className="text-xs sm:text-xs font-semibold mb-1" style={{ color: '#F59E0B' }}>
                  {item.name} {selectedSymbol === item.symbol && '📊'}
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-1" style={{ color: '#ffffff' }}>
                  {item.symbol === 'BTC' || item.symbol === 'ETH'
                    ? formatCLP(item.value, false)
                    : item.unit === 'CLP'
                      ? formatCLP(item.value)
                      : `${formatCLP(item.value, false)} ${item.unit}`
                  }
                </div>
                <div className={`text-xs font-semibold flex items-center gap-1 ${
                  item.changePercent > 0 ? 'text-green-300' :
                  item.changePercent < 0 ? 'text-red-300' : 'text-gray-300'
                }`}>
                  {item.changePercent > 0 ? '▲' : item.changePercent < 0 ? '▼' : '●'}
                  {formatPercent(Math.abs(item.changePercent))}
                </div>
              </div>
            ))}
          </div>

          {/* Modal de Gráfico - Pantalla completa */}
          {selectedSymbol && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
              onClick={() => setSelectedSymbol(null)}
            >
              <div
                className="relative w-full max-w-6xl bg-white rounded-xl sm:rounded-2xl shadow-2xl max-h-[95vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botón cerrar */}
                <button
                  onClick={() => setSelectedSymbol(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all hover:scale-110"
                  title="Cerrar gráfico"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Contenido del modal */}
                <div className="p-3 sm:p-6 md:p-8 overflow-auto max-h-[95vh]">
                  <PriceChart
                    data={generateHistoricalData(
                      tickerData.find(item => item.symbol === selectedSymbol)?.value || 0,
                      30
                    )}
                    title={`Evolución del ${tickerData.find(item => item.symbol === selectedSymbol)?.name} — Últimos 30 días`}
                    color={selectedSymbol === 'BTC' || selectedSymbol === 'ETH' ? '#F59E0B' : '#10B981'}
                  />
                </div>
              </div>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              href="/conversor-monedas-chile"
              className="px-8 py-3 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#ffffff', color: '#064E38' }}
            >
              Usar Conversor
            </Link>
            <Link
              href="/dolar-hoy-chile"
              className="px-8 py-3 rounded-lg font-bold text-lg transition-all"
              style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}
            >
              Ver Más Divisas
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
