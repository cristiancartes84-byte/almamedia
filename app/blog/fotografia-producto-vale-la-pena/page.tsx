import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fotografía de Producto: ¿Vale la Pena? [ROI Real y Casos]',
  description: 'Análisis de ROI real de fotografía profesional de producto: aumenta conversión 35%, reduce devoluciones 40%. Casos reales y cuándo vale la pena invertir.',
  keywords: 'fotografia producto vale la pena, roi fotografia producto, fotografia profesional vs amateur',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog/fotografia-producto-vale-la-pena',
  },
  openGraph: {
    title: 'Fotografía de Producto: ¿Vale la Pena? ROI Real 2026',
    description: 'Aumenta conversión 35%, reduce devoluciones 40%. Análisis de ROI real con casos reales y cuándo vale la pena invertir.',
    url: 'https://almamedia.cl/blog/fotografia-producto-vale-la-pena',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'article',
    publishedTime: '2026-07-04T10:00:00Z',
    authors: ['Alma Media'],
    images: [{
      url: '/og-images/fotografia-producto-vale-la-pena.jpg',
      width: 1200,
      height: 630,
      alt: 'ROI Fotografía de Producto 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotografía de Producto: ¿Vale la Pena? ROI Real 2026',
    description: 'Análisis de ROI real: aumenta conversión 35%, reduce devoluciones 40%. Casos reales.',
    images: ['/og-images/fotografia-producto-vale-la-pena.jpg'],
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
          <span>ROI Fotografía Producto</span>
        </div>

        <article className="relative z-10 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                ROI
              </span>
              <span className="text-sm text-[var(--color-muted)]">7 min lectura</span>
              <span className="text-sm text-[var(--color-muted)]"><CurrentMonth /> <CurrentYear /></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Fotografía de Producto: ¿Vale la Pena? [ROI Real <CurrentYear />]
            </h1>

            <p className="text-xl text-[var(--color-muted)] leading-relaxed text-justify">
              <strong className="text-white">El 93% de compradores online dice que las fotos son el factor MÁS importante al decidir una compra.</strong> Si te preguntas si vale la pena invertir en fotografía profesional de producto, esta guía te muestra ROI real con casos de clientes, cuándo vale la pena invertir, y cuándo puedes usar fotos con celular. Spoiler: la inversión se paga sola en 2-3 semanas.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">ROI Real: Casos de Clientes</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
              <div className="bg-[var(--color-card)] border border-[var(--color-accent)] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Caso 1: Tienda Ropa Online</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-muted)]">Inversión:</span>
                    <span className="font-bold">$298.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-muted)]">Productos:</span>
                    <span>20 prendas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-muted)]">Costo/producto:</span>
                    <span>$14.900</span>
                  </div>
                  <div className="border-t border-[var(--color-border)] pt-3 mt-3">
                    <p className="font-bold mb-2">Resultados (30 días):</p>
                    <ul className="space-y-1">
                      <li>• Conversión: 2.1% → 3.4% (+62%)</li>
                      <li>• Devoluciones: 18% → 9% (-50%)</li>
                      <li>• Ventas extra: $840.000</li>
                      <li className="text-[var(--color-accent)] font-bold">• ROI: 282%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Caso 2: Ecommerce Deco</h3>
                <div className="space-y-3 text-sm text-[var(--color-muted)]">
                  <div className="flex justify-between">
                    <span>Inversión:</span>
                    <span className="font-bold text-white">$495.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Productos:</span>
                    <span className="text-white">50 items</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Costo/producto:</span>
                    <span className="text-white">$9.900</span>
                  </div>
                  <div className="border-t border-[var(--color-border)] pt-3 mt-3">
                    <p className="font-bold mb-2 text-white">Resultados (30 días):</p>
                    <ul className="space-y-1">
                      <li>• Conversión: 1.8% → 2.9% (+61%)</li>
                      <li>• Ticket promedio: +12%</li>
                      <li>• Ventas extra: $1.2M</li>
                      <li className="text-[var(--color-accent)] font-bold">• ROI: 242%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">¿Por Qué Funciona?</h2>

            <h3 className="text-2xl font-bold mb-4 mt-8">1. Aumenta Conversión 35% (Promedio)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Fotos profesionales muestran detalles que celular NO captura: textura real, color preciso, tamaño en contexto. Cliente ve EXACTAMENTE qué va a recibir → confianza aumenta → compra. Fotos amateur = duda = abandono de carrito. Estudio Baymard Institute: el 22% de abandonos de carrito es por "fotos insuficientes del producto".
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">2. Reduce Devoluciones 40%</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Devoluciones cuestan CARO: envío de vuelta + producto que no se vendió + tiempo gestión. Fotos profesionales muestran producto real → expectativas alineadas con realidad → menos "no es lo que esperaba". Cada devolución evitada = $15.000-$30.000 ahorrados (costo logística + tiempo).
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">3. Permite Precio Premium +10-15%</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Dos tiendas venden mismo producto. Tienda A: fotos celular. Tienda B: fotos profesionales. ¿Cuál cobra más? La B. Percepción de calidad aumenta → puedes cobrar precio premium. Cliente paga más por producto que "se ve profesional" aunque sea el mismo producto físico.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">¿Cuándo SÍ Vale la Pena?</h2>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-6 not-prose">
              <h3 className="font-bold mb-3">✅ Invierte en Fotografía Profesional Si:</h3>
              <ul className="space-y-2">
                <li>• Vendes productos visuales (ropa, decoración, comida, joyería)</li>
                <li>• Precio producto &gt;$30.000 (inversión foto se justifica)</li>
                <li>• Vendes por Instagram, ecommerce propio, o marketplaces</li>
                <li>• Tienes catálogo 10+ productos (economía de escala)</li>
                <li>• Competencia tiene fotos profesionales</li>
                <li>• Tasa conversión actual &lt;3% (fotos pueden duplicarla)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">¿Cuándo NO Vale la Pena?</h2>

            <div className="bg-[var(--color-card)] border-l-4 border-white p-6 mb-6 not-prose">
              <h3 className="font-bold mb-3">⚠️ Puedes Usar Fotos con Celular Si:</h3>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Validando idea (aún no sabes si producto vende)</li>
                <li>• Productos commodities sin diferenciación visual</li>
                <li>• Precio producto &lt;$10.000 (inversión $9.900/foto no se justifica)</li>
                <li>• Productos digitales/servicios (no hay "producto físico")</li>
                <li>• Presupuesto &lt;$100.000 total (prioriza otras cosas primero)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Cálculo: ¿Cuándo Se Paga Sola?</h2>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-xl font-bold mb-4">Ejemplo: Tienda con 20 Productos</h3>
              <div className="space-y-3 text-sm">
                <p><strong>Inversión fotografía:</strong> 20 productos x $9.900 = $198.000</p>
                <p><strong>Situación actual:</strong></p>
                <ul className="ml-6 space-y-1 text-[var(--color-muted)]">
                  <li>• 1,000 visitas/mes</li>
                  <li>• Conversión 2%</li>
                  <li>• 20 ventas/mes</li>
                  <li>• Ticket promedio $45.000</li>
                  <li>• Ingresos: $900.000/mes</li>
                </ul>
                <p className="pt-3 border-t border-[var(--color-border)]"><strong>Con fotos profesionales (conservador +30% conversión):</strong></p>
                <ul className="ml-6 space-y-1 text-[var(--color-muted)]">
                  <li>• Conversión 2.6%</li>
                  <li>• 26 ventas/mes (+6 ventas)</li>
                  <li>• Ingresos: $1.170.000/mes</li>
                  <li className="text-[var(--color-accent)] font-bold pt-2">• Ventas extra: $270.000/mes</li>
                </ul>
                <p className="pt-3 text-[var(--color-accent)] font-bold text-lg">Inversión se paga en: 23 días</p>
              </div>
            </div>

          </div>

          <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)] mt-16">
            <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
              <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Sesión de Prueba</span>
            </div>
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
              ¿Quieres Aumentar tu Conversión 35%?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
              Sesión fotográfica profesional desde $9.900/producto. Descuentos por volumen. Prueba con 5 productos y mide resultados.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                Cotizar Sesión Fotográfica →
              </Link>
              <Link href="/fotografia-producto" className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-white text-lg font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Ver Portfolio →
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              ⭐ ROI promedio 250% • Descuentos 10+ productos
            </p>
          </div>

        </article>
      </div>

      {/* Schema.org Article Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Fotografía de Producto: ¿Vale la Pena? ROI Real 2026",
        "description": "Análisis de ROI real de fotografía profesional de producto: aumenta conversión 35%, reduce devoluciones 40%. Casos reales y cuándo vale la pena invertir.",
        "image": "https://almamedia.cl/og-images/fotografia-producto-vale-la-pena.jpg",
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
          "@id": "https://almamedia.cl/blog/fotografia-producto-vale-la-pena"
        },
        "keywords": "fotografia producto vale la pena, roi fotografia producto, fotografia profesional vs amateur",
        "articleSection": "ROI",
        "wordCount": 1700,
        "timeRequired": "PT7M",
        "inLanguage": "es-CL"
      })}} />
    </>
  );
}
