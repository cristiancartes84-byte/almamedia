import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Producto Biobío 2026 | Videos Profesionales $19.900',
  description: 'Video de producto profesional en Región del Biobío. Desde $19.900. Concepción, Talcahuano, Los Ángeles. Videos para Instagram, TikTok, ecommerce.',
  keywords: 'video producto Biobío, videos ecommerce Concepción, video marketing Biobío, videos Instagram',
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
    canonical: '/video-producto-biobio',
  },
  openGraph: {
    title: 'Video Producto Biobío 2026 | Videos Profesionales $19.900',
    description: 'Video de producto profesional en Región del Biobío. Desde $19.900. Videos para Instagram, TikTok.',
    url: 'https://almamedia.cl/video-producto-biobio',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Producto Biobío 2026',
    description: 'Video de producto profesional. Desde $19.900. Instagram, TikTok, ecommerce.',
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

export default function VideoProductoBiobioPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/video-producto" className="hover:text-[var(--color-accent)] transition-colors">Video Producto</Link>
          <span className="mx-2">/</span>
          <span>Biobío</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🎥 Video Producto Biobío</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Video de Producto Profesional en Biobío
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El video de producto profesional en la Región del Biobío</strong> aumenta conversión de ecommerce hasta 80% con contenido visual dinámico. El 73% de consumidores tiene más probabilidad de comprar después de ver un video del producto. Atendemos toda la región: Concepción, Talcahuano, San Pedro, Los Ángeles, Chillán. Ofrecemos <Link href="/video-producto" className="text-[var(--color-accent)] hover:underline">producción de videos</Link> desde $19.900 por video básico 15-30 segundos (ideal para Instagram/TikTok), $39.900 por video premium 30-60 segundos (storytelling completo). Incluye grabación 4K con iluminación de estudio, edición profesional, color grading, música libre de derechos, textos animados, múltiples ángulos, formatos adaptados para cada plataforma (Instagram 9:16, TikTok, YouTube, web), entrega 5-7 días. Descuentos por volumen: 5+ videos -20%, 10+ videos -30%. +300 videos producidos en la región.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Video Gratis →
        </Link>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Video de Producto para tu Ecommerce?</h2>
          <div className="space-y-6">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El video de producto aumenta conversión hasta 80% vs solo fotos estáticas.</strong> Cuando clientes pueden VER tu producto en movimiento, desde múltiples ángulos, y en uso real, confianza aumenta exponencialmente. El 73% de consumidores afirma tener más probabilidad de comprar después de ver un video del producto, según estudios de Wyzowl 2026. Videos muestran características que fotos no pueden: textura, movimiento, tamaño real, facilidad de uso.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Videos son el formato con mayor engagement en redes sociales.</strong> Instagram Reels, TikTok y YouTube Shorts priorizan contenido de video en sus algoritmos. Un video de producto bien producido genera 10x más interacciones que una foto, aumenta alcance orgánico, permite mostrar producto en uso real. Ideal para negocios en Biobío que venden por Instagram, ecommerce propio, o Mercado Libre — videos destacan entre competencia que solo usa fotos.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Videos que Venden?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Atendemos toda la Región del Biobío. Producción de video profesional desde $19.900. Cotiza:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Video Ahora →
          </Link>
        </div>
      </article>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Alma Media - Video de Producto Biobío",
        "description": "Video de producto profesional en Región del Biobío. Videos para Instagram, TikTok y ecommerce. Desde $19.900 por video.",
        "url": "https://almamedia.cl/video-producto-biobio",
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
