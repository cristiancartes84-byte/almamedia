'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
  index: number;
}

export default function ServiceCard({ icon, title, description, link, index }: ServiceCardProps) {
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

    // Diseño Web
    if (title.includes('Diseño Web')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60" className="animate-float">
            {/* Paleta de colores */}
            <circle cx="15" cy="15" r="8" fill="#C8FF00" className="animate-pulse" />
            <circle cx="45" cy="15" r="8" fill="#9FCC00" className="animate-pulse-delay-1" />
            <circle cx="15" cy="45" r="8" fill="#ffffff" className="animate-pulse-delay-2" />
            <circle cx="45" cy="45" r="8" fill="#0a0a0a" stroke="#C8FF00" strokeWidth="2" className="animate-pulse-delay-3" />
          </svg>
        </div>
      );
    }

    // SEO / Posicionamiento
    if (title.includes('SEO') && !title.includes('Local')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Lupa con ranking */}
            <circle cx="25" cy="25" r="15" stroke="#C8FF00" strokeWidth="3" fill="none" />
            <line x1="36" y1="36" x2="50" y2="50" stroke="#C8FF00" strokeWidth="3" strokeLinecap="round" />
            <text x="20" y="30" fill="#C8FF00" fontSize="14" fontWeight="bold" className="animate-pulse">1</text>
          </svg>
        </div>
      );
    }

    // SEO Local
    if (title.includes('SEO Local') || title.includes('Local')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Pin de ubicación */}
            <path d="M30 5 Q 20 5 15 15 Q 15 25 30 50 Q 45 25 45 15 Q 40 5 30 5 Z" stroke="#C8FF00" strokeWidth="2" fill="none" className="animate-bounce-slow" />
            <circle cx="30" cy="18" r="5" fill="#C8FF00" className="animate-pulse" />
          </svg>
        </div>
      );
    }

    // Fotografía de Producto
    if (title.includes('Fotografía')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Cámara */}
            <rect x="10" y="20" width="40" height="28" rx="4" stroke="#C8FF00" strokeWidth="2" fill="none" />
            <circle cx="30" cy="34" r="8" stroke="#C8FF00" strokeWidth="2" fill="none" className="animate-pulse" />
            <rect x="24" y="15" width="12" height="5" rx="2" fill="#9FCC00" />
            <circle cx="42" cy="26" r="2" fill="#C8FF00" className="animate-pulse-delay-1" />
          </svg>
        </div>
      );
    }

    // Video de Producto
    if (title.includes('Video')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Play button */}
            <circle cx="30" cy="30" r="22" stroke="#C8FF00" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M 24 20 L 24 40 L 42 30 Z" fill="#C8FF00" className="animate-pulse-delay-1" />
          </svg>
        </div>
      );
    }

    // Packs Completos
    if (title.includes('Pack')) {
      return (
        <div className={`absolute top-4 right-4 transition-all duration-500 ${animationClass}`}>
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Paquete/caja */}
            <rect x="10" y="20" width="40" height="30" rx="2" stroke="#C8FF00" strokeWidth="2" fill="none" />
            <line x1="10" y1="35" x2="50" y2="35" stroke="#9FCC00" strokeWidth="2" />
            <line x1="30" y1="20" x2="30" y2="50" stroke="#9FCC00" strokeWidth="2" />
            <circle cx="30" cy="12" r="3" fill="#C8FF00" className="animate-bounce-slow" />
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      ref={cardRef}
      className="service-card relative bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-10 opacity-0 translate-y-8 transition-all duration-500 ease-out hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_40px_rgba(200,255,0,0.15)] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animación SVG específica por servicio */}
      {renderAnimation()}

      <div className="service-icon w-[70px] h-[70px] bg-gradient-to-br from-[var(--color-accent)] to-[#9FCC00] rounded-xl flex items-center justify-center mb-6 text-4xl shadow-[0_5px_15px_rgba(200,255,0,0.3)] transition-all duration-500 hover:translate-y-[-5px] hover:scale-110 hover:shadow-[0_10px_30px_rgba(200,255,0,0.5)] relative z-10">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold mb-4 relative z-10">{title}</h3>
      <p className="text-[var(--color-muted)] mb-6 leading-relaxed relative z-10">{description}</p>
      <Link
        href={link}
        className="text-[var(--color-accent)] font-semibold inline-flex items-center gap-2 transition-all hover:gap-3 relative z-10"
      >
        Ver más →
      </Link>

      {/* Efecto de brillo deslizante en hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(200,255,0,0.1)] to-transparent transition-all duration-700 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} />

      <style jsx>{`
        .service-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
