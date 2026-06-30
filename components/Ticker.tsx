'use client';

import { useState } from 'react';
import { mockTickerData } from '@/data/mockData';
import { formatCLP, formatChileanNumber, formatPercent } from '@/lib/utils';
import { useIndicators } from '@/lib/hooks/useIndicators';

export default function Ticker() {
  const [isPaused, setIsPaused] = useState(false);
  const { data: realData } = useIndicators();

  // Usar datos reales si están disponibles, sino usar mock como fallback
  const safeTickerData = realData.length > 0 ? realData : mockTickerData;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 text-white shadow-md" style={{ backgroundColor: '#064E38' }}>
      <div className="flex items-stretch h-10">
        {/* Etiqueta "AHORA" fija a la izquierda */}
        <div className="flex-shrink-0 flex items-center px-3 font-bold text-xs tracking-wide" style={{ backgroundColor: '#10B981' }}>
          AHORA
        </div>

        {/* Ticker con scroll */}
        <div
          className="flex-1 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex h-full ${!isPaused ? 'animate-ticker-faster' : ''}`}>
            {/* Duplicar el contenido para scroll infinito */}
            {[...safeTickerData, ...safeTickerData].map((item, index) => (
              <div
                key={`${item.symbol}-${index}`}
                className="flex items-center gap-1.5 px-3 py-2 border-r border-white/10 whitespace-nowrap h-full"
              >
                <span className="font-semibold text-xs uppercase tracking-tight opacity-90">
                  {item.name}
                </span>
                <span className="font-bold text-sm tabular-nums" style={{ color: '#F59E0B' }}>
                  {item.symbol === 'BTC' || item.symbol === 'ETH'
                    ? formatCLP(item.value, false)
                    : item.unit === 'CLP'
                      ? formatCLP(item.value)
                      : `${formatChileanNumber(item.value, 2)}`
                  }
                </span>
                <span className={`text-xs font-semibold tabular-nums ${
                  item.changePercent > 0 ? 'text-green-300' :
                  item.changePercent < 0 ? 'text-red-300' : 'text-gray-300'
                }`}>
                  {item.changePercent > 0 ? '▲' : item.changePercent < 0 ? '▼' : ''}
                  {formatPercent(Math.abs(item.changePercent), 2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
