import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Diseño Web en Biobío | Sitios WordPress Profesionales - Alma Media',
  description: 'Diseño web profesional en Biobío. Sitios WordPress rápidos, responsive y optimizados para conversiones. Desde $169.000/año.',
};

export default function DisenoWebBiobioPage() {
  return (
    <>
      <ParticlesBackground />
      <article className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        <div className="mb-8">
          <Link href="/servicios" className="text-[var(--color-accent)] hover:underline text-sm">← Volver a Servicios</Link>
        </div>
        <h1 className="text-5xl font-black mb-6">Diseño Web en Biobío</h1>
        <p className="text-xl text-[var(--color-muted)] mb-12">Sitios web profesionales, rápidos y optimizados para generar clientes.</p>
        
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-4 text-[var(--color-accent)]">¿Qué incluye?</h2>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] text-xl">✓</span><span className="text-[var(--color-muted)]">Diseño responsive (móvil, tablet, desktop)</span></li>
            <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] text-xl">✓</span><span className="text-[var(--color-muted)]">WordPress optimizado</span></li>
            <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] text-xl">✓</span><span className="text-[var(--color-muted)]">Hosting incluido primer año</span></li>
            <li className="flex items-start gap-3"><span className="text-[var(--color-accent)] text-xl">✓</span><span className="text-[var(--color-muted)]">SSL y dominio</span></li>
          </ul>
        </div>

        <div className="mt-16 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black mb-4">Cotiza tu sitio web</h2>
          <p className="text-[var(--color-muted)] mb-8">Desde $169.000/año todo incluido</p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 transition-all">Cotizar Ahora</Link>
        </div>
      </article>
    </>
  );
}
