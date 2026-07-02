'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Muñoz',
    role: 'Director General',
    company: 'Ferretería El Constructor',
    city: 'Concepción',
    image: '👨‍💼',
    rating: 5,
    text: 'Duplicamos las ventas online en 3 meses. El diseño web que hizo Alma Media es rápido, profesional y convierte visitas en ventas reales.',
    result: '+120% ventas online'
  },
  {
    id: 2,
    name: 'María Fernanda Riquelme',
    role: 'Dueña',
    company: 'Boutique Luna Nueva',
    city: 'Talcahuano',
    image: '👩‍💼',
    rating: 5,
    text: 'Pasamos de página 3 a primera posición en Google en 4 meses. Ahora recibimos 10 veces más consultas por Instagram y WhatsApp.',
    result: '+850% tráfico web'
  },
  {
    id: 3,
    name: 'Rodrigo Soto',
    role: 'Gerente Comercial',
    company: 'Inmobiliaria Horizonte',
    city: 'San Pedro de la Paz',
    image: '👔',
    rating: 5,
    text: 'Las fotos de producto profesionales aumentaron las conversiones un 65%. Inversión que se pagó sola en el primer mes.',
    result: '+65% conversión'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className="relative">
      {/* Testimonial Card */}
      <div className="bg-[var(--color-card)] border-2 border-[var(--color-border)] rounded-2xl p-8 md:p-12 max-w-[900px] mx-auto">
        {/* Rating Stars */}
        <div className="flex gap-1 justify-center mb-6">
          {[...Array(currentTestimonial.rating)].map((_, i) => (
            <span key={i} className="text-[var(--color-accent)] text-2xl">★</span>
          ))}
        </div>

        {/* Quote */}
        <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
          "{currentTestimonial.text}"
        </p>

        {/* Result Highlight */}
        <div className="bg-[rgba(200,255,0,0.1)] border border-[var(--color-accent)] rounded-xl py-3 px-6 inline-block mb-8">
          <p className="text-[var(--color-accent)] font-bold text-lg">
            {currentTestimonial.result}
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-center gap-4">
          <div className="text-5xl">{currentTestimonial.image}</div>
          <div className="text-left">
            <p className="font-bold text-lg">{currentTestimonial.name}</p>
            <p className="text-[var(--color-muted)] text-sm">{currentTestimonial.role}</p>
            <p className="text-[var(--color-accent)] text-sm font-semibold">
              {currentTestimonial.company} · {currentTestimonial.city}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? 'bg-[var(--color-accent)] w-8'
                : 'bg-[var(--color-border)] hover:bg-[var(--color-muted)]'
            }`}
            aria-label={`Ver testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Testimonial Count */}
      <p className="text-center mt-4 text-sm text-[var(--color-muted)]">
        {activeIndex + 1} de {testimonials.length} testimonios
      </p>
    </div>
  );
}
