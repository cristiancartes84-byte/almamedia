import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'SEO Local Chile | Google Maps y Búsquedas Locales - Alma Media',
  description: 'Optimización para Google Maps y búsquedas locales. Aparece cuando buscan "tu servicio + tu ciudad".',
};

export default function SEOLocalPage() {
  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>SEO Local</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">SEO Local</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          SEO Local | Aparece en Google Maps
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Optimización para Google Maps y búsquedas locales. Aparece cuando buscan "tu servicio + tu ciudad" o "cerca de mí".
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar SEO Local
          </Link>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Qué es el SEO Local?</h2>
          <p className="text-xl mb-8 leading-[1.8] text-center max-w-3xl mx-auto">
            El SEO Local te ayuda a aparecer en Google Maps y en los resultados locales. Ideal para negocios con ubicación física.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">📍 Google Business Profile</h3>
              <p className="text-[var(--color-muted)]">Optimización completa de tu ficha para aparecer en Maps</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">⭐ Gestión de Reseñas</h3>
              <p className="text-[var(--color-muted)]">Estrategia para conseguir y gestionar reseñas positivas</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🗺️ Citaciones Locales</h3>
              <p className="text-[var(--color-muted)]">Alta en directorios y validación de datos NAP</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precio</h2>
          <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">SEO Local Mensual</h3>
            <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$95.000</p>
            <p className="text-[var(--color-muted)] mb-6">CLP/mes</p>
            <ul className="space-y-2 text-left mb-6">
              <li>✓ Optimización Google Business Profile</li>
              <li>✓ Gestión de reseñas</li>
              <li>✓ Citaciones locales</li>
              <li>✓ Reportes mensuales</li>
            </ul>
            <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg">
              Cotizar Ahora
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
