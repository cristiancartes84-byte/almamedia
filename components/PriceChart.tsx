'use client';

import { useState } from 'react';

interface ChartDataPoint {
  date: string;
  value: number;
}

interface PriceChartProps {
  data: ChartDataPoint[];
  title: string;
  color?: string;
}

export default function PriceChart({ data, title, color = '#10B981' }: PriceChartProps) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const width = 900;
  const height = 300;
  const padding = { top: 40, right: 40, bottom: 50, left: 80 };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const values = data.map(d => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const valueRange = maxValue - minValue;

  // Generar puntos del path
  const points = data.map((d, i) => {
    const x = padding.left + (i / (data.length - 1)) * chartWidth;
    const y = padding.top + chartHeight - ((d.value - minValue) / valueRange) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  // Calcular ticks del eje Y
  const yTicks = 5;
  const yTickValues = Array.from({ length: yTicks }, (_, i) => {
    return minValue + (valueRange / (yTicks - 1)) * i;
  });

  // Seleccionar algunas fechas para el eje X
  const xTickIndices = [0, Math.floor(data.length / 4), Math.floor(data.length / 2), Math.floor(3 * data.length / 4), data.length - 1];

  return (
    <div className="bg-white rounded-xl shadow-2xl p-3 sm:p-6 border-2 relative" style={{ borderColor: color }}>
      <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: '#064E38' }}>
        📊 {title}
      </h3>

      <div className="relative w-full overflow-x-auto overflow-y-visible">
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto min-w-[600px]"
          onMouseLeave={(e) => {
            // Solo cerrar en desktop, no en móvil
            if (window.innerWidth >= 768) {
              setHoveredPoint(null);
            }
          }}
        >
        {/* Grid horizontal */}
        {yTickValues.map((value, i) => {
          const y = padding.top + chartHeight - ((value - minValue) / valueRange) * chartHeight;
          return (
            <g key={i}>
              <line
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="#E5E7EB"
                strokeWidth="1"
              />
              <text
                x={padding.left - 10}
                y={y + 5}
                textAnchor="end"
                fill="#6B7280"
                fontSize="12"
              >
                ${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </text>
            </g>
          );
        })}

        {/* Área bajo la curva */}
        <path
          d={`M ${padding.left},${padding.top + chartHeight} L ${points} L ${width - padding.right},${padding.top + chartHeight} Z`}
          fill={color}
          fillOpacity="0.1"
        />

        {/* Línea del gráfico */}
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Puntos en la línea con hover y click */}
        {data.map((d, i) => {
          const x = padding.left + (i / (data.length - 1)) * chartWidth;
          const y = padding.top + chartHeight - ((d.value - minValue) / valueRange) * chartHeight;
          const isHovered = hoveredPoint === i;

          return (
            <g key={i}>
              {/* Área de hover/click más grande (invisible) */}
              <circle
                cx={x}
                cy={y}
                r="20"
                fill="transparent"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredPoint(i)}
                onClick={() => setHoveredPoint(hoveredPoint === i ? null : i)}
                onTouchStart={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setHoveredPoint(hoveredPoint === i ? null : i);
                }}
              />
              {/* Punto visible */}
              <circle
                cx={x}
                cy={y}
                r={isHovered ? "6" : "3"}
                fill={color}
                stroke="white"
                strokeWidth="2"
                style={{
                  transition: 'all 0.2s',
                  pointerEvents: 'none'
                }}
              />
              {/* Línea vertical al hacer hover */}
              {isHovered && (
                <line
                  x1={x}
                  y1={padding.top}
                  x2={x}
                  y2={padding.top + chartHeight}
                  stroke={color}
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.5"
                  style={{ pointerEvents: 'none' }}
                />
              )}
            </g>
          );
        })}

        {/* Eje X - fechas */}
        {xTickIndices.map((index) => {
          const d = data[index];
          const x = padding.left + (index / (data.length - 1)) * chartWidth;
          return (
            <text
              key={index}
              x={x}
              y={height - padding.bottom + 20}
              textAnchor="middle"
              fill="#6B7280"
              fontSize="11"
            >
              {d.date}
            </text>
          );
        })}
        </svg>

      </div>

      {/* Tooltip flotante - FUERA del SVG para evitar cortes */}
      {hoveredPoint !== null && (() => {
        const pointValue = data[hoveredPoint].value;
        const totalPoints = data.length;

        // Calcular posición del punto en píxeles SVG
        const pointX = padding.left + (hoveredPoint / (totalPoints - 1)) * chartWidth;
        const pointY = padding.top + chartHeight - ((pointValue - minValue) / valueRange) * chartHeight;

        // Convertir a porcentaje del viewBox SVG completo
        const xPercent = (pointX / width) * 100;
        const yPercent = (pointY / height) * 100;

        // Detectar proximidad a bordes con más margen
        const isFirstPoints = hoveredPoint < 3;
        const isLastPoints = hoveredPoint > totalPoints - 4;
        const isTopHalf = yPercent < 50;

        // Posicionamiento seguro
        let tooltipStyle: React.CSSProperties = {
          position: 'absolute',
          pointerEvents: 'none',
          maxWidth: '200px',
        };

        // Horizontal: evitar cortes laterales
        if (isFirstPoints) {
          // Primeros puntos: alinear a la izquierda
          tooltipStyle.left = `${Math.max(xPercent, 5)}%`;
          tooltipStyle.transform = 'translateX(0)';
        } else if (isLastPoints) {
          // Últimos puntos: alinear a la derecha
          tooltipStyle.right = `${Math.max(100 - xPercent, 5)}%`;
          tooltipStyle.transform = 'translateX(0)';
        } else {
          // Puntos centrales: centrado
          tooltipStyle.left = `${xPercent}%`;
          tooltipStyle.transform = 'translateX(-50%)';
        }

        // Vertical: siempre dejar espacio
        if (isTopHalf) {
          // Punto arriba: tooltip ABAJO
          tooltipStyle.top = `calc(${yPercent}% + 25px)`;
        } else {
          // Punto abajo: tooltip ARRIBA
          tooltipStyle.bottom = `calc(${100 - yPercent}% + 25px)`;
        }

        return (
          <div
            className="absolute bg-gray-900 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-2xl z-[100] whitespace-nowrap"
            style={tooltipStyle}
          >
            <div className="text-xs font-semibold mb-0.5 text-gray-300">
              {data[hoveredPoint].date}
            </div>
            <div className="text-base sm:text-lg font-bold" style={{ color: color }}>
              ${data[hoveredPoint].value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </div>
            {/* Flecha del tooltip */}
            <div
              className="absolute"
              style={{
                left: isFirstPoints ? '20px' : isLastPoints ? 'auto' : '50%',
                right: isLastPoints ? '20px' : 'auto',
                transform: (!isFirstPoints && !isLastPoints) ? 'translateX(-50%)' : 'none',
                ...(isTopHalf
                  ? {
                      // Flecha arriba (tooltip abajo del punto)
                      top: '-6px',
                      width: 0,
                      height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderBottom: '6px solid #111827',
                    }
                  : {
                      // Flecha abajo (tooltip arriba del punto)
                      bottom: '-6px',
                      width: 0,
                      height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid #111827',
                    }
                ),
              }}
            />
          </div>
        );
      })()}
    </div>
  );
}
