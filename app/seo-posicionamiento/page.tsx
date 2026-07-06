import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `SEO Chile ${currentYear} | Posicionamiento Web Desde $195k/mes`,
  description: 'SEO profesional en Chile. Auditoría desde $129k, planes mensuales $195k. +45 clientes en página 1 de Google. Resultados medibles. Cotiza gratis.',
  keywords: 'SEO Chile, posicionamiento web Chile, SEO profesional, agencia SEO Chile, optimización SEO, aparecer en Google, SEO técnico Chile, link building Chile, consultor SEO, estrategia SEO',
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
    canonical: '/seo-posicionamiento',
  },
  openGraph: {
    title: `SEO Chile ${currentYear} | Posicionamiento Web Desde $195k/mes`,
    description: 'SEO profesional en Chile. Auditoría desde $129k, planes mensuales $195k. +45 clientes en página 1 de Google.',
    url: 'https://almamedia.cl/seo-posicionamiento',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `SEO Chile ${currentYear} | Posicionamiento Web Desde $195k/mes`,
    description: 'SEO profesional en Chile. Auditoría desde $129k, planes mensuales $195k. +45 clientes en página 1.',
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

export default function SEOPosicionamientoPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>SEO / Posicionamiento</span>
        </div>
      </div>

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "SEO y Posicionamiento Web Chile",
                "description": "Servicio profesional de SEO en Chile. Auditoría técnica, optimización on-page, creación de contenido, link building y consultoría estratégica para aparecer en primera página de Google.",
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
                    "name": "Auditoría SEO",
                    "price": "129000",
                    "priceCurrency": "CLP"
                  },
                  {
                    "@type": "Offer",
                    "name": "SEO Mensual",
                    "price": "195000",
                    "priceCurrency": "CLP"
                  },
                  {
                    "@type": "Offer",
                    "name": "SEO Avanzado",
                    "price": "395000",
                    "priceCurrency": "CLP"
                  }
                ]
              },
              {
                "@type": "ProfessionalService",
                "name": "Alma Media - Agencia SEO Chile",
                "image": "https://almamedia.cl/logo.png",
                "url": "https://almamedia.cl/seo-posicionamiento",
                "priceRange": "$129.000 - $395.000"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Cuánto cuesta un servicio de SEO en Chile?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Los servicios de SEO en Chile varían según el alcance: Auditoría SEO desde $129.000 (pago único), SEO Mensual $195.000/mes (mínimo 6 meses), y SEO Avanzado desde $395.000/mes para proyectos grandes con estrategia completa."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuánto tiempo demora ver resultados con SEO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Los primeros resultados de SEO se ven entre 3-6 meses. Keywords de baja competencia pueden rankear en 2-3 meses, mientras que términos competitivos pueden tomar 6-12 meses. El SEO es una estrategia de mediano-largo plazo con ROI sostenido."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Qué incluye un servicio de SEO profesional?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Un servicio de SEO profesional incluye: auditoría técnica completa, investigación de keywords, optimización on-page (títulos, meta descriptions, contenido), SEO técnico (velocidad, estructura, schema markup), creación de contenido optimizado, link building, y reportes mensuales con métricas de rendimiento."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ SEO Profesional Chile</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          SEO y Posicionamiento Web | Aparece en Google
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El SEO profesional en Chile</strong> optimiza tu sitio web para aparecer en primera página de Google cuando tus clientes buscan. El 93% de experiencias online comienzan en buscadores, y estar en primera página captura el 75% del tráfico. Ofrecemos auditoría SEO técnica completa, optimización on-page, creación de contenido estratégico, link building white-hat y reportes mensuales con resultados medibles. Desde $195.000/mes con compromiso de 6 meses para resultados sostenidos. +45 clientes posicionados en keywords comerciales de alta competencia.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Auditoría SEO Gratis →
          </Link>
          <a href="#servicios" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
            Ver Servicios
          </a>
        </div>
      </section>

      {/* Main Content */}
      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">

        {/* Qué es SEO */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Qué es el SEO?</h2>

          <div className="space-y-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
            <p className="text-xl leading-[1.8]">
              <strong className="text-[var(--color-accent)] font-bold">SEO (Search Engine Optimization)</strong> o posicionamiento web es el proceso de optimizar tu <Link href="/diseno-web" className="text-[var(--color-accent)] hover:underline font-semibold">sitio web</Link> para aparecer en las primeras posiciones de Google cuando tus clientes potenciales buscan lo que ofreces. Un <strong>servicio de SEO profesional</strong> combina técnica, contenido y autoridad.
            </p>
            <p className="text-xl leading-[1.8]">
              El <strong>93% de las experiencias online comienzan con un motor de búsqueda</strong>. Si tu sitio no aparece en la primera página de Google, estás perdiendo el 75% del tráfico potencial. El <strong>posicionamiento SEO en Chile</strong> te permite competir con grandes empresas invirtiendo en estrategia en lugar de solo presupuesto publicitario.
            </p>
            <p className="text-xl leading-[1.8]">
              A diferencia de la publicidad pagada (Google Ads), el <strong>SEO orgánico genera tráfico constante sin pagar por cada clic</strong>. Una vez que alcanzas buenas posiciones, el retorno de inversión es exponencial: pagas una vez, recibes tráfico por meses.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              🎯 Solicitar Análisis Gratuito
            </Link>
          </div>

          <h3 className="text-2xl font-bold mb-6 mt-12 text-center">Beneficios del SEO:</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Tráfico orgánico constante:</strong>
                <span className="text-[var(--color-muted)]">Visitantes sin pagar por cada clic</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Credibilidad y confianza:</strong>
                <span className="text-[var(--color-muted)]">Estar en Google transmite autoridad</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">ROI a largo plazo:</strong>
                <span className="text-[var(--color-muted)]">Inversión que sigue dando resultados meses después</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Leads calificados:</strong>
                <span className="text-[var(--color-muted)]">Usuarios con intención de compra real</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Ventaja competitiva:</strong>
                <span className="text-[var(--color-muted)]">Supera a tu competencia en resultados</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Resultados medibles:</strong>
                <span className="text-[var(--color-muted)]">Métricas claras de rendimiento</span>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios SEO */}
        <section id="servicios" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Nuestros Servicios de SEO</h2>
          <p className="text-xl mb-10 leading-[1.8] text-center max-w-3xl mx-auto">
            Estrategia completa de posicionamiento adaptada a tu negocio y objetivos.
          </p>

          <div className="grid gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">🔍 Auditoría SEO Completa</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Análisis profundo de tu sitio web para identificar oportunidades de mejora. Revisamos SEO técnico, contenido, arquitectura, enlaces y competencia.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Análisis técnico (velocidad, indexación, errores)</li>
                <li>• Análisis de contenido y keywords</li>
                <li>• Análisis de competencia</li>
                <li>• Reporte con plan de acción priorizado</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">⚙️ SEO Técnico</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Optimización de todos los aspectos técnicos que afectan tu posicionamiento en Google.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Optimización de velocidad de carga</li>
                <li>• Estructura de URLs y redirects</li>
                <li>• Sitemap y robots.txt</li>
                <li>• Schema markup (datos estructurados)</li>
                <li>• Core Web Vitals</li>
                <li>• Mobile-first optimization</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">📝 Contenido SEO</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Creación y optimización de contenido que Google quiere posicionar y tus usuarios quieren leer.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Investigación de keywords (palabras clave)</li>
                <li>• Optimización de títulos y meta descriptions</li>
                <li>• Creación de contenido optimizado</li>
                <li>• Optimización de imágenes y multimedia</li>
                <li>• Arquitectura de contenido (silos)</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">🔗 Link Building</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Construcción de autoridad mediante enlaces de calidad desde sitios relevantes.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Análisis de perfil de enlaces actual</li>
                <li>• Estrategia de link building white-hat</li>
                <li>• Construcción de enlaces de calidad</li>
                <li>• Link reclamation (recuperación de enlaces)</li>
                <li>• Monitoreo de backlinks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section id="precios" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precios de SEO Chile <CurrentYear /></h2>
          <p className="text-xl mb-4 leading-[1.8] text-center max-w-3xl mx-auto">
            Planes adaptados al tamaño de tu negocio y objetivos SEO
          </p>
          <p className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-sm font-semibold text-[var(--color-accent)]">
              ⚡ Promo <span className="capitalize"><CurrentMonth /></span>: Auditoría SEO gratis con contratación de plan mensual (valor $129k)
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Auditoría */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Auditoría SEO</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$129.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP (pago único)</p>
              <div className="flex-grow">
                <ul className="space-y-2 text-left text-sm mb-6">
                  <li>✓ Análisis técnico completo</li>
                  <li>✓ Análisis de competencia</li>
                  <li>✓ Investigación de keywords</li>
                  <li>✓ Reporte detallado (30+ pág.)</li>
                  <li>✓ Plan de acción priorizado</li>
                  <li>✓ 1 sesión consultoría (1h)</li>
                </ul>
                <p className="text-xs text-[var(--color-muted)] italic">Ideal para: conocer tu estado SEO actual y oportunidades</p>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>

            {/* SEO Mensual */}
            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all relative flex flex-col">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">SEO Mensual</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$195.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP/mes (mín. 6 meses)</p>
              <div className="flex-grow">
                <ul className="space-y-2 text-left text-sm mb-6">
                  <li>✓ Auditoría inicial incluida</li>
                  <li>✓ Optimización técnica continua</li>
                  <li>✓ 2 artículos SEO optimizados/mes</li>
                  <li>✓ Link building mensual (5+ enlaces)</li>
                  <li>✓ Reportes mensuales detallados</li>
                  <li>✓ Soporte prioritario WhatsApp</li>
                  <li>✓ Ajustes ilimitados</li>
                </ul>
                <p className="text-xs text-[var(--color-muted)] italic">Ideal para: PyMEs que buscan crecimiento orgánico sostenido</p>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-all">
                Cotizar
              </Link>
            </div>

            {/* SEO Avanzado */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">SEO Avanzado</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $395.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP/mes (según proyecto)</p>
              <div className="flex-grow">
                <ul className="space-y-2 text-left text-sm mb-6">
                  <li>✓ Todo lo de SEO Mensual</li>
                  <li>✓ 4+ artículos SEO/mes</li>
                  <li>✓ Link building agresivo (15+ enlaces)</li>
                  <li>✓ SEO técnico avanzado</li>
                  <li>✓ Análisis competencia semanal</li>
                  <li>✓ Estrategia multi-keyword</li>
                  <li>✓ Consultor dedicado</li>
                </ul>
                <p className="text-xs text-[var(--color-muted)] italic">Ideal para: empresas grandes, ecommerce, alta competencia</p>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>
          </div>

          <p className="text-center mt-12">
            💬 <strong>¿No estás seguro cuál plan necesitas?</strong>{' '}
            <Link href="/contacto" className="text-[var(--color-accent)] hover:underline font-semibold">
              Agenda una asesoría SEO gratuita de 30 minutos →
            </Link>
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-center text-[var(--color-accent)]">Preguntas Frecuentes sobre SEO</h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto cuesta un servicio de SEO en Chile?</h3>
              <p className="text-lg leading-relaxed">
                Los <strong>servicios de SEO en Chile</strong> varían según el alcance: una <strong>Auditoría SEO</strong> desde $129.000 (pago único), <strong>SEO Mensual</strong> $195.000/mes con compromiso mínimo de 6 meses para ver resultados sostenidos, y <strong>SEO Avanzado</strong> desde $395.000/mes para proyectos grandes con estrategia completa de posicionamiento, contenido agresivo y link building competitivo.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto tiempo demora ver resultados con SEO?</h3>
              <p className="text-lg leading-relaxed">
                Los primeros <strong>resultados de SEO se ven entre 3-6 meses</strong> en promedio. Keywords de baja competencia pueden rankear en 2-3 meses, mientras que términos comerciales competitivos pueden tomar 6-12 meses. El SEO es una estrategia de mediano-largo plazo, pero con ROI sostenido: una vez que alcanzas posiciones, el tráfico es constante sin pagar por clic.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué incluye un servicio de SEO profesional?</h3>
              <p className="text-lg leading-relaxed">
                Un <strong>servicio de SEO profesional</strong> incluye: auditoría técnica completa del sitio, investigación de keywords comerciales, optimización on-page (títulos, meta descriptions, headings, contenido), <strong>SEO técnico</strong> (velocidad de carga, estructura URLs, schema markup, Core Web Vitals), creación de contenido optimizado mensual, <strong>link building</strong> white-hat desde sitios relevantes, y reportes mensuales con métricas de ranking, tráfico y conversiones.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuál es la diferencia entre SEO y Google Ads?</h3>
              <p className="text-lg leading-relaxed">
                <strong>SEO</strong> (posicionamiento orgánico) genera tráfico sin pagar por cada clic, es de mediano-largo plazo (3-6 meses), y tiene ROI sostenido en el tiempo. <strong>Google Ads</strong> (publicidad pagada) genera tráfico inmediato pero pagas por cada clic, al pausar la campaña el tráfico se detiene. El SEO es ideal para construir presencia duradera; Google Ads para resultados inmediatos. Lo óptimo es combinar ambos.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Puedo hacer SEO yo mismo o necesito contratar una agencia?</h3>
              <p className="text-lg leading-relaxed">
                Puedes hacer <strong>SEO básico</strong> tú mismo (títulos, descripciones, contenido), pero para resultados competitivos necesitas expertise técnico: análisis de logs, arquitectura de silos, link building estratégico, auditorías técnicas avanzadas. Una <strong>agencia SEO profesional</strong> tiene herramientas especializadas (Ahrefs, SEMrush, Screaming Frog), experiencia en múltiples nichos, y equipo dedicado (técnico, contenido, linkbuilding). El ROI suele justificar la inversión vs el tiempo que tomaría aprender y ejecutar internamente.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué métricas debo monitorear para medir el éxito del SEO?</h3>
              <p className="text-lg leading-relaxed">
                Las <strong>métricas clave de SEO</strong> son: <strong>posiciones de keywords</strong> (ranking en Google para términos objetivo), <strong>tráfico orgánico</strong> (visitas desde buscadores en Google Analytics), <strong>tasa de conversión orgánica</strong> (% de visitantes que convierten), <strong>impresiones y CTR</strong> en Google Search Console, <strong>backlinks nuevos</strong> (autoridad del sitio), y <strong>páginas indexadas</strong>. Lo más importante es conversión: ranking alto sin ventas/leads no sirve.
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
            ¿Listo para Dominar Google?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Únete a más de <strong className="text-[var(--color-accent)]">45 empresas chilenas</strong> que ya están en primera página de Google. Auditoría SEO profesional gratis + estrategia personalizada:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Auditoría SEO gratis</p>
              <p className="text-xs text-[var(--color-muted)]">(Valor $129.000)</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Estrategia personalizada</p>
              <p className="text-xs text-[var(--color-muted)]">Plan de acción detallado</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Análisis competencia</p>
              <p className="text-xs text-[var(--color-muted)]">Oportunidades de ranking</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold text-lg rounded-lg hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
              🚀 Solicitar Auditoría Gratis
            </Link>
            <Link href="/seo-local" className="inline-block px-10 py-5 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-bold text-lg rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
              📍 Ver SEO Local
            </Link>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⏰ Promo válida solo para las primeras 3 auditorías de <CurrentMonth /> • Sin compromiso • Respuesta en 24 horas
          </p>
        </div>
      </div>
    </>
  );
}
