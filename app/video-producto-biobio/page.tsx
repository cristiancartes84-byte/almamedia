import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Video de Producto en Biobío | Videos para Instagram y Ads - Alma Media',
  description: 'Videos profesionales de productos en Biobío. Para Instagram, TikTok, Facebook Ads y ecommerce.',
};

export default function VideoProductoBiobioPage() {
  return (
    <>
      <ParticlesBackground />
      <article className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        <div className="mb-8"><Link href="/servicios" className="text-[var(--color-accent)] hover:underline text-sm">← Volver a Servicios</Link></div>
        <h1 className="text-5xl font-black mb-6">Video de Producto en Biobío</h1>
        <p className="text-xl text-[var(--color-muted)] mb-12">Videos cortos para Instagram, TikTok y Facebook Ads.</p>
        <div className="mt-16 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black mb-4">Cotiza tu video</h2>
          <p className="text-[var(--color-muted)] mb-8">Desde $180.000 pack</p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 transition-all">Cotizar Ahora</Link>
        </div>
      </article>
    </>
  );
}
