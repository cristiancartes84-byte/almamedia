import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Alma Media - Agencia de Marketing Digital en Biobío | Diseño Web, SEO y Contenido Visual',
  description: 'Agencia de marketing digital en Concepción, Biobío. Diseño web rápido, SEO para aparecer en Google, fotografía y video de producto.',
};

export default function Home() {
  return (
    <>
      <ParticlesBackground />

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">
            Agencia de Marketing Digital en Biobío
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 max-w-5xl">
          Marketing digital de la manera eficiente
        </h1>

        <p className="text-xl text-[var(--color-muted)] max-w-3xl mb-10 leading-relaxed">
          Diseño web rápido, SEO para aparecer en Google y contenido visual que vende. Para empresas en Concepción, Talcahuano y toda la Región del Biobío.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Proyecto
          </Link>
          <Link href="#servicios" className="px-8 py-4 bg-transparent border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] transition-all">
            Ver Servicios
          </Link>
        </div>

        {/* Zonas */}
        <div className="mt-16 border-b border-[var(--color-border)] pb-8 w-full max-w-5xl">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-6">
            Zonas de cobertura en Región del Biobío
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-base font-semibold">
            <span className="hover:text-[var(--color-accent)] transition-all">Concepción</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Talcahuano</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">San Pedro</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Hualpén</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Chiguayante</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Coronel</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Tomé</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-base font-semibold mt-3">
            <span className="hover:text-[var(--color-accent)] transition-all">Los Ángeles</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Lota</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Penco</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Lebu</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Arauco</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Curanilahue</span>
            <span>·</span>
            <span className="hover:text-[var(--color-accent)] transition-all">Cabrero</span>
          </div>
          <p className="mt-4 text-xs text-[var(--color-muted)]">+ Todas las comunas de la Región del Biobío</p>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">¿Qué Hacemos?</h2>
          <p className="text-[var(--color-muted)] text-lg">Servicios enfocados en resultados reales</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-3">Diseño Web</h3>
            <p className="text-[var(--color-muted)]">Sitios WordPress rápidos y optimizados. Desde $169.000/año.</p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-3">SEO</h3>
            <p className="text-[var(--color-muted)]">Posicionamiento en Google para que te encuentren.</p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-bold mb-3">SEO Local</h3>
            <p className="text-[var(--color-muted)]">Google Maps y búsquedas locales de tu ciudad.</p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-2xl font-bold mb-3">Fotografía</h3>
            <p className="text-[var(--color-muted)]">Fotos profesionales para ecommerce y redes.</p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
            <div className="text-4xl mb-4">🎥</div>
            <h3 className="text-2xl font-bold mb-3">Video</h3>
            <p className="text-[var(--color-muted)]">Videos cortos para Instagram, TikTok, Facebook Ads.</p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-2xl font-bold mb-3">Paquetes</h3>
            <p className="text-[var(--color-muted)]">Web + SEO + contenido visual completo.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-black text-[var(--color-accent)]">45+</div>
            <div className="text-[var(--color-muted)] mt-2">Proyectos</div>
          </div>
          <div>
            <div className="text-5xl font-black text-[var(--color-accent)]">5.000+</div>
            <div className="text-[var(--color-muted)] mt-2">Horas</div>
          </div>
          <div>
            <div className="text-5xl font-black text-[var(--color-accent)]">4.8</div>
            <div className="text-[var(--color-muted)] mt-2">Rating</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 py-24 mb-16">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-black mb-4">¿Listo para crecer online?</h2>
          <p className="text-[var(--color-muted)] text-lg mb-8">Cotiza sin compromiso. Respuesta en 24 horas.</p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 transition-all">
            Cotizar Proyecto
          </Link>
        </div>
      </section>
    </>
  );
}
