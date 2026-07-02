import ParticlesBackground from '@/components/Particles';
import FeatureCard from '@/components/FeatureCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import Link from 'next/link';

export const metadata = {
  title: 'Diseño Web Profesional en Concepción 2026 | WordPress Rápido - Alma Media',
  description: 'Diseño web profesional en Concepción. WordPress optimizado, carga en <2s, SEO incluido. Desde $169k/año. +45 webs exitosas. Cotiza gratis.',
  keywords: 'diseño web Concepción, diseño web profesional Chile, WordPress Concepción, sitio web Biobío, diseño web responsive, página web empresa',
  openGraph: {
    title: 'Diseño Web Profesional en Concepción | WordPress que Vende',
    description: 'Diseño web profesional en Concepción: WordPress optimizado, rápido y enfocado en conversión. +45 proyectos exitosos.',
    type: 'website',
    url: 'https://almamedia.cl/diseno-web',
    images: [{
      url: 'https://almamedia.cl/img/diseno-web-concepcion.jpg',
      width: 1200,
      height: 630,
      alt: 'Diseño web profesional en Concepción - Alma Media'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web Profesional en Concepción | Alma Media',
    description: 'WordPress optimizado, rápido y enfocado en conversión. Desde $169k/año.',
    images: ['https://almamedia.cl/img/diseno-web-concepcion.jpg']
  },
  alternates: {
    canonical: 'https://almamedia.cl/diseno-web'
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
    }
  }
};

export default function DisenoWebPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Diseño Web Profesional en Concepción</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-16 text-center px-4 md:px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">Diseño Web Profesional en Concepción</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web Profesional en Concepción: WordPress Rápido que Genera Ventas
        </h1>

        {/* Featured Snippet Optimization */}
        <div className="max-w-3xl mx-auto mb-8 bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-6">
          <p className="text-lg md:text-xl leading-[1.8]">
            <strong className="text-[var(--color-accent)]">El diseño web profesional en Concepción</strong> es el proceso de crear sitios web WordPress optimizados para velocidad, SEO y conversión. En Alma Media diseñamos webs que cargan en menos de 2 segundos y están enfocadas en generar clientes para tu negocio.
          </p>
        </div>

        <p className="text-base md:text-lg lg:text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Creamos <strong className="text-white">sitios web profesionales en Concepción y Biobío</strong>: rápidos, optimizados para Google y diseñados para convertir visitas en clientes reales. Diseño web que vende, no solo "se ve bonito".
        </p>
        <div className="flex gap-3 md:gap-4 justify-center flex-wrap px-4">
          <Link href="/contacto" className="px-6 md:px-8 py-3 md:py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            🚀 Cotizar Mi Sitio Web Gratis
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
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué necesitas un sitio web profesional en Concepción?</h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl leading-[1.8]">
              En 2026, <strong className="text-[var(--color-accent)] font-bold">el 93% de las decisiones de compra comienzan con una búsqueda en Google</strong>. Si tu negocio en Concepción no tiene presencia web, o tiene un sitio lento y desactualizado, estás perdiendo clientes todos los días frente a tu competencia.
            </p>
            <p className="text-lg md:text-xl leading-[1.8]">
              Un <Link href="/" className="text-[var(--color-accent)] hover:underline">diseño web profesional</Link> no es solo "estar en internet". Es tu vendedor 24/7, tu carta de presentación digital y la base de toda tu estrategia de <Link href="/seo-posicionamiento" className="text-[var(--color-accent)] hover:underline">marketing digital</Link>.
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
                <span className="text-[var(--color-muted)]">Llegas a clientes en toda la región del Biobío</span>
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
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Qué incluye nuestro diseño web profesional?</h2>
          <p className="text-lg md:text-xl mb-10 leading-[1.9] text-center max-w-3xl mx-auto">
            No hacemos sitios genéricos con plantillas baratas. Cada <strong className="text-white">diseño web en Concepción</strong> está pensado para tu negocio específico, tu audiencia y tus objetivos de conversión. Esto es lo que incluimos:
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
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Nuestro Proceso de Diseño Web en Concepción</h2>
          <p className="text-lg md:text-xl mb-10 leading-[1.9] text-center max-w-3xl mx-auto">
            Proceso transparente en 5 pasos. Sabes exactamente qué esperar en cada etapa del <strong className="text-white">diseño de tu sitio web</strong>.
          </p>

          <ProcessTimeline
            steps={[
              {
                number: 1,
                title: 'Descubrimiento',
                subtitle: 'Semana 1',
                description: 'Entrevista para entender tu negocio en Concepción, audiencia, competencia y objetivos. Definimos estructura del sitio, páginas necesarias y funcionalidades clave.',
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
          <p className="text-lg md:text-xl mb-8 leading-[1.9] text-center max-w-3xl mx-auto">
            Trabajamos principalmente con <strong className="text-[var(--color-accent)] font-bold">WordPress</strong> — el CMS más popular del mundo, usado por el 43% de todos los sitios web profesionales.
          </p>

          <h3 className="text-xl md:text-2xl font-bold mb-6 mt-10">¿Por qué WordPress para tu sitio web?</h3>
          <ul className="space-y-4 mt-6 text-base md:text-lg">
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Flexible y escalable:</strong> Desde landing page simple hasta ecommerce complejo con cientos de productos</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Fácil de usar:</strong> Puedes editar contenido sin saber programar. Interfaz intuitiva.</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">SEO-friendly:</strong> Excelente estructura para <Link href="/seo-posicionamiento" className="text-[var(--color-accent)] hover:underline">posicionamiento en Google</Link></li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Miles de plugins:</strong> Funcionalidades adicionales cuando las necesites (reservas, membresías, etc.)</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Comunidad enorme:</strong> Soporte y recursos ilimitados en español</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold mb-6 mt-10">También trabajamos con:</h3>
          <ul className="space-y-4 mt-6 text-base md:text-lg">
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Shopify:</strong> Para ecommerce que necesitan empezar a vender rápido sin complicaciones técnicas</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">HTML/CSS puro:</strong> Para landing pages ultra-rápidas y optimizadas al máximo</li>
          </ul>

          <p className="text-[var(--color-muted)] mt-8 italic text-base md:text-lg">
            Nota: Shopify requiere plan mensual pagado por el cliente según tarifa vigente de Shopify ($29-299 USD/mes).
          </p>
        </section>

        {/* Precios */}
        <section id="precios" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precios de Diseño Web en Concepción</h2>
          <p className="text-lg md:text-xl mb-10 leading-[1.9] text-center max-w-3xl mx-auto">
            Precios transparentes para <strong className="text-white">diseño web profesional en Concepción</strong>. Sin sorpresas ni costos ocultos. Lo que ves es lo que pagas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Landing Page */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$169.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP/año (incluye hosting + dominio)</p>
              <ul className="space-y-2 text-left text-sm md:text-base">
                <li>✓ 1 página optimizada</li>
                <li>✓ Diseño responsive</li>
                <li>✓ SEO base</li>
                <li>✓ Formulario contacto</li>
                <li>✓ Hosting + dominio .cl</li>
                <li>✓ SSL (HTTPS) incluido</li>
              </ul>
              <Link href="/contacto" className="mt-6 block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar Landing Page
              </Link>
            </div>

            {/* Sitio Corporativo */}
            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all relative">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Sitio Corporativo</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$390.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP (pago único)</p>
              <ul className="space-y-2 text-left text-sm md:text-base">
                <li>✓ Hasta 5 páginas</li>
                <li>✓ Diseño personalizado</li>
                <li>✓ WordPress completo</li>
                <li>✓ SEO optimizado</li>
                <li>✓ Analytics + formularios</li>
                <li>✓ Capacitación incluida</li>
                <li>✓ 1 mes soporte gratis</li>
              </ul>
              <Link href="/contacto" className="mt-6 block text-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-all">
                Cotizar Sitio Corporativo
              </Link>
            </div>

            {/* Ecommerce */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Ecommerce</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $590.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP (según productos)</p>
              <ul className="space-y-2 text-left text-sm md:text-base">
                <li>✓ WordPress + WooCommerce</li>
                <li>✓ O Shopify</li>
                <li>✓ Pagos online (Webpay/Flow)</li>
                <li>✓ Gestión de productos</li>
                <li>✓ Carro de compra</li>
                <li>✓ Envíos configurados</li>
                <li>✓ Capacitación ecommerce</li>
              </ul>
              <Link href="/contacto" className="mt-6 block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar Ecommerce
              </Link>
            </div>
          </div>

          <div className="text-center mt-12 bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-6">
            <p className="text-[var(--color-accent)] font-bold mb-2">🎁 OFERTA: Auditoría SEO Gratuita</p>
            <p className="text-[var(--color-muted)]">Con cada cotización de diseño web, incluimos una auditoría SEO básica gratis (valor $50.000)</p>
          </div>
        </section>

        {/* Garantía */}
        <section id="garantia" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Nuestra Garantía de Diseño Web</h2>
          <p className="text-lg md:text-xl mb-8 leading-[1.9] text-center max-w-3xl mx-auto">
            Estamos tan seguros de la calidad de nuestro <strong className="text-white">diseño web profesional</strong> que ofrecemos:
          </p>

          <ul className="space-y-4 text-base md:text-lg">
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">1 mes de soporte post-lanzamiento:</strong> Cualquier ajuste o corrección sin costo adicional</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Garantía de velocidad:</strong> Si tu sitio web carga en más de 3 segundos, lo optimizamos gratis</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Revisiones ilimitadas:</strong> Durante la etapa de diseño, ajustamos hasta que estés 100% satisfecho</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Garantía mobile-friendly:</strong> Tu sitio se verá perfecto en todos los dispositivos o lo arreglamos</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-[var(--color-accent)] text-center">Preguntas Frecuentes sobre Diseño Web</h2>

          <div className="space-y-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-4">¿Cuánto tarda en estar listo mi sitio web en Concepción?</h3>
              <p className="text-base md:text-lg leading-[1.8] text-[var(--color-muted)]">
                <strong className="text-white">Landing page: 1-2 semanas.</strong> Sitio corporativo: 4-5 semanas. Ecommerce: 6-8 semanas. El tiempo exacto depende del alcance del proyecto y de la rapidez con que proporciones contenidos (textos, fotos, logos).
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-4">¿Puedo actualizar el sitio web yo mismo después del diseño?</h3>
              <p className="text-base md:text-lg leading-[1.8] text-[var(--color-muted)]">
                <strong className="text-white">Sí, completamente.</strong> WordPress es muy intuitivo. Te damos capacitación de 1 hora para que puedas editar textos, subir fotos, crear entradas de blog sin ayuda. Para cambios de diseño o funcionalidad compleja, podemos hacerlos nosotros con cotización aparte.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-4">¿El hosting y dominio están incluidos en el precio?</h3>
              <p className="text-base md:text-lg leading-[1.8] text-[var(--color-muted)]">
                <strong className="text-white">En el Pack Web anual ($169.000/año), sí está todo incluido.</strong> En sitios corporativos y ecommerce, el diseño es pago único pero el hosting es aparte (desde $35.000/año). Podemos contratarlo nosotros o puedes usar tu hosting actual si ya tienes uno.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-4">¿Qué pasa si quiero agregar funcionalidades después al sitio web?</h3>
              <p className="text-base md:text-lg leading-[1.8] text-[var(--color-muted)]">
                <strong className="text-white">Podemos agregar lo que necesites:</strong> blog, galería, sistema de reservas, membresías, pagos recurrentes, chat en vivo, etc. Se cotiza según complejidad. La mayoría de funcionalidades se pueden agregar sin rediseñar todo el sitio.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-4">¿Trabajan con negocios de todo Chile o solo Concepción?</h3>
              <p className="text-base md:text-lg leading-[1.8] text-[var(--color-muted)]">
                <strong className="text-white">Atendemos empresas en todo Chile.</strong> Aunque estamos en Concepción, todo el proceso de diseño web puede ser 100% remoto. Trabajamos con negocios desde Arica a Punta Arenas. Solo necesitamos videollamadas y email para coordinar.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all">
              <h3 className="text-xl md:text-2xl font-bold mb-4">¿El diseño web incluye SEO o hay que pagarlo aparte?</h3>
              <p className="text-base md:text-lg leading-[1.8] text-[var(--color-muted)]">
                <strong className="text-white">Incluimos SEO base sin costo extra:</strong> meta tags, títulos optimizados, sitemap, URLs amigables, schema básico. Para <Link href="/seo-posicionamiento" className="text-[var(--color-accent)] hover:underline">SEO avanzado</Link> (contenido mensual, link building, posicionamiento agresivo) tenemos planes desde $195.000/mes.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 mb-20">
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#151515] border-2 border-[var(--color-accent)] rounded-2xl p-8 md:p-16 text-center hover:shadow-[0_20px_60px_rgba(200,255,0,0.2)] transition-all">
          <h2 className="text-3xl md:text-4xl font-black mb-6">¿Listo para lanzar tu sitio web profesional en Concepción?</h2>
          <p className="text-lg md:text-xl text-[var(--color-muted)] mb-10 leading-[1.8] max-w-2xl mx-auto">
            Cotiza tu proyecto de <strong className="text-white">diseño web</strong> sin compromiso. Te respondemos en menos de 24 horas con una propuesta personalizada y presupuesto detallado.
          </p>
          <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
            <Link href="/contacto" className="px-6 md:px-8 py-3 md:py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all hover:scale-105">
              🚀 Cotizar Mi Sitio Web Ahora
            </Link>
            <Link href="/seo-posicionamiento" className="px-6 md:px-8 py-3 md:py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
              Ver Servicios de SEO
            </Link>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⭐ +45 sitios web exitosos en Concepción y Biobío • Respuesta en 24 horas
          </p>
        </div>
      </div>

      {/* Schema.org JSON-LD - Service + LocalBusiness + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "serviceType": "Diseño Web Profesional",
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
                "@type": "LocalBusiness",
                "name": "Alma Media - Diseño Web Concepción",
                "description": "Agencia de diseño web profesional en Concepción. Sitios WordPress rápidos, optimizados para SEO y enfocados en conversión.",
                "url": "https://almamedia.cl/diseno-web",
                "telephone": "+56-9-1234-5678",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Concepción",
                  "addressRegion": "Biobío",
                  "addressCountry": "CL"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "-36.8201",
                  "longitude": "-73.0444"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                "priceRange": "$$$",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "45"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Cuánto tarda en estar listo mi sitio web en Concepción?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Landing page: 1-2 semanas. Sitio corporativo: 4-5 semanas. Ecommerce: 6-8 semanas. Depende del alcance y de la rapidez con que proporciones contenidos."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿El hosting y dominio están incluidos en el precio?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "En el Pack Web anual ($169.000/año), sí. En sitios corporativos y ecommerce, el hosting es aparte (desde $35.000/año)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Puedo actualizar el sitio web yo mismo después?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sí. WordPress es muy intuitivo. Te damos capacitación de 1 hora para que puedas editar textos, subir fotos y crear entradas de blog sin programar."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
    </>
  );
}
