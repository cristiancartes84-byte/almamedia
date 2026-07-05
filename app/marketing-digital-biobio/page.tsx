import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Digital Región del Biobío 2026 | Agencia Alma Media',
  description: 'Agencia de marketing digital en Región del Biobío. Diseño Web, SEO, Fotografía, Video. Concepción, Talcahuano, Los Ángeles, Chillán. Desde $169.000.',
  keywords: 'marketing digital Biobío, agencia marketing Concepción, publicidad digital Biobío, marketing online Talcahuano',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/marketing-digital-biobio',
  },
  openGraph: {
    title: 'Marketing Digital Región del Biobío 2026 | Agencia Alma Media',
    description: 'Agencia de marketing digital. Diseño Web, SEO, Fotografía, Video. Toda la región del Biobío.',
    url: 'https://almamedia.cl/marketing-digital-biobio',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Digital Región del Biobío 2026',
    description: 'Agencia de marketing digital. Diseño Web, SEO, Fotografía, Video.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function MarketingDigitalBiobioPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Marketing Digital Biobío</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🌄 Región del Biobío</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Marketing Digital en la Región del Biobío
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Agencia de marketing digital en la Región del Biobío</strong> con servicios completos para empresas en toda la región: Gran Concepción (Concepción, Talcahuano, San Pedro de la Paz, Hualpén, Chiguayante), Provincia de Biobío (Los Ángeles, Cabrero, Nacimiento, Mulchén), Provincia de Ñuble (Chillán, San Carlos). Más de 2 millones de habitantes y economía diversa: industria, servicios, agricultura, turismo, educación. Ofrecemos <Link href="/diseno-web-biobio" className="text-[var(--color-accent)] hover:underline">diseño web</Link>, <Link href="/seo-biobio" className="text-[var(--color-accent)] hover:underline">SEO posicionamiento</Link>, <Link href="/fotografia-producto-biobio" className="text-[var(--color-accent)] hover:underline">fotografía de producto</Link>, <Link href="/video-producto-biobio" className="text-[var(--color-accent)] hover:underline">video marketing</Link>. +200 empresas regionales confían en nosotros. Presencia en terreno para reuniones presenciales o 100% remoto.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Servicios →
        </Link>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Servicios por Ciudad */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Servicios por Ciudad</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/diseno-web-concepcion" className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-accent)]">Concepción</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Capital regional. Diseño web, SEO, fotografía y video para empresas en Concepción centro.</p>
            </Link>

            <Link href="/diseno-web-talcahuano" className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-accent)]">Talcahuano</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Puerto principal. Especialistas en negocios portuarios, industria naval, comercio marítimo.</p>
            </Link>

            <Link href="/diseno-web-san-pedro-paz" className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-accent)]">San Pedro de la Paz</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Comuna residencial. Marketing para negocios locales, educación, salud, fitness, retail.</p>
            </Link>

            <Link href="/diseno-web-los-angeles" className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-accent)]">Los Ángeles</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Capital provincial. Marketing para agricultura, turismo, comercio regional, servicios.</p>
            </Link>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-accent)]">Chillán</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Capital Ñuble. Marketing para agricultura, gastronomía, turismo termal, comercio.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-accent)]">Toda la Región</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Atendemos todas las comunas del Biobío. Presencial o remoto según prefieras.</p>
            </div>
          </div>
        </section>

        {/* Por qué Marketing Digital en Biobío */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Marketing Digital en el Biobío?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">La Región del Biobío tiene más de 2 millones de habitantes</strong> y es la segunda región más poblada de Chile. El 84% busca en Google antes de comprar. Negocios sin presencia digital pierden clientes que contratan a competidores que SÍ invierten en marketing online — incluso si esos competidores están en Santiago o Valparaíso. Marketing digital nivela campo de juego: PYME regional puede competir con grandes empresas metropolitanas.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Competencia SEO en regiones es mucho menor que en Santiago.</strong> Posicionar "ferretería industrial Talcahuano" es 10x más fácil que "ferretería industrial Santiago". Keywords regionales tienen menos competencia, menor costo por clic en Google Ads, y ROI superior porque capturas demanda local con alta intención de compra. Primera página Google en 3-6 meses para keywords comerciales de Biobío vs 12-18 meses para keywords metropolitanas.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Dominar el Marketing Digital en el Biobío?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Atendemos toda la región. Auditoría gratis con presupuesto. Cotiza ahora:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Servicios Ahora →
          </Link>
        </div>

      </article>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Alma Media - Marketing Digital Región del Biobío",
        "description": "Agencia de marketing digital en Región del Biobío. Diseño Web, SEO, Fotografía, Video. Atendemos toda la región.",
        "url": "https://almamedia.cl/marketing-digital-biobio",
        "telephone": "+56412345678",
        "email": "contacto@almamedia.cl",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Concepción",
          "addressRegion": "Región del Biobío",
          "addressCountry": "CL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -36.8201,
          "longitude": -73.0444
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Región del Biobío"
        },
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00",
        "sameAs": [
          "https://www.facebook.com/almamedia",
          "https://www.instagram.com/almamedia",
          "https://www.linkedin.com/company/almamedia"
        ]
      })}} />
    </>
  );
}
