import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios Video Marketing 2026 | Video Producto y Publicidad',
  description: 'Servicios de video marketing: video producto, video publicitario, video redes sociales, video corporativo. Desde $19.900. Para Instagram, TikTok, YouTube.',
  keywords: 'servicios video marketing, video producto, video publicitario, video Instagram, video TikTok',
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
    canonical: '/servicios-video-marketing',
  },
  openGraph: {
    title: 'Servicios Video Marketing 2026 | Video Producto y Publicidad',
    description: 'Video marketing profesional: producto, publicidad, redes sociales. Desde $19.900.',
    url: 'https://almamedia.cl/servicios-video-marketing',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Video Marketing 2026',
    description: 'Video marketing profesional: producto, publicidad, redes sociales.',
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

export default function ServiciosVideoMarketingPage() {
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
            "name": "Servicios de Video Marketing",
            "description": "Producción de video profesional: video producto, video publicitario, video redes sociales, video corporativo. Para Instagram, TikTok, YouTube, ecommerce.",
            "provider": {
              "@type": "Organization",
              "name": "Alma Media"
            },
            "areaServed": "Chile",
            "offers": [
              {
                "@type": "Offer",
                "name": "Video Básico",
                "price": "19900",
                "priceCurrency": "CLP"
              },
              {
                "@type": "Offer",
                "name": "Video Premium",
                "price": "39900",
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
          <span>Video Marketing</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🎥 Servicios Video</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Servicios de Video Marketing Profesional
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Servicios completos de video marketing profesional</strong> para redes sociales, ecommerce, publicidad digital y comunicación corporativa. Ofrecemos <Link href="/video-producto" className="text-[var(--color-accent)] hover:underline">video de producto</Link> desde $19.900 (15-30 seg para Instagram/TikTok), video premium $39.900 (30-60 seg con storytelling completo), video publicitario desde $99.900 (campaña completa con guión), video corporativo desde $149.900 (institucional/presentación empresa). Más de 300 videos producidos, grabación 4K con iluminación de estudio, edición profesional con color grading, música libre de derechos, motion graphics y textos animados, formatos adaptados para cada plataforma (Instagram 9:16, TikTok, YouTube 16:9, LinkedIn), entrega express 5-7 días. Descuentos por volumen: 5+ videos -20%, 10+ -30%. El video aumenta conversión hasta 80% vs contenido estático.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Video →
        </Link>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Tipos de Video */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Tipos de Video</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 relative">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS VENDIDO
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Video Producto</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Video corto 15-30 segundos para Instagram Reels, TikTok, ecommerce. Muestra producto en uso, características destacadas, múltiples ángulos. Formato vertical 9:16.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Duración 15-30 seg</li>
                <li>✓ Grabación 4K</li>
                <li>✓ Edición + música</li>
                <li>✓ Formatos multiplataforma</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$19.900<span className="text-base font-normal text-[var(--color-muted)]">/video</span></div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Video Premium</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Video 30-60 segundos con storytelling completo. Guión profesional, múltiples escenas, textos animados, color grading avanzado. Para YouTube, web, campañas.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Duración 30-60 seg</li>
                <li>✓ Guión incluido</li>
                <li>✓ Color grading PRO</li>
                <li>✓ Motion graphics</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$39.900<span className="text-base font-normal text-[var(--color-muted)]">/video</span></div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Video Publicitario</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Campaña publicitaria completa para Meta Ads, Google Ads, YouTube. Incluye concepto creativo, guión, producción, edición, versiones A/B testing.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Concepto creativo</li>
                <li>✓ Guión profesional</li>
                <li>✓ Actores/modelos</li>
                <li>✓ Versiones 15s/30s/60s</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$99.900<span className="text-base font-normal text-[var(--color-muted)]">/campaña</span></div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Video Corporativo</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Video institucional para presentación de empresa, cultura corporativa, presentación de servicios. Profesional, sobrio, de alta calidad.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Duración 1-3 minutos</li>
                <li>✓ Entrevistas</li>
                <li>✓ Locución profesional</li>
                <li>✓ Subtítulos incluidos</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$149.900<span className="text-base font-normal text-[var(--color-muted)]">/proyecto</span></div>
            </div>

          </div>
        </section>

        {/* Por qué video marketing */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Video Marketing?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El video aumenta conversión hasta 80% vs contenido estático.</strong> Según estudios de Wyzowl 2026, el 73% de consumidores tiene más probabilidad de comprar después de ver un video del producto. Videos muestran características que fotos no pueden: movimiento, tamaño real, facilidad de uso, textura. En ecommerce, productos con video venden 5x más que productos solo con fotos. El retorno de inversión es inmediato: un video de $19.900 se paga con 2-3 ventas extra.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Videos son el formato con mayor engagement en redes sociales.</strong> Instagram Reels, TikTok y YouTube Shorts priorizan contenido de video en sus algoritmos. Un video de producto bien producido genera 10x más interacciones que una foto estática, aumenta alcance orgánico exponencialmente, permite viralización sin inversión publicitaria. Para negocios que venden por Instagram o TikTok, video profesional es la diferencia entre quedar invisible vs alcanzar miles de clientes potenciales.
            </p>
          </div>
        </section>

        {/* Comparativa */}
        <section className="mb-20 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
          <h2 className="text-3xl font-black mb-8 text-center text-[var(--color-accent)]">Comparativa de Servicios</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)]">
                  <th className="text-left py-4 px-4">Característica</th>
                  <th className="text-center py-4 px-4">Básico</th>
                  <th className="text-center py-4 px-4">Premium</th>
                  <th className="text-center py-4 px-4">Publicitario</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-muted)]">
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 px-4">Duración</td>
                  <td className="text-center py-3 px-4">15-30 seg</td>
                  <td className="text-center py-3 px-4">30-60 seg</td>
                  <td className="text-center py-3 px-4">Personalizado</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 px-4">Guión</td>
                  <td className="text-center py-3 px-4">-</td>
                  <td className="text-center py-3 px-4">✓</td>
                  <td className="text-center py-3 px-4">✓ Concepto</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-3 px-4">Ideal para</td>
                  <td className="text-center py-3 px-4">Redes sociales</td>
                  <td className="text-center py-3 px-4">YouTube / Web</td>
                  <td className="text-center py-3 px-4">Ads / Campañas</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Precio</td>
                  <td className="text-center py-3 px-4 text-[var(--color-accent)] font-bold">$19.900</td>
                  <td className="text-center py-3 px-4 text-[var(--color-accent)] font-bold">$39.900</td>
                  <td className="text-center py-3 px-4 text-[var(--color-accent)] font-bold">$99.900</td>
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
            ¿Listo para Videos que Venden?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Cotiza producción de video profesional. Descuentos por volumen. Respuesta en 24 horas:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Video Ahora →
          </Link>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⭐ +300 videos producidos • Descuentos por volumen • Entrega express
          </p>
        </div>

      </article>
    </>
  );
}
