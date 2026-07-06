import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Digital Concepción 2026 | Agencia Alma Media',
  description: 'Agencia de marketing digital en Concepción. Diseño Web, SEO, Fotografía, Video. Capital regional del Biobío. Desde $199.000. Cotiza gratis.',
  keywords: 'marketing digital Concepción, agencia marketing Concepción, publicidad digital Concepción, SEO Concepción',
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
    canonical: '/marketing-digital-concepcion',
  },
  openGraph: {
    title: 'Marketing Digital Concepción 2026 | Agencia Alma Media',
    description: 'Agencia de marketing digital en Concepción. Diseño Web, SEO, Fotografía, Video.',
    url: 'https://almamedia.cl/marketing-digital-concepcion',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Digital Concepción 2026',
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

export default function MarketingDigitalConcepcionPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/marketing-digital-biobio" className="hover:text-[var(--color-accent)] transition-colors">Marketing Digital Biobío</Link>
          <span className="mx-2">/</span>
          <span>Concepción</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🏙️ Concepción</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Marketing Digital en Concepción
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Agencia de marketing digital en Concepción,</strong> capital de la Región del Biobío. Más de 220.000 habitantes, centro universitario y comercial más importante del sur de Chile. Ofrecemos servicios completos de <Link href="/diseno-web-concepcion" className="text-[var(--color-accent)] hover:underline">diseño web Concepción</Link>, <Link href="/seo-posicionamiento" className="text-[var(--color-accent)] hover:underline">SEO posicionamiento</Link>, <Link href="/fotografia-producto" className="text-[var(--color-accent)] hover:underline">fotografía de producto</Link>, <Link href="/video-producto" className="text-[var(--color-accent)] hover:underline">video marketing</Link>. +200 empresas penquistas confían en nosotros: retail Barrio Estación/Pedro de Valdivia, servicios profesionales centro, educación superior, gastronomía, salud, tecnología. Presencia física en Concepción para reuniones presenciales o 100% remoto. Desde $199.000/año diseño web, $249.000/mes SEO. Atendemos Concepción centro, Pedro de Valdivia, Barrio Universitario, Lorenzo Arenas, Barrio Estación.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Servicios →
        </Link>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Servicios Concepción */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Servicios en Concepción</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/diseno-web-concepcion" className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Diseño Web Concepción</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Sitios web para empresas penquistas: retail Barrio Estación, servicios profesionales centro, educación, gastronomía. WordPress responsive, carga rápida, SEO incluido.
              </p>
              <div className="text-3xl font-black text-[var(--color-accent)]">$199.000<span className="text-base font-normal text-[var(--color-muted)]">/año</span></div>
            </Link>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">SEO Concepción</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Posicionamiento en Google para keywords comerciales de Concepción: "servicio + Concepción". Google Maps, Google Business Profile. Tráfico orgánico local.
              </p>
              <div className="text-3xl font-black text-[var(--color-accent)]">$249.000<span className="text-base font-normal text-[var(--color-muted)]">/mes</span></div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <div className="text-5xl mb-6">📸</div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Fotografía Producto Concepción</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Sesiones fotográficas para retail, ecommerce, gastronomía. Fondo blanco para marketplaces, lifestyle para redes sociales. Estudio en Concepción.
              </p>
              <div className="text-3xl font-black text-[var(--color-accent)]">$9.900<span className="text-base font-normal text-[var(--color-muted)]">/producto</span></div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <div className="text-5xl mb-6">🎥</div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Video Marketing Concepción</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Producción de video para Instagram, TikTok, YouTube. Video producto, video publicitario, video corporativo. Grabación 4K, edición profesional.
              </p>
              <div className="text-3xl font-black text-[var(--color-accent)]">$19.900<span className="text-base font-normal text-[var(--color-muted)]">/video</span></div>
            </div>
          </div>
        </section>

        {/* Por qué Marketing Digital en Concepción */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Marketing Digital en Concepción?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Concepción es la capital económica del sur de Chile</strong> con más de 220.000 habitantes (Gran Concepción supera 1 millón). Centro universitario con 10+ universidades genera demanda constante de servicios: gastronomía, salud, tecnología, retail, educación. El 84% de penquistas busca en Google antes de comprar. Negocios sin presencia digital pierden clientes que contratan a competidores que SÍ invierten en marketing online. Marketing digital nivela campo de juego: PYME penquista puede competir con grandes cadenas.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">SEO local en Concepción tiene competencia moderada y alta demanda.</strong> Keywords como "dentista Concepción", "gimnasio Concepción centro", "restaurant Barrio Estación", "ferretería Pedro de Valdivia" tienen volumen de búsqueda alto pero competencia 10x menor que Santiago. Resultado: ROI superior, posicionamiento más rápido (3-6 meses vs 12-18 meses en metropolitana), costo por cliente menor. Google Business Profile optimizado genera visitas físicas el mismo día de la búsqueda.
            </p>
          </div>
        </section>

        {/* Zonas de Concepción */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-center text-[var(--color-accent)]">Atendemos Toda la Ciudad</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-accent)]">Centro Concepción</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Plaza Independencia, Barrio Estación, servicios profesionales, retail.</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-accent)]">Pedro de Valdivia</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Eje comercial, gastronomía, servicios, retail moderno.</p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-[var(--color-accent)]">Barrio Universitario</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">UdeC, gastronomía, alojamiento estudiantil, servicios.</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Dominar el Marketing Digital en Concepción?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Reuniones presenciales en Concepción. Auditoría gratis con presupuesto. Cotiza ahora:
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
        "name": "Alma Media - Marketing Digital Concepción",
        "description": "Agencia de marketing digital en Concepción. Diseño Web, SEO, Fotografía, Video. Capital regional del Biobío.",
        "url": "https://almamedia.cl/marketing-digital-concepcion",
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
          "@type": "City",
          "name": "Concepción"
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
