import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'SEO Local en Biobío: Google Maps y Búsquedas Locales - Alma Media',
  description: 'Optimización para Google Maps y búsquedas locales en Biobío. Aparece cuando buscan tu servicio + tu ciudad.',
};

export default function SEOLocalBiobioPage() {
  return (
    <>
      <ParticlesBackground />

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        <div className="mb-8">
          <Link href="/servicios" className="text-[var(--color-accent)] hover:underline text-sm">
            ← Volver a Servicios
          </Link>
        </div>

        <h1 className="text-5xl font-black mb-6">SEO Local en Biobío</h1>

        <p className="text-xl text-[var(--color-muted)] mb-12">
          Optimización para Google Maps y búsquedas locales. Aparece cuando buscan "tu servicio + Concepción" o "cerca de mí".
        </p>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4 text-[var(--color-accent)]">¿Qué es el SEO Local?</h2>
          <p className="text-[var(--color-muted)] mb-6">
            El SEO Local te ayuda a aparecer en Google Maps y en los resultados locales cuando alguien busca un servicio en tu zona. Ideal para negocios con ubicación física en Biobío.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-[var(--color-accent)] mt-12">Servicios de SEO Local</h2>

          <div className="grid gap-6 mt-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Google Business Profile</h3>
              <p className="text-[var(--color-muted)]">Optimización completa de tu ficha de Google My Business para aparecer en Maps.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Gestión de Reseñas</h3>
              <p className="text-[var(--color-muted)]">Estrategia para conseguir y gestionar reseñas positivas de clientes.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Citaciones Locales</h3>
              <p className="text-[var(--color-muted)]">Alta en directorios locales y validación de datos NAP (Nombre, Dirección, Teléfono).</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black mb-4">¿Quieres aparecer en Google Maps?</h2>
          <p className="text-[var(--color-muted)] mb-8">
            Cotiza tu proyecto de SEO Local. Desde $95.000/mes.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 transition-all"
          >
            Cotizar SEO Local
          </Link>
        </div>
      </article>
    </>
  );
}
