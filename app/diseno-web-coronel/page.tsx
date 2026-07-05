import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diseño Web Coronel 2026 | Sitios WordPress Profesionales desde $169.000',
  description: 'Diseño web profesional en Coronel. Sitios WordPress responsive para industria, comercio, pesca, servicios. Landing pages, ecommerce. Desde $169.000/año.',
  keywords: 'diseño web Coronel, diseño web Biobío, páginas web Coronel, sitios WordPress Coronel',
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
    canonical: '/diseno-web-coronel',
  },
  openGraph: {
    title: 'Diseño Web Coronel 2026 | Sitios WordPress Profesionales',
    description: 'Diseño web profesional en Coronel. WordPress responsive desde $169.000/año.',
    url: 'https://almamedia.cl/diseno-web-coronel',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web Coronel 2026',
    description: 'Diseño web profesional. WordPress responsive desde $169.000/año.',
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

export default function DisenoWebCoronelPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Diseño Web Coronel",
            "description": "Diseño web profesional en Coronel. Sitios WordPress responsive para industria, comercio, pesca, turismo costero.",
            "provider": {
              "@type": "Organization",
              "name": "Alma Media"
            },
            "areaServed": {
              "@type": "City",
              "name": "Coronel"
            },
            "offers": {
              "@type": "Offer",
              "price": "169000",
              "priceCurrency": "CLP"
            }
          })
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/diseno-web" className="hover:text-[var(--color-accent)] transition-colors">Diseño Web</Link>
          <span className="mx-2">/</span>
          <span>Coronel</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🏖️ Diseño Web Coronel</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web Profesional en Coronel
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Diseño web profesional en Coronel,</strong> ciudad costera de la Provincia de Concepción con más de 116.000 habitantes. Economía basada en turismo costero, pesca artesanal, industria y comercio regional. Ofrecemos <Link href="/diseno-web" className="text-[var(--color-accent)] hover:underline">diseño web WordPress</Link> desde $169.000/año con hosting incluido, sitios corporativos desde $390.000, ecommerce completo desde $590.000. Sitios responsive optimizados para mobile, carga menor a 2 segundos, SEO base incluido, Google Analytics configurado, integración WhatsApp Business. Ideal para turismo (playas Maule, Playa Blanca, Escuadrón), pesca artesanal, comercio local, servicios, gastronomía. +40 empresas coronelinas confían en nuestros diseños. Atendemos Coronel centro, Maule, Schwager, todo el borde costero.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Sitio Web →
        </Link>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Tipos de Sitios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Tipos de Sitios Web para Coronel</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Página única enfocada en conversión. Ideal para servicios turísticos, arriendo temporal, servicios locales. Formulario contacto destacado.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ 1 página optimizada</li>
                <li>✓ Formulario contacto</li>
                <li>✓ Hosting 1 año incluido</li>
                <li>✓ SEO base</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$169.000<span className="text-base font-normal text-[var(--color-muted)]">/año</span></div>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 relative">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Sitio Corporativo</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Sitio completo multipágina. Servicios, galería, contacto, blog. Ideal para turismo, comercio, servicios profesionales.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Hasta 10 páginas</li>
                <li>✓ Blog incluido</li>
                <li>✓ Google Analytics</li>
                <li>✓ Email corporativo</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$390.000<span className="text-base font-normal text-[var(--color-muted)]">/setup + $9.900/mes</span></div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Ecommerce</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Tienda online completa. Ideal para venta de productos del mar, artesanía local, retail. Pasarelas de pago chilenas.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ WooCommerce</li>
                <li>✓ Transbank / MercadoPago</li>
                <li>✓ Hasta 100 productos</li>
                <li>✓ Capacitación incluida</li>
              </ul>
              <div className="text-3xl font-black text-[var(--color-accent)]">$590.000<span className="text-base font-normal text-[var(--color-muted)]">/setup</span></div>
            </div>
          </div>
        </section>

        {/* Por qué Coronel necesita web */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué tu Negocio en Coronel Necesita un Sitio Web?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Coronel es una ciudad costera con turismo en crecimiento</strong> gracias a playas de arena negra volcánica (Maule, Playa Blanca, Escuadrón), patrimonio minero (Lota-Coronel), gastronomía marina. Más de 116.000 habitantes + flujo constante de turistas de fin de semana desde Gran Concepción. El 82% de turistas busca en Google antes de visitar: "playas Coronel", "cabañas Coronel", "restaurant mariscos Coronel". Negocios sin sitio web pierden clientes que reservan con competidores que SÍ tienen presencia digital.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Economía local diversa necesita digitalización para competir.</strong> Pesca artesanal (productos del mar frescos), comercio regional (ferreterías, repuestos, retail), servicios (construcción, transporte, gastronomía) compiten con oferta de Concepción. Sitio web profesional + SEO local permite a negocios coronelinos captar demanda local sin depender solo de tráfico peatonal. Ecommerce abre mercado: vender productos del mar a clientes en toda la región sin intermediarios.
            </p>
          </div>
        </section>

        {/* Sectores de Coronel */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-center text-[var(--color-accent)]">Diseño Web para Sectores de Coronel</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏖️ Turismo Costero</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Webs para cabañas, hostales, arriendo temporal, tours. Galería fotos playas, motor de reservas, disponibilidad en línea.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🐟 Pesca y Gastronomía</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Webs para venta productos del mar, restaurants mariscos, cocinerías. Ecommerce, menú digital, pedidos online.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏭 Industria y Comercio</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Webs para empresas industriales, ferreterías, repuestos, transporte. Catálogos digitales, cotizador online.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🔧 Servicios Locales</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Webs para construcción, maestros, electricistas, gasfitería. Portafolio trabajos, formulario cotización.
              </p>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-center text-[var(--color-accent)]">Precios Diseño Web Coronel</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Landing Page</h3>
              <div className="text-5xl font-black text-[var(--color-accent)] mb-6">$169.000</div>
              <p className="text-sm text-[var(--color-muted)] mb-6">Hosting 1 año incluido</p>
              <ul className="text-left space-y-2 text-sm mb-6">
                <li>✓ 1 página optimizada</li>
                <li>✓ Responsive mobile</li>
                <li>✓ Formulario contacto</li>
                <li>✓ SEO base</li>
                <li>✓ Google Analytics</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 text-center relative">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Sitio Corporativo</h3>
              <div className="text-5xl font-black text-[var(--color-accent)] mb-6">$390.000</div>
              <p className="text-sm text-[var(--color-muted)] mb-6">+ $9.900/mes hosting</p>
              <ul className="text-left space-y-2 text-sm mb-6">
                <li>✓ Hasta 10 páginas</li>
                <li>✓ Blog incluido</li>
                <li>✓ Email corporativo</li>
                <li>✓ Google Analytics</li>
                <li>✓ Capacitación CMS</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ecommerce</h3>
              <div className="text-5xl font-black text-[var(--color-accent)] mb-6">$590.000</div>
              <p className="text-sm text-[var(--color-muted)] mb-6">+ $14.900/mes hosting</p>
              <ul className="text-left space-y-2 text-sm mb-6">
                <li>✓ WooCommerce</li>
                <li>✓ Pasarelas de pago</li>
                <li>✓ Hasta 100 productos</li>
                <li>✓ Carrito optimizado</li>
                <li>✓ Capacitación completa</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Preguntas Frecuentes</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Hacen webs para arriendo temporal de cabañas en Coronel?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Sí, diseñamos sitios web especializados para arriendo temporal: galería de fotos de cabañas y alrededores, calendario de disponibilidad, formulario de reserva, integración WhatsApp para consultas inmediatas, mapa con ubicación. Ideal para captar turistas que buscan "cabañas Coronel" o "arriendo Playa Maule".
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Puedo vender productos del mar online con ecommerce?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Sí, configuramos ecommerce con WooCommerce para venta de productos del mar: pescados, mariscos, conservas. Incluye pasarelas de pago (Transbank, MercadoPago), gestión de stock, opciones de envío/retiro en local, categorización por tipo de producto. Capacitación completa para gestionar catálogo y pedidos.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿El sitio aparecerá en Google Maps?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Sí, todos nuestros sitios incluyen SEO base y ayudamos a configurar Google Business Profile para aparecer en Google Maps cuando buscan tu servicio en Coronel. Esto es crítico para turismo y servicios locales: "restaurant Coronel", "cabaña Playa Blanca", "ferretería Coronel centro".
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto demora tener el sitio funcionando?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Landing page: 7-10 días hábiles. Sitio corporativo: 15-20 días. Ecommerce: 25-30 días. Incluye diseño, desarrollo, contenido, capacitación y pruebas. Plazos dependen de entrega oportuna de contenidos (textos, fotos, productos si es ecommerce).
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Hacen reuniones presenciales en Coronel?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Sí, atendemos presencialmente en Coronel para levantamiento de requerimientos y capacitación. También trabajamos 100% remoto vía videollamada si prefieres. Flexibilidad total para adaptarnos a tu disponibilidad.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Ofrecen fotografía de playas o productos?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Sí, ofrecemos sesiones fotográficas profesionales en Coronel: productos del mar desde $9.900/unidad, locales comerciales/turísticos desde $99.900/sesión, fotografía de playas para web turística. Fotos de alta calidad aumentan conversión 35% vs fotos amateur.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para tu Sitio Web en Coronel?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Reuniones presenciales en Coronel. Cotización sin compromiso en 24 horas. Diseño profesional desde $169.000:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Sitio Web Ahora →
          </Link>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⭐ +40 empresas en Coronel • Reuniones presenciales • Desde $169.000
          </p>
        </div>

      </article>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Alma Media - Diseño Web Coronel",
        "description": "Diseño web profesional en Coronel. Especializados en turismo costero, pesca artesanal, industria y comercio local.",
        "url": "https://almamedia.cl/diseno-web-coronel",
        "telephone": "+56412345678",
        "email": "contacto@almamedia.cl",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Coronel",
          "addressRegion": "Región del Biobío",
          "addressCountry": "CL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -37.0333,
          "longitude": -73.1500
        },
        "areaServed": {
          "@type": "City",
          "name": "Coronel"
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
