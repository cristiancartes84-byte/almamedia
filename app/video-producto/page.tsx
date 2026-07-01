import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Video de Producto Profesional | Contenido para Ecommerce y Redes - Alma Media',
  description: 'Videos cortos de productos para ecommerce, Instagram y campañas. Aumenta confianza y conversión hasta 80%.',
};

export default function VideoProductoPage() {
  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Video de Producto</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">Video Profesional</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Video de Producto Profesional
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Videos cortos que venden: para ecommerce, Instagram, TikTok y campañas publicitarias. Aumenta la conversión hasta un 80%.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Video
          </Link>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué video de producto?</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">80% más conversión:</strong>
                <span className="text-[var(--color-muted)]">Los productos con video venden más</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Mayor confianza:</strong>
                <span className="text-[var(--color-muted)]">Los usuarios ven el producto en uso real</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Viral en redes:</strong>
                <span className="text-[var(--color-muted)]">Contenido perfecto para Instagram y TikTok</span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Menos devoluciones:</strong>
                <span className="text-[var(--color-muted)]">El cliente sabe exactamente qué esperar</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Tipos de Video</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🎥 Video Producto</h3>
              <p className="text-[var(--color-muted)]">15-30 segundos mostrando el producto en 360°, detalles y uso básico.</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">📱 Reel/TikTok</h3>
              <p className="text-[var(--color-muted)]">30-60 segundos optimizado para redes sociales, con storytelling.</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🎬 Video Publicitario</h3>
              <p className="text-[var(--color-muted)]">30-90 segundos para campañas en Facebook, Instagram y Google Ads.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precios</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Video Básico</h3>
              <p className="text-4xl font-black text-[var(--color-accent)] mb-2">$24.900</p>
              <p className="text-[var(--color-muted)] mb-6">por producto</p>
              <ul className="space-y-2 text-left text-sm">
                <li>✓ 15-30 segundos</li>
                <li>✓ 360° del producto</li>
                <li>✓ Edición básica</li>
                <li>✓ Música incluida</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Reel/TikTok</h3>
              <p className="text-4xl font-black text-[var(--color-accent)] mb-2">$39.900</p>
              <p className="text-[var(--color-muted)] mb-6">por video</p>
              <ul className="space-y-2 text-left text-sm">
                <li>✓ 30-60 segundos</li>
                <li>✓ Storytelling</li>
                <li>✓ Edición avanzada</li>
                <li>✓ Optimizado para redes</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Publicitario</h3>
              <p className="text-4xl font-black text-[var(--color-accent)] mb-2">$69.900</p>
              <p className="text-[var(--color-muted)] mb-6">por video</p>
              <ul className="space-y-2 text-left text-sm">
                <li>✓ 30-90 segundos</li>
                <li>✓ Guion profesional</li>
                <li>✓ Motion graphics</li>
                <li>✓ Para campañas Ads</li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-8">
            <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              Cotizar Mi Video
            </Link>
          </p>
        </section>
      </article>
    </>
  );
}
