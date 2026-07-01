'use client';
import { useEffect, useRef, useState } from 'react';

interface Step {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

interface ProcessTimelineProps {
  steps: Step[];
  totalTime?: string;
}

export default function ProcessTimeline({ steps, totalTime }: ProcessTimelineProps) {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps((prev) => {
              if (!prev.includes(stepIndex)) {
                return [...prev, stepIndex].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const stepElements = document.querySelectorAll('.timeline-step');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="relative max-w-4xl mx-auto">
      {/* Línea vertical central */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-border)] md:-translate-x-1/2">
        {/* Línea de progreso animada */}
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--color-accent)] to-[#9FCC00] transition-all duration-1000 ease-out"
          style={{
            height: visibleSteps.length > 0 ? `${(visibleSteps.length / steps.length) * 100}%` : '0%',
          }}
        />
      </div>

      {/* Pasos */}
      <div className="space-y-16 md:space-y-24">
        {steps.map((step, index) => {
          const isVisible = visibleSteps.includes(index);
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              data-step={index}
              className={`timeline-step relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                {/* Contenido izquierdo (desktop) */}
                <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:order-2'} ${!isLeft && 'md:ml-12'}`}>
                  <div
                    className={`transform transition-all duration-500 ${
                      isVisible ? 'translate-x-0' : isLeft ? 'md:-translate-x-10' : 'md:translate-x-10'
                    }`}
                  >
                    <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 hover:border-[var(--color-accent)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all group ml-16 md:ml-0">
                      <div className="flex items-center gap-3 mb-3 md:justify-start">
                        <span className="text-3xl md:hidden">{step.icon}</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-sm text-[var(--color-accent)] font-bold mb-3">{step.subtitle}</p>
                      <p className="text-[var(--color-muted)] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Círculo numerado central */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-y-2 md:translate-y-0 md:relative flex-shrink-0">
                  <div className="relative">
                    {/* Círculo exterior animado */}
                    <div
                      className={`w-16 h-16 rounded-full border-4 border-[var(--color-accent)] bg-[var(--color-bg)] flex items-center justify-center relative transition-all duration-500 ${
                        isVisible ? 'scale-100 rotate-0' : 'scale-50 rotate-180'
                      }`}
                    >
                      {/* Número */}
                      <span className="text-2xl font-black text-[var(--color-accent)] z-10">{step.number}</span>

                      {/* Pulso animado */}
                      {isVisible && (
                        <div className="absolute inset-0 rounded-full border-2 border-[var(--color-accent)] animate-ping opacity-75" />
                      )}
                    </div>

                    {/* Icono flotante (desktop) */}
                    <div
                      className={`hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 text-4xl transition-all duration-500 ${
                        isVisible ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-4'
                      }`}
                    >
                      {step.icon}
                    </div>

                    {/* Flecha de flujo */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-4">
                        <svg
                          width="24"
                          height="60"
                          viewBox="0 0 24 60"
                          className={`transition-all duration-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                          }`}
                        >
                          <path
                            d="M12 0 L12 50 M12 50 L8 46 M12 50 L16 46"
                            stroke="var(--color-accent)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                            className="animate-flow"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Espacio derecho (desktop) */}
                <div className={`flex-1 hidden md:block ${isLeft ? 'md:order-2' : ''}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Tiempo total */}
      {totalTime && (
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            visibleSteps.length === steps.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-2xl px-8 py-6 shadow-[0_10px_40px_rgba(200,255,0,0.2)]">
            <p className="text-xl">
              <strong className="text-[var(--color-accent)] font-bold text-2xl">⏱️ Tiempo total:</strong>{' '}
              <span className="text-white font-bold">{totalTime}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
