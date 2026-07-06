import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios Marketing Digital Chile 2026 | Alma Media',
  description: 'Servicios completos de marketing digital: Diseño Web, SEO, Fotografía y Video de Producto, Packs Completos. Desde $199.000. Región del Biobío.',
  keywords: 'servicios marketing digital, agencia marketing digital Chile, diseño web SEO fotografía video, marketing digital Biobío',
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
    canonical: '/servicios',
  },
  openGraph: {
    title: 'Servicios Marketing Digital Chile 2026 | Alma Media',
    description: 'Servicios completos: Diseño Web, SEO, Fotografía y Video de Producto, Packs Completos.',
    url: 'https://almamedia.cl/servicios',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Marketing Digital Chile 2026',
    description: 'Diseño Web, SEO, Fotografía y Video de Producto, Packs Completos.',
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

export default function ServiciosPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Servicios de Marketing Digital Alma Media",
            "description": "Servicios profesionales de marketing digital: diseño web, SEO, fotografía de producto, video marketing y packs completos.",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "name": "Diseño Web Profesional",
                  "url": "https://almamedia.cl/diseno-web"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "name": "SEO Posicionamiento",
                  "url": "https://almamedia.cl/seo-posicionamiento"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "name": "Fotografía de Producto",
                  "url": "https://almamedia.cl/fotografia-producto"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Service",
                  "name": "Video de Producto",
                  "url": "https://almamedia.cl/video-producto"
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Service",
                  "name": "Packs Completos",
                  "url": "https://almamedia.cl/packs-completos"
                }
              }
            ]
          })
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Servicios</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🚀 Servicios Completos</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Servicios de Marketing Digital Profesional
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Servicios completos de marketing digital en Chile:</strong> diseño web WordPress, SEO posicionamiento Google, fotografía de producto profesional, video marketing, y packs completos que combinan múltiples servicios con ahorro hasta 40%. Atendemos empresas en toda la Región del Biobío: Concepción, Talcahuano, San Pedro, Los Ángeles, Chillán. Más de 200 clientes confían en nuestros servicios integrados para vender más online. Desde landing pages $199.000/año hasta ecommerce completo con SEO mensual, fotografía y video. Soluciones personalizadas para cada tipo de negocio: retail, servicios profesionales, industria, turismo, gastronomía, salud, educación.
        </p>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Grid de Servicios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Nuestros Servicios</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Diseño Web */}
            <Link href="/diseno-web" className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">Diseño Web</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">Sitios WordPress profesionales, rápidos y optimizados para conversión. Landing pages, sitios corporativos, ecommerce.</p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ WordPress responsive</li>
                <li>✓ Carga &lt;2 segundos</li>
                <li>✓ SEO base incluido</li>
                <li>✓ Google Analytics</li>
              </ul>
              <div className="text-[var(--color-accent)] font-bold">Desde $199.000/año →</div>
            </Link>

            {/* SEO */}
            <Link href="/seo-posicionamiento" className="group bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 transition-all relative">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS DEMANDADO
              </div>
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">SEO Posicionamiento</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">Posicionamiento en Google para que te encuentren cuando buscan lo que vendes. Tráfico orgánico constante.</p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Auditoría SEO completa</li>
                <li>✓ Optimización técnica</li>
                <li>✓ Contenido mensual</li>
                <li>✓ Link building</li>
              </ul>
              <div className="text-[var(--color-accent)] font-bold">Desde $249.000/mes →</div>
            </Link>

            {/* SEO Local */}
            <Link href="/seo-local" className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-6">📍</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">SEO Local</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">Aparecer en Google Maps y búsquedas locales. Optimización Google Business Profile, reseñas, citaciones.</p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Google Business Profile</li>
                <li>✓ Gestión de reseñas</li>
                <li>✓ Citaciones locales</li>
                <li>✓ Maps ranking</li>
              </ul>
              <div className="text-[var(--color-accent)] font-bold">Incluido en SEO →</div>
            </Link>

            {/* Fotografía */}
            <Link href="/fotografia-producto" className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-6">📸</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">Fotografía Producto</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">Fotos profesionales que aumentan conversión 35%. Fondo blanco para ecommerce, lifestyle para redes sociales.</p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Fondo blanco $9.900/producto</li>
                <li>✓ Lifestyle $14.900/producto</li>
                <li>✓ Retoque profesional</li>
                <li>✓ Alta resolución</li>
              </ul>
              <div className="text-[var(--color-accent)] font-bold">Desde $9.900/producto →</div>
            </Link>

            {/* Video */}
            <Link href="/video-producto" className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-6">🎥</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">Video Producto</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">Videos que aumentan conversión 80%. Para Instagram, TikTok, ecommerce. Grabación 4K, edición profesional.</p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Video básico $19.900</li>
                <li>✓ Video premium $39.900</li>
                <li>✓ Edición + música</li>
                <li>✓ Formatos multiplataforma</li>
              </ul>
              <div className="text-[var(--color-accent)] font-bold">Desde $19.900/video →</div>
            </Link>

            {/* Packs */}
            <Link href="/packs-completos" className="group bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-6">📦</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">Packs Completos</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">Combina Web + SEO + Foto + Video. Ahorra hasta 40% vs servicios separados. Solución todo-en-uno.</p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Pack Web $199.000/año</li>
                <li>✓ Pack Visual $199.000</li>
                <li>✓ Pack Todo-en-Uno $399.000</li>
                <li>✓ Ahorro 30-40%</li>
              </ul>
              <div className="text-[var(--color-accent)] font-bold">Ver Packs →</div>
            </Link>

          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Elegir Alma Media?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Servicios integrados que funcionan mejor juntos.</strong> No somos una agencia que solo hace diseño web o solo SEO — ofrecemos la solución completa: diseñamos tu sitio web pensando en SEO desde el inicio, optimizamos fotos de producto con nombres de archivo y alt text para posicionamiento, cargamos videos con lazy loading para no afectar velocidad. Esta integración aumenta conversión 35% vs servicios descoordinados de múltiples proveedores.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Un solo punto de contacto, un solo equipo.</strong> En lugar de coordinar 4 proveedores diferentes (diseñador web, fotógrafo, productor de video, especialista SEO), tienes un solo equipo que conoce tu marca, tu audiencia y tus objetivos. Esto acelera ejecución, evita errores de comunicación, y permite que todos los servicios estén alineados estratégicamente para maximizar resultados y ROI.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 md:p-16 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Vender Más Online?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Cotiza el servicio que necesitas o un pack completo. Respuesta en 24 horas con propuesta personalizada:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Servicios Ahora →
          </Link>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⭐ +200 clientes satisfechos • Respuesta en 24h • Región del Biobío
          </p>
        </div>

      </article>
    </>
  );
}
