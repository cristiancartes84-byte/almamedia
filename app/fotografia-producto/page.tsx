import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Fotografía de Producto Profesional | Fondo Blanco y Lifestyle - Alma Media',
  description: 'Fotos profesionales de productos: fondo blanco para catálogo y lifestyle para redes sociales. Aumenta conversiones en tu ecommerce.',
};

export default function FotografiaProductoPage() {
  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Fotografía de Producto</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">Fotografía Profesional</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Fotografía de Producto Profesional
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Fotos profesionales que venden: fondo blanco para catálogo y lifestyle para redes sociales. Aumenta la conversión de tu ecommerce.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Sesión Fotográfica
          </Link>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Tipos de Fotografía de Producto</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">📦 Fondo Blanco</h3>
              <p className="text-[var(--color-muted)] mb-4">
                Fotos limpias y profesionales para catálogos, marketplaces (Amazon, Mercado Libre) y ecommerce.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Alta resolución</li>
                <li>• Fondo blanco puro</li>
                <li>• Iluminación profesional</li>
                <li>• Retoque incluido</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">🎨 Lifestyle</h3>
              <p className="text-[var(--color-muted)] mb-4">
                Fotos con contexto y ambiente para redes sociales, campañas publicitarias y branding.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Ambientación profesional</li>
                <li>• Props y escenografía</li>
                <li>• Storytelling visual</li>
                <li>• Edición avanzada</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precios</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Fondo Blanco</h3>
              <p className="text-4xl font-black text-[var(--color-accent)] mb-2">$9.900</p>
              <p className="text-[var(--color-muted)] mb-6">por producto</p>
              <ul className="space-y-2 text-left mb-6">
                <li>✓ 3-5 fotos por producto</li>
                <li>✓ Fondo blanco puro</li>
                <li>✓ Retoque profesional</li>
                <li>✓ Alta resolución</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Lifestyle</h3>
              <p className="text-4xl font-black text-[var(--color-accent)] mb-2">$14.900</p>
              <p className="text-[var(--color-muted)] mb-6">por producto</p>
              <ul className="space-y-2 text-left mb-6">
                <li>✓ 5-8 fotos por producto</li>
                <li>✓ Ambientación incluida</li>
                <li>✓ Edición avanzada</li>
                <li>✓ Props y escenografía</li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-8 text-[var(--color-muted)]">
            Descuentos por volumen: 10+ productos -15% | 20+ productos -25%
          </p>

          <p className="text-center mt-8">
            <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              Cotizar Mi Sesión
            </Link>
          </p>
        </section>
      </article>
    </>
  );
}
