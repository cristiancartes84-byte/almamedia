import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Región del Biobío 2026 | Posicionamiento en Google',
  description: 'SEO profesional en Región del Biobío. Posicionamiento en Google para negocios en Concepción, Talcahuano, Los Ángeles. Desde $249.000/mes. Cotiza gratis.',
  keywords: 'SEO Biobío, posicionamiento Google Biobío, SEO Concepción, SEO región Biobío, marketing digital Biobío',
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
    canonical: '/seo-biobio',
  },
  openGraph: {
    title: 'SEO Región del Biobío 2026 | Posicionamiento en Google',
    description: 'SEO profesional en toda la Región del Biobío. Posicionamiento Google para negocios locales.',
    url: 'https://almamedia.cl/seo-biobio',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Región del Biobío 2026',
    description: 'SEO profesional. Posicionamiento Google para negocios en Concepción, Talcahuano, Los Ángeles.',
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

export default function SEOBiobioPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SEO Profesional en Región del Biobío",
            "description": "Servicio profesional de SEO y posicionamiento en Google para negocios en toda la Región del Biobío. Atendemos Concepción, Talcahuano, San Pedro, Los Ángeles, Chillán.",
            "provider": {
              "@type": "Organization",
              "name": "Alma Media",
              "url": "https://almamedia.cl"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Región del Biobío",
              "containedIn": {
                "@type": "Country",
                "name": "Chile"
              }
            }
          })
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/seo-posicionamiento" className="hover:text-[var(--color-accent)] transition-colors">SEO</Link>
          <span className="mx-2">/</span>
          <span>Región del Biobío</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🌄 SEO Región del Biobío</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          SEO en la Región del Biobío: Posicionamiento en Google
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El SEO profesional en la Región del Biobío</strong> posiciona tu negocio en Google cuando clientes buscan tus servicios o productos. Atendemos toda la región: Gran Concepción (Concepción, Talcahuano, San Pedro de la Paz, Hualpén, Chiguayante), Provincia de Biobío (Los Ángeles, Cabrero, Nacimiento, Mulchén), Provincia de Ñuble (Chillán, San Carlos). Más de 2 millones de habitantes buscan en Google antes de comprar — el 87% de decisiones de compra comienzan con búsqueda online. Ofrecemos <Link href="/seo-posicionamiento" className="text-[var(--color-accent)] hover:underline">SEO técnico</Link> desde $249.000/mes con auditoría completa, optimización on-page, creación de contenido mensual, link building regional, y reportes de posicionamiento. Especializados en todos los sectores: comercio, industria, servicios profesionales, salud, educación, turismo, agricultura. Resultados medibles: +150% tráfico orgánico promedio en 6 meses, posicionamiento top 3 en keywords comerciales de alta conversión.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Solicitar Auditoría SEO →
          </Link>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué tu Negocio en el Biobío Necesita SEO?</h2>
          <div className="space-y-6">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 87% de las decisiones de compra en la Región del Biobío comienzan con una búsqueda en Google.</strong> Cuando alguien en Concepción necesita un servicio, busca "servicio X Concepción". Cuando un agricultor en Los Ángeles necesita maquinaria, busca "venta tractores Biobío". Cuando turistas planean visitar Saltos del Laja, buscan "hotel Los Ángeles". Si tu negocio NO aparece en Google, pierdes clientes que contratan a competidores que SÍ invirtieron en SEO — incluso si esos competidores están en Santiago o Valparaíso.
            </p>
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El SEO genera tráfico orgánico constante sin pagar por cada clic.</strong> A diferencia de Google Ads donde pagas $500-$2.000 por cada clic y dejas de aparecer cuando se acaba el presupuesto, el SEO te posiciona orgánicamente y sigues recibiendo visitas meses después de la inversión inicial. Una empresa que invierte $249.000/mes en SEO durante 6 meses puede generar 500-1.000 visitas orgánicas mensuales que continúan llegando incluso si pausa el servicio — ROI acumulativo que Google Ads no puede igualar.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Muchos negocios en el Biobío aún no invierten en SEO — ventaja competitiva enorme.</strong> En regiones, la competencia SEO es mucho menor que en Santiago: posicionar "ferretería industrial Talcahuano" es 10x más fácil que "ferretería industrial Santiago". Mientras grandes empresas metropolitanas pelean por keywords ultra competitivas, negocios regionales pueden dominar Google local con inversión moderada y estrategia correcta. Primera página en 3-6 meses para keywords comerciales de alta conversión.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Posicionar tu Negocio en Google?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Atendemos toda la Región del Biobío. Auditoría SEO gratis con presupuesto. Cotiza ahora:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Solicitar Auditoría Gratis →
          </Link>
        </div>
      </article>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Alma Media - SEO Región del Biobío",
        "description": "SEO profesional y posicionamiento en Google para negocios en toda la Región del Biobío. Atendemos Concepción, Talcahuano, San Pedro, Los Ángeles, Chillán.",
        "url": "https://almamedia.cl/seo-biobio",
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
