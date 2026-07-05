import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Cómo Elegir Agencia de Marketing Digital en Concepción [Guía]',
  description: '7 criterios para elegir la agencia de marketing digital correcta en Concepción. Evita errores costosos y contrata la agencia que realmente hará crecer tu negocio.',
  keywords: 'como elegir agencia marketing digital, agencia marketing Concepción, mejor agencia digital Chile',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog/como-elegir-agencia-marketing-digital-concepcion',
  },
  openGraph: {
    title: 'Cómo Elegir Agencia Marketing Digital en Concepción 2026',
    description: '7 criterios clave para elegir la agencia correcta. Evita errores costosos y contrata la que hará crecer tu negocio.',
    url: 'https://almamedia.cl/blog/como-elegir-agencia-marketing-digital-concepcion',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'article',
    publishedTime: '2026-07-04T10:00:00Z',
    authors: ['Alma Media'],
    images: [{
      url: '/og-images/como-elegir-agencia-marketing-digital-concepcion.jpg',
      width: 1200,
      height: 630,
      alt: 'Cómo Elegir Agencia Marketing Digital 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo Elegir Agencia Marketing Digital en Concepción 2026',
    description: '7 criterios para elegir correctamente. Evita errores costosos y contrata la agencia adecuada.',
    images: ['/og-images/como-elegir-agencia-marketing-digital-concepcion.jpg'],
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
          <span>Elegir Agencia</span>
        </div>

        <article className="relative z-10 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                Guías
              </span>
              <span className="text-sm text-[var(--color-muted)]">9 min lectura</span>
              <span className="text-sm text-[var(--color-muted)]"><CurrentMonth /> <CurrentYear /></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Cómo Elegir Agencia de Marketing Digital en Concepción [<CurrentYear />]
            </h1>

            <p className="text-xl text-[var(--color-muted)] leading-relaxed text-justify">
              <strong className="text-white">El 64% de empresas cambia de agencia en el primer año por resultados insatisfactorios.</strong> Si estás buscando agencia de marketing digital en Concepción, esta guía te enseña los 7 criterios clave para elegir correctamente, qué preguntas hacer antes de contratar, y red flags que indican que debes huir. Aprende a diferenciar agencias serias de vendedores de humo.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Los 7 Criterios para Elegir Agencia</h2>

            <h3 className="text-2xl font-bold mb-4 mt-8">1. Casos de Éxito Verificables</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Qué preguntar:</strong> "¿Pueden mostrarme 3 casos de clientes similares a mi negocio con resultados medibles?" NO basta que te muestren sitios web bonitos. Necesitas ver ROI real: aumentó tráfico X%, generó Y leads mensuales, aumentó ventas Z%. Si la agencia no puede mostrarte datos concretos, es porque no los tiene (o los resultados fueron malos). Pide contacto de 1-2 clientes para referencias. Agencia seria te conecta con clientes satisfechos. Agencia dudosa pone excusas ("confidencialidad", "no podemos", etc.).
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">2. Especialización en Tu Industria</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Qué preguntar:</strong> "¿Han trabajado con negocios de [tu rubro] antes?" Agencia que ya trabajó con restaurantes entiende estacionalidad, Google Maps, reseñas. Agencia que trabajó con ecommerce entiende conversión, carrito abandonado, retargeting. Agencia que trabajó con servicios B2B entiende ciclos de venta largos, lead nurturing, LinkedIn. NO necesariamente tiene que ser experta en tu rubro exacto, pero experiencia en industria similar acorta curva de aprendizaje y reduce errores costosos. Red flag: agencia que dice "trabajamos con TODO tipo de negocio" sin poder mostrar experiencia específica.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">3. Servicios Integrados (No Subcontratados)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Qué preguntar:</strong> "¿Qué servicios hacen in-house y qué subcontratan?" Agencia seria tiene equipo interno para servicios core: diseñador, desarrollador, especialista SEO, creador contenido. Esto asegura calidad, comunicación rápida, alineación estratégica. Es normal subcontratar servicios especializados ocasionales (video producción, fotografía aérea). Red flag: agencia 1-2 personas que subcontrata TODO. Pierdes control de calidad, tiempos se alargan, comunicación se complica. Terminas pagando intermediario sin valor agregado.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">4. Transparencia en Reportes y Accesos</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Qué preguntar:</strong> "¿Qué reportes recibiré? ¿Tendré acceso a Google Analytics, Search Console, Google Ads?" Agencia seria te da acceso COMPLETO a todas las herramientas. Son TUS datos, TU cuenta Google Ads, TU sitio web. Reportes mensuales con métricas claras: visitas, conversiones, ROI, próximos pasos. Red flag gigante: agencia que NO te da accesos ("lo manejamos nosotros", "es complicado", "no es necesario"). Esto es SECUESTRO de datos. Si terminas contrato, pierdes todo. También permite ocultar resultados malos. Exige accesos como propietario desde día 1.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">5. Estrategia Clara Antes de Firmar</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Qué preguntar:</strong> "¿Cuál sería la estrategia para mi negocio?" Agencia seria te presenta propuesta estratégica ANTES de firmar: análisis de situación actual, objetivos específicos, tácticas a usar, cronograma, KPIs a medir. No necesita ser súper detallado (todavía no eres cliente), pero demuestra que pensaron en TU caso específico. Red flag: agencia que vende "paquetes genéricos" sin adaptación. "Plan Básico: 3 posts Instagram + 1 blog/mes" sin saber si Instagram es relevante para TU negocio. Marketing efectivo es estratégico, no copy-paste.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">6. Presupuesto Realista vs Tu Objetivo</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Qué preguntar:</strong> "Con mi presupuesto de $X, ¿qué resultados puedo esperar realistamente?" Agencia honesta te dirá qué es alcanzable con tu presupuesto y qué NO. Ejemplo: Con $200k/mes puedes hacer SEO básico + contenido, pero NO puedes competir con marcas grandes en Google Ads. Con $50k/mes solo alcanza para gestión redes sociales básica. Red flag: agencia que promete "dominación de mercado" con presupuesto pequeño. Marketing cuesta. Si tu presupuesto es limitado, agencia debe priorizar tácticas con mejor ROI para tu caso, no venderte todo y entregar poco.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">7. Compromiso a Largo Plazo (No Ventas Rápidas)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Qué observar:</strong> ¿La agencia presiona para firmar YA con descuentos urgentes? ¿O te da espacio para pensar y comparar? Agencia seria entiende que marketing digital es relación largo plazo (6-12+ meses). No presiona. Te educa, responde dudas, te ayuda a tomar decisión informada. Red flag: tácticas de venta agresivas ("oferta solo hoy", "quedan 2 cupos", "descuento si firmas ahora"). Esto indica que priorizan firmar contratos sobre resultados reales. Cliente bien informado que compara = buen cliente. Cliente presionado = cliente insatisfecho después.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Red Flags: Cuándo NO Contratar</h2>

            <div className="bg-[var(--color-card)] border border-red-500 rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-xl font-bold mb-4 text-red-400">🚩 Señales de Alerta</h3>
              <ul className="space-y-3 text-sm">
                <li><strong className="text-red-400">Promesas irreales:</strong> "Primera página Google en 2 semanas", "1000 ventas mes 1", "garantizamos X resultados". Marketing no funciona así.</li>
                <li><strong className="text-red-400">Sin casos de éxito:</strong> No pueden mostrar resultados medibles de clientes anteriores.</li>
                <li><strong className="text-red-400">No te dan accesos:</strong> "Lo manejamos nosotros" = secuestro de datos.</li>
                <li><strong className="text-red-400">Paquetes genéricos:</strong> Misma propuesta para restaurante que para ferretería.</li>
                <li><strong className="text-red-400">Presión de venta:</strong> "Oferta solo hoy", descuentos urgentes, tácticas de escasez.</li>
                <li><strong className="text-red-400">Contrato muy largo:</strong> Piden compromiso 12+ meses sin período prueba.</li>
                <li><strong className="text-red-400">No hablan de ROI:</strong> Solo hablan de "likes", "impresiones", vanity metrics sin conversión.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Preguntas Clave al Cotizar</h2>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <ol className="space-y-4">
                <li>
                  <strong className="text-[var(--color-accent)]">1. ¿Pueden mostrarme 3 casos de éxito similares a mi negocio?</strong>
                  <p className="text-sm text-[var(--color-muted)] mt-1">Busca: Datos concretos (ROI, conversiones), no solo "sitios bonitos".</p>
                </li>
                <li>
                  <strong className="text-[var(--color-accent)]">2. ¿Qué incluye exactamente el servicio mensual?</strong>
                  <p className="text-sm text-[var(--color-muted)] mt-1">Busca: Desglose claro (X artículos, Y posts, Z reportes), no generalidades.</p>
                </li>
                <li>
                  <strong className="text-[var(--color-accent)]">3. ¿Qué resultados puedo esperar en 3, 6, 12 meses?</strong>
                  <p className="text-sm text-[var(--color-muted)] mt-1">Busca: Expectativas realistas basadas en casos previos, no promesas vagas.</p>
                </li>
                <li>
                  <strong className="text-[var(--color-accent)]">4. ¿Tendré acceso completo a todas las herramientas?</strong>
                  <p className="text-sm text-[var(--color-muted)] mt-1">Busca: Sí claro a Analytics, Search Console, Ads. Red flag si dicen no.</p>
                </li>
                <li>
                  <strong className="text-[var(--color-accent)]">5. ¿Qué pasa si quiero terminar el contrato?</strong>
                  <p className="text-sm text-[var(--color-muted)] mt-1">Busca: Proceso claro, te quedas con accesos, sin penalizaciones excesivas.</p>
                </li>
                <li>
                  <strong className="text-[var(--color-accent)]">6. ¿Quién específicamente trabajará en mi cuenta?</strong>
                  <p className="text-sm text-[var(--color-muted)] mt-1">Busca: Equipo definido con roles claros, no "lo veremos después".</p>
                </li>
                <li>
                  <strong className="text-[var(--color-accent)]">7. ¿Cómo miden el éxito de la campaña?</strong>
                  <p className="text-sm text-[var(--color-muted)] mt-1">Busca: KPIs vinculados a ventas/leads, no solo tráfico o likes.</p>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Checklist Final Antes de Firmar</h2>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-8 not-prose">
              <h3 className="font-bold mb-4">✅ Verifica que SÍ tengan:</h3>
              <ul className="space-y-2">
                <li>☐ Casos de éxito verificables con datos</li>
                <li>☐ Propuesta estratégica específica para tu negocio</li>
                <li>☐ Acceso completo a herramientas como propietario</li>
                <li>☐ Contrato claro con entregables específicos</li>
                <li>☐ Proceso de reportes y reuniones definido</li>
                <li>☐ Referencias de clientes actuales</li>
                <li>☐ Expectativas realistas de resultados</li>
                <li>☐ Política de salida clara (si quieres terminar)</li>
              </ul>
            </div>

          </div>

          <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)] mt-16">
            <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
              <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Consulta Gratuita</span>
            </div>
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
              ¿Buscas Agencia de Marketing en Concepción?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
              Agenda reunión gratuita. Te mostramos casos reales, estrategia específica para tu negocio, y presupuesto transparente. Sin compromisos.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                Agendar Reunión Gratis →
              </Link>
              <Link href="/nosotros" className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-white text-lg font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Ver Casos de Éxito →
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              ⭐ Transparencia total • Accesos completos • ROI medible
            </p>
          </div>

        </article>
      </div>

      {/* Schema.org Article Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Cómo Elegir Agencia Marketing Digital en Concepción 2026",
        "description": "7 criterios para elegir la agencia de marketing digital correcta en Concepción. Evita errores costosos y contrata la agencia que realmente hará crecer tu negocio.",
        "image": "https://almamedia.cl/og-images/como-elegir-agencia-marketing-digital-concepcion.jpg",
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
          "@id": "https://almamedia.cl/blog/como-elegir-agencia-marketing-digital-concepcion"
        },
        "keywords": "como elegir agencia marketing digital, agencia marketing Concepción, mejor agencia digital Chile",
        "articleSection": "Guías",
        "wordCount": 2200,
        "timeRequired": "PT9M",
        "inLanguage": "es-CL"
      })}} />

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cómo elegir una buena agencia de marketing digital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Evalúa 7 criterios clave: casos de éxito verificables con datos reales, especialización en tu industria, servicios internos no subcontratados, transparencia total con accesos a herramientas, estrategia clara antes de firmar, presupuesto realista según objetivos, y sin presión de ventas urgentes."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué preguntar antes de contratar una agencia de marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pregunta por 3 casos de éxito similares a tu negocio con ROI medible, qué incluye el servicio mensual específicamente, qué resultados esperar en 3-6-12 meses, si tendrás acceso completo a Analytics y Google Ads, y cómo miden el éxito de la campaña vinculado a ventas o leads."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuáles son las señales de alerta al elegir agencia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Red flags: promesas irreales como primera página Google en 2 semanas, no mostrar casos de éxito medibles, no dar accesos a herramientas, paquetes genéricos para todos los negocios, presión de venta con descuentos urgentes, contratos muy largos sin período prueba."
            }
          },
          {
            "@type": "Question",
            "name": "¿Por qué es importante tener acceso a las herramientas de marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Son TUS datos y TU inversión publicitaria. Sin accesos como propietario a Google Analytics, Search Console y Google Ads, la agencia puede ocultar malos resultados. Si terminas el contrato sin accesos, pierdes todo el historial y datos acumulados."
            }
          },
          {
            "@type": "Question",
            "name": "¿Debe la agencia tener experiencia en mi industria específica?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No necesariamente en tu rubro exacto, pero sí en industria similar. Una agencia que trabajó con restaurantes entiende Google Maps y reseñas. Una con experiencia en ecommerce entiende conversión y carrito abandonado. Esto reduce errores costosos y acelera resultados."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto presupuesto necesito para marketing digital efectivo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depende del objetivo. SEO básico desde $249.000/mes, Google Ads efectivo desde $300.000/mes ($150k clicks + $150k gestión), gestión redes sociales $150.000/mes. Una agencia honesta te dirá qué es alcanzable con tu presupuesto y qué no."
            }
          }
        ]
      })}} />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Cómo Elegir Agencia de Marketing Digital en Concepción [2026]", url: "/blog/como-elegir-agencia-marketing-digital-concepcion" }
      ]} />
    </>
  );
}
