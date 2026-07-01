'use client';
import { useState } from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  animationType: 'design' | 'speed' | 'responsive' | 'seo' | 'analytics' | 'forms' | 'security' | 'update' | 'hosting';
}

export default function FeatureCard({ icon, title, description, animationType }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const renderAnimation = () => {
    switch (animationType) {
      case 'design':
        return (
          <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <svg width="60" height="60" viewBox="0 0 60 60" className="animate-float">
              {/* Paleta de colores */}
              <circle cx="15" cy="15" r="8" fill="#C8FF00" className="animate-pulse" />
              <circle cx="45" cy="15" r="8" fill="#9FCC00" className="animate-pulse-delay-1" />
              <circle cx="15" cy="45" r="8" fill="#ffffff" className="animate-pulse-delay-2" />
              <circle cx="45" cy="45" r="8" fill="#0a0a0a" stroke="#C8FF00" strokeWidth="2" className="animate-pulse-delay-3" />
            </svg>
          </div>
        );

      case 'speed':
        return (
          <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <svg width="60" height="60" viewBox="0 0 60 60" className="animate-speed">
              {/* Rayo animado */}
              <path d="M30 5 L20 30 L35 30 L25 55 L45 25 L30 25 Z" fill="#C8FF00" className="animate-pulse" />
              <circle cx="30" cy="30" r="25" stroke="#C8FF00" strokeWidth="2" fill="none" strokeDasharray="4 4" className="animate-spin-slow" />
            </svg>
          </div>
        );

      case 'responsive':
        return (
          <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              {/* Dispositivos */}
              <rect x="5" y="15" width="20" height="30" rx="2" stroke="#C8FF00" strokeWidth="2" fill="none" className="animate-bounce-slow" />
              <rect x="35" y="10" width="15" height="25" rx="1" stroke="#9FCC00" strokeWidth="2" fill="none" className="animate-bounce-slower" />
            </svg>
          </div>
        );

      case 'seo':
        return (
          <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              {/* Lupa con ranking */}
              <circle cx="25" cy="25" r="15" stroke="#C8FF00" strokeWidth="3" fill="none" />
              <line x1="36" y1="36" x2="50" y2="50" stroke="#C8FF00" strokeWidth="3" strokeLinecap="round" />
              <text x="20" y="30" fill="#C8FF00" fontSize="14" fontWeight="bold" className="animate-pulse">1</text>
            </svg>
          </div>
        );

      case 'analytics':
        return (
          <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              {/* Gráfico de barras */}
              <rect x="10" y="40" width="8" height="15" fill="#C8FF00" className="animate-bar-grow-1" />
              <rect x="22" y="30" width="8" height="25" fill="#9FCC00" className="animate-bar-grow-2" />
              <rect x="34" y="20" width="8" height="35" fill="#C8FF00" className="animate-bar-grow-3" />
              <rect x="46" y="10" width="8" height="45" fill="#9FCC00" className="animate-bar-grow-4" />
            </svg>
          </div>
        );

      case 'forms':
        return (
          <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              {/* Formulario con checkmarks */}
              <rect x="10" y="10" width="40" height="40" rx="4" stroke="#C8FF00" strokeWidth="2" fill="none" />
              <line x1="15" y1="20" x2="45" y2="20" stroke="#9FCC00" strokeWidth="2" className="animate-draw-line-1" />
              <line x1="15" y1="30" x2="45" y2="30" stroke="#9FCC00" strokeWidth="2" className="animate-draw-line-2" />
              <path d="M 15 42 L 20 47 L 30 37" stroke="#C8FF00" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-check" />
            </svg>
          </div>
        );

      case 'security':
        return (
          <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              {/* Candado */}
              <rect x="20" y="30" width="20" height="20" rx="2" fill="#C8FF00" className="animate-lock-close" />
              <path d="M 25 30 L 25 20 Q 25 10 30 10 Q 35 10 35 20 L 35 30" stroke="#C8FF00" strokeWidth="3" fill="none" className="animate-lock-arc" />
              <circle cx="30" cy="40" r="3" fill="#0a0a0a" />
            </svg>
          </div>
        );

      case 'update':
        return (
          <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              {/* Lápiz escribiendo */}
              <path d="M 40 10 L 50 20 L 25 45 L 10 50 L 15 35 Z" stroke="#C8FF00" strokeWidth="2" fill="none" className="animate-write" />
              <line x1="38" y1="12" x2="48" y2="22" stroke="#C8FF00" strokeWidth="2" />
              <circle cx="20" cy="40" r="2" fill="#C8FF00" className="animate-pulse" />
            </svg>
          </div>
        );

      case 'hosting':
        return (
          <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <svg width="60" height="60" viewBox="0 0 60 60" className="animate-spin-slow">
              {/* Globo girando */}
              <circle cx="30" cy="30" r="20" stroke="#C8FF00" strokeWidth="2" fill="none" />
              <ellipse cx="30" cy="30" rx="8" ry="20" stroke="#9FCC00" strokeWidth="2" fill="none" />
              <line x1="10" y1="30" x2="50" y2="30" stroke="#C8FF00" strokeWidth="2" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="relative bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderAnimation()}
      <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)] relative z-10">{icon} {title}</h3>
      <p className="text-[var(--color-muted)] leading-relaxed relative z-10">{description}</p>

      {/* Efecto de brillo en hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(200,255,0,0.1)] to-transparent transition-all duration-700 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} />
    </div>
  );
}
