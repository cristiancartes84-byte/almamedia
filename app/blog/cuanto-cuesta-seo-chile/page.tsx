import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '¿Cuánto Cuesta SEO en Chile? [Precios Reales y ROI]',
  description: 'Precios reales de SEO en Chile: desde $249.000/mes. Descubre qué incluye cada plan, ROI esperado, y cómo elegir el servicio SEO correcto para tu negocio.',
  keywords: 'cuanto cuesta seo Chile, precios seo, posicionamiento google precio, seo mensual Chile',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog/cuanto-cuesta-seo-chile',
  },
  openGraph: {
    title: '¿Cuánto Cuesta SEO en Chile? Precios Reales 2026',
    description: 'Precios reales de SEO en Chile: desde $249.000/mes. Qué incluye cada plan, ROI esperado, y cómo elegir el servicio SEO correcto.',
    url: 'https://almamedia.cl/blog/cuanto-cuesta-seo-chile',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'article',
    publishedTime: '2026-07-04T10:00:00Z',
    authors: ['Alma Media'],
    images: [{
      url: '/og-images/cuanto-cuesta-seo-chile.jpg',
      width: 1200,
      height: 630,
      alt: 'Precios SEO en Chile 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Cuánto Cuesta SEO en Chile? Precios Reales 2026',
    description: 'Desde $249.000/mes. Descubre qué incluye cada plan SEO y el ROI esperado.',
    images: ['/og-images/cuanto-cuesta-seo-chile.jpg'],
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
          <span>Precios SEO</span>
        </div>

        <article className="relative z-10 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                Precios
              </span>
              <span className="text-sm text-[var(--color-muted)]">7 min lectura</span>
              <span className="text-sm text-[var(--color-muted)]"><CurrentMonth /> <CurrentYear /></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              ¿Cuánto Cuesta SEO en Chile? [Precios Reales <CurrentYear />]
            </h1>

            <p className="text-xl text-[var(--color-muted)] leading-relaxed text-justify">
              <strong className="text-white">El 93% de experiencias online comienzan en Google.</strong> Si estás buscando cuánto cuesta SEO en Chile, esta guía te da precios reales actualizados para <CurrentMonth /> <CurrentYear />, qué incluye cada plan, ROI esperado, y cuánto tiempo tarda en dar resultados. Precios desde $249.000/mes para SEO básico hasta $590.000+/mes para campañas agresivas con link building.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Precios SEO en Chile por Tipo de Plan</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">SEO Básico</h3>
                <div className="text-4xl font-black mb-4">$249.000</div>
                <p className="text-sm text-[var(--color-muted)] mb-4">CLP/mes (3-6 meses mínimo)</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Auditoría SEO inicial</li>
                  <li>✓ Optimización on-page</li>
                  <li>✓ 2 artículos blog/mes</li>
                  <li>✓ Reporte mensual</li>
                  <li>✓ Keywords locales</li>
                </ul>
              </div>

              <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-6 relative">
                <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                  MÁS POPULAR
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">SEO Profesional</h3>
                <div className="text-4xl font-black mb-4">$390.000</div>
                <p className="text-sm text-[var(--color-muted)] mb-4">CLP/mes (6 meses mínimo)</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Todo lo de Básico +</li>
                  <li>✓ 4 artículos blog/mes</li>
                  <li>✓ Link building (5-8/mes)</li>
                  <li>✓ SEO técnico avanzado</li>
                  <li>✓ Google Business Profile</li>
                </ul>
              </div>

              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">SEO Agresivo</h3>
                <div className="text-4xl font-black mb-4">$590.000+</div>
                <p className="text-sm text-[var(--color-muted)] mb-4">CLP/mes (12 meses mínimo)</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Todo lo de Profesional +</li>
                  <li>✓ 8 artículos blog/mes</li>
                  <li>✓ Link building (15+/mes)</li>
                  <li>✓ Keywords competitivas</li>
                  <li>✓ Estrategia contenido</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">¿Qué Incluye Cada Plan SEO?</h2>

            <h3 className="text-2xl font-bold mb-4 mt-8">SEO Básico ($249.000/mes)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Ideal para:</strong> Negocios locales pequeños, servicios profesionales, keywords de baja-media competencia. Incluye auditoría SEO completa inicial (análisis técnico, contenido, backlinks actuales), optimización on-page de 5-10 páginas principales (títulos, meta descriptions, headings, URLs, imágenes alt text), investigación de 10-15 keywords objetivo (locales, baja competencia), 2 artículos de blog optimizados por mes (800-1200 palabras cada uno), optimización técnica básica (velocidad, mobile, sitemap, robots.txt), reporte mensual con posiciones, tráfico, conversiones. Resultados esperados: primeros movimientos en Google en 2-3 meses, mejoras significativas en 4-6 meses. Compromiso mínimo 3-6 meses (SEO no funciona en 1 mes).
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">SEO Profesional ($390.000/mes)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Ideal para:</strong> PYMES consolidadas, negocios con múltiples servicios, keywords de competencia media-alta. Todo lo del plan Básico PLUS: 4 artículos blog optimizados/mes (1200-2000 palabras), link building profesional (5-8 backlinks de calidad mensual desde sitios chilenos relevantes), SEO técnico avanzado (schema markup, Core Web Vitals, indexación), optimización Google Business Profile (posts semanales, reseñas, fotos), análisis de competencia mensual (qué hacen los top 3 en tu nicho), optimización de conversión (no solo tráfico, sino ventas). Resultados esperados: primeros resultados visibles en 1-2 meses, posiciones top 3-5 para keywords principales en 6 meses, ROI positivo típicamente en mes 4-6.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">SEO Agresivo ($590.000+/mes)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Ideal para:</strong> Empresas grandes, ecommerce, keywords altamente competitivas (ej: "abogado Santiago", "notebook Chile"). Todo lo del plan Profesional PLUS: 8 artículos blog optimizados/mes (2000+ palabras, contenido pillar), link building agresivo (15-20 backlinks mensuales alta autoridad), estrategia de contenido 360° (videos, infografías, guías descargables), outreach y relaciones públicas digitales, optimización continua basada en datos, consultor SEO dedicado (acceso directo). Resultados esperados: primeras posiciones top 10 en 2-3 meses para keywords secundarias, top 3 para keywords principales en 6-12 meses, dominio de nicho completo en 12-18 meses.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">ROI Esperado de SEO</h2>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-xl font-bold mb-4">Ejemplo Real: Ferretería Concepción</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-[var(--color-accent)]">Inversión</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Plan: SEO Profesional</li>
                    <li>Costo: $390.000/mes x 6 meses</li>
                    <li>Total: $2.340.000</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-[var(--color-accent)]">Resultados (mes 6)</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Visitas mensuales: 0 → 1,200</li>
                    <li>Conversiones: 24 ventas/mes</li>
                    <li>Ticket promedio: $280.000</li>
                    <li>Ingresos: $6.720.000/mes</li>
                    <li><strong className="text-[var(--color-accent)]">ROI: 287%</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">¿Cuánto Tiempo Tarda SEO en Funcionar?</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Expectativas realistas por mes:</strong>
            </p>

            <ul className="space-y-4 mb-8">
              <li className="text-lg leading-relaxed"><strong>Mes 1-2:</strong> Auditoría, optimizaciones técnicas, primeros artículos. Sin resultados visibles aún. Google necesita tiempo para re-indexar.</li>
              <li className="text-lg leading-relaxed"><strong>Mes 3-4:</strong> Primeros movimientos en rankings. Keywords de baja competencia empiezan a subir. Tráfico aumenta 20-40%.</li>
              <li className="text-lg leading-relaxed"><strong>Mes 5-6:</strong> Keywords principales entran top 10-20. Tráfico aumenta 60-100%. Primeras conversiones significativas.</li>
              <li className="text-lg leading-relaxed"><strong>Mes 7-12:</strong> Keywords principales top 3-5. Tráfico aumenta 150-300%. ROI positivo consolidado.</li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Cómo Elegir Plan SEO Correcto</h2>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-xl font-bold mb-4">Elige según:</h3>
              <ul className="space-y-3">
                <li><strong className="text-[var(--color-accent)]">SEO Básico si:</strong> Negocio local pequeño, presupuesto limitado, keywords poco competitivas ("abogado laboral Los Ángeles"), solo necesitas posicionar 5-10 páginas.</li>
                <li><strong className="text-[var(--color-accent)]">SEO Profesional si:</strong> PYME consolidada, presupuesto medio, keywords competencia media ("diseño web Concepción"), necesitas resultados en 6 meses, quieres dominar tu nicho local.</li>
                <li><strong className="text-[var(--color-accent)]">SEO Agresivo si:</strong> Empresa grande, presupuesto amplio, keywords muy competitivas ("notebook Chile"), mercado nacional, competencia con grandes marcas.</li>
              </ul>
            </div>

          </div>

          {/* CTA Conversión */}
          <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)] mt-16">
            <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
              <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Auditoría SEO Gratis</span>
            </div>
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
              ¿Quieres Aparecer en Primera Página de Google?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
              Solicita auditoría SEO gratuita. Analizamos tu sitio, competencia y te decimos qué plan necesitas para dominar tu nicho.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                Solicitar Auditoría SEO Gratis →
              </Link>
              <Link href="/seo-posicionamiento" className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-white text-lg font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Ver Casos de Éxito →
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              ⭐ ROI promedio 250% en 6 meses • Desde $249.000/mes
            </p>
          </div>

        </article>
      </div>

      {/* Schema.org Article Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "¿Cuánto Cuesta SEO en Chile? Precios Reales 2026",
        "description": "Precios reales de SEO en Chile: desde $249.000/mes. Descubre qué incluye cada plan, ROI esperado, y cómo elegir el servicio SEO correcto para tu negocio.",
        "image": "https://almamedia.cl/og-images/cuanto-cuesta-seo-chile.jpg",
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
          "@id": "https://almamedia.cl/blog/cuanto-cuesta-seo-chile"
        },
        "keywords": "cuanto cuesta seo Chile, precios seo, posicionamiento google precio",
        "articleSection": "Precios",
        "wordCount": 2100,
        "timeRequired": "PT7M",
        "inLanguage": "es-CL"
      })}} />
    </>
  );
}
