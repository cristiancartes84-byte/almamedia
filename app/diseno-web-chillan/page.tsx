import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diseño Web Chillán 2026 | Sitios WordPress Profesionales desde $169.000',
  description: 'Diseño web profesional en Chillán. Sitios WordPress responsive, rápidos y optimizados. Landing pages, sitios corporativos, ecommerce. Desde $169.000/año.',
  keywords: 'diseño web Chillán, diseño web Ñuble, páginas web Chillán, sitios WordPress Chillán',
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
    canonical: '/diseno-web-chillan',
  },
  openGraph: {
    title: 'Diseño Web Chillán 2026 | Sitios WordPress Profesionales',
    description: 'Diseño web profesional en Chillán. WordPress responsive desde $169.000/año.',
    url: 'https://almamedia.cl/diseno-web-chillan',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web Chillán 2026',
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

export default function DisenoWebChillanPage() {
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
            "name": "Diseño Web Chillán",
            "description": "Diseño web profesional en Chillán. Sitios WordPress responsive, landing pages, sitios corporativos, ecommerce.",
            "provider": {
              "@type": "Organization",
              "name": "Alma Media"
            },
            "areaServed": {
              "@type": "City",
              "name": "Chillán"
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
          <span>Chillán</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🌾 Diseño Web Chillán</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web Profesional en Chillán
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Diseño web profesional en Chillán,</strong> capital de la Región de Ñuble. Más de 180.000 habitantes, centro agrícola, gastronómico y turístico. Ofrecemos <Link href="/diseno-web" className="text-[var(--color-accent)] hover:underline">diseño web WordPress</Link> desde $169.000/año con hosting incluido, sitios corporativos desde $390.000, ecommerce completo desde $590.000. Sitios responsive optimizados para mobile, carga menor a 2 segundos, SEO base incluido, Google Analytics configurado, formularios de contacto, integración WhatsApp Business. Ideal para agricultura (maquinaria agrícola, insumos, asesoría), gastronomía (restaurant, café, pastelería), turismo (termas, cabañas, hoteles), comercio (retail, ferreterías, repuestos), servicios profesionales (abogados, contadores, arquitectos). +50 empresas chillanejas confían en nuestros diseños. Atendemos Chillán centro, Chillán Viejo, Valle Hermoso.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Sitio Web →
        </Link>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Tipos de Sitios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Tipos de Sitios Web para Chillán</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Página única enfocada en conversión. Ideal para servicios específicos, campañas, productos. Formulario destacado, llamados a acción claros.
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
                Sitio completo multipágina. Servicios, nosotros, contacto, blog. Ideal para empresas, servicios profesionales, comercios.
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
                Tienda online completa con WooCommerce. Pasarelas de pago chilenas, catálogo productos, carrito, checkout optimizado.
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

        {/* Por qué Chillán necesita web */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué tu Negocio en Chillán Necesita un Sitio Web?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Chillán es la capital de la Región de Ñuble</strong> con más de 180.000 habitantes y economía diversa: agricultura (cereales, hortalizas, frutales), gastronomía (longaniza chillanejeña reconocida a nivel nacional), turismo termal (Nevados de Chillán, Termas), comercio regional. El 82% de chillanejos busca en Google antes de comprar productos o contratar servicios locales. Negocios sin sitio web pierden clientes que contratan a competidores que SÍ tienen presencia digital profesional.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Turismo en Chillán genera demanda constante de servicios con presencia web.</strong> Visitantes que vienen a Nevados de Chillán, Termas de Chillán, Feria de Chillán buscan online: "restaurant Chillán centro", "arriendo cabañas Chillán Viejo", "pastelería longaniza chillaneja". Sitio web optimizado para búsquedas locales convierte turistas en clientes. Google Business Profile + web profesional = visibilidad 24/7 para turismo gastronómico, alojamiento, servicios.
            </p>
          </div>
        </section>

        {/* Sectores de Chillán */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-center text-[var(--color-accent)]">Diseño Web para Sectores de Chillán</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🌾 Agricultura</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Webs para maquinaria agrícola, venta de insumos, asesoría técnica, riego tecnificado. Catálogos digitales, cotizador online.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🍽️ Gastronomía</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Webs para restaurants, cafeterías, pastelerías, productores longaniza chillaneja. Menú digital, reservas, delivery.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏔️ Turismo</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Webs para hoteles, cabañas, termas, tour operadores. Motor de reservas, galería fotos, disponibilidad en línea.
              </p>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏪 Comercio</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Webs para retail, ferreterías, repuestos, insumos. Ecommerce, catálogo digital, cotizador, WhatsApp integrado.
              </p>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-center text-[var(--color-accent)]">Precios Diseño Web Chillán</h2>

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
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto demora el diseño de un sitio web en Chillán?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Landing page: 7-10 días hábiles. Sitio corporativo: 15-20 días. Ecommerce: 25-30 días. Incluye diseño, desarrollo, contenido, capacitación y pruebas. Plazos dependen de entrega oportuna de contenidos (textos, fotos, logo).
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Puedo actualizar el contenido de mi sitio web yo mismo?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Sí, todos nuestros sitios WordPress incluyen capacitación para que puedas actualizar textos, fotos, productos, agregar entradas de blog. Panel de administración intuitivo, sin conocimientos técnicos. Soporte continuo disponible si necesitas ayuda.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿El hosting está incluido en el precio?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Landing page incluye hosting primer año ($169.000 todo incluido). Sitio corporativo y ecommerce: setup único + hosting mensual ($9.900-$14.900/mes según tipo). Hosting incluye dominio .cl, email corporativo, SSL, backups diarios, soporte técnico.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Hacen reuniones presenciales en Chillán?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Sí, atendemos presencialmente en Chillán centro para levantamiento de requerimientos y capacitación. También trabajamos 100% remoto vía videollamada si prefieres. Flexibilidad total para adaptarnos a tu disponibilidad y preferencias.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué pasa si necesito agregar funcionalidades después?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Podemos agregar funcionalidades post-lanzamiento: reservas online, chat WhatsApp, calculadoras, integraciones con sistemas externos. Cotizamos por separado según complejidad. Sitio WordPress permite escalar funcionalidades sin reconstruir desde cero.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Incluyen fotografía de productos o servicios?</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">
                Fotografía profesional se cotiza por separado. Ofrecemos sesiones fotográficas en Chillán: productos desde $9.900/unidad, locales comerciales desde $99.900/sesión. Si tienes fotos propias podemos usarlas, o usamos bancos de imágenes para contenido genérico.
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
            ¿Listo para tu Sitio Web en Chillán?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Reuniones presenciales en Chillán. Cotización sin compromiso en 24 horas. Diseño profesional desde $169.000:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Sitio Web Ahora →
          </Link>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⭐ +50 empresas en Chillán • Reuniones presenciales • Desde $169.000
          </p>
        </div>

      </article>
    </>
  );
}
