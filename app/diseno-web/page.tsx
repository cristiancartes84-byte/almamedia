import ParticlesBackground from '@/components/Particles';
import FeatureCard from '@/components/FeatureCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diseño Web Chile 2026 | WordPress Profesional Desde $199.000',
  description: 'Diseño web profesional en Chile. WordPress optimizado, carga <2s, SEO incluido. Desde $199.000/año. +45 webs exitosas. Cotiza gratis.',
  keywords: 'diseño web Chile, diseño web profesional, WordPress Chile, sitio web empresa, diseño web responsive, página web profesional, desarrollo web Chile',
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
    canonical: '/diseno-web',
  },
  openGraph: {
    title: 'Diseño Web Chile 2026 | WordPress Profesional Desde $199.000',
    description: 'Diseño web profesional: WordPress optimizado, rápido y enfocado en conversión. +45 proyectos exitosos.',
    url: 'https://almamedia.cl/diseno-web',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web Chile 2026 | WordPress Profesional',
    description: 'WordPress optimizado, rápido y enfocado en conversión. Desde $199.000/año.',
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

export default function DisenoWebPage() {
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
                "name": "Diseño Web Profesional Chile",
                "description": "Servicio profesional de diseño web en Chile. Sitios WordPress optimizados para velocidad, SEO y conversión. Diseño personalizado que genera clientes reales para tu negocio.",
                "provider": {
                  "@type": "Organization",
                  "name": "Alma Media",
                  "url": "https://almamedia.cl"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Chile"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Servicios de Diseño Web",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Landing Page"
                      },
                      "price": "169000",
                      "priceCurrency": "CLP"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Sitio Corporativo"
                      },
                      "price": "390000",
                      "priceCurrency": "CLP"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Ecommerce"
                      },
                      "price": "590000",
                      "priceCurrency": "CLP"
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Cuánto cuesta un diseño web profesional en Chile?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Diseño web profesional en Chile cuesta desde $199.000/año para landing page (incluye hosting + dominio), $490.000 pago único para sitio corporativo hasta 5 páginas, y desde $690.000 para ecommerce completo. Todos incluyen diseño personalizado, WordPress, SEO base, responsive y capacitación."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuánto tarda en estar listo un sitio web?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Landing page: 1-2 semanas. Sitio corporativo: 4-5 semanas. Ecommerce: 6-8 semanas. El tiempo depende del alcance del proyecto y de la rapidez con que proporciones contenidos (textos, fotos, logos)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Puedo actualizar el sitio web yo mismo después del diseño?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí, completamente. WordPress es muy intuitivo. Incluimos capacitación de 1 hora para que puedas editar textos, subir fotos y crear entradas de blog sin programar. Para cambios de diseño complejo, podemos ayudarte con cotización aparte."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Diseño Web Profesional</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-16 text-center px-4 md:px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Diseño Web Profesional Chile</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web Profesional: WordPress Rápido que Genera Ventas
        </h1>

        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El diseño web profesional en Chile</strong> crea sitios WordPress optimizados para velocidad, SEO y conversión que generan clientes reales. El 93% de las decisiones de compra comienzan con búsqueda en Google, y tu sitio web es tu vendedor 24/7. Ofrecemos diseño web personalizado desde $199.000/año para landing page (incluye hosting + dominio + SEO base), $490.000 pago único para sitio corporativo hasta 5 páginas con WordPress completo, y desde $690.000 para ecommerce con WooCommerce o Shopify. Todos nuestros diseños web cargan en menos de 2 segundos, son 100% responsive para móvil/tablet/desktop, incluyen SEO on-page completo (meta tags, schema markup, sitemap), Google Analytics integrado, formularios funcionales, HTTPS con SSL, backups automáticos, y capacitación de 1 hora para que puedas actualizar contenido tú mismo. Proceso transparente en 4-5 semanas: descubrimiento, diseño con mockups, desarrollo WordPress, contenido + SEO, lanzamiento. +45 sitios web exitosos en Chile con garantía de velocidad y 1 mes de soporte post-lanzamiento gratis.
        </p>

        <div className="flex gap-3 md:gap-4 justify-center flex-wrap px-4">
          <Link href="/contacto" className="px-6 md:px-8 py-3 md:py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Sitio Web Gratis →
          </Link>
          <a href="#que-incluye" className="px-6 md:px-8 py-3 md:py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
            Ver Qué Incluye
          </a>
        </div>
      </section>

      {/* Main Content */}
      <article className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-12">

        {/* Por qué necesitas web */}
        <section id="por-que-web" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Necesitas un Sitio Web Profesional?</h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 93% de las decisiones de compra comienzan con una búsqueda en Google.</strong> Si tu negocio en Chile no tiene presencia web profesional, o tiene un sitio lento y desactualizado, estás perdiendo clientes todos los días frente a tu competencia. Un diseño web profesional no es solo "estar en internet" — es tu vendedor 24/7, tu carta de presentación digital, y la base de toda tu estrategia de marketing digital para generar ventas reales.
            </p>
            <p className="text-lg md:text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Un sitio web bien diseñado genera credibilidad instantánea:</strong> el 75% de usuarios admite juzgar la credibilidad de una empresa basándose únicamente en el diseño de su sitio web. Un diseño profesional con carga rápida, navegación intuitiva y contenido claro transmite confianza, mientras que un sitio amateur con errores, lentitud o diseño obsoleto hace que potenciales clientes busquen alternativas en segundos.
            </p>
            <p className="text-lg md:text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Tu sitio web trabaja mientras duermes:</strong> a diferencia de una tienda física o un vendedor, tu sitio web está disponible 24 horas al día, 7 días a la semana, 365 días al año. Clientes pueden conocer tus servicios, ver tus productos, comparar precios, leer testimonios y contactarte en cualquier momento — incluso a las 3 AM. Esta disponibilidad permanente multiplica tus oportunidades de venta sin aumentar costos operativos.
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-6 mt-12 text-center">Beneficios de tener un sitio web profesional:</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Credibilidad instantánea:</strong>
                <span className="text-[var(--color-muted)]">Un sitio profesional transmite confianza y seriedad</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Ventas 24/7:</strong>
                <span className="text-[var(--color-muted)]">Tu negocio trabaja mientras duermes</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Alcance ilimitado:</strong>
                <span className="text-[var(--color-muted)]">Llegas a clientes en todo Chile y el mundo</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Menor costo que publicidad tradicional:</strong>
                <span className="text-[var(--color-muted)]">ROI superior a largo plazo</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Datos y métricas:</strong>
                <span className="text-[var(--color-muted)]">Sabes exactamente qué funciona y qué no</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Escalabilidad:</strong>
                <span className="text-[var(--color-muted)]">Crece al ritmo de tu negocio</span>
              </div>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section id="que-incluye" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Qué Incluye Nuestro Diseño Web Profesional?</h2>
          <p className="text-lg md:text-xl mb-10 leading-[1.9] text-center max-w-3xl mx-auto text-justify">
            No hacemos sitios genéricos con plantillas baratas. Cada diseño web está pensado para tu negocio específico, tu audiencia y tus objetivos de conversión. Esto es lo que incluimos:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              icon="🎨"
              title="Diseño Personalizado"
              description="Diseño único adaptado a tu marca. Nada de templates genéricos que se ven iguales a otros 1,000 sitios."
              animationType="design"
            />

            <FeatureCard
              icon="⚡"
              title="Velocidad Optimizada"
              description="Objetivo: menos de 2 segundos de carga. Optimización de imágenes, código limpio, caché configurado."
              animationType="speed"
            />

            <FeatureCard
              icon="📱"
              title="100% Responsive"
              description="Perfecto en móvil, tablet y desktop. El 70% del tráfico viene de móvil — tu sitio debe verse bien ahí."
              animationType="responsive"
            />

            <FeatureCard
              icon="🔍"
              title="SEO Base Incluido"
              description="Títulos, meta descriptions, headings, URLs optimizadas, sitemap, schema markup básico para Google."
              animationType="seo"
            />

            <FeatureCard
              icon="📊"
              title="Google Analytics"
              description="Integración completa para medir visitas, conversiones, páginas más vistas, fuentes de tráfico."
              animationType="analytics"
            />

            <FeatureCard
              icon="📝"
              title="Formularios Funcionales"
              description="Formulario de contacto que realmente funciona. Recibe consultas directo a tu email sin pérdidas."
              animationType="forms"
            />

            <FeatureCard
              icon="🔒"
              title="HTTPS + Seguridad"
              description="Certificado SSL incluido, sitio seguro, backups automáticos semanales. Protección contra malware."
              animationType="security"
            />

            <FeatureCard
              icon="✏️"
              title="Fácil de Actualizar"
              description="Panel WordPress intuitivo. Puedes editar textos e imágenes tú mismo sin programar ni contratar a nadie."
              animationType="update"
            />

            <FeatureCard
              icon="🌐"
              title="Hosting + Dominio"
              description="Primer año de hosting y dominio .cl incluidos en pack web anual. Sin costos ocultos."
              animationType="hosting"
            />
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Nuestro Proceso de Diseño Web</h2>
          <p className="text-lg md:text-xl mb-10 leading-[1.9] text-center max-w-3xl mx-auto text-justify">
            Proceso transparente en 5 pasos. Sabes exactamente qué esperar en cada etapa del diseño de tu sitio web.
          </p>

          <ProcessTimeline
            steps={[
              {
                number: 1,
                title: 'Descubrimiento',
                subtitle: 'Semana 1',
                description: 'Entrevista para entender tu negocio, audiencia, competencia y objetivos. Definimos estructura del sitio, páginas necesarias y funcionalidades clave.',
                icon: '🔍',
              },
              {
                number: 2,
                title: 'Diseño',
                subtitle: 'Semana 2',
                description: 'Mockup de homepage y 1-2 páginas internas para aprobación. Definimos paleta de colores, tipografías, estilo general. Revisiones ilimitadas hasta tu aprobación.',
                icon: '🎨',
              },
              {
                number: 3,
                title: 'Desarrollo',
                subtitle: 'Semana 3-4',
                description: 'Construcción del sitio web en WordPress. Todas las páginas, formularios, optimización de velocidad, diseño responsive para móvil y tablet.',
                icon: '💻',
              },
              {
                number: 4,
                title: 'Contenido + SEO',
                subtitle: 'Semana 4',
                description: 'Carga de contenidos (que tú proporcionas), optimización SEO on-page completa, integración de Analytics, pruebas de velocidad y compatibilidad.',
                icon: '📝',
              },
              {
                number: 5,
                title: 'Lanzamiento',
                subtitle: 'Semana 5',
                description: 'Revisión final, configuración de dominio y hosting, publicación en vivo, capacitación de 1 hora para que puedas administrar el sitio tú mismo.',
                icon: '🚀',
              },
            ]}
            totalTime="4-5 semanas desde el pago inicial hasta el lanzamiento"
          />
        </section>

        {/* Tecnologías */}
        <section id="tecnologias" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Tecnologías que Usamos para Diseño Web</h2>
          <p className="text-lg md:text-xl mb-8 leading-[1.9] text-center max-w-3xl mx-auto text-justify">
            Trabajamos principalmente con <strong className="text-[var(--color-accent)] font-bold">WordPress</strong> — el CMS más popular del mundo, usado por el 43% de todos los sitios web profesionales.
          </p>

          <h3 className="text-xl md:text-2xl font-bold mb-6 mt-10">¿Por qué WordPress para tu sitio web?</h3>
          <ul className="space-y-4 mt-6 text-base md:text-lg">
            <li className="leading-[1.8] text-justify"><strong className="text-[var(--color-accent)] font-bold">Flexible y escalable:</strong> Desde landing page simple hasta ecommerce complejo con cientos de productos</li>
            <li className="leading-[1.8] text-justify"><strong className="text-[var(--color-accent)] font-bold">Fácil de usar:</strong> Puedes editar contenido sin saber programar. Interfaz intuitiva.</li>
            <li className="leading-[1.8] text-justify"><strong className="text-[var(--color-accent)] font-bold">SEO-friendly:</strong> Excelente estructura para <Link href="/seo-posicionamiento" className="text-[var(--color-accent)] hover:underline">posicionamiento en Google</Link></li>
            <li className="leading-[1.8] text-justify"><strong className="text-[var(--color-accent)] font-bold">Miles de plugins:</strong> Funcionalidades adicionales cuando las necesites (reservas, membresías, etc.)</li>
            <li className="leading-[1.8] text-justify"><strong className="text-[var(--color-accent)] font-bold">Comunidad enorme:</strong> Soporte y recursos ilimitados en español</li>
          </ul>
        </section>

        {/* Precios */}
        <section id="precios" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precios de Diseño Web en Chile</h2>
          <p className="text-lg md:text-xl mb-10 leading-[1.9] text-center max-w-3xl mx-auto text-justify">
            Precios transparentes para diseño web profesional. Sin sorpresas ni costos ocultos. Lo que ves es lo que pagas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Landing Page */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
                <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$199.000</p>
                <p className="text-[var(--color-muted)] mb-6">CLP/año (incluye hosting + dominio)</p>
                <ul className="space-y-2 text-left text-sm md:text-base mb-6">
                  <li>✓ 1 página optimizada</li>
                  <li>✓ Diseño responsive</li>
                  <li>✓ SEO base</li>
                  <li>✓ Formulario contacto</li>
                  <li>✓ Hosting + dominio .cl</li>
                  <li>✓ SSL (HTTPS) incluido</li>
                </ul>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>

            {/* Sitio Corporativo */}
            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all relative flex flex-col">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS POPULAR
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Sitio Corporativo</h3>
                <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$490.000</p>
                <p className="text-[var(--color-muted)] mb-6">CLP (pago único)</p>
                <ul className="space-y-2 text-left text-sm md:text-base mb-6">
                  <li>✓ Hasta 5 páginas</li>
                  <li>✓ Diseño personalizado</li>
                  <li>✓ WordPress completo</li>
                  <li>✓ SEO optimizado</li>
                  <li>✓ Analytics + formularios</li>
                  <li>✓ Capacitación incluida</li>
                  <li>✓ 1 mes soporte gratis</li>
                </ul>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-all">
                Cotizar
              </Link>
            </div>

            {/* Ecommerce */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Ecommerce</h3>
                <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $690.000</p>
                <p className="text-[var(--color-muted)] mb-6">CLP (según productos)</p>
                <ul className="space-y-2 text-left text-sm md:text-base mb-6">
                  <li>✓ WordPress + WooCommerce</li>
                  <li>✓ O Shopify</li>
                  <li>✓ Pagos online (Webpay/Flow)</li>
                  <li>✓ Gestión de productos</li>
                  <li>✓ Carro de compra</li>
                  <li>✓ Envíos configurados</li>
                  <li>✓ Capacitación ecommerce</li>
                </ul>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-[var(--color-accent)] text-center">Preguntas Frecuentes sobre Diseño Web</h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto cuesta un diseño web profesional en Chile?</h3>
              <p className="text-lg leading-relaxed text-justify">
                El <strong>diseño web profesional en Chile</strong> cuesta desde <strong>$199.000/año</strong> para landing page de 1 página (incluye hosting + dominio .cl + SEO base + formulario + SSL), <strong>$490.000 pago único</strong> para sitio corporativo de hasta 5 páginas con WordPress completo, y desde <strong>$690.000</strong> para ecommerce con WooCommerce o Shopify. Todos incluyen diseño personalizado, 100% responsive, Google Analytics, capacitación y 1 mes de soporte gratis. Sin costos ocultos.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto tarda en estar listo un sitio web?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Landing page: 1-2 semanas.</strong> Sitio corporativo: 4-5 semanas. Ecommerce: 6-8 semanas. El tiempo exacto depende del alcance del proyecto y de la rapidez con que proporciones contenidos (textos, fotos, logos). Proceso incluye descubrimiento, diseño de mockups con revisiones ilimitadas, desarrollo WordPress, carga de contenido + SEO, y lanzamiento con capacitación. Plazos pueden acelerarse con fee de urgencia.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Puedo actualizar el sitio web yo mismo después del diseño?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Sí, completamente.</strong> WordPress es muy intuitivo — no necesitas saber programar. Te damos capacitación de 1 hora para que puedas editar textos, cambiar imágenes, crear nuevas páginas, agregar entradas de blog, y actualizar información de contacto sin ayuda. Para cambios de diseño estructurales o funcionalidades complejas (agregar pasarela de pago, sistema de membresías, etc.), podemos hacerlos con cotización aparte.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿El hosting y dominio están incluidos en el precio?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>En el Pack Web anual ($199.000/año), sí está todo incluido:</strong> hosting optimizado, dominio .cl, SSL, backups semanales, soporte técnico básico. En sitios corporativos y ecommerce, el diseño es pago único pero el hosting es aparte (desde $35.000/año). Podemos contratarlo y gestionarlo nosotros por ti, o puedes usar tu hosting actual si ya tienes uno. El dominio se puede comprar por separado (desde $12.000/año .cl).
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿El diseño web incluye SEO o hay que pagarlo aparte?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Incluimos SEO base sin costo extra:</strong> meta tags optimizados (title, description), URLs amigables, headings jerárquicos (H1, H2, H3), sitemap XML para Google, schema markup básico, integración Google Search Console, optimización de velocidad, y diseño responsive (señal SEO importante). Para <Link href="/seo-posicionamiento" className="text-[var(--color-accent)] hover:underline">SEO avanzado</Link> con creación de contenido mensual, link building, posicionamiento de keywords competitivas y auditorías técnicas, ofrecemos planes desde $249.000/mes.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué pasa si quiero agregar funcionalidades después al sitio web?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Podemos agregar cualquier funcionalidad que necesites:</strong> blog para contenido SEO, galería de proyectos/portfolio, sistema de reservas online, área de membresías con login, pagos recurrentes/suscripciones, integración con CRM, chat en vivo, calculadoras personalizadas, calendarios de eventos, multiidioma. Se cotiza según complejidad (desde $50.000 para funcionalidades simples). La mayoría de funcionalidades se agregan con plugins de WordPress sin necesidad de rediseñar todo el sitio.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué garantías ofrecen con el diseño web?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Ofrecemos <strong>1 mes de soporte post-lanzamiento gratis</strong> para cualquier ajuste o corrección. <strong>Garantía de velocidad:</strong> si tu sitio web carga en más de 3 segundos en conexión normal, lo optimizamos gratis. <strong>Revisiones ilimitadas</strong> durante la etapa de diseño de mockups hasta que estés 100% satisfecho. <strong>Garantía mobile-friendly:</strong> tu sitio se verá perfecto en todos los dispositivos móviles o lo arreglamos sin costo. Backups automáticos semanales incluidos para proteger tu contenido.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Trabajan con negocios de todo Chile o solo ciertas ciudades?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Atendemos empresas en todo Chile:</strong> Santiago, Concepción, Valparaíso, La Serena, Antofagasta, Temuco, Puerto Montt, Arica, Iquique, Rancagua, Talca — desde Arica hasta Punta Arenas. Todo el proceso de diseño web puede ser 100% remoto: reuniones por videollamada, coordinación por email/WhatsApp, revisión de mockups online, capacitación virtual. Solo necesitamos conexión a internet para trabajar juntos. También atendemos clientes fuera de Chile.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 mb-20">
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-8 md:p-16 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta Especial <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para tu Sitio Web Profesional?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-10 leading-relaxed max-w-2xl mx-auto text-justify">
            Únete a <strong className="text-[var(--color-accent)]">+45 empresas</strong> con sitios web que generan clientes reales. Cotiza tu proyecto sin compromiso:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Cotización gratis</p>
              <p className="text-xs text-[var(--color-muted)]">Respuesta en 24h</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Auditoría SEO gratis</p>
              <p className="text-xs text-[var(--color-muted)]">Valor $50.000</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ 1 mes soporte gratis</p>
              <p className="text-xs text-[var(--color-muted)]">Post-lanzamiento</p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
            <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
              Cotizar Mi Sitio Web Ahora →
            </Link>
            <Link href="/packs-completos" className="px-8 py-4 bg-transparent text-white border-2 border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
              Ver Packs Completos
            </Link>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⭐ +45 sitios web exitosos en Chile • Garantía de velocidad • Soporte incluido
          </p>
        </div>
      </div>
    </>
  );
}
