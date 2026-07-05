import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios Fotografía Producto 2026 | Fondo Blanco y Lifestyle',
  description: 'Servicios profesionales de fotografía de producto: fondo blanco $9.900, lifestyle $14.900, 360°, video-foto combos. Para ecommerce, Amazon, redes sociales.',
  keywords: 'servicios fotografía producto, fotografía ecommerce, fotos fondo blanco, fotografía lifestyle, fotografía 360',
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
    canonical: '/servicios-fotografia-producto',
  },
  openGraph: {
    title: 'Servicios Fotografía Producto 2026 | Fondo Blanco y Lifestyle',
    description: 'Fotografía profesional: fondo blanco, lifestyle, 360°. Para ecommerce y redes sociales.',
    url: 'https://almamedia.cl/servicios-fotografia-producto',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Fotografía Producto 2026',
    description: 'Fotografía profesional: fondo blanco, lifestyle, 360°.',
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

export default function ServiciosFotografiaProductoPage() {
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
            "name": "Servicios de Fotografía de Producto",
            "description": "Fotografía profesional de producto: fondo blanco, lifestyle, 360 grados. Para ecommerce, Amazon, Mercado Libre, redes sociales.",
            "provider": {
              "@type": "Organization",
              "name": "Alma Media"
            },
            "areaServed": "Chile",
            "offers": [
              {
                "@type": "Offer",
                "name": "Fotografía Fondo Blanco",
                "price": "9900",
                "priceCurrency": "CLP"
              },
              {
                "@type": "Offer",
                "name": "Fotografía Lifestyle",
                "price": "14900",
                "priceCurrency": "CLP"
              }
            ]
          })
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/servicios" className="hover:text-[var(--color-accent)] transition-colors">Servicios</Link>
          <span className="mx-2">/</span>
          <span>Fotografía Producto</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">📸 Servicios Fotografía</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Servicios de Fotografía de Producto Profesional
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Servicios completos de fotografía de producto profesional</strong> para ecommerce, marketplaces (Amazon, Mercado Libre), redes sociales y catálogos digitales. Ofrecemos <Link href="/fotografia-producto" className="text-[var(--color-accent)] hover:underline">fotografía fondo blanco</Link> desde $9.900/producto (RGB 255,255,255 perfecto para Amazon/ML), fotografía lifestyle desde $14.900/producto (ambientación para Instagram/Facebook), fotografía 360° interactiva desde $49.900/producto (rotación completa para ecommerce), y combos foto+video desde $24.900. Más de 500 productos fotografiados, iluminación de estudio profesional 3 puntos, retoque digital avanzado (corrección color, eliminación imperfecciones, recorte preciso), múltiples ángulos por producto, formatos JPG alta resolución + PNG sin fondo, entrega express 3-5 días. Descuentos por volumen: 10+ productos -15%, 20+ -25%, 50+ -35%. Ideal para retail, moda, gastronomía, artesanía, industrial, tecnología.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Sesión →
        </Link>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Tipos de Servicios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Tipos de Fotografía</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Fondo Blanco</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Fotografía con fondo blanco puro RGB 255,255,255 para Amazon, Mercado Libre, ecommerce. Cumple requisitos técnicos de marketplaces. Producto centrado, iluminación uniforme sin sombras.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ 3-5 fotos por producto</li>
                <li>✓ RGB 255,255,255 certificado</li>
                <li>✓ Múltiples ángulos</li>
                <li>✓ JPG + PNG sin fondo</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$9.900<span className="text-base font-normal text-[var(--color-muted)]">/producto</span></div>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 relative">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Lifestyle</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Fotografía con ambientación para redes sociales, web, catálogos. Producto en uso, con modelos, decoración temática. Genera conexión emocional, aumenta engagement.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ 5-8 fotos por producto</li>
                <li>✓ Props y ambientación</li>
                <li>✓ Modelos disponibles</li>
                <li>✓ Storytelling visual</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$14.900<span className="text-base font-normal text-[var(--color-muted)]">/producto</span></div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">360° Interactivo</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Fotografía 360 grados con rotación interactiva para ecommerce premium. 24-36 fotos en rotación completa. Cliente puede rotar producto con mouse/dedo. Aumenta conversión 40%.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ 24-36 fotos en rotación</li>
                <li>✓ Visor 360 incluido</li>
                <li>✓ Optimizado para web</li>
                <li>✓ Compatible mobile</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$49.900<span className="text-base font-normal text-[var(--color-muted)]">/producto</span></div>
            </div>

            <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Combo Foto + Video</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Pack foto fondo blanco + video básico. Ahorra 25% vs servicios separados. Una sesión, dos formatos. Ideal para lanzamiento de productos.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ 3 fotos fondo blanco</li>
                <li>✓ 1 video 15-30 seg</li>
                <li>✓ Ahorro 25%</li>
                <li>✓ Una sola sesión</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$24.900<span className="text-base font-normal text-[var(--color-muted)]">/producto</span></div>
            </div>

          </div>
        </section>

        {/* Por qué fotografía profesional */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Invertir en Fotografía Profesional?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 93% de compradores online dice que las fotos son el factor más importante al decidir una compra.</strong> Fotos profesionales de producto aumentan conversión de ecommerce hasta 35% vs fotos amateur con celular. En marketplaces como Amazon y Mercado Libre, productos con fotos profesionales reciben 3-5x más clics que productos con fotos caseras. La inversión se paga sola con 5-10 ventas extra generadas por mejor presentación visual.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Fotos profesionales reducen devoluciones hasta 40%</strong> porque muestran el producto real: tamaño exacto, textura, color preciso, acabados. Cuando clientes ven exactamente qué van a recibir, expectativas se alinean con realidad — menos reclamos, menos costos de devolución logística, mejor reputación en plataformas. Retoque digital corrige imperfecciones sin falsear producto, iluminación 3 puntos muestra detalles que celular no captura.
            </p>
          </div>
        </section>

        {/* Comparativa de Servicios */}
        <section className="mb-20 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
          <h2 className="text-3xl font-black mb-8 text-center text-[var(--color-accent)]">Comparativa de Servicios</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-4 px-4">Característica</th>
                  <th className="text-center py-4 px-4">Fondo Blanco</th>
                  <th className="text-center py-4 px-4">Lifestyle</th>
                  <th className="text-center py-4 px-4">360°</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-muted)]">
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 px-4">Fotos por producto</td>
                  <td className="text-center py-3 px-4">3-5</td>
                  <td className="text-center py-3 px-4">5-8</td>
                  <td className="text-center py-3 px-4">24-36</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 px-4">Ideal para</td>
                  <td className="text-center py-3 px-4">Amazon / ML</td>
                  <td className="text-center py-3 px-4">Redes sociales</td>
                  <td className="text-center py-3 px-4">Ecommerce premium</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 px-4">Tiempo entrega</td>
                  <td className="text-center py-3 px-4">3 días</td>
                  <td className="text-center py-3 px-4">5 días</td>
                  <td className="text-center py-3 px-4">7 días</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Precio</td>
                  <td className="text-center py-3 px-4 text-[var(--color-accent)] font-bold">$9.900</td>
                  <td className="text-center py-3 px-4 text-[var(--color-accent)] font-bold">$14.900</td>
                  <td className="text-center py-3 px-4 text-[var(--color-accent)] font-bold">$49.900</td>
                </tr>
              </tbody>
            </table>
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
            Cotiza sesión de fotografía profesional. Descuentos por volumen. Respuesta en 24 horas:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Sesión Ahora →
          </Link>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⭐ +500 productos fotografiados • Descuentos por volumen • Entrega express
          </p>
        </div>

      </article>
    </>
  );
}
