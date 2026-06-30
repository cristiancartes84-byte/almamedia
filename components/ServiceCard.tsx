'use client';

import { useEffect, useRef } from 'react';
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

  return (
    <div
      ref={cardRef}
      className="service-card bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-10 opacity-0 translate-y-8 transition-all duration-500 ease-out hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_40px_rgba(200,255,0,0.15)]"
    >
      <div className="service-icon w-[70px] h-[70px] bg-gradient-to-br from-[var(--color-accent)] to-[#9FCC00] rounded-xl flex items-center justify-center mb-6 text-4xl shadow-[0_5px_15px_rgba(200,255,0,0.3)] transition-all duration-500 hover:translate-y-[-5px] hover:scale-110 hover:shadow-[0_10px_30px_rgba(200,255,0,0.5)]">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold mb-4">{title}</h3>
      <p className="text-[var(--color-muted)] mb-6 leading-relaxed">{description}</p>
      <Link
        href={link}
        className="text-[var(--color-accent)] font-semibold inline-flex items-center gap-2 transition-all hover:gap-3"
      >
        Ver más →
      </Link>

      <style jsx>{`
        .service-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
