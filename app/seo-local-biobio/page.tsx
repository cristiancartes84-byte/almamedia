import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Local Biobío 2026 | Google Maps y Búsquedas Locales',
  description: 'SEO Local profesional en Biobío. Google Maps, Google Business Profile, reseñas. Aparece cuando buscan "servicio + ciudad". Desde $249.000/mes.',
  keywords: 'SEO local Biobío, Google Maps Biobío, Google Business Profile, SEO local Concepción, búsquedas locales',
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
    canonical: '/seo-local-biobio',
  },
  openGraph: {
    title: 'SEO Local Biobío 2026 | Google Maps',
    description: 'SEO Local profesional. Google Maps y búsquedas locales en toda la región.',
    url: 'https://almamedia.cl/seo-local-biobio',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Local Biobío 2026',
    description: 'SEO Local profesional. Google Maps y búsquedas locales.',
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

export default function SEOLocalBiobioPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/seo-local" className="hover:text-[var(--color-accent)] transition-colors">SEO Local</Link>
          <span className="mx-2">/</span>
          <span>Biobío</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">📍 SEO Local Biobío</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          SEO Local en Biobío: Google Maps y Búsquedas Locales
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El SEO Local en la Región del Biobío</strong> posiciona tu negocio en Google Maps y búsquedas locales cuando clientes buscan "servicio + ciudad" o "cerca de mí". El 76% de búsquedas locales resultan en visita física en 24 horas. Optimizamos <Link href="/seo-local" className="text-[var(--color-accent)] hover:underline">Google Business Profile</Link>, gestión de reseñas, citaciones en directorios locales, y contenido geo-optimizado para toda la región: Concepción, Talcahuano, San Pedro, Los Ángeles, Chillán. Desde $249.000/mes con auditoría local, optimización NAP (Nombre-Dirección-Teléfono), estrategia de reseñas, y reportes de posicionamiento Maps. Ideal para negocios con ubicación física que atienden clientes locales: restaurantes, clínicas, gimnasios, ferreterías, servicios profesionales.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Solicitar Auditoría Local →
        </Link>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Necesitas SEO Local en el Biobío?</h2>
          <div className="space-y-6">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 76% de búsquedas locales resultan en visita física en 24 horas.</strong> Cuando alguien busca "dentista Concepción", "gimnasio San Pedro", "ferretería Talcahuano" o "restaurant Los Ángeles", Google muestra resultados locales con mapa y fichas de Google Business Profile. Si tu negocio NO aparece ahí, pierdes clientes que visitan a competidores que SÍ optimizaron su presencia local. SEO Local convierte búsquedas online en visitas físicas y ventas reales el mismo día.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Google Maps es el segundo buscador más usado después de Google.</strong> Más de 1 billón de búsquedas mensuales en Maps a nivel global. En Biobío, clientes buscan negocios cercanos constantemente: "ferretería cerca de mí", "clínica dental abierta ahora", "supermercado más cercano". SEO Local optimiza tu Google Business Profile para aparecer en esas búsquedas con información actualizada: horarios, fotos, reseñas, dirección exacta, botón de llamada directa.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Dominar Google Maps?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Aparece cuando buscan tu servicio en tu ciudad. Genera visitas físicas desde Google. Cotiza:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Solicitar Auditoría Local →
          </Link>
        </div>
      </article>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Alma Media - SEO Local Biobío",
        "description": "SEO Local profesional en Biobío. Google Maps, Google Business Profile, reseñas y búsquedas locales para negocios con ubicación física.",
        "url": "https://almamedia.cl/seo-local-biobio",
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
