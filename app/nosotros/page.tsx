import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Alma Media - Agencia de Marketing Digital en Biobío',
  description: 'Alma Media: agencia de marketing digital en Concepción, Biobío. Diseño web, SEO y contenido visual para empresas que quieren crecer online.',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/nosotros',
  },
  openGraph: {
    title: 'Sobre Alma Media - Agencia Digital en Biobío',
    description: 'Agencia de marketing digital en Concepción. Diseño web, SEO y contenido visual para empresas que quieren crecer online.',
    url: 'https://almamedia.cl/nosotros',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sobre Alma Media',
    description: 'Agencia de marketing digital en Concepción, Biobío.',
  },
};

export default function NosotrosPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Hero */}
      <section className="relative z-10 pt-24 pb-16 px-8 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">
            Sobre Nosotros
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl mx-auto">
          Alma Media: Marketing Digital en Biobío
        </h1>

        <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
          Agencia de marketing digital en Concepción. Ayudamos a empresas en la Región del Biobío a crecer online.
        </p>
      </section>

      {/* About */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pb-16">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-black mb-6 text-[var(--color-accent)]">Quiénes Somos</h2>
          <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
            Somos <strong className="text-[var(--color-accent)]">Alma Media</strong>, una agencia de marketing digital con base en Concepción, Región del Biobío. Nuestro enfoque es simple: ayudar a empresas locales a tener una presencia online efectiva que genere resultados reales.
          </p>
          <p className="text-lg text-[var(--color-muted)] mb-12 leading-relaxed">
            No vendemos humo ni promesas vacías. Cada proyecto que hacemos tiene un objetivo claro: <strong className="text-[var(--color-accent)]">más visitas, más clientes, más ventas</strong>.
          </p>

          <h2 className="text-3xl font-black mb-6 text-[var(--color-accent)]">Nuestra Misión</h2>
          <p className="text-lg text-[var(--color-muted)] mb-12 leading-relaxed">
            Hacer que el marketing digital sea accesible, efectivo y medible para empresas en Biobío. Muchos negocios locales no tienen presencia web o tienen sitios lentos y desactualizados que no generan nada. Cambiamos eso.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 pb-16">
        <h2 className="text-3xl font-black text-center mb-12">Qué Nos Diferencia</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🎯 Enfoque en Resultados</h3>
            <p className="text-[var(--color-muted)]">
              No medimos éxito por "me gusta" sino por conversiones. ¿Aumentaron las llamadas? ¿Más ventas? Eso es lo que importa.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">📊 Transparencia Total</h3>
            <p className="text-[var(--color-muted)]">
              Reportes mensuales claros. Sabes exactamente qué estamos haciendo y qué resultados estás obteniendo.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">⚡ Rapidez</h3>
            <p className="text-[var(--color-muted)]">
              Respondemos consultas en menos de 24h. Los proyectos se entregan en los plazos acordados, sin excusas.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">💰 Sin Permanencia</h3>
            <p className="text-[var(--color-muted)]">
              En servicios mensuales (SEO), puedes cancelar cuando quieras. Si no ves resultados, no tiene sentido que sigas pagando.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏘️ Local</h3>
            <p className="text-[var(--color-muted)]">
              Entendemos el mercado de Biobío. Sabemos cómo funciona el SEO local, qué busca la gente, qué funciona en la región.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🛠️ Servicio Completo</h3>
            <p className="text-[var(--color-muted)]">
              Diseño web, SEO, fotos, videos — todo bajo un mismo techo. No tienes que coordinar con 5 proveedores diferentes.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pb-16">
        <h2 className="text-3xl font-black mb-6 text-[var(--color-accent)]">Zonas que Atendemos</h2>
        <p className="text-lg text-[var(--color-muted)] mb-6">
          Trabajamos principalmente con empresas en la Región del Biobío:
        </p>

        <ul className="space-y-4 mb-12">
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
            <div>
              <strong className="text-white">Concepción</strong> — Nuestro hub principal
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
            <div>
              <strong className="text-white">Talcahuano</strong> — Puerto y comercio
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
            <div>
              <strong className="text-white">San Pedro de la Paz</strong> — Residencial y servicios
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
            <div>
              <strong className="text-white">Chiguayante</strong> — Comercio local
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
            <div>
              <strong className="text-white">Coronel</strong> — Industrial y servicios
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
            <div>
              <strong className="text-white">Los Ángeles</strong> — Comercio provincial
            </div>
          </li>
        </ul>

        <p className="text-[var(--color-muted)]">
          También atendemos otras comunas de la región. El 90% del proceso es remoto, así que la ubicación física no es limitante.
        </p>
      </section>

      {/* Why Alma */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pb-24">
        <h2 className="text-3xl font-black mb-6 text-[var(--color-accent)]">¿Por Qué "Alma" Media?</h2>
        <p className="text-lg text-[var(--color-muted)] leading-relaxed">
          Porque creemos que cada negocio tiene un <strong className="text-[var(--color-accent)]">alma</strong> — una historia, una propuesta única, un porqué. Nuestro trabajo no es crear sitios web genéricos ni copiar estrategias de la competencia. Es capturar y comunicar esa esencia de manera que resuene con tus clientes.
        </p>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pb-24">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-black mb-4">¿Trabajamos juntos?</h2>
          <p className="text-[var(--color-muted)] text-lg mb-8">
            Cotiza tu proyecto sin compromiso. Te respondemos en menos de 24 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 transition-all"
          >
            Cotizar Proyecto
          </Link>
        </div>
      </section>
    </>
  );
}
