'use client';

import { useEffect, useRef, useState } from 'react';

interface SEOFeatureCardProps {
  icon: string;
  title: string;
  description: string;
  items?: string[];
  index: number;
  size?: 'small' | 'medium' | 'large';
}

export default function SEOFeatureCard({ icon, title, description, items, index, size = 'medium' }: SEOFeatureCardProps) {
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

  // Renderizar animación SVG según el servicio
  const renderAnimation = () => {
    const animationClass = isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50';

    // Google Business Profile
    if (title.includes('Google Business') || title.includes('Google Maps')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Pin de ubicación Google Maps */}
            <path d="M30 5 Q 20 5 15 15 Q 15 25 30 50 Q 45 25 45 15 Q 40 5 30 5 Z" stroke="#C8FF00" strokeWidth="2" fill="none" className="animate-bounce-slow" />
            <circle cx="30" cy="18" r="5" fill="#C8FF00" className="animate-pulse" />
            <text x="26" y="22" fill="#0a0a0a" fontSize="8" fontWeight="bold">G</text>
          </svg>
        </div>
      );
    }

    // Gestión de Reseñas / Estrellas
    if (title.includes('Reseñas') || title.includes('Reseña')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Estrellas animadas */}
            <polygon points="30,10 35,25 50,25 38,35 43,50 30,40 17,50 22,35 10,25 25,25" fill="#C8FF00" className="animate-pulse" />
            <polygon points="15,15 17,20 22,20 18,23 20,28 15,25 10,28 12,23 8,20 13,20" fill="#9FCC00" className="animate-pulse-delay-1" />
            <polygon points="45,15 47,20 52,20 48,23 50,28 45,25 40,28 42,23 38,20 43,20" fill="#9FCC00" className="animate-pulse-delay-2" />
          </svg>
        </div>
      );
    }

    // Citaciones / Directorios
    if (title.includes('Citaciones') || title.includes('Directorios')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Lista/Directorio */}
            <rect x="15" y="15" width="30" height="30" rx="2" stroke="#C8FF00" strokeWidth="2" fill="none" />
            <line x1="20" y1="22" x2="40" y2="22" stroke="#C8FF00" strokeWidth="2" className="animate-pulse" />
            <line x1="20" y1="30" x2="40" y2="30" stroke="#9FCC00" strokeWidth="2" className="animate-pulse-delay-1" />
            <line x1="20" y1="38" x2="40" y2="38" stroke="#9FCC00" strokeWidth="2" className="animate-pulse-delay-2" />
            <circle cx="48" cy="12" r="3" fill="#C8FF00" className="animate-bounce-slower" />
          </svg>
        </div>
      );
    }

    // Tráfico / Visitantes
    if (title.includes('Tráfico') || title.includes('Visitantes')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Personas/Usuarios */}
            <circle cx="25" cy="20" r="5" fill="#C8FF00" className="animate-float" />
            <path d="M 15 35 Q 20 28 25 28 Q 30 28 35 35" stroke="#C8FF00" strokeWidth="2" fill="none" />
            <circle cx="40" cy="25" r="4" fill="#9FCC00" className="animate-float" style={{animationDelay: '0.2s'}} />
            <path d="M 32 40 Q 36 35 40 35 Q 44 35 48 40" stroke="#9FCC00" strokeWidth="2" fill="none" />
          </svg>
        </div>
      );
    }

    // Resultados / Velocidad
    if (title.includes('Resultados') || title.includes('Rápido')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Rayo de velocidad */}
            <path d="M 35 10 L 20 30 L 30 30 L 25 50 L 45 25 L 35 25 Z" fill="#C8FF00" className="animate-pulse" />
            <circle cx="45" cy="15" r="2" fill="#9FCC00" className="animate-bounce-slow" />
            <circle cx="15" cy="45" r="2" fill="#9FCC00" className="animate-bounce-slower" />
          </svg>
        </div>
      );
    }

    // Visibilidad / Ojo
    if (title.includes('Visibilidad') || title.includes('Momento')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Ojo */}
            <ellipse cx="30" cy="30" rx="20" ry="12" stroke="#C8FF00" strokeWidth="2" fill="none" />
            <circle cx="30" cy="30" r="8" fill="#C8FF00" className="animate-pulse" />
            <circle cx="30" cy="30" r="4" fill="#0a0a0a" />
          </svg>
        </div>
      );
    }

    // Dinero / Costo
    if (title.includes('Costo') || title.includes('Dinero') || title.includes('$')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Moneda */}
            <circle cx="30" cy="30" r="18" stroke="#C8FF00" strokeWidth="2" fill="none" className="animate-pulse" />
            <text x="22" y="38" fill="#C8FF00" fontSize="20" fontWeight="bold">$</text>
            <path d="M 20 15 L 25 20 L 30 15" stroke="#9FCC00" strokeWidth="2" fill="none" className="animate-bounce-slow" />
          </svg>
        </div>
      );
    }

    // Ventaja / Trofeo
    if (title.includes('Ventaja') || title.includes('Competitiva')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Trofeo */}
            <path d="M 20 20 L 20 25 Q 20 35 30 35 Q 40 35 40 25 L 40 20" stroke="#C8FF00" strokeWidth="2" fill="none" />
            <rect x="25" y="15" width="10" height="8" fill="#C8FF00" />
            <line x1="30" y1="35" x2="30" y2="45" stroke="#C8FF00" strokeWidth="2" />
            <rect x="22" y="45" width="16" height="3" fill="#9FCC00" />
            <circle cx="30" cy="12" r="3" fill="#C8FF00" className="animate-bounce-slow" />
          </svg>
        </div>
      );
    }

    // Móvil / Teléfono
    if (title.includes('Móvil') || title.includes('Celular')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Smartphone */}
            <rect x="20" y="10" width="20" height="40" rx="2" stroke="#C8FF00" strokeWidth="2" fill="none" />
            <rect x="23" y="14" width="14" height="28" fill="none" stroke="#9FCC00" strokeWidth="1" />
            <circle cx="30" cy="46" r="2" fill="#C8FF00" className="animate-pulse" />
            <path d="M 30 25 L 30 30 L 35 28" stroke="#C8FF00" strokeWidth="2" fill="none" />
          </svg>
        </div>
      );
    }

    return null;
  };

  const sizeClasses = {
    small: 'p-6',
    medium: 'p-8',
    large: 'p-10'
  };

  return (
    <div
      ref={cardRef}
      className={`feature-card relative bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl ${sizeClasses[size]} opacity-0 translate-y-8 transition-all duration-500 ease-out hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_40px_rgba(200,255,0,0.15)] overflow-hidden cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animación SVG específica */}
      {renderAnimation()}

      <h3 className={`${size === 'large' ? 'text-2xl' : size === 'medium' ? 'text-xl' : 'text-lg'} font-bold mb-3 text-[var(--color-accent)] relative z-10`}>
        {icon} {title}
      </h3>
      <p className={`text-[var(--color-muted)] leading-relaxed ${items ? 'mb-4' : ''} relative z-10 ${size === 'small' ? 'text-sm' : ''}`}>
        {description}
      </p>
      {items && (
        <ul className="text-sm text-[var(--color-muted)] space-y-1 relative z-10">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {/* Efecto de brillo deslizante en hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(200,255,0,0.1)] to-transparent transition-all duration-700 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} />

      <style jsx>{`
        .feature-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
