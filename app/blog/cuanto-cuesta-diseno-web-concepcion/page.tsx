import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: '¿Cuánto Cuesta un Sitio Web en Concepción? [Precios Actualizados]',
  description: 'Precios reales de diseño web en Concepción: Landing pages desde $169.000, sitios corporativos $390.000, ecommerce $590.000. Guía completa con qué incluye cada opción.',
  keywords: 'cuanto cuesta diseño web Concepción, precios sitio web Concepción, diseño web precio Chile',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog/cuanto-cuesta-diseno-web-concepcion',
  },
  openGraph: {
    title: '¿Cuánto Cuesta un Sitio Web en Concepción? Precios 2026',
    description: 'Landing pages desde $169.000, sitios corporativos $390.000, ecommerce $590.000. Guía completa de precios de diseño web.',
    url: 'https://almamedia.cl/blog/cuanto-cuesta-diseno-web-concepcion',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'article',
    publishedTime: '2026-07-04T10:00:00Z',
    authors: ['Alma Media'],
    images: [{
      url: '/og-images/cuanto-cuesta-diseno-web-concepcion.jpg',
      width: 1200,
      height: 630,
      alt: 'Precios Diseño Web Concepción 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precios Diseño Web Concepción 2026',
    description: 'Desde $169.000. Landing pages, sitios corporativos y ecommerce. Precios reales actualizados.',
    images: ['/og-images/cuanto-cuesta-diseno-web-concepcion.jpg'],
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
          <span>Precios Diseño Web</span>
        </div>

        <article className="relative z-10 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                Precios
              </span>
              <span className="text-sm text-[var(--color-muted)]">8 min lectura</span>
              <span className="text-sm text-[var(--color-muted)]"><CurrentMonth /> <CurrentYear /></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              ¿Cuánto Cuesta un Sitio Web en Concepción? [Precios Reales <CurrentYear />]
            </h1>

            <p className="text-xl text-[var(--color-muted)] leading-relaxed text-justify">
              <strong className="text-white">El 73% de negocios en Concepción pierde clientes por no tener sitio web.</strong> Si estás buscando cuánto cuesta diseñar un sitio web profesional en Concepción, esta guía te da precios reales actualizados para <CurrentMonth /> <CurrentYear />, qué incluye cada opción, y cómo elegir según tu tipo de negocio. Precios desde $169.000/año para landing page hasta $590.000+ para ecommerce completo con todas las funcionalidades.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Precios Diseño Web Concepción por Tipo</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Landing Page</h3>
                <div className="text-4xl font-black mb-4">$169.000</div>
                <p className="text-sm text-[var(--color-muted)] mb-4">CLP/año (hosting incluido)</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 1 página optimizada</li>
                  <li>✓ Responsive mobile</li>
                  <li>✓ Formulario contacto</li>
                  <li>✓ SEO base</li>
                  <li>✓ Hosting 1 año</li>
                </ul>
              </div>

              <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-6 relative">
                <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                  MÁS POPULAR
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Sitio Corporativo</h3>
                <div className="text-4xl font-black mb-4">$390.000</div>
                <p className="text-sm text-[var(--color-muted)] mb-4">CLP setup + $9.900/mes</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Hasta 10 páginas</li>
                  <li>✓ Blog incluido</li>
                  <li>✓ Email corporativo</li>
                  <li>✓ Google Analytics</li>
                  <li>✓ Capacitación CMS</li>
                </ul>
              </div>

              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Ecommerce</h3>
                <div className="text-4xl font-black mb-4">$590.000+</div>
                <p className="text-sm text-[var(--color-muted)] mb-4">CLP setup + $14.900/mes</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ WooCommerce</li>
                  <li>✓ Pasarelas de pago</li>
                  <li>✓ Hasta 100 productos</li>
                  <li>✓ Carrito optimizado</li>
                  <li>✓ Capacitación completa</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">¿Qué Incluye Cada Precio?</h2>

            <h3 className="text-2xl font-bold mb-4 mt-8">Landing Page ($169.000/año)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Ideal para:</strong> Servicios profesionales, freelancers, negocios con un servicio principal. Una landing page es una página única enfocada en conversión: llevará al visitante a realizar UNA acción específica (contactar, cotizar, llamar). Incluye diseño WordPress responsive, formulario de contacto integrado con email, SEO base (keywords, meta descriptions, sitemap), hosting en servidor chileno primer año, dominio .cl incluido, SSL (HTTPS) para seguridad. Carga menor a 2 segundos garantizada. Entrega en 7-10 días hábiles. Mantenimiento mensual opcional $9.900/mes (actualizaciones, backups, soporte).
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Sitio Corporativo ($390.000)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Ideal para:</strong> Empresas establecidas, múltiples servicios, instituciones. Un sitio corporativo completo tiene hasta 10 páginas: inicio, servicios (múltiples), nosotros, equipo, contacto, blog. Incluye diseño profesional personalizado (no plantillas genéricas), WordPress con panel de administración para que actualices contenido tú mismo, blog funcional para SEO, hasta 3 cuentas de email corporativo (@tuempresa.cl), Google Analytics configurado para medir visitas, formularios avanzados (cotizador, multi-paso), integración WhatsApp Business, capacitación 2 horas presencial o remota. Hosting $9.900/mes en servidor optimizado para WordPress. Entrega 15-20 días hábiles.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Ecommerce ($590.000+)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Ideal para:</strong> Retail, venta online, tiendas con catálogo productos. Tienda online completa con WooCommerce (plataforma ecommerce más usada en Chile), pasarelas de pago chilenas integradas (Transbank Webpay, Mercado Pago, Flow), gestión de stock automática, calculadora de envío por zona, hasta 100 productos cargados (fotos y descripciones las proporcionas tú), diseño responsive optimizado para mobile (70% compras desde celular), categorías y filtros de productos, carrito de compras persistente (guarda productos aunque cierren navegador), checkout simplificado (menos pasos = más conversión), Google Analytics Ecommerce (mide ventas, productos más vendidos, tasa conversión). Capacitación completa 4 horas para gestionar tienda. Hosting $14.900/mes. Entrega 25-30 días.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Factores que Afectan el Precio</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">1. Cantidad de páginas:</strong> Cada página adicional al paquete base cuesta $25.000-$40.000 según complejidad. Página simple (solo texto) $25k, página con formularios $35k, página con integraciones $40k.
            </p>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">2. Funcionalidades especiales:</strong> Reservas online (+$80.000), calculadoras personalizadas (+$60.000), integración CRM (+$90.000), multiidioma (+$120.000), membresías/área privada (+$150.000).
            </p>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">3. Diseño personalizado vs plantilla:</strong> Diseño desde cero (único para tu marca) +$150.000. Plantilla premium adaptada (+ rápido, - personalización) incluido en precio base.
            </p>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">4. Contenido:</strong> Si proporcionas textos y fotos = precio base. Redacción profesional $15.000/página. Fotografía profesional productos $9.900/unidad. Video corporativo desde $149.000.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Cómo Elegir Según Tu Negocio</h2>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-xl font-bold mb-4">¿Landing Page, Sitio o Ecommerce?</h3>
              <ul className="space-y-3">
                <li><strong className="text-[var(--color-accent)]">Landing Page si:</strong> Ofreces 1-2 servicios específicos, objetivo es generar cotizaciones/llamadas, presupuesto limitado, necesitas algo rápido (7 días).</li>
                <li><strong className="text-[var(--color-accent)]">Sitio Corporativo si:</strong> Múltiples servicios/productos, quieres crear contenido (blog), necesitas email profesional, empresa mediana-grande.</li>
                <li><strong className="text-[var(--color-accent)]">Ecommerce si:</strong> Vendes productos online, necesitas cobrar con tarjeta, gestionar stock, envíos a domicilio.</li>
              </ul>
            </div>

          </div>

          {/* CTA Conversión */}
          <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)] mt-16">
            <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
              <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> <CurrentYear /></span>
            </div>
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
              ¿Necesitas un Sitio Web en Concepción?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
              Cotiza gratis tu proyecto. Te respondemos en 24 horas con presupuesto personalizado y ejemplos similares a tu negocio.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                Cotizar Mi Sitio Web Gratis →
              </Link>
              <Link href="/diseno-web-concepcion" className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-white text-lg font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Ver Portfolio →
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              ⭐ +45 sitios web creados en Concepción • Desde $169.000/año
            </p>
          </div>

        </article>
      </div>

      {/* Schema.org Article Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "¿Cuánto Cuesta un Sitio Web en Concepción? Precios 2026",
        "description": "Precios reales de diseño web en Concepción: Landing pages desde $169.000, sitios corporativos $390.000, ecommerce $590.000. Guía completa.",
        "image": "https://almamedia.cl/og-images/cuanto-cuesta-diseno-web-concepcion.jpg",
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
          "@id": "https://almamedia.cl/blog/cuanto-cuesta-diseno-web-concepcion"
        },
        "keywords": "cuanto cuesta diseño web Concepción, precios sitio web",
        "articleSection": "Precios",
        "wordCount": 2200,
        "timeRequired": "PT8M",
        "inLanguage": "es-CL"
      })}} />

      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta hacer un sitio web en Concepción?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Los precios en Concepción van desde $169.000/año para una landing page básica, $390.000 para un sitio corporativo completo con hasta 10 páginas, y $590.000+ para una tienda online ecommerce. Todos los precios incluyen hosting y dominio."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué incluye una landing page de $169.000?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Incluye 1 página optimizada responsive para mobile, formulario de contacto, SEO base, dominio .cl, hosting en servidor chileno por 1 año y certificado SSL. Ideal para servicios profesionales y freelancers. Entrega en 7-10 días hábiles."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo tarda en estar listo un sitio web?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Una landing page tarda 7-10 días hábiles, un sitio corporativo 15-20 días, y un ecommerce completo 25-30 días. Los tiempos dependen de que proporciones textos y fotos a tiempo."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuál es la diferencia entre sitio corporativo y ecommerce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El sitio corporativo ($390k) es informativo con hasta 10 páginas y blog, ideal para presentar servicios. El ecommerce ($590k+) permite vender online con carrito de compras, pasarelas de pago chilenas y gestión de stock para hasta 100 productos."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué costos mensuales tiene mantener un sitio web?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "El hosting va desde incluido el primer año (landing page) hasta $9.900/mes para sitios corporativos y $14.900/mes para ecommerce. El mantenimiento opcional (actualizaciones, backups, soporte) cuesta desde $9.900/mes adicionales."
            }
          },
          {
            "@type": "Question",
            "name": "¿Puedo actualizar el contenido yo mismo después?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí, todos los sitios incluyen WordPress con panel de administración intuitivo. Los planes corporativo y ecommerce incluyen capacitación de 2-4 horas para que puedas actualizar contenido, agregar productos o publicar en el blog tú mismo."
            }
          }
        ]
      })}} />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "¿Cuánto Cuesta un Sitio Web en Concepción? [Precios Reales 2026]", url: "/blog/cuanto-cuesta-diseno-web-concepcion" }
      ]} />
    </>
  );
}
