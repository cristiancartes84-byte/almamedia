import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page vs Sitio Web: ¿Cuál Necesito? [Guía Completa]',
  description: 'Diferencias entre landing page y sitio web completo. Descubre cuál necesita tu negocio según objetivos, presupuesto y tipo de empresa con ejemplos reales.',
  keywords: 'landing page vs sitio web, diferencia landing page sitio web, que necesito landing o sitio web',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog/landing-page-vs-sitio-web',
  },
  openGraph: {
    title: 'Landing Page vs Sitio Web: ¿Cuál Necesito? Guía 2026',
    description: 'Diferencias clave entre landing page y sitio web. Descubre cuál necesita tu negocio según objetivos y presupuesto.',
    url: 'https://almamedia.cl/blog/landing-page-vs-sitio-web',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'article',
    publishedTime: '2026-07-04T10:00:00Z',
    authors: ['Alma Media'],
    images: [{
      url: '/og-images/landing-page-vs-sitio-web.jpg',
      width: 1200,
      height: 630,
      alt: 'Landing Page vs Sitio Web Guía 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landing Page vs Sitio Web: ¿Cuál Necesito? Guía 2026',
    description: 'Diferencias clave entre landing page y sitio web. Guía completa para elegir correctamente.',
    images: ['/og-images/landing-page-vs-sitio-web.jpg'],
  },
};

export default function ArticlePage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[var(--color-accent)] transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span>Landing vs Sitio Web</span>
        </div>

        <article className="relative z-10 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                Guías
              </span>
              <span className="text-sm text-[var(--color-muted)]">6 min lectura</span>
              <span className="text-sm text-[var(--color-muted)]"><CurrentMonth /> <CurrentYear /></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Landing Page vs Sitio Web: ¿Cuál Necesito? [Guía <CurrentYear />]
            </h1>

            <p className="text-xl text-[var(--color-muted)] leading-relaxed text-justify">
              <strong className="text-white">El 68% de negocios eligen la opción incorrecta y pierden dinero.</strong> Si no sabes si necesitas una landing page o un sitio web completo, esta guía te explica las diferencias clave, cuándo usar cada uno, y cuál te dará mejor ROI según tu tipo de negocio y objetivos. Con ejemplos reales y casos de uso específicos para Chile.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Diferencias Clave: Landing Page vs Sitio Web</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
              <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>✓ 1 página única</strong> enfocada en 1 objetivo</li>
                  <li><strong>✓ Sin navegación</strong> (no distracciones)</li>
                  <li><strong>✓ 1 CTA claro</strong> (cotizar, llamar, comprar)</li>
                  <li><strong>✓ Tasa conversión:</strong> 8-15%</li>
                  <li><strong>✓ Costo:</strong> $169.000/año</li>
                  <li><strong>✓ Tiempo:</strong> 7-10 días</li>
                  <li><strong>✓ Objetivo:</strong> Convertir visitas en leads</li>
                </ul>
              </div>

              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Sitio Web</h3>
                <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                  <li><strong>✓ Múltiples páginas</strong> (5-50+)</li>
                  <li><strong>✓ Navegación completa</strong> (menú, footer)</li>
                  <li><strong>✓ Múltiples CTAs</strong> según página</li>
                  <li><strong>✓ Tasa conversión:</strong> 2-4%</li>
                  <li><strong>✓ Costo:</strong> $390.000 - $590.000</li>
                  <li><strong>✓ Tiempo:</strong> 15-30 días</li>
                  <li><strong>✓ Objetivo:</strong> Informar + convertir</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">¿Cuándo Usar Landing Page?</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Usa Landing Page si:</strong>
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 not-prose">
                <h3 className="font-bold mb-2">1. Campaña Publicitaria Específica</h3>
                <p className="text-[var(--color-muted)]"><strong>Ejemplo:</strong> Estás invirtiendo en Google Ads para "instalación paneles solares Concepción". Necesitas una landing page SOLO sobre ese servicio, sin distracciones. Tasa conversión 12% vs 3% si mandas a sitio web genérico.</p>
              </div>

              <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 not-prose">
                <h3 className="font-bold mb-2">2. Lanzamiento de Producto</h3>
                <p className="text-[var(--color-muted)]"><strong>Ejemplo:</strong> Lanzas nuevo curso online. Necesitas página única explicando beneficios, precio, testimonios, y botón "Comprar Ahora". Todo enfocado en vender ESE curso específico.</p>
              </div>

              <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 not-prose">
                <h3 className="font-bold mb-2">3. Servicio Profesional Simple</h3>
                <p className="text-[var(--color-muted)]"><strong>Ejemplo:</strong> Eres contador freelance. Ofreces 1-2 servicios: declaración renta e inicios de actividades. Landing page con tus servicios, precios, WhatsApp. No necesitas 10 páginas.</p>
              </div>

              <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 not-prose">
                <h3 className="font-bold mb-2">4. Presupuesto Limitado</h3>
                <p className="text-[var(--color-muted)]"><strong>Ejemplo:</strong> Startup con presupuesto $169.000. Landing page te da presencia web profesional + conversión inmediata. Después escalas a sitio completo cuando tengas más presupuesto.</p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">¿Cuándo Usar Sitio Web Completo?</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Usa Sitio Web si:</strong>
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-[var(--color-card)] border-l-4 border-white p-6 not-prose">
                <h3 className="font-bold mb-2">1. Múltiples Servicios/Productos</h3>
                <p className="text-[var(--color-muted)]"><strong>Ejemplo:</strong> Agencia marketing digital ofrece diseño web, SEO, fotografía, video. Necesitas página específica para cada servicio + página nosotros + blog. Landing page sería insuficiente.</p>
              </div>

              <div className="bg-[var(--color-card)] border-l-4 border-white p-6 not-prose">
                <h3 className="font-bold mb-2">2. Estrategia SEO a Largo Plazo</h3>
                <p className="text-[var(--color-muted)]"><strong>Ejemplo:</strong> Quieres posicionar en Google orgánicamente. Necesitas blog para crear contenido mensual, múltiples páginas optimizadas para diferentes keywords. Landing page tiene potencial SEO limitado.</p>
              </div>

              <div className="bg-[var(--color-card)] border-l-4 border-white p-6 not-prose">
                <h3 className="font-bold mb-2">3. Empresa Consolidada/Grande</h3>
                <p className="text-[var(--color-muted)]"><strong>Ejemplo:</strong> Clínica con 5 especialidades, equipo médico, blog salud, agenda online. Necesitas sitio web robusto con estructura compleja. Landing page daría imagen poco profesional.</p>
              </div>

              <div className="bg-[var(--color-card)] border-l-4 border-white p-6 not-prose">
                <h3 className="font-bold mb-2">4. Necesitas Educar al Cliente</h3>
                <p className="text-[var(--color-muted)]"><strong>Ejemplo:</strong> Vendes producto técnico complejo (software B2B). Cliente necesita entender cómo funciona, casos de uso, comparativas, FAQs extensas. Sitio web permite explicar en profundidad.</p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Tabla Comparativa: ¿Cuál Elegir?</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse not-prose">
                <thead>
                  <tr className="border-b-2 border-[var(--color-accent)]">
                    <th className="text-left p-4">Criterio</th>
                    <th className="text-center p-4 bg-[rgba(200,255,0,0.1)]">Landing Page</th>
                    <th className="text-center p-4">Sitio Web</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--color-muted)]">
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Servicios ofrecidos</td>
                    <td className="text-center p-4">1-2 servicios</td>
                    <td className="text-center p-4">3+ servicios</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Objetivo principal</td>
                    <td className="text-center p-4">Conversión inmediata</td>
                    <td className="text-center p-4">Info + conversión</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Estrategia SEO</td>
                    <td className="text-center p-4">No prioritario</td>
                    <td className="text-center p-4">Sí, con blog</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Presupuesto inicial</td>
                    <td className="text-center p-4">$169.000</td>
                    <td className="text-center p-4">$390.000+</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Tiempo desarrollo</td>
                    <td className="text-center p-4">7-10 días</td>
                    <td className="text-center p-4">15-30 días</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Tasa conversión típica</td>
                    <td className="text-center p-4 text-[var(--color-accent)] font-bold">8-15%</td>
                    <td className="text-center p-4">2-4%</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Ideal para</td>
                    <td className="text-center p-4">Freelance, servicios simples</td>
                    <td className="text-center p-4">PYME, empresas, ecommerce</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">¿Puedo Empezar con Landing y Luego Escalar?</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-white">Sí, y es la estrategia más inteligente si tienes presupuesto limitado.</strong> Muchos negocios exitosos comienzan con landing page ($169.000) para validar demanda y generar primeros clientes. Después de 3-6 meses, cuando tienen flujo de caja, escalan a sitio web completo ($390.000) para crecer más rápido con SEO y múltiples servicios. Esta estrategia minimiza riesgo inicial.
            </p>

          </div>

          {/* CTA Conversión */}
          <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)] mt-16">
            <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
              <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Asesoría Gratis</span>
            </div>
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
              ¿No Sabes Cuál Elegir? Te Ayudamos Gratis
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
              Cuéntanos tu negocio y objetivos. Te decimos si necesitas landing page o sitio web, con presupuesto exacto y ejemplos.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                Solicitar Asesoría Gratis →
              </Link>
              <Link href="/diseno-web" className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-white text-lg font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Ver Ejemplos →
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              ⭐ Respuesta en 24h • Presupuesto sin compromiso
            </p>
          </div>

        </article>
      </div>

      {/* Schema.org Article Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Landing Page vs Sitio Web: ¿Cuál Necesito? Guía 2026",
        "description": "Diferencias entre landing page y sitio web completo. Descubre cuál necesita tu negocio según objetivos, presupuesto y tipo de empresa con ejemplos reales.",
        "image": "https://almamedia.cl/og-images/landing-page-vs-sitio-web.jpg",
        "author": {
          "@type": "Organization",
          "name": "Alma Media",
          "url": "https://almamedia.cl"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Alma Media",
          "logo": {
            "@type": "ImageObject",
            "url": "https://almamedia.cl/logo.jpg"
          }
        },
        "datePublished": "2026-07-04T10:00:00Z",
        "dateModified": "2026-07-05T10:00:00Z",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://almamedia.cl/blog/landing-page-vs-sitio-web"
        },
        "keywords": "landing page vs sitio web, diferencia landing page sitio web, que necesito landing o sitio web",
        "articleSection": "Guías",
        "wordCount": 1800,
        "timeRequired": "PT6M",
        "inLanguage": "es-CL"
      })}} />
    </>
  );
}
