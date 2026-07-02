'use client';

import { useEffect, useRef, useState } from 'react';

interface SectorCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function SectorCard({ icon, title, description, index }: SectorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  // Renderizar animación SVG según el sector
  const renderAnimation = () => {
    const animationClass = isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50';

    // Educación
    if (title.includes('Educación')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Birrete académico */}
            <rect x="10" y="25" width="40" height="3" fill="#C8FF00" />
            <polygon points="30,15 10,25 30,35 50,25" fill="#C8FF00" className="animate-float" />
            <rect x="28" y="35" width="4" height="15" fill="#9FCC00" />
            <circle cx="30" cy="52" r="3" fill="#C8FF00" className="animate-bounce-slow" />
          </svg>
        </div>
      );
    }

    // Salud
    if (title.includes('Salud')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Cruz médica */}
            <rect x="25" y="10" width="10" height="40" rx="2" fill="#C8FF00" className="animate-pulse" />
            <rect x="10" y="25" width="40" height="10" rx="2" fill="#C8FF00" className="animate-pulse-delay-1" />
            <circle cx="30" cy="30" r="20" stroke="#9FCC00" strokeWidth="2" fill="none" className="animate-pulse-delay-2" />
          </svg>
        </div>
      );
    }

    // Gastronomía
    if (title.includes('Gastronomía')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Plato con cubiertos */}
            <circle cx="30" cy="35" r="15" stroke="#C8FF00" strokeWidth="2" fill="none" />
            <line x1="15" y1="15" x2="15" y2="30" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round" className="animate-bounce-slow" />
            <line x1="12" y1="15" x2="12" y2="25" stroke="#9FCC00" strokeWidth="2" strokeLinecap="round" className="animate-bounce-slower" />
            <line x1="18" y1="15" x2="18" y2="25" stroke="#9FCC00" strokeWidth="2" strokeLinecap="round" className="animate-bounce-slower" />
            <path d="M 40 15 L 45 30 L 45 50" stroke="#C8FF00" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-float" />
          </svg>
        </div>
      );
    }

    // Retail
    if (title.includes('Retail')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Bolsa de compras */}
            <rect x="15" y="20" width="30" height="30" rx="2" stroke="#C8FF00" strokeWidth="2" fill="none" />
            <path d="M 22 20 Q 22 12 30 12 Q 38 12 38 20" stroke="#9FCC00" strokeWidth="2" fill="none" />
            <circle cx="25" cy="32" r="2" fill="#C8FF00" className="animate-pulse" />
            <circle cx="35" cy="32" r="2" fill="#C8FF00" className="animate-pulse-delay-1" />
          </svg>
        </div>
      );
    }

    // Servicios Profesionales
    if (title.includes('Profesionales')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Maletín */}
            <rect x="12" y="25" width="36" height="22" rx="2" stroke="#C8FF00" strokeWidth="2" fill="none" />
            <rect x="22" y="18" width="16" height="7" rx="1" fill="#9FCC00" />
            <line x1="30" y1="32" x2="30" y2="42" stroke="#C8FF00" strokeWidth="2" strokeLinecap="round" />
            <circle cx="30" cy="36" r="4" stroke="#C8FF00" strokeWidth="2" fill="none" className="animate-pulse" />
          </svg>
        </div>
      );
    }

    // Fitness
    if (title.includes('Fitness')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Pesa */}
            <rect x="8" y="26" width="10" height="8" rx="2" fill="#C8FF00" className="animate-bounce-slow" />
            <rect x="42" y="26" width="10" height="8" rx="2" fill="#C8FF00" className="animate-bounce-slow" />
            <rect x="18" y="28" width="24" height="4" rx="1" fill="#9FCC00" />
            <circle cx="30" cy="30" r="3" fill="#C8FF00" className="animate-pulse" />
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      ref={cardRef}
      className="sector-card relative bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 opacity-0 translate-y-8 transition-all duration-500 ease-out hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_40px_rgba(200,255,0,0.15)] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animación SVG específica por sector */}
      {renderAnimation()}

      <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)] relative z-10">
        {icon} {title}
      </h3>
      <p className="text-[var(--color-muted)] leading-relaxed relative z-10">{description}</p>

      {/* Efecto de brillo deslizante en hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(200,255,0,0.1)] to-transparent transition-all duration-700 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} />

      <style jsx>{`
        .sector-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
