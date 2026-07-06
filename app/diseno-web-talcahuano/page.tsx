import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Diseño Web Talcahuano ${currentYear} | Sitios para Negocios Portuarios`,
  description: 'Diseño web profesional en Talcahuano. Especializados en negocios portuarios, industria naval, pesca y comercio. Desde $199.000/año. Cotiza gratis.',
  keywords: 'diseño web Talcahuano, sitio web Talcahuano, página web puerto Talcahuano, diseño web portuario, desarrollo web Talcahuano, WordPress Talcahuano',
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
    canonical: '/diseno-web-talcahuano',
  },
  openGraph: {
    title: `Diseño Web Talcahuano ${currentYear} | Sitios para Negocios Portuarios`,
    description: 'Diseño web profesional en Talcahuano. Especializados en negocios portuarios, industria naval y pesca.',
    url: 'https://almamedia.cl/diseno-web-talcahuano',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Diseño Web Talcahuano ${currentYear} | Negocios Portuarios`,
    description: 'Diseño web profesional. Especializados en negocios portuarios, industria naval y pesca.',
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

export default function DisenoWebTalcahuanoPage() {
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
                "name": "Diseño Web Profesional en Talcahuano",
                "description": "Servicio profesional de diseño web en Talcahuano. Especializados en sitios para negocios portuarios, industria naval, pesca, comercio marítimo y servicios industriales.",
                "provider": {
                  "@type": "Organization",
                  "name": "Alma Media",
                  "url": "https://almamedia.cl"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Talcahuano",
                  "containedIn": {
                    "@type": "AdministrativeArea",
                    "name": "Región del Biobío"
                  }
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Servicios de Diseño Web Talcahuano",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Landing B2B"
                      },
                      "price": "169000",
                      "priceCurrency": "CLP"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Catálogo Online"
                      },
                      "price": "390000",
                      "priceCurrency": "CLP"
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Ecommerce B2B"
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
                    "name": "¿Cuánto cuesta un sitio web para negocios en Talcahuano?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Diseño web para negocios en Talcahuano cuesta desde $199.000/año para landing B2B con formulario de cotización, $490.000 para catálogo online con hasta 100 productos, y desde $690.000 para ecommerce B2B completo con precios mayoristas y clientes corporativos."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Qué tipos de negocios portuarios atienden en Talcahuano?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Especializados en servicios portuarios y marítimos, industria pesquera, construcción y reparación naval, gastronomía costera, comercio al por mayor, ferreterías industriales, suministros navales, logística portuaria y servicios en zonas como Puerto, ASMAR, Terminal Pesquero, Higueras."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Por qué mi negocio en Talcahuano necesita un sitio web?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Talcahuano tiene más de 180.000 habitantes y economía portuaria intensa. Un sitio web te permite que empresas navieras, clientes industriales y compradores mayoristas te encuentren en Google, generar cotizaciones 24/7, mostrar catálogos de productos a toda la costa chilena, y competir con proveedores de otras ciudades."
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
          <Link href="/diseno-web" className="hover:text-[var(--color-accent)] transition-colors">Diseño Web</Link>
          <span className="mx-2">/</span>
          <span>Talcahuano</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚓ Diseño Web Talcahuano</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web en Talcahuano: Sitios para Negocios Portuarios
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El diseño web profesional en Talcahuano</strong> crea sitios WordPress optimizados para negocios portuarios, industria naval, pesca, comercio marítimo y servicios industriales. Talcahuano es la comuna portuaria más importante de Chile con más de 180.000 habitantes y economía basada en Puerto de Talcahuano, ASMAR, Terminal Pesquero, industria naval y logística marítima. Ofrecemos diseño web especializado desde $199.000/año para landing B2B con formulario de cotización, $490.000 para catálogo online con hasta 100 productos (ideal para suministros navales, ferretería industrial), y desde $690.000 para ecommerce B2B con precios mayoristas y clientes corporativos. Especializados en: servicios portuarios y marítimos (suministros navales, agencias navieras, logística), industria pesquera (comercializadoras, plantas procesadoras, distribuidoras), construcción y reparación naval (talleres, mantención embarcaciones, metalmecánica), gastronomía costera (restaurantes mariscos, terminal pesquero), comercio mayorista (ferreterías industriales, repuestos marítimos). Atendemos todas las zonas: Puerto, Base Naval, ASMAR, Higueras, El Morro, Las Salinas, Gaete, Hualpencillo.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Sitio Web →
          </Link>
          <a href="#sectores" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
            Ver Sectores
          </a>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">

        {/* Por qué necesitas web en Talcahuano */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué tu Negocio en Talcahuano Necesita un Sitio Web?</h2>
          <div className="space-y-6">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Talcahuano es la comuna portuaria más importante de Chile</strong> y centro industrial del Gran Concepción. Con el Puerto de Talcahuano (segundo puerto comercial más grande del país), la Base Naval, el Terminal Pesquero, ASMAR (Astilleros y Maestranzas de la Armada), y decenas de empresas navieras, pesqueras e industriales, la actividad comercial B2B es intensa y altamente competitiva. Más de 180.000 habitantes y miles de empresas necesitan proveedores, servicios y suministros constantemente.
            </p>
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 87% de empresas industriales y navieras buscan proveedores en Google antes de contactar.</strong> Si tienes un negocio de suministros navales en el puerto, una ferretería industrial en Higueras, un taller de reparación naval cerca de ASMAR, una comercializadora de pescado en el terminal pesquero, o un restaurante de mariscos en el centro, necesitas que te encuentren cuando buscan "suministros navales Talcahuano", "ferretería industrial puerto", "reparación naval Biobío" o "restaurante mariscos terminal pesquero". Sin presencia web profesional, pierdes clientes frente a competidores que SÍ aparecen en Google.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Un sitio web amplía tu mercado más allá de Talcahuano:</strong> empresas navieras de Valparaíso, San Antonio, Iquique buscan proveedores confiables en todo Chile. Un catálogo online de suministros navales te permite recibir cotizaciones de toda la costa chilena, no solo clientes que pasan físicamente por tu local. Comercializadoras de pescado pueden vender a restaurantes de Santiago sin intermediarios. Talleres de reparación naval pueden mostrar certificaciones, galería de trabajos y atraer contratos de empresas pesqueras de otras regiones.
            </p>
          </div>
        </section>

        {/* Sectores */}
        <section id="sectores" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Sectores que Dominan en Talcahuano</h2>
          <p className="text-xl mb-10 leading-[1.8] text-center max-w-3xl mx-auto text-justify">
            Talcahuano tiene una economía diferente a Concepción — mucho más industrial, portuaria y B2B. Trabajamos con los sectores más importantes de la comuna:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">⚓ Servicios Portuarios y Marítimos</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Suministros navales, agencias navieras, servicios de estiba, logística portuaria, empresas de carga y descarga, courriers marítimos, agentes de aduana.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🐟 Pesca e Industria Pesquera</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Comercializadoras de pescado y mariscos, plantas procesadoras, distribuidoras mayoristas, servicios a la flota pesquera, exportadoras.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🏗️ Industria Naval y Mantención</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Talleres de reparación naval, servicios de mantención de embarcaciones, suministros industriales, soldadura especializada, metalmecánica, pintura industrial.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🍽️ Gastronomía Costera</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Restaurantes de mariscos, cevicherías, cocinerías en terminal pesquero, comedores para trabajadores portuarios, locales de empanadas de mariscos.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🛒 Comercio al por Mayor</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Ferreterías industriales, distribuidoras de materiales de construcción, repuestos marítimos, venta de equipos pesados, herramientas especializadas.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🏘️ Servicios Residenciales</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Negocios en sectores residenciales: Higueras, El Morro, Las Salinas, Gaete. Minimarkets, panaderías, farmacias, servicios técnicos locales.</p>
            </div>
          </div>
        </section>

        {/* Casos de Éxito */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Casos de Éxito en Talcahuano</h2>
          <p className="text-xl mb-8 leading-[1.8] text-center max-w-3xl mx-auto text-justify">
            Negocios talcahuaninos que hoy generan clientes reales desde su sitio web profesional:
          </p>
          <div className="space-y-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">Distribuidora de Suministros Navales</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Catálogo online con +500 productos para embarcaciones: cuerdas, cables, pinturas, equipos de seguridad. Antes solo vendían a clientes del puerto que visitaban el local físico. Ahora reciben cotizaciones de agencias navieras de Valparaíso, Iquique, Puerto Montt. Ventas aumentaron 40% primer año con clientes que nunca hubieran llegado sin el sitio web.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">Restaurante de Mariscos en Terminal Pesquero</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Web con menú del día, horarios, ubicación exacta en Google Maps, galería de platos, testimonios. Turistas de Concepción, Santiago y otras regiones lo encuentran antes de visitar Talcahuano. Aparece #1 en Google para "restaurante mariscos terminal pesquero" y "dónde comer en Talcahuano". Reservas aumentaron 60% en fines de semana largos.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">Taller de Reparación Naval</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Landing page profesional con servicios especializados (reparación cascos, sistemas eléctricos, motores marinos), certificaciones, galería de trabajos con antes/después, formulario de cotización. Empresas navieras y dueños de embarcaciones pesqueras buscan "reparación naval Talcahuano" en Google y los contactan directamente. Proyectos de $5-20 millones que antes perdían porque no los encontraban online.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">Ferretería Industrial cerca de ASMAR</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Ecommerce B2B con catálogo de +2000 productos, stock en tiempo real, precios mayoristas según volumen, sistema de clientes corporativos con crédito. Empresas constructoras, talleres metalmecánicos y contratistas hacen pedidos online con entrega en obra. Pasaron de atender 20-30 clientes/día en local físico a procesar 80-100 cotizaciones online/día desde todo el Gran Concepción.</p>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precios para Negocios en Talcahuano</h2>
          <p className="text-xl mb-10 leading-[1.8] text-center max-w-3xl mx-auto text-justify">
            Precios transparentes diseñados para negocios portuarios e industriales de Talcahuano:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Landing B2B</h3>
                <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$199.000</p>
                <p className="text-[var(--color-muted)] mb-6">CLP/año (hosting incluido)</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ Página servicios B2B</li>
                  <li>✓ Formulario cotización</li>
                  <li>✓ Hosting + dominio .cl</li>
                  <li>✓ SSL + email corporativo</li>
                  <li>✓ Google Maps integrado</li>
                  <li>✓ SEO local Talcahuano</li>
                </ul>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 transition-all flex flex-col">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS POPULAR
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Catálogo Online</h3>
                <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$490.000</p>
                <p className="text-[var(--color-muted)] mb-6">CLP (pago único)</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ Hasta 100 productos</li>
                  <li>✓ Fichas técnicas detalladas</li>
                  <li>✓ Sistema de cotización</li>
                  <li>✓ PDF catálogo descargable</li>
                  <li>✓ Administración fácil</li>
                  <li>✓ Búsqueda y filtros</li>
                </ul>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-all">
                Cotizar
              </Link>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Ecommerce B2B</h3>
                <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $690.000</p>
                <p className="text-[var(--color-muted)] mb-6">CLP (según productos)</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ Tienda completa</li>
                  <li>✓ Precios mayoristas</li>
                  <li>✓ Clientes corporativos</li>
                  <li>✓ Facturación integrada</li>
                  <li>✓ Gestión de stock</li>
                  <li>✓ Múltiples métodos pago</li>
                </ul>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-10 text-[var(--color-accent)] text-center">Preguntas Frecuentes</h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto cuesta un sitio web para negocios en Talcahuano?</h3>
              <p className="text-lg leading-relaxed text-justify">
                El <strong>diseño web para negocios en Talcahuano</strong> cuesta desde <strong>$199.000/año</strong> para landing B2B de 1 página con formulario de cotización (incluye hosting + dominio .cl + email corporativo + SEO local), <strong>$490.000 pago único</strong> para catálogo online con hasta 100 productos (ideal para suministros navales, ferretería industrial, comercializadora pescado), y desde <strong>$690.000</strong> para ecommerce B2B completo con precios mayoristas, clientes corporativos, facturación integrada y gestión de stock. Todos incluyen diseño personalizado, 100% responsive, Google Maps integrado y capacitación.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué tipos de negocios portuarios atienden en Talcahuano?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Especializados en <strong>negocios portuarios e industriales de Talcahuano:</strong> servicios marítimos (suministros navales, agencias navieras, logística portuaria, estiba), industria pesquera (comercializadoras de pescado, plantas procesadoras, distribuidoras mayoristas, exportadoras), construcción y reparación naval (talleres ASMAR, mantención embarcaciones, soldadura especializada, metalmecánica, pintura industrial), gastronomía costera (restaurantes mariscos terminal pesquero, cevicherías, cocinerías), comercio mayorista (ferreterías industriales, repuestos marítimos, materiales construcción), y servicios en zonas Puerto, Base Naval, Higueras, El Morro, Las Salinas, Gaete.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Por qué mi negocio en Talcahuano necesita un sitio web?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Talcahuano tiene más de 180.000 habitantes</strong> y economía portuaria intensa basada en Puerto, ASMAR, Terminal Pesquero e industria naval. El 87% de empresas industriales y navieras buscan proveedores en Google antes de contactar. Un sitio web te permite que empresas navieras, clientes industriales y compradores mayoristas te encuentren cuando buscan "suministros navales Talcahuano", "reparación naval Biobío" o "ferretería industrial puerto". Generas cotizaciones 24/7, amplías mercado a toda la costa chilena (no solo clientes locales), muestras catálogos completos, certificaciones, y compites con proveedores de otras ciudades que SÍ tienen presencia online.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto tarda en estar listo un sitio web en Talcahuano?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Landing B2B: 1-2 semanas.</strong> Catálogo online: 3-4 semanas (depende de cantidad de productos y fotos). Ecommerce B2B: 6-8 semanas (incluye configuración de precios mayoristas, clientes corporativos, integración facturación). El proceso incluye reunión de descubrimiento (entender tu negocio portuario/industrial), diseño de mockups, desarrollo WordPress, carga de productos/servicios, integración Google Maps para ubicación en puerto/zona industrial, optimización SEO local Talcahuano, y capacitación para que administres catálogo tú mismo. Plazos pueden acelerarse con fee de urgencia.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿El diseño web incluye posicionamiento en Google para Talcahuano?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Sí, incluimos SEO local base sin costo extra:</strong> optimización para keywords locales ("suministros navales Talcahuano", "ferretería industrial puerto", "reparación naval Biobío"), configuración Google Business Profile con ubicación exacta (Puerto, ASMAR, Higueras, etc.), integración Google Maps, schema markup local, meta tags optimizados. Para <Link href="/seo-local" className="text-[var(--color-accent)] hover:underline">SEO local avanzado</Link> con creación de contenido mensual específico para Talcahuano, link building en directorios industriales/marítimos, y posicionamiento agresivo en keywords competitivas, ofrecemos planes desde $249.000/mes.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Atienden todas las zonas de Talcahuano?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Sí, atendemos negocios en toda Talcahuano:</strong> Puerto de Talcahuano, Base Naval, Terminal Pesquero, ASMAR (Astilleros y Maestranzas), Higueras, El Morro, Las Salinas, Gaete, sector industrial, Hualpencillo, Tumbes, zona centro. También trabajamos con empresas en zonas portuarias cercanas: San Vicente, Penco, Lirquén, Tomé, Coronel. Todo el proceso de diseño web puede ser 100% remoto (reuniones por videollamada, coordinación por WhatsApp/email), aunque para negocios en zona puerto/ASMAR podemos hacer visita presencial si lo prefieres para entender mejor tu operación.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Puedo mostrar catálogo de productos sin vender online?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Sí, el Catálogo Online ($490.000)</strong> es perfecto para esto: muestras tus productos (suministros navales, repuestos, equipos industriales) con fotos, descripción técnica, fichas PDF descargables, pero sin precios públicos ni carro de compra. Los clientes ven qué ofreces y solicitan cotización mediante formulario o WhatsApp. Ideal para negocios B2B donde precios varían según volumen, cliente corporativo o son confidenciales. Puedes agregar sistema de login para clientes con crédito que sí ven precios específicos. Muchos negocios portuarios/industriales de Talcahuano prefieren este modelo: catálogo visible pero ventas por cotización.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué ventajas tiene tener sitio web vs solo redes sociales?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Un sitio web profesional es tuyo 100%</strong> — no depende de algoritmos de Facebook/Instagram que cambian constantemente. Ventajas clave: <strong>apareces en Google</strong> cuando empresas buscan "suministros navales Talcahuano" (redes sociales NO posicionan en Google), puedes mostrar catálogo completo de 100+ productos organizados por categorías (imposible en Instagram), generas credibilidad profesional (empresas navieras/industriales NO cotizan con negocios que solo tienen Facebook), integras formularios de cotización, email corporativo (@tunegocio.cl), y tienes control total del contenido sin riesgo de que te bloqueen la cuenta. Redes sociales son complemento (publicar fotos, interactuar), pero sitio web es tu base profesional.
              </p>
            </div>
          </div>
        </section>

        {/* Zonas */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Zonas de Talcahuano que Atendemos</h2>
          <p className="text-xl mb-6 leading-[1.8] text-justify">
            Trabajamos con negocios en todas las zonas de Talcahuano y alrededores: <strong className="text-[var(--color-accent)]">Puerto de Talcahuano</strong> (suministros navales, agencias marítimas), <strong className="text-[var(--color-accent)]">Base Naval</strong> (servicios militares), <strong className="text-[var(--color-accent)]">Terminal Pesquero</strong> (comercializadoras pescado, restaurantes mariscos), <strong className="text-[var(--color-accent)]">ASMAR</strong> (talleres industriales, metalmecánica), <strong className="text-[var(--color-accent)]">Higueras</strong> (comercio residencial), <strong className="text-[var(--color-accent)]">El Morro</strong>, <strong className="text-[var(--color-accent)]">Las Salinas</strong>, <strong className="text-[var(--color-accent)]">Gaete</strong>, sector industrial, Hualpencillo, Tumbes.
          </p>
          <p className="text-xl leading-[1.8] text-justify">
            También atendemos empresas en zonas portuarias cercanas: <strong className="text-[var(--color-accent)]">San Vicente</strong> (industria forestal, puerto maderero), <strong className="text-[var(--color-accent)]">Penco</strong> (industria, comercio), <strong className="text-[var(--color-accent)]">Lirquén</strong> (puerto, logística), <strong className="text-[var(--color-accent)]">Tomé</strong> (pesca, textil), <strong className="text-[var(--color-accent)]">Coronel</strong> (minería, puerto).
          </p>
        </section>
      </article>

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 md:p-16 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta Especial <CurrentMonth /> <CurrentYear /></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Digitalizar tu Negocio en Talcahuano?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Únete a empresas portuarias e industriales de Talcahuano que generan clientes desde Google. Cotiza sin compromiso:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Cotización gratis</p>
              <p className="text-xs text-[var(--color-muted)]">Respuesta en 24h</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ SEO local incluido</p>
              <p className="text-xs text-[var(--color-muted)]">Aparece en Google</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Soporte continuo</p>
              <p className="text-xs text-[var(--color-muted)]">Actualizaciones gratis</p>
            </div>
          </div>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Mi Sitio Web Ahora →
          </Link>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⚓ Especializados en negocios portuarios • Puerto, ASMAR, Terminal Pesquero
          </p>
        </div>
      </div>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Alma Media - Diseño Web Talcahuano",
        "description": "Diseño web profesional en Talcahuano. Especializados en negocios portuarios, industria naval, pesca y comercio marítimo.",
        "url": "https://almamedia.cl/diseno-web-talcahuano",
        "telephone": "+56412345678",
        "email": "contacto@almamedia.cl",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Talcahuano",
          "addressRegion": "Región del Biobío",
          "addressCountry": "CL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -36.7166,
          "longitude": -73.1166
        },
        "areaServed": {
          "@type": "City",
          "name": "Talcahuano"
        },
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00",
        "sameAs": [
          "https://www.facebook.com/almamedia",
          "https://www.instagram.com/almamedia",
          "https://www.linkedin.com/company/almamedia"
        ]
      })}} />
    </>
  );
}
