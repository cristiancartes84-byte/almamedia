import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fotografía Producto Biobío 2026 | Fondo Blanco $9.900',
  description: 'Fotografía de producto profesional en Región del Biobío. Fondo blanco $9.900, lifestyle $14.900. Concepción, Talcahuano, Los Ángeles. Cotiza gratis.',
  keywords: 'fotografía producto Biobío, fotos producto Concepción, fotografía ecommerce Biobío, fotos fondo blanco',
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
    canonical: '/fotografia-producto-biobio',
  },
  openGraph: {
    title: 'Fotografía Producto Biobío 2026 | Fondo Blanco $9.900',
    description: 'Fotografía de producto profesional en Región del Biobío. Fondo blanco $9.900, lifestyle $14.900.',
    url: 'https://almamedia.cl/fotografia-producto-biobio',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotografía Producto Biobío 2026',
    description: 'Fotografía de producto profesional. Fondo blanco $9.900, lifestyle $14.900.',
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

export default function FotografiaProductoBiobioPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/fotografia-producto" className="hover:text-[var(--color-accent)] transition-colors">Fotografía Producto</Link>
          <span className="mx-2">/</span>
          <span>Biobío</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">📸 Fotografía Producto Biobío</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Fotografía de Producto Profesional en Biobío
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>La fotografía de producto profesional en la Región del Biobío</strong> aumenta conversión de ecommerce hasta 35% con imágenes de alta calidad. Atendemos toda la región: Concepción, Talcahuano, San Pedro, Los Ángeles, Chillán. Ofrecemos <Link href="/fotografia-producto" className="text-[var(--color-accent)] hover:underline">fotografía con fondo blanco</Link> desde $9.900 por producto (3-5 fotos retocadas, alta resolución, RGB 255,255,255 para Amazon/Mercado Libre), y fotografía lifestyle desde $14.900 por producto (5-8 fotos con ambientación para redes sociales). Incluye iluminación de estudio 3 puntos, retoque profesional, múltiples ángulos, formatos JPG + PNG sin fondo, entrega 3-5 días. Descuentos por volumen: 10+ productos -15%, 20+ productos -25%. Ideal para ecommerce, tiendas retail, productos artesanales, gastronomía, moda. +500 productos fotografiados en la región.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Sesión Gratis →
        </Link>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Fotografía Profesional para tu Ecommerce?</h2>
          <div className="space-y-6">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 93% de compradores online considera las fotos como el factor MÁS IMPORTANTE al decidir una compra.</strong> Fotos profesionales de producto aumentan conversión de ecommerce hasta 35% vs fotos amateur con celular. En Biobío, negocios que venden por Mercado Libre, Instagram o web propia necesitan imágenes de calidad para competir con grandes retailers de Santiago que SÍ invierten en fotografía profesional. Fondo blanco puro, iluminación perfecta, retoque de imperfecciones — detalles que marcan diferencia entre venta y abandono de carrito.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Fotos profesionales reducen devoluciones hasta 40%</strong> porque muestran el producto real, tamaño exacto, textura, acabados. Cuando clientes ven exactamente qué van a recibir, expectativas se alinean con realidad — menos reclamos, menos costos de devolución, mejor reputación en plataformas. Inversión de $9.900 por producto se paga sola evitando 2-3 devoluciones o generando 5-10 ventas extra por mejor presentación visual.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Fotos que Venden?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Atendemos toda la Región del Biobío. Sesión fotográfica profesional desde $9.900/producto. Cotiza:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Sesión Ahora →
          </Link>
        </div>
      </article>
    </>
  );
}
