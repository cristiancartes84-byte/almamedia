import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Video Producto Chile ${currentYear} | Videos Profesionales $19.900`,
  description: 'Video de producto profesional para ecommerce y redes sociales. Desde $19.900. Aumenta conversión 80%. +300 videos producidos. Cotiza gratis.',
  keywords: 'video de producto Chile, video producto profesional, videos ecommerce, video marketing producto, videos Instagram, videos TikTok, video publicitario producto, producción video comercial Chile',
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
    canonical: '/video-producto',
  },
  openGraph: {
    title: `Video Producto Chile ${currentYear} | Videos Profesionales $19.900`,
    description: 'Video de producto profesional para ecommerce y redes. Desde $19.900. Aumenta conversión 80%. +300 videos.',
    url: 'https://almamedia.cl/video-producto',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Video Producto Chile ${currentYear} | Videos Profesionales $19.900`,
    description: 'Video de producto profesional. Desde $19.900. Aumenta conversión 80%. +300 videos producidos.',
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

export default function VideoProductoPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Video de Producto Profesional Chile",
                "description": "Servicio profesional de producción de video de producto en Chile. Videos cortos para ecommerce, Instagram, TikTok y campañas publicitarias. Aumenta conversión hasta 80% con contenido visual dinámico.",
                "provider": {
                  "@type": "Organization",
                  "name": "Alma Media",
                  "url": "https://almamedia.cl"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Chile"
                },
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Video Básico (15-30 seg)",
                    "price": "19900",
                    "priceCurrency": "CLP"
                  },
                  {
                    "@type": "Offer",
                    "name": "Video Premium (30-60 seg)",
                    "price": "39900",
                    "priceCurrency": "CLP"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Cuánto cuesta un video de producto en Chile?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Un video de producto en Chile cuesta desde $19.900 para videos básicos de 15-30 segundos (ideal para Instagram/TikTok) y $39.900 para videos premium de 30-60 segundos (storytelling completo). Incluye grabación profesional, edición, música, textos animados y entrega en 5-7 días. Descuentos por volumen: 5+ videos -20%, 10+ videos -30%."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Qué incluye la producción de video de producto?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "La producción incluye: grabación profesional 4K con iluminación de estudio, edición profesional con color grading, música libre de derechos, textos animados y call-to-action, múltiples tomas y ángulos del producto, formatos adaptados para cada plataforma (Instagram, TikTok, YouTube, web), y entrega en 5-7 días hábiles."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Por qué necesito video de producto para mi ecommerce?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "El video de producto aumenta la conversión de ecommerce hasta 80% según estudios. El 73% de consumidores tiene más probabilidad de comprar después de ver un video del producto. Los videos generan mayor engagement en redes sociales, reducen dudas pre-compra, permiten mostrar el producto en uso real, y aumentan el tiempo de permanencia en la página."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Video de Producto</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Video Profesional Chile</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Video de Producto Profesional
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El video de producto profesional en Chile</strong> aumenta la conversión de tu ecommerce hasta 80% con contenido visual dinámico que genera engagement. El 73% de consumidores tiene más probabilidad de comprar después de ver un video del producto, superando ampliamente las fotos estáticas. Ofrecemos producción profesional de videos cortos para ecommerce, Instagram, TikTok y campañas publicitarias desde $19.900 por video básico (15-30 segundos) y $39.900 por video premium (30-60 segundos). Incluye grabación 4K con iluminación de estudio, edición profesional, color grading, música libre de derechos, textos animados, múltiples ángulos, formatos adaptados para cada plataforma, y entrega en 5-7 días. Ideal para ecommerce, productos tech, moda, gastronomía, belleza y lifestyle. +300 videos producidos con resultados medibles en conversión y engagement.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Video Gratis →
          </Link>
          <a href="#beneficios" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
            Ver Beneficios
          </a>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">

        {/* Por qué necesitas */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Necesitas Video de Producto?</h2>

          <div className="space-y-6">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El video de producto profesional</strong> genera 80% más conversión que las fotos estáticas en ecommerce. Cuando un cliente puede VER tu producto en movimiento, desde múltiples ángulos, y en uso real, su confianza aumenta exponencialmente. El 73% de consumidores afirma tener más probabilidad de comprar después de ver un video del producto, según estudios de Wyzowl <CurrentYear />.
            </p>
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Los videos son el formato con mayor engagement en redes sociales:</strong> Instagram Reels, TikTok y YouTube Shorts priorizan contenido de video en sus algoritmos. Un video de producto bien producido genera 10x más interacciones que una foto, aumenta el alcance orgánico, y permite mostrar características que una imagen estática no puede: textura, movimiento, tamaño real, facilidad de uso.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El video reduce devoluciones y aumenta tiempo en página:</strong> cuando los clientes ven exactamente cómo funciona el producto, qué incluye, y cómo se ve en la vida real, las expectativas se alinean con la realidad. Esto reduce devoluciones hasta 25%, aumenta el tiempo de permanencia en la página (señal clave de SEO), y genera mayor ticket promedio al mostrar upsells de forma natural.
            </p>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center">Beneficios del Video de Producto</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">📈 +80% Conversión</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Videos de producto aumentan conversión hasta 80% vs solo fotos. Los clientes ven, entienden y confían más antes de comprar.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🔥 10x Más Engagement</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Videos en redes sociales generan 10x más interacciones: likes, comentarios, shares. Ideal para viralización orgánica.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🛡️ -25% Devoluciones</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Mostrar el producto real en video alinea expectativas. Reduce devoluciones al mostrar tamaño, textura y funcionamiento exacto.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">⏱️ +3min Tiempo en Página</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Videos mantienen a usuarios más tiempo en tu página. Google interpreta esto como contenido de calidad = mejor ranking SEO.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">📱 Optimizado Multiplataforma</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Entregamos formatos para Instagram (9:16, 4:5, 1:1), TikTok, YouTube, web. Un video, múltiples usos.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">💰 ROI Medible</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Rastrea vistas, clics y conversiones. Un video de $39.900 que genera 50 ventas extra tiene ROI 10x+ en primer mes.</p>
            </div>
          </div>
        </section>

        {/* Tipos de Video */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center">Tipos de Videos de Producto</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">🎬 Video 360° Rotación</h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed text-justify">Producto girando sobre fondo blanco/negro. Ideal para ecommerce: muestra todos los ángulos, detalles, acabados. Perfecto para catálogos online.</p>
              <div className="text-sm text-[var(--color-accent)] font-bold">Desde $19.900</div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">📱 Video para Redes Sociales</h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed text-justify">15-30 segundos con música, textos animados, call-to-action. Optimizado para Instagram Reels, TikTok, Stories. Alto engagement garantizado.</p>
              <div className="text-sm text-[var(--color-accent)] font-bold">Desde $29.900</div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">🎥 Video Storytelling</h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed text-justify">30-60 segundos contando la historia del producto: problema, solución, beneficios. Ideal para campañas publicitarias y landing pages con conversión alta.</p>
              <div className="text-sm text-[var(--color-accent)] font-bold">Desde $39.900</div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">👤 Video Unboxing/Demo</h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed text-justify">Persona abriendo y usando el producto. Genera máxima confianza al mostrar tamaño real, facilidad de uso, experiencia completa. Viral en TikTok.</p>
              <div className="text-sm text-[var(--color-accent)] font-bold">Desde $49.900</div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center">Precios Video de Producto</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-xl p-8">
              <div className="text-sm text-[var(--color-accent)] font-bold uppercase mb-2">Más Popular</div>
              <h3 className="text-3xl font-black mb-4">Video Básico</h3>
              <div className="text-5xl font-black text-[var(--color-accent)] mb-2">$19.900</div>
              <div className="text-[var(--color-muted)] mb-6">por video (15-30 seg)</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Grabación 4K profesional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Edición + color grading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Música libre de derechos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Textos animados básicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Formatos redes sociales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Entrega 5-7 días hábiles</span>
                </li>
              </ul>
              <Link href="/contacto" className="block text-center px-6 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-transform">
                Cotizar
              </Link>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <div className="text-sm text-[var(--color-muted)] font-bold uppercase mb-2">Premium</div>
              <h3 className="text-3xl font-black mb-4">Video Premium</h3>
              <div className="text-5xl font-black text-white mb-2">$39.900</div>
              <div className="text-[var(--color-muted)] mb-6">por video (30-60 seg)</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span><strong>Todo de Básico +</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Storytelling completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Motion graphics avanzados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Múltiples escenas/ángulos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Personas/modelos (opcional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                  <span>Subtítulos multiidioma</span>
                </li>
              </ul>
              <Link href="/contacto" className="block text-center px-6 py-4 bg-transparent border-2 border-[var(--color-border)] text-white font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
                Cotizar
              </Link>
            </div>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
            <h3 className="text-lg font-bold mb-3 text-center">💰 Descuentos por Volumen</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-black text-[var(--color-accent)]">-20%</div>
                <div className="text-sm text-[var(--color-muted)]">5-9 videos</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[var(--color-accent)]">-30%</div>
                <div className="text-sm text-[var(--color-muted)]">10-19 videos</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[var(--color-accent)]">Cotización</div>
                <div className="text-sm text-[var(--color-muted)]">20+ videos</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center">Preguntas Frecuentes</h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto cuesta un video de producto en Chile?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Un <strong>video de producto en Chile</strong> cuesta desde <strong>$19.900 por video</strong> para videos básicos de 15-30 segundos (ideal para Instagram/TikTok, incluye grabación 4K, edición, música, textos), y <strong>$39.900 por video</strong> para videos premium de 30-60 segundos (storytelling completo con motion graphics avanzados). Ofrecemos descuentos por volumen: 5-9 videos -20%, 10-19 videos -30%, 20+ cotización especial. Incluye formatos adaptados para todas las plataformas.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué incluye la producción de video de producto?</h3>
              <p className="text-lg leading-relaxed text-justify">
                La producción incluye: <strong>grabación profesional 4K</strong> con iluminación de estudio 3 puntos, edición profesional con color grading, música libre de derechos (biblioteca con +1000 tracks), textos animados y call-to-action, múltiples tomas y ángulos del producto, formatos adaptados para Instagram (9:16, 4:5, 1:1), TikTok, YouTube y web, entrega en alta resolución (4K + 1080p), y entrega en 5-7 días hábiles. Videos premium incluyen storytelling, motion graphics avanzados y subtítulos.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Por qué necesito video de producto para mi ecommerce?</h3>
              <p className="text-lg leading-relaxed text-justify">
                El <strong>video de producto profesional</strong> aumenta la conversión de ecommerce hasta <strong>80%</strong> según estudios. El <strong>73% de consumidores</strong> tiene más probabilidad de comprar después de ver un video del producto (vs solo fotos). Videos generan 10x más engagement en redes sociales, reducen devoluciones 25% al mostrar el producto real en uso, aumentan tiempo en página (señal clave de SEO), permiten mostrar características imposibles de capturar en foto (movimiento, textura, tamaño real), y son el formato preferido por algoritmos de Instagram, TikTok y YouTube.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto demora la producción de un video de producto?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Una <strong>sesión de grabación típica</strong> produce 5-10 videos en 2-3 horas. Tú entregas los productos, nosotros grabamos, editamos y entregamos. Entrega de videos editados: <strong>5-7 días hábiles</strong> para videos básicos, 7-10 días para videos premium con storytelling complejo. Para volúmenes grandes (20+ videos), coordinamos sesiones de múltiples días con entrega escalonada. Incluimos 1 ronda de ajustes sin costo.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Puedo usar los videos para publicidad pagada?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Sí, todos los <strong>videos de producto</strong> incluyen derechos completos de uso comercial: Facebook Ads, Instagram Ads, Google Ads, TikTok Ads, YouTube Ads, TV, catálogos, web, lo que necesites. La música que usamos es 100% libre de derechos (licenciada comercialmente), por lo que no hay riesgo de copyright claims. Entregamos formatos optimizados para cada plataforma publicitaria y podemos agregar call-to-action específicos según tu campaña.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué productos se pueden grabar en video?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Producimos videos para <strong>todo tipo de productos:</strong> ecommerce (ropa, accesorios, tech), gastronomía (alimentos, bebidas), belleza y cosmética, productos artesanales, joyería, decoración y hogar, productos industriales, maquinaria, herramientas, libros y publicaciones. Si tu producto es físico y cabe en nuestro estudio (productos hasta 1.5m), podemos grabarlo. Para productos más grandes (muebles, vehículos) ofrecemos grabación on-site con cotización especial.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 md:p-16 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta Especial <CurrentMonth /> <CurrentYear /></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Videos que Venden?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Únete a <strong className="text-[var(--color-accent)]">+300 videos producidos</strong> con resultados medibles. Cotiza gratis tu producción de video:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Cotización gratis</p>
              <p className="text-xs text-[var(--color-muted)]">Presupuesto en 24h</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Video de prueba</p>
              <p className="text-xs text-[var(--color-muted)]">1 producto gratis</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Sin mínimo</p>
              <p className="text-xs text-[var(--color-muted)]">Desde 1 video</p>
            </div>
          </div>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Video Ahora →
          </Link>
        </div>
      </div>
    </>
  );
}
