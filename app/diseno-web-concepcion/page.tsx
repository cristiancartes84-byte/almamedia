import ParticlesBackground from '@/components/Particles';
import SectorCard from '@/components/SectorCard';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Diseño Web Concepción ${currentYear} | WordPress Rápido Desde $199k`,
  description: 'Diseño web en Concepción. WordPress optimizado, carga <2s, SEO incluido. +45 webs exitosas. Landing desde $199k/año. Cotiza gratis hoy.',
  keywords: 'diseño web Concepción, diseño web profesional Concepción, WordPress Concepción, sitio web Concepción, desarrollo web Biobío, páginas web Concepción, diseño web Chile, web Concepción precio, agencia web Concepción',
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
    canonical: '/diseno-web-concepcion',
  },
  openGraph: {
    title: 'Diseño Web Concepción ${currentYear} | WordPress Rápido Desde $199k',
    description: 'Diseño web en Concepción. WordPress optimizado, carga <2s, SEO incluido. +45 webs exitosas. Landing desde $199k/año.',
    url: 'https://almamedia.cl/diseno-web-concepcion',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web Concepción ${currentYear} | WordPress Rápido Desde $199k',
    description: 'Diseño web en Concepción. WordPress optimizado, carga <2s, SEO incluido. +45 webs exitosas.',
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

export default function DisenoWebConcepcionPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/diseno-web-biobio" className="hover:text-[var(--color-accent)] transition-colors">Diseño Web Biobío</Link>
          <span className="mx-2">/</span>
          <span>Concepción</span>
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
                "name": "Diseño Web Concepción",
                "description": "Servicio profesional de diseño web en Concepción. Creamos sitios WordPress optimizados, rápidos y enfocados en conversión para negocios locales.",
                "provider": {
                  "@type": "Organization",
                  "name": "Alma Media",
                  "url": "https://almamedia.cl"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Concepción",
                  "containedIn": {
                    "@type": "AdministrativeArea",
                    "name": "Región del Biobío"
                  }
                },
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Landing Page",
                    "price": "169000",
                    "priceCurrency": "CLP"
                  },
                  {
                    "@type": "Offer",
                    "name": "Sitio Corporativo",
                    "price": "390000",
                    "priceCurrency": "CLP"
                  },
                  {
                    "@type": "Offer",
                    "name": "Ecommerce",
                    "price": "590000",
                    "priceCurrency": "CLP"
                  }
                ]
              },
              {
                "@type": "LocalBusiness",
                "name": "Alma Media - Diseño Web Concepción",
                "image": "https://almamedia.cl/logo.png",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Concepción",
                  "addressRegion": "Región del Biobío",
                  "addressCountry": "CL"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -36.8201,
                  "longitude": -73.0444
                },
                "url": "https://almamedia.cl/diseno-web-concepcion",
                "priceRange": "$199.000 - $690.000"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Cuánto cuesta un sitio web en Concepción?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Los precios varían según el tipo de sitio: Landing Page desde $199.000/año, Sitio Corporativo $490.000 (pago único), y Ecommerce desde $690.000. Todos incluyen hosting, dominio .cl, SEO básico y capacitación."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuánto demora hacer un sitio web en Concepción?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Un sitio web típico toma entre 3-5 semanas desde la reunión inicial hasta el lanzamiento. Landing pages simples pueden estar listas en 2 semanas, mientras que ecommerce complejos pueden tomar hasta 8 semanas."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿El diseño web incluye SEO local para Concepción?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí, todos nuestros diseños web incluyen SEO básico on-page optimizado para búsquedas locales en Concepción. Para aparecer en Google Maps y posicionamiento avanzado, ofrecemos nuestro servicio de SEO Local como complemento."
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
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Concepción</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web en Concepción: Sitios que Venden
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El diseño web profesional en Concepción</strong> crea sitios WordPress optimizados que convierten visitantes en clientes. Con más de 220.000 habitantes y el 92% buscando en Google antes de comprar, tu negocio necesita presencia digital estratégica. Ofrecemos desarrollo web rápido (carga &lt;2s), SEO local incluido, y diseño responsive para que tu empresa destaque en el segundo polo económico de Chile. Alma Media construye páginas web que generan resultados medibles para negocios en Concepción y el Gran Concepción.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Sitio Web Gratis →
          </Link>
          <Link href="#casos-exito" className="inline-block px-8 py-4 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
            Ver Casos de Éxito
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">

        {/* Por qué necesita web */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">¿Por qué tu negocio en Concepción necesita un sitio web profesional?</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Concepción es la capital de la Región del Biobío y el segundo polo económico más importante de Chile. Con más de 220.000 habitantes en la comuna y cerca de 1 millón en el Gran Concepción, la competencia comercial es intensa. Un <Link href="/diseno-web" className="text-[var(--color-accent)] hover:underline font-semibold">diseño web profesional</Link> te diferencia de tu competencia.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            En una ciudad universitaria con 8 universidades y más de 60.000 estudiantes, <strong className="text-[var(--color-accent)] font-bold">el 92% de los penquistas busca en Google antes de comprar</strong>. Si tu negocio no aparece online, pierdes clientes todos los días frente a tu competencia que sí tiene web. El <strong>diseño web en Concepción</strong> no es un lujo, es una necesidad para cualquier empresa que quiera crecer.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Ya sea que tengas un café en Pedro de Valdivia, una clínica en Barrio Universitario, un restaurante en Plaza Perú o una ferretería en el centro, necesitas presencia digital profesional que genere confianza y conversiones. Nuestro <strong>servicio de diseño web Concepción</strong> está optimizado para negocios locales que buscan resultados reales.
          </p>
          <div className="text-center mt-8">
            <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              ⚡ Cotización Gratis en 24 Horas
            </Link>
          </div>
        </section>

        {/* Sectores */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Sectores que atendemos en Concepción</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Trabajamos con diversos tipos de negocios en Concepción y sectores específicos de la ciudad:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <SectorCard
              icon="🎓"
              title="Educación y Servicios Universitarios"
              description="Residencias estudiantiles, academias, librerías, cafeterías cerca de campus UdeC, UCSC, UBB, Inacap. Sitios web con información de servicios, galería de fotos, formularios de contacto."
              index={0}
            />

            <SectorCard
              icon="🏥"
              title="Salud y Clínicas"
              description="Clínicas dentales, centros médicos, consultas particulares, ópticas en sectores como Av. Paicaví, Barrio Universitario. Incluye sistema de reservas de horas online."
              index={1}
            />

            <SectorCard
              icon="🍽️"
              title="Gastronomía"
              description="Restaurantes, cafés, pubs en sectores turísticos: Plaza Perú, Barrio Estación, Pedro de Valdivia, Tribunales. Menú digital, reservas, pedidos online integrados."
              index={2}
            />

            <SectorCard
              icon="🛒"
              title="Retail y Comercio"
              description="Tiendas de ropa, zapaterías, ferreterías en centro, Mall del Centro, calles Freire, Barros Arana, O'Higgins. Ecommerce con Webpay, envíos a domicilio."
              index={3}
            />

            <SectorCard
              icon="🏗️"
              title="Servicios Profesionales"
              description="Estudios contables, legales, arquitectura, inmobiliarias que atienden empresas del Gran Concepción. Diseño corporativo profesional, formularios de contacto, portafolios."
              index={4}
            />

            <SectorCard
              icon="💪"
              title="Fitness y Deporte"
              description="Gimnasios, boxes de CrossFit, estudios de yoga, tiendas deportivas en sectores residenciales y comerciales. Sistema de reservas de clases, venta de planes online."
              index={5}
            />
          </div>
        </section>

        {/* Casos de Éxito */}
        <section id="casos-exito" className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Casos de Éxito en Concepción</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Hemos trabajado con negocios locales que hoy generan clientes desde su web. Estos son resultados reales de nuestros proyectos de <strong>diseño web en Concepción</strong>:
          </p>
          <ul className="space-y-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Cafetería en Barrio Universitario:</strong> Web con menú digital y sistema de reservas online. Implementamos <Link href="/seo-local-concepcion" className="text-[var(--color-accent)] hover:underline">SEO local</Link> para aparecer en Google Maps. <span className="text-[var(--color-accent)]">Resultado: +45% en pedidos mensuales</span>.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Clínica Dental en Paicaví:</strong> Landing page optimizada para "dentista Concepción" con formulario de contacto WhatsApp directo. Ranking #2 en Google en 4 meses. <span className="text-[var(--color-accent)]">Resultado: 0 a 15 consultas mensuales desde búsqueda orgánica</span>.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Tienda de Deportes en Mall del Centro:</strong> Ecommerce WordPress + WooCommerce con Webpay integrado, envíos a domicilio en Gran Concepción. Diseño responsive optimizado para móviles. <span className="text-[var(--color-accent)]">Resultado: ventas online = 30% del total</span>.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Academia Preuniversitaria:</strong> Sitio web corporativo con información de cursos, testimonios de estudiantes, inscripciones online con pasarela de pago. <span className="text-[var(--color-accent)]">Resultado: 60% de matrículas provienen de la web</span>.</li>
          </ul>
          <p className="text-lg mt-8 text-center">
            <Link href="/contacto" className="text-[var(--color-accent)] font-bold hover:underline text-xl">
              ¿Quieres resultados similares para tu negocio? Agenda una reunión gratuita →
            </Link>
          </p>
        </section>

        {/* Servicios Complementarios */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Servicios Complementarios en Concepción</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Además del diseño web, ofrecemos servicios adicionales para potenciar tu presencia digital en Concepción. Estos servicios están diseñados específicamente para negocios locales:
          </p>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">🎯 SEO Local Concepción</h3>
            <p className="text-lg mb-4 leading-relaxed">
              Optimización para Google Maps y búsquedas locales. Aparecer cuando buscan "tu servicio + Concepción". Nuestro <Link href="/seo-posicionamiento" className="text-[var(--color-accent)] hover:underline font-semibold">servicio de SEO</Link> incluye Google Business Profile, gestión de reseñas, citas locales en directorios del Biobío.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              Ideal para: clínicas, restaurantes, gimnasios, servicios profesionales que atienden clientes locales en Concepción.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">📸 Fotografía de Producto</h3>
            <p className="text-lg mb-4 leading-relaxed">
              Sesiones fotográficas profesionales para ecommerce, catálogos, redes sociales. Fondo blanco profesional o lifestyle según tu marca. Sesiones en nuestro estudio o en tu local en Concepción.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              Ideal para: tiendas retail, restaurantes (fotografía gastronómica), productos artesanales, catálogos online.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">🎥 Video Marketing</h3>
            <p className="text-lg mb-4 leading-relaxed">
              Videos cortos optimizados para Instagram, TikTok, Facebook Ads. Reels de productos, testimoniales de clientes, tours virtuales de tu local en Concepción. Edición profesional incluida.
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              Ideal para: gimnasios, cafeterías, tiendas, servicios que buscan engagement en redes sociales.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link href="/contacto" className="inline-block px-8 py-4 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
              Armar Pack Personalizado →
            </Link>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-center text-[var(--color-accent)]">Precios de Diseño Web en Concepción <CurrentYear /></h2>
          <p className="text-xl text-center text-[var(--color-muted)] mb-4 leading-relaxed">
            Paquetes adaptados al tamaño de tu negocio en Concepción
          </p>
          <p className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-sm font-semibold text-[var(--color-accent)]">
              ⚡ Promo <span className="capitalize"><CurrentMonth /></span>: Cotiza hoy y recibe análisis SEO gratis (valor $90.000)
            </span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$199.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP/año (todo incluido)</p>
              <div className="flex-grow">
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ 1 página optimizada</li>
                  <li>✓ Hosting + dominio .cl</li>
                  <li>✓ Formulario de contacto</li>
                  <li>✓ Google Analytics</li>
                  <li>✓ SEO básico Concepción</li>
                  <li>✓ Responsive (móvil)</li>
                </ul>
                <p className="text-xs text-[var(--color-muted)] italic">Ideal para: profesionales independientes, servicios locales</p>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all relative flex flex-col">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Sitio Corporativo</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$490.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP (pago único desarrollo)</p>
              <div className="flex-grow">
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ Hasta 5 páginas</li>
                  <li>✓ Diseño 100% personalizado</li>
                  <li>✓ WordPress administrable</li>
                  <li>✓ SEO optimizado Concepción</li>
                  <li>✓ Capacitación incluida</li>
                  <li>✓ Blog integrado</li>
                  <li>✓ 1 mes soporte gratis</li>
                </ul>
                <p className="text-xs text-[var(--color-muted)] italic">Ideal para: empresas, clínicas, restaurantes, servicios profesionales</p>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-all">
                Cotizar
              </Link>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Ecommerce</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $690.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP (según productos)</p>
              <div className="flex-grow">
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ WooCommerce o Shopify</li>
                  <li>✓ Webpay integrado</li>
                  <li>✓ Gestión de productos</li>
                  <li>✓ Envíos Gran Concepción</li>
                  <li>✓ Panel administrable</li>
                  <li>✓ Capacitación ecommerce</li>
                  <li>✓ Stock y variantes</li>
                </ul>
                <p className="text-xs text-[var(--color-muted)] italic">Ideal para: tiendas retail, productos artesanales, distribuidores</p>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>
          </div>

          <p className="text-center mt-12 text-lg">
            💬 <strong>¿No estás seguro cuál necesitas?</strong>{' '}
            <Link href="/contacto" className="text-[var(--color-accent)] hover:underline font-semibold">
              Agenda una asesoría gratuita de 30 minutos →
            </Link>
          </p>
        </section>

        {/* Proceso */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Proceso de Trabajo con Clientes de Concepción</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Todo el proceso puede ser 100% remoto o con reunión presencial en Concepción según prefieras:
          </p>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Semana 1:</strong> Reunión inicial (presencial en Concepción o videollamada), briefing del proyecto, definición de estructura.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Semana 2-3:</strong> Diseño mockup para aprobación, desarrollo en WordPress, integración de contenidos.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Semana 4:</strong> Optimización SEO, pruebas de velocidad, revisión final, capacitación para administrar.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Semana 5:</strong> Lanzamiento, configuración de dominio, publicación oficial. Soporte post-lanzamiento 1 mes incluido.
            </p>
          </div>
        </section>

        {/* Zonas */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Zonas de Concepción que Cubrimos</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Atendemos todo Concepción y alrededores: Centro, Barrio Universitario, Pedro de Valdivia, Lorenzo Arenas, Collao, Barrio Estación, Barrio Norte, sector Paicaví, Plaza Perú, Tribunales, sectores residenciales y comerciales.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            También trabajamos con negocios del Gran Concepción: Talcahuano, San Pedro, Hualpén, Chiguayante, Penco, Tomé. Nuestro servicio de <strong>diseño web Concepción</strong> está disponible para toda la Región del Biobío.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-8 text-center text-[var(--color-accent)]">Preguntas Frecuentes sobre Diseño Web en Concepción</h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto cuesta un sitio web en Concepción?</h3>
              <p className="text-lg leading-relaxed">
                Los precios de diseño web en Concepción varían según el tipo de sitio: <strong>Landing Page desde $199.000/año</strong> (incluye hosting + dominio), <strong>Sitio Corporativo $490.000</strong> (pago único de desarrollo), y <strong>Ecommerce desde $690.000</strong>. Todos nuestros paquetes incluyen hosting, dominio .cl, SEO básico on-page y capacitación para administrar tu sitio.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto demora hacer un sitio web en Concepción?</h3>
              <p className="text-lg leading-relaxed">
                Un proyecto típico de diseño web en Concepción toma entre <strong>3-5 semanas</strong> desde la reunión inicial hasta el lanzamiento. Landing pages simples pueden estar listas en 2 semanas, mientras que ecommerce complejos con muchos productos pueden tomar hasta 8 semanas. El tiempo depende de la complejidad, cantidad de páginas, y velocidad de aprobación de contenidos.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿El diseño web incluye SEO local para Concepción?</h3>
              <p className="text-lg leading-relaxed">
                Sí, todos nuestros diseños web incluyen <strong>SEO básico on-page</strong> optimizado para búsquedas locales en Concepción: títulos optimizados, meta descripciones, URLs amigables, velocidad de carga optimizada. Para aparecer en <strong>Google Maps</strong> y lograr posicionamiento avanzado en primeras posiciones, ofrecemos nuestro <Link href="/seo-local-concepcion" className="text-[var(--color-accent)] hover:underline font-semibold">servicio de SEO Local</Link> como complemento.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Puedo actualizar el contenido de mi sitio web yo mismo?</h3>
              <p className="text-lg leading-relaxed">
                Sí, todos nuestros sitios en WordPress incluyen <strong>capacitación personalizada</strong> para que puedas actualizar textos, imágenes, productos, crear entradas de blog, etc. El panel de WordPress es intuitivo y no necesitas conocimientos técnicos. Además, ofrecemos soporte post-lanzamiento de 1 mes incluido para resolver dudas.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Trabajan presencialmente en Concepción o es todo remoto?</h3>
              <p className="text-lg leading-relaxed">
                Ofrecemos ambas modalidades. Podemos hacer <strong>reunión presencial en Concepción</strong> para el briefing inicial y presentación de diseño si prefieres el contacto cara a cara, o trabajar 100% remoto mediante videollamadas y herramientas colaborativas. La mayoría de nuestros clientes en Concepción prefiere modalidad híbrida: reunión inicial presencial y resto del proceso remoto.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué incluye el hosting y dominio?</h3>
              <p className="text-lg leading-relaxed">
                El <strong>hosting</strong> incluye: servidor optimizado para WordPress, certificado SSL (https), copias de seguridad automáticas, panel cPanel, correos corporativos ilimitados. El <strong>dominio .cl</strong> es el registro de tu nombre en internet (ejemplo: tunegocio.cl). En el plan Landing Page el hosting + dominio se paga anualmente, en planes Corporativo y Ecommerce puedes contratar hosting con nosotros o usar tu propio hosting.
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
            ¿Listo para Destacar en Concepción?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Únete a más de <strong className="text-[var(--color-accent)]">45 negocios exitosos</strong> en Concepción que ya generan clientes desde su sitio web. Cotiza gratis hoy y recibe:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Análisis SEO gratis</p>
              <p className="text-xs text-[var(--color-muted)]">(Valor $90.000)</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Respuesta en 24 hrs</p>
              <p className="text-xs text-[var(--color-muted)]">Cotización detallada</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Asesoría sin costo</p>
              <p className="text-xs text-[var(--color-muted)]">30 minutos con experto</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold text-lg rounded-lg hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
              🚀 Cotizar Ahora Gratis
            </Link>
            <Link href="https://wa.me/56912345678?text=Hola!%20Quiero%20cotizar%20diseño%20web%20para%20mi%20negocio%20en%20Concepción" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-bold text-lg rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
              💬 WhatsApp Directo
            </Link>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⏰ Promo válida solo para las primeras 5 cotizaciones de <CurrentMonth /> • Sin compromiso • Respuesta garantizada
          </p>
        </div>
      </div>
    </>
  );
}
