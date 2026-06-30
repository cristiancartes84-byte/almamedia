import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Diseño Web en Concepción | Sitios WordPress Profesionales - Alma Media',
  description: 'Diseño web profesional en Concepción. Sitios WordPress rápidos y optimizados.',
};

export default function DisenoWebConcepcionPage() {
  return (
    <>
      <ParticlesBackground />
      <article className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        <div className="mb-8"><Link href="/servicios" className="text-[var(--color-accent)] hover:underline text-sm">← Volver a Servicios</Link></div>
        <h1 className="text-5xl font-black mb-6">Diseño Web en Concepción</h1>
        <p className="text-xl text-[var(--color-muted)] mb-12">Agencia de diseño web en Concepción, Biobío. Sitios profesionales para empresas locales.</p>
        <div className="mt-16 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black mb-4">Cotiza tu sitio web en Concepción</h2>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg">Cotizar Ahora</Link>
        </div>
      </article>
    </>
  );
}
