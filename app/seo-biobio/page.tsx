import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'SEO en Biobío: Cómo Aparecer en Google y Generar Clientes - Alma Media',
  description: 'Guía completa de SEO en Biobío: auditoría, SEO técnico y contenido por intención. Aparece en Google cuando te buscan.',
};

export default function SEOBiobioPage() {
  return (
    <>
      <ParticlesBackground />

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        <div className="mb-8">
          <Link href="/servicios" className="text-[var(--color-accent)] hover:underline text-sm">
            ← Volver a Servicios
          </Link>
        </div>

        <h1 className="text-5xl font-black mb-6">SEO en Biobío</h1>

        <p className="text-xl text-[var(--color-muted)] mb-12 leading-relaxed">
          Guía completa de SEO en la Región del Biobío: auditoría, SEO técnico y contenido optimizado para aparecer en Google.
        </p>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4 text-[var(--color-accent)]">¿Qué es el SEO?</h2>
          <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
            SEO (Search Engine Optimization) es el conjunto de técnicas para mejorar el posicionamiento de tu sitio web en los resultados de búsqueda de Google. En Biobío, aparecer en las primeras posiciones puede significar la diferencia entre tener clientes o pasar desapercibido.
          </p>

          <h2 className="text-3xl font-bold mb-4 text-[var(--color-accent)] mt-12">Nuestro Proceso de SEO</h2>

          <div className="grid gap-6 mt-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">1. Auditoría SEO</h3>
              <p className="text-[var(--color-muted)]">Análisis completo de tu sitio web actual: velocidad, estructura, contenido, enlaces y problemas técnicos.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">2. Optimización Técnica</h3>
              <p className="text-[var(--color-muted)]">Mejoramos la velocidad de carga, mobile-first, schema markup, sitemap XML y robots.txt.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">3. Contenido Optimizado</h3>
              <p className="text-[var(--color-muted)]">Creamos contenido de calidad enfocado en las palabras clave que buscan tus clientes potenciales.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">4. Link Building</h3>
              <p className="text-[var(--color-muted)]">Construcción de enlaces de calidad desde sitios relevantes para mejorar tu autoridad de dominio.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-[var(--color-accent)] mt-12">¿Por qué invertir en SEO en Biobío?</h2>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)] text-xl">✓</span>
              <div>
                <strong className="text-white">Más visibilidad local:</strong>
                <span className="text-[var(--color-muted)]"> Aparecer cuando buscan "tu servicio + Concepción/Talcahuano/Biobío"</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)] text-xl">✓</span>
              <div>
                <strong className="text-white">Tráfico cualificado:</strong>
                <span className="text-[var(--color-muted)]"> Personas que buscan activamente lo que vendes</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-accent)] text-xl">✓</span>
              <div>
                <strong className="text-white">ROI a largo plazo:</strong>
                <span className="text-[var(--color-muted)]"> Inversión que sigue generando resultados mes tras mes</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-16 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black mb-4">¿Listo para aparecer en Google?</h2>
          <p className="text-[var(--color-muted)] mb-8">
            Cotiza tu proyecto de SEO sin compromiso. Primera auditoría gratuita.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 transition-all"
          >
            Cotizar Proyecto SEO
          </Link>
        </div>
      </article>
    </>
  );
}
