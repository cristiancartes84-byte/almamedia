import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Local Chile 2026 | Google Maps + Reseñas $95k/mes',
  description: 'SEO Local profesional. Google Business Profile optimizado, gestión de reseñas, citaciones. Aparece en "cerca de mí". Desde $95k/mes. Cotiza gratis.',
  keywords: 'SEO local Chile, Google Maps Chile, Google Business Profile, SEO local Concepción, posicionamiento local, reseñas Google, citaciones locales, SEO cerca de mi, optimización Google Maps',
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
    canonical: '/seo-local',
  },
  openGraph: {
    title: 'SEO Local Chile 2026 | Google Maps + Reseñas $95k/mes',
    description: 'SEO Local profesional. Google Business Profile optimizado, gestión de reseñas, citaciones. Desde $95k/mes.',
    url: 'https://almamedia.cl/seo-local',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Local Chile 2026 | Google Maps + Reseñas $95k/mes',
    description: 'SEO Local profesional. Google Business Profile optimizado, gestión de reseñas. Desde $95k/mes.',
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

export default function SEOLocalPage() {
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
                "name": "SEO Local Chile",
                "description": "Servicio profesional de SEO Local en Chile. Optimización de Google Business Profile, gestión de reseñas, citaciones locales y estrategia de posicionamiento para aparecer en Google Maps y búsquedas locales.",
                "provider": {
                  "@type": "Organization",
                  "name": "Alma Media",
                  "url": "https://almamedia.cl"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Chile"
                },
                "offers": {
                  "@type": "Offer",
                  "name": "SEO Local Mensual",
                  "price": "95000",
                  "priceCurrency": "CLP"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Qué es el SEO Local?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "El SEO Local es la optimización de tu presencia digital para aparecer en Google Maps y búsquedas con intención local (\"cerca de mí\", \"servicio + ciudad\"). Incluye optimización de Google Business Profile, gestión de reseñas, citaciones locales (NAP) y contenido geo-localizado."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuánto cuesta el SEO Local en Chile?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "El SEO Local en Chile tiene un costo de $95.000/mes, que incluye optimización completa de Google Business Profile, gestión de reseñas, citaciones en directorios locales, validación NAP y reportes mensuales de posicionamiento y métricas."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Qué negocios necesitan SEO Local?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Negocios con ubicación física que atienden clientes locales: restaurantes, clínicas dentales, gimnasios, peluquerías, talleres mecánicos, estudios legales, clínicas veterinarias, ferreterías, cafeterías, servicios profesionales. Si tus clientes buscan \"tu servicio + tu ciudad\", necesitas SEO Local."
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
          <span>SEO Local</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ SEO Local Chile</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          SEO Local | Aparece en Google Maps
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          <strong>El SEO Local en Chile</strong> optimiza tu negocio para aparecer en Google Maps y búsquedas con intención local como "restaurante cerca de mí" o "dentista Concepción". El 46% de búsquedas en Google tienen intención local, y el 76% de quienes buscan algo cercano visitan el negocio dentro de 24 horas. Nuestro <Link href="/seo-posicionamiento" className="text-[var(--color-accent)] hover:underline">servicio de SEO Local</Link> incluye optimización completa de Google Business Profile, gestión estratégica de reseñas, citaciones en directorios locales, validación NAP (Name, Address, Phone) y contenido geo-localizado. Desde $95.000/mes para negocios con ubicación física que atienden clientes locales. Ideal para restaurantes, clínicas, gimnasios, talleres, servicios profesionales en ciudades chilenas.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar SEO Local Gratis →
          </Link>
          <a href="#beneficios" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
            Ver Beneficios
          </a>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Qué es el SEO Local?</h2>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 mb-8">
            <p className="text-xl mb-6 leading-[1.8]">
              <strong className="text-[var(--color-accent)] font-bold">El SEO Local</strong> es la optimización de tu presencia digital para aparecer en <strong>Google Maps</strong> y búsquedas con intención geográfica. Cuando alguien busca "cafetería cerca de mí", "dentista Concepción" o "gimnasio Biobío", Google muestra el <strong>Local Pack</strong> (mapa con 3 negocios) antes que los resultados orgánicos tradicionales.
            </p>
            <p className="text-xl mb-6 leading-[1.8]">
              El <strong>SEO Local en Chile</strong> es crítico para negocios con ubicación física: el <strong>46% de búsquedas en Google tienen intención local</strong>, y el <strong>76% de personas que hacen búsquedas locales desde móvil visitan el negocio dentro de 24 horas</strong>. Aparecer en el Local Pack genera confianza inmediata y tráfico calificado de alta conversión.
            </p>
            <p className="text-xl leading-[1.8]">
              A diferencia del <Link href="/seo-posicionamiento" className="text-[var(--color-accent)] hover:underline font-semibold">SEO tradicional</Link> que compite a nivel nacional, el <strong>SEO Local compite solo en tu ciudad</strong>, lo que lo hace más accesible y rápido: puedes estar en posiciones top en 2-4 meses vs 6-12 meses del SEO nacional.
            </p>
          </div>

          <div className="text-center mb-12">
            <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              🎯 Solicitar Análisis SEO Local Gratis
            </Link>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">Componentes del SEO Local:</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">📍 Google Business Profile</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">Optimización completa de tu ficha para aparecer en Maps y Local Pack</p>
              <ul className="text-sm text-[var(--color-muted)] space-y-1">
                <li>• Información completa y precisa</li>
                <li>• Categorías estratégicas</li>
                <li>• Fotos profesionales</li>
                <li>• Posts semanales</li>
                <li>• Horarios actualizados</li>
              </ul>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">⭐ Gestión de Reseñas</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">Estrategia para conseguir y gestionar reseñas positivas</p>
              <ul className="text-sm text-[var(--color-muted)] space-y-1">
                <li>• Sistema automatizado de solicitud</li>
                <li>• Respuesta a todas las reseñas</li>
                <li>• Gestión de reseñas negativas</li>
                <li>• Monitoreo de competencia</li>
                <li>• Reportes mensuales</li>
              </ul>
            </div>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🗺️ Citaciones Locales</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">Alta en directorios y validación de datos NAP consistency</p>
              <ul className="text-sm text-[var(--color-muted)] space-y-1">
                <li>• Directorios locales chilenos</li>
                <li>• Validación NAP (nombre, dirección, teléfono)</li>
                <li>• Corrección de inconsistencias</li>
                <li>• Listados en nichos específicos</li>
                <li>• Monitoreo de citas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Beneficios del SEO Local</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">📈 Tráfico Calificado de Alta Conversión</h3>
              <p className="text-[var(--color-muted)] text-sm">
                Usuarios con intención de compra inmediata: "cerca de mí" indica urgencia. Tasas de conversión 2-3x superiores vs tráfico genérico.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">⚡ Resultados Más Rápidos</h3>
              <p className="text-[var(--color-muted)] text-sm">
                Competencia local vs nacional: 2-4 meses para estar en Local Pack vs 6-12 meses SEO tradicional. Mercado más pequeño = más rápido.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🎯 Visibilidad en el Momento Crítico</h3>
              <p className="text-[var(--color-muted)] text-sm">
                Apareces cuando el usuario está listo para comprar. 76% visita el negocio en 24h. Capturas demanda existente, no la creas.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">💰 Menor Costo que Publicidad</h3>
              <p className="text-[var(--color-muted)] text-sm">
                $95k/mes vs $150k-300k/mes en Google Ads local. Tráfico orgánico permanente sin pagar por clic. ROI superior a mediano plazo.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🏆 Ventaja Competitiva Local</h3>
              <p className="text-[var(--color-muted)] text-sm">
                Muchos negocios locales no optimizan su Google Business. Estar en Local Pack = superar a 90% de tu competencia local.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">📱 Captura Búsquedas Móviles</h3>
              <p className="text-[var(--color-muted)] text-sm">
                60% de búsquedas locales desde móvil. Google Maps es la app #1 de navegación. Estar allí = capturar tráfico en movimiento.
              </p>
            </div>
          </div>
        </section>

        {/* Tipos de Negocios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Qué Negocios Necesitan SEO Local?</h2>

          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Todo negocio con ubicación física que atiende clientes locales necesita <strong className="text-[var(--color-accent)]">SEO Local</strong>:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Salud:</strong> <span className="text-[var(--color-muted)]">Clínicas dentales, centros médicos, ópticas, veterinarias</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Gastronomía:</strong> <span className="text-[var(--color-muted)]">Restaurantes, cafés, pubs, comida rápida</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Servicios:</strong> <span className="text-[var(--color-muted)]">Peluquerías, gimnasios, talleres mecánicos, lavanderías</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Retail:</strong> <span className="text-[var(--color-muted)]">Tiendas de ropa, ferreterías, librerías, zapaterías</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Profesionales:</strong> <span className="text-[var(--color-muted)]">Estudios legales, contables, arquitectura, inmobiliarias</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Educación:</strong> <span className="text-[var(--color-muted)]">Academias, colegios, centros de idiomas, universidades</span>
              </div>
            </div>
          </div>

          <p className="text-center text-lg">
            Si tus clientes buscan <strong>"tu servicio + tu ciudad"</strong>, necesitas <Link href="/contacto" className="text-[var(--color-accent)] hover:underline font-semibold">SEO Local →</Link>
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precio SEO Local Chile 2026</h2>
          <p className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-sm font-semibold text-[var(--color-accent)]">
              ⚡ Promo <span className="capitalize"><CurrentMonth /></span>: Análisis Google Business Profile gratis + setup sin costo (valor $49k)
            </span>
          </p>
          <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 max-w-md mx-auto text-center shadow-[0_10px_30px_rgba(200,255,0,0.3)]">
            <div className="inline-block px-3 py-1 mb-4 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full text-xs font-bold">
              MÁS DEMANDADO
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">SEO Local Mensual</h3>
            <p className="text-6xl font-black text-[var(--color-accent)] mb-2">$95.000</p>
            <p className="text-[var(--color-muted)] mb-6 text-sm">CLP/mes (mínimo 3 meses)</p>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">✓</span> Optimización completa Google Business Profile</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">✓</span> Gestión activa de reseñas (solicitud + respuesta)</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">✓</span> Citaciones en 10+ directorios locales chilenos</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">✓</span> Validación y corrección NAP consistency</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">✓</span> Posts semanales en Google Business</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">✓</span> Monitoreo de posiciones Local Pack</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">✓</span> Reportes mensuales con métricas</li>
              <li className="flex gap-2"><span className="text-[var(--color-accent)]">✓</span> Soporte prioritario WhatsApp</li>
            </ul>
            <p className="text-xs text-[var(--color-muted)] italic mb-6">
              Ideal para: negocios locales con 1-3 ubicaciones que buscan aparecer en Google Maps
            </p>
            <Link href="/contacto" className="inline-block w-full px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-all">
              Cotizar SEO Local
            </Link>
          </div>
          <p className="text-center mt-8">
            💬 <strong>¿Tienes múltiples sucursales?</strong>{' '}
            <Link href="/contacto" className="text-[var(--color-accent)] hover:underline font-semibold">
              Solicita plan multi-ubicación personalizado →
            </Link>
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-center text-[var(--color-accent)]">Preguntas Frecuentes sobre SEO Local</h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué es el SEO Local?</h3>
              <p className="text-lg leading-relaxed">
                El <strong>SEO Local</strong> es la optimización de tu presencia digital para aparecer en <strong>Google Maps</strong> y búsquedas con intención local (\"cerca de mí\", \"servicio + ciudad\"). Incluye optimización de Google Business Profile, gestión de reseñas, citaciones locales (NAP consistency) y contenido geo-localizado para capturar clientes en tu área geográfica.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto cuesta el SEO Local en Chile?</h3>
              <p className="text-lg leading-relaxed">
                El <strong>SEO Local en Chile</strong> tiene un costo de <strong>$95.000/mes</strong> con compromiso mínimo de 3 meses, que incluye optimización completa de Google Business Profile, gestión activa de reseñas (solicitud automatizada + respuesta), citaciones en 10+ directorios locales chilenos, validación NAP, posts semanales en Google Business, monitoreo de posiciones en Local Pack y reportes mensuales detallados.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué negocios necesitan SEO Local?</h3>
              <p className="text-lg leading-relaxed">
                Cualquier negocio con <strong>ubicación física que atiende clientes locales</strong>: restaurantes, cafeterías, clínicas dentales, gimnasios, peluquerías, talleres mecánicos, estudios legales, clínicas veterinarias, ferreterías, tiendas retail, servicios profesionales, centros educativos. Si tus clientes buscan \"tu servicio + tu ciudad\" o \"cerca de mí\", necesitas SEO Local para capturar esa demanda.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto tiempo demora aparecer en Google Maps?</h3>
              <p className="text-lg leading-relaxed">
                Con <strong>SEO Local profesional</strong>, puedes aparecer en el <strong>Local Pack</strong> (mapa con 3 negocios) en <strong>2-4 meses</strong> en promedio. Mejoras iniciales (más visibilidad, mejor posición) se ven en 4-6 semanas. El tiempo depende de: competencia local, estado actual de Google Business Profile, cantidad/calidad de reseñas, y consistencia NAP en directorios.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Las reseñas de Google afectan el SEO Local?</h3>
              <p className="text-lg leading-relaxed">
                Sí, las <strong>reseñas de Google</strong> son uno de los factores de ranking más importantes para SEO Local. Google considera: <strong>cantidad de reseñas</strong> (más = mejor), <strong>rating promedio</strong> (4.0+ es óptimo), <strong>recencia</strong> (reseñas recientes tienen más peso), y <strong>palabras clave en reseñas</strong>. Gestionar reseñas activamente (solicitar + responder) puede mejorar tu posición en 2-5 lugares en el Local Pack.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué es NAP consistency y por qué importa?</h3>
              <p className="text-lg leading-relaxed">
                <strong>NAP consistency</strong> significa que tu <strong>Name</strong> (nombre del negocio), <strong>Address</strong> (dirección) y <strong>Phone</strong> (teléfono) sean idénticos en todos los directorios y plataformas donde apareces (Google Business, Facebook, directorios locales, tu sitio web). Inconsistencias confunden a Google y reducen tu ranking local. Ejemplo: \"Café Central\" vs \"Central Café\" o \"Calle 123\" vs \"C/ 123\" son inconsistencias que debes corregir.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 md:p-16 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta Especial <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Dominar Google Maps?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            Únete a <strong className="text-[var(--color-accent)]">30+ negocios locales</strong> que ya capturan clientes desde Google Maps. Análisis gratuito de tu Google Business Profile:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Análisis Google Business</p>
              <p className="text-xs text-[var(--color-muted)]">Gratis (valor $49k)</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Análisis de competencia local</p>
              <p className="text-xs text-[var(--color-muted)]">Tu posición vs top 3</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Setup sin costo</p>
              <p className="text-xs text-[var(--color-muted)]">Primera optimización incluida</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold text-lg rounded-lg hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
              🚀 Solicitar Análisis Gratis
            </Link>
            <Link href="/seo-posicionamiento" className="inline-block px-10 py-5 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-bold text-lg rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
              Ver SEO Nacional
            </Link>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⏰ Promo válida solo para los primeros 5 análisis de <CurrentMonth /> • Sin compromiso • Respuesta en 24 horas
          </p>
        </div>
      </div>
    </>
  );
}
