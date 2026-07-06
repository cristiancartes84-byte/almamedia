import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Marketing Digital para PYMES: Por Dónde Empezar [Guía ${currentYear}]`,
  description: 'Guía completa para PYMES que empiezan en marketing digital: presupuesto, prioridades, herramientas, estrategia paso a paso. Sin tecnicismos ni humo.',
  keywords: 'marketing digital pymes, marketing digital pequeñas empresas, por donde empezar marketing digital',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog/marketing-digital-pymes',
  },
  openGraph: {
    title: `Marketing Digital para PYMES: Por Dónde Empezar ${currentYear}`,
    description: 'Guía completa para PYMES: presupuesto, prioridades, herramientas y estrategia paso a paso. Sin tecnicismos ni humo.',
    url: 'https://almamedia.cl/blog/marketing-digital-pymes',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'article',
    publishedTime: '2026-07-04T10:00:00Z',
    authors: ['Alma Media'],
    images: [{
      url: '/og-images/marketing-digital-pymes.jpg',
      width: 1200,
      height: 630,
      alt: 'Marketing Digital para PYMES Guía 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Marketing Digital para PYMES: Por Dónde Empezar ${currentYear}`,
    description: 'Presupuesto, prioridades y estrategia paso a paso para PYMES. Guía completa sin tecnicismos.',
    images: ['/og-images/marketing-digital-pymes.jpg'],
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
          <span>Marketing PYMES</span>
        </div>

        <article className="relative z-10 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                Guías
              </span>
              <span className="text-sm text-[var(--color-muted)]">10 min lectura</span>
              <span className="text-sm text-[var(--color-muted)]"><CurrentMonth /> <CurrentYear /></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Marketing Digital para PYMES: Por Dónde Empezar [<CurrentYear />]
            </h1>

            <p className="text-xl text-[var(--color-muted)] leading-relaxed text-justify">
              <strong className="text-white">El 64% de PYMES no sabe por dónde empezar en marketing digital y termina gastando en lo incorrecto.</strong> Si eres pequeña o mediana empresa sin estrategia digital clara, esta guía te explica paso a paso: qué hacer primero, qué dejar para después, cuánto presupuesto necesitas, qué herramientas usar. Sin tecnicismos ni humo. Solo lo que funciona para negocios reales con presupuestos reales.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 1: Define Tu Objetivo (No "Más Ventas")</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              "Quiero más ventas" NO es objetivo. Es vago. <strong className="text-white">Objetivo específico = estrategia específica = resultados medibles.</strong> Objetivo debe responder: ¿Cuánto? ¿Cuándo? ¿Cómo mido?
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Ejemplos de Objetivos Correctos</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
              <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-6">
                <h4 className="font-bold mb-3 text-[var(--color-accent)]">✅ Buenos Objetivos</h4>
                <ul className="space-y-2 text-sm">
                  <li>• "Generar 15 cotizaciones/mes desde Google en 3 meses"</li>
                  <li>• "Aumentar tráfico web de 200 a 800 visitas/mes en 6 meses"</li>
                  <li>• "Vender 30 productos/mes por Instagram en 4 meses"</li>
                  <li>• "Aparecer en primera página Google para '[tu servicio] [tu ciudad]' en 5 meses"</li>
                </ul>
              </div>

              <div className="bg-[var(--color-card)] border border-red-500 rounded-xl p-6">
                <h4 className="font-bold mb-3 text-red-400">❌ Malos Objetivos</h4>
                <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                  <li>• "Más ventas" (¿cuántas? ¿cuándo?)</li>
                  <li>• "Presencia digital" (¿qué significa?)</li>
                  <li>• "Ser conocidos" (¿cómo mides?)</li>
                  <li>• "Tener redes sociales" (¿para qué?)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 2: Prioriza (No Hagas TODO)</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Error #1 de PYMES: intentar hacer todo (sitio web, Instagram, Facebook, TikTok, YouTube, email, Google Ads, SEO) simultáneamente. Resultado: todo mediocre, nada funciona. <strong className="text-white">Mejor: 2 canales bien ejecutados que 7 mal hechos.</strong>
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Matriz de Priorización según Tu Negocio</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse not-prose">
                <thead>
                  <tr className="border-b-2 border-[var(--color-accent)]">
                    <th className="text-left p-4">Tipo Negocio</th>
                    <th className="text-center p-4">Prioridad #1</th>
                    <th className="text-center p-4">Prioridad #2</th>
                    <th className="text-center p-4">Prioridad #3</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--color-muted)]">
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Negocio Local</td>
                    <td className="text-center p-4">Google Maps</td>
                    <td className="text-center p-4">Sitio web básico</td>
                    <td className="text-center p-4">Instagram</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Ecommerce</td>
                    <td className="text-center p-4">Sitio web/tienda</td>
                    <td className="text-center p-4">Instagram + Facebook Ads</td>
                    <td className="text-center p-4">Email marketing</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Servicio Profesional</td>
                    <td className="text-center p-4">Sitio web + SEO</td>
                    <td className="text-center p-4">LinkedIn</td>
                    <td className="text-center p-4">Google Ads</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">B2B</td>
                    <td className="text-center p-4">LinkedIn + Email</td>
                    <td className="text-center p-4">Sitio web</td>
                    <td className="text-center p-4">SEO contenido</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 3: Presupuesto Realista por Etapa</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">La verdad incómoda:</strong> Marketing digital NO es gratis. Tiempo ES dinero. Si no inviertes presupuesto, inviertes tiempo (mucho). Si no tienes ni presupuesto ni tiempo, marketing digital no funcionará.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Etapa 1: Fundación (Mes 1-3) — $300.000-$500.000</h3>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-8 not-prose">
              <h4 className="font-bold mb-3">Qué Hacer:</h4>
              <ul className="space-y-2">
                <li>• <strong>Sitio web básico:</strong> $199.000-$490.000 (landing o corporativo según necesidad)</li>
                <li>• <strong>Google Business Profile:</strong> $0 (hazlo tú) o $50.000 (agencia lo optimiza)</li>
                <li>• <strong>Fotografía productos/local:</strong> $150.000 sesión completa</li>
                <li>• <strong>Setup redes sociales:</strong> $0 (hazlo tú) o perfil profesional ya queda con sitio web</li>
              </ul>
              <p className="text-sm text-[var(--color-muted)] mt-4"><strong>Objetivo:</strong> Tener presencia digital profesional. Cliente que te busca te encuentra y confía.</p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Etapa 2: Crecimiento (Mes 4-12) — $150.000-$400.000/mes</h3>

            <div className="bg-[var(--color-card)] border-l-4 border-white p-6 mb-8 not-prose">
              <h4 className="font-bold mb-3">Qué Hacer:</h4>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• <strong>SEO básico:</strong> $249.000/mes (2 artículos blog, optimización técnica)</li>
                <li>• <strong>O Google Ads:</strong> $300.000/mes ($150k clicks + $150k gestión)</li>
                <li>• <strong>Gestión redes:</strong> $150.000/mes (12 posts, stories, respuestas)</li>
                <li>• <strong>Email marketing:</strong> $0-$30.000/mes (Mailchimp gratis hasta 500 contactos)</li>
              </ul>
              <p className="text-sm text-white mt-4"><strong>Objetivo:</strong> Generar tráfico constante y primeros leads/ventas digitales.</p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Etapa 3: Escala (Año 2+) — $400.000-$1.000.000/mes</h3>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-8 not-prose">
              <h4 className="font-bold mb-3">Qué Hacer:</h4>
              <ul className="space-y-2">
                <li>• <strong>SEO agresivo:</strong> $690.000/mes (8 artículos, link building, contenido pillar)</li>
                <li>• <strong>Publicidad multicanal:</strong> Google + Meta Ads $500.000/mes</li>
                <li>• <strong>Automatización:</strong> CRM + email marketing avanzado $100.000/mes</li>
                <li>• <strong>Video marketing:</strong> 1-2 videos/mes $200.000</li>
              </ul>
              <p className="text-sm text-[var(--color-muted)] mt-4"><strong>Objetivo:</strong> Dominar nicho, leads/ventas predecibles, ROI 3-5x.</p>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 4: Herramientas Esenciales (Gratis o Baratas)</h2>

            <h3 className="text-2xl font-bold mb-4 mt-8">Herramientas Obligatorias (Gratis)</h3>

            <ul className="space-y-3 mb-8">
              <li className="text-lg leading-relaxed"><strong>Google Analytics:</strong> Mide tráfico, conversiones, comportamiento usuarios. analytics.google.com</li>
              <li className="text-lg leading-relaxed"><strong>Google Search Console:</strong> Ve qué búsquedas te traen tráfico, errores técnicos. search.google.com/search-console</li>
              <li className="text-lg leading-relaxed"><strong>Google Business Profile:</strong> Aparece en Google Maps, reseñas, info negocio. google.com/business</li>
              <li className="text-lg leading-relaxed"><strong>Canva:</strong> Diseña posts redes sociales, flyers, presentaciones. canva.com (gratis con limitaciones)</li>
              <li className="text-lg leading-relaxed"><strong>Meta Business Suite:</strong> Gestiona Facebook + Instagram desde un panel. business.facebook.com</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">Herramientas Pagadas Recomendadas</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse not-prose">
                <thead>
                  <tr className="border-b-2 border-[var(--color-accent)]">
                    <th className="text-left p-4">Herramienta</th>
                    <th className="text-center p-4">Para Qué</th>
                    <th className="text-center p-4">Precio/mes</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--color-muted)]">
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Mailchimp</td>
                    <td className="p-4">Email marketing</td>
                    <td className="text-center p-4">Gratis (500 contactos) / $20k+ (2k+)</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Notion</td>
                    <td className="p-4">Calendario contenido, gestión</td>
                    <td className="text-center p-4">Gratis (personal) / $10k/usuario</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Later/Buffer</td>
                    <td className="p-4">Programar posts Instagram/Facebook</td>
                    <td className="text-center p-4">$18k/mes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Semrush Lite</td>
                    <td className="p-4">Investigación keywords SEO</td>
                    <td className="text-center p-4">$120k/mes (opcional mes 6+)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 5: Hazlo Tú vs Contratar Agencia</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Pregunta clave:</strong> ¿Tienes tiempo? Si eres dueño trabajando 60h/semana, NO tienes tiempo para marketing serio. Contratar es inversión, no gasto.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Qué Puedes Hacer Tú</h3>

            <ul className="space-y-2 mb-8">
              <li className="text-lg leading-relaxed">• Configurar Google Business Profile (2 horas)</li>
              <li className="text-lg leading-relaxed">• Publicar en Instagram/Facebook (30 min/día)</li>
              <li className="text-lg leading-relaxed">• Responder mensajes/comentarios (15 min/día)</li>
              <li className="text-lg leading-relaxed">• Pedir reseñas a clientes (5 min/cliente)</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">Qué Deberías Contratar</h3>

            <ul className="space-y-2 mb-8">
              <li className="text-lg leading-relaxed">• Diseño sitio web (requiere expertise técnico)</li>
              <li className="text-lg leading-relaxed">• SEO (complejo, toma meses aprender)</li>
              <li className="text-lg leading-relaxed">• Google Ads (fácil quemar presupuesto sin saber)</li>
              <li className="text-lg leading-relaxed">• Fotografía profesional (ROI vale la pena)</li>
              <li className="text-lg leading-relaxed">• Estrategia (evita errores costosos)</li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 6: Mide y Ajusta (Ciclo Mensual)</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Marketing digital NO es "lanzar y olvidar". Es ciclo continuo: <strong className="text-white">Implementar → Medir → Analizar → Ajustar → Repetir.</strong>
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Métricas que Importan (Olvida Vanity Metrics)</h3>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <h4 className="font-bold mb-4 text-[var(--color-accent)]">Métricas Reales:</h4>
              <ul className="space-y-2">
                <li>• <strong>Leads generados/mes:</strong> Cotizaciones, llamadas, formularios</li>
                <li>• <strong>Costo por lead:</strong> Inversión total ÷ leads</li>
                <li>• <strong>Tasa conversión:</strong> % visitantes que se convierten en leads</li>
                <li>• <strong>ROI:</strong> (Ingresos - Inversión) ÷ Inversión x 100</li>
                <li>• <strong>Tráfico orgánico:</strong> Visitas desde Google (SEO)</li>
              </ul>
              <p className="text-sm text-[var(--color-muted)] mt-4"><strong>Ignora:</strong> Likes, seguidores, impresiones (no pagan cuentas)</p>
            </div>

          </div>

          {/* CTA Conversión */}
          <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)] mt-16">
            <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
              <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🚀 Consultoría PYME</span>
            </div>
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
              ¿Necesitas Estrategia Clara para Tu PYME?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
              Reunión estratégica gratuita: analizamos tu negocio, objetivos, presupuesto. Te entregamos plan de acción específico (no genérico) con pasos, plazos, costos.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                Agendar Consultoría Gratis →
              </Link>
              <Link href="/nosotros" className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-white text-lg font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Ver Casos PYMES →
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              ⭐ Especialistas en PYMES • Paquetes desde $249k/mes • ROI medible
            </p>
          </div>

        </article>
      </div>

      {/* Schema.org Article Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Marketing Digital para PYMES: Por Dónde Empezar 2026",
        "description": "Guía completa para PYMES que empiezan en marketing digital: presupuesto, prioridades, herramientas, estrategia paso a paso. Sin tecnicismos ni humo.",
        "image": "https://almamedia.cl/og-images/marketing-digital-pymes.jpg",
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
          "@id": "https://almamedia.cl/blog/marketing-digital-pymes"
        },
        "keywords": "marketing digital pymes, marketing digital pequeñas empresas, por donde empezar marketing digital",
        "articleSection": "Guías",
        "wordCount": 2500,
        "timeRequired": "PT10M",
        "inLanguage": "es-CL"
      })}} />

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Por dónde empezar con marketing digital para PYMES?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Empieza definiendo un objetivo específico medible (ej: generar 15 cotizaciones/mes en 3 meses). Luego prioriza 2 canales según tu negocio: negocios locales Google Maps + sitio web, ecommerce tienda online + Instagram, servicios profesionales sitio web + SEO."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto presupuesto necesita una PYME para marketing digital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Etapa fundación (mes 1-3) requiere $300k-$500k para sitio web y presencia básica. Etapa crecimiento (mes 4-12) necesita $150k-$400k/mes para SEO o publicidad. Etapa escala (año 2+) requiere $400k-$1M/mes para dominar el nicho."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué canales de marketing digital debe priorizar una PYME?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depende del tipo de negocio. Negocio local: Google Maps y sitio web básico. Ecommerce: tienda online e Instagram con Facebook Ads. Servicio profesional: sitio web con SEO y LinkedIn. B2B: LinkedIn, email marketing y sitio web. Mejor 2 canales bien ejecutados que 7 mediocres."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué herramientas gratuitas necesita una PYME para marketing digital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Herramientas esenciales gratuitas: Google Analytics para medir tráfico, Google Search Console para SEO, Google Business Profile para aparecer en Maps, Canva para diseñar posts, Meta Business Suite para gestionar Instagram y Facebook desde un panel."
            }
          },
          {
            "@type": "Question",
            "name": "¿Debe una PYME hacer marketing digital internamente o contratar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Puedes hacer tú: configurar Google Business Profile, publicar en redes sociales, responder mensajes. Deberías contratar: diseño sitio web, SEO, Google Ads, fotografía profesional y estrategia. Si trabajas 60h/semana, contratar es inversión que libera tu tiempo para el negocio."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué métricas debe medir una PYME en marketing digital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Métricas que importan: leads generados/mes, costo por lead, tasa de conversión, ROI y tráfico orgánico desde Google. Ignora vanity metrics como likes, seguidores e impresiones que no se traducen directamente en ventas o clientes reales."
            }
          }
        ]
      })}} />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Marketing Digital para PYMES: Por Dónde Empezar [2026]", url: "/blog/marketing-digital-pymes" }
      ]} />
    </>
  );
}
