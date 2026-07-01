import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Packs Completos de Marketing Digital | Todo en Uno - Alma Media',
  description: 'Pack Web, Pack Visual o Pack SEO Mensual. Todo lo que necesitas para vender online desde $169.000 CLP/año.',
};

export default function PacksCompletosPage() {
  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Packs Completos</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">Packs Todo en Uno</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Packs Completos de Marketing Digital
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Todo lo que necesitas para vender online. Ahorra hasta 30% vs servicios individuales.
        </p>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Nuestros Packs</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">🌐 Pack Web</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$169.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP/año</p>
              <ul className="space-y-2 mb-6">
                <li>✓ Landing page</li>
                <li>✓ SEO base</li>
                <li>✓ Hosting + dominio</li>
                <li>✓ 3 fotos producto</li>
              </ul>
              <Link href="/contacto" className="block text-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg">
                Contratar
              </Link>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">📸 Pack Visual</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$199.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP único</p>
              <ul className="space-y-2 mb-6">
                <li>✓ 10 fotos fondo blanco</li>
                <li>✓ 10 fotos lifestyle</li>
                <li>✓ 3 videos cortos</li>
                <li>✓ Edición profesional</li>
              </ul>
              <Link href="/contacto" className="block text-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg">
                Contratar
              </Link>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">🚀 Pack SEO</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$249.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP/mes</p>
              <ul className="space-y-2 mb-6">
                <li>✓ SEO técnico + local</li>
                <li>✓ 3 artículos/mes</li>
                <li>✓ Link building</li>
                <li>✓ Reportes semanales</li>
              </ul>
              <Link href="/contacto" className="block text-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg">
                Contratar
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
