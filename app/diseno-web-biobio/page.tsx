import ParticlesBackground from '@/components/Particles';
import FeatureCard from '@/components/FeatureCard';
import Link from 'next/link';

export const metadata = {
  title: 'Diseño Web Biobío: Sitios que Cargan Rápido y Convierten - Alma Media',
  description: 'Diseño web profesional en Biobío: sitios WordPress rápidos, optimizados para Google y enfocados en convertir visitas en clientes. Ver precios y casos de éxito.',
  openGraph: {
    title: 'Diseño Web Biobío: Sitios que Cargan Rápido y Convierten - Alma Media',
    description: 'Diseño web profesional en Biobío: sitios WordPress rápidos, optimizados para Google y enfocados en convertir visitas en clientes.',
    type: 'website',
  }
};

export default function DisenoWebBiobioPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Diseño Web Biobío</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">Diseño Web Profesional</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web en Biobío: Sitios que Cargan Rápido y Convierten
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Creamos sitios web WordPress rápidos, optimizados para Google y enfocados en convertir visitas en clientes para empresas en Concepción, Talcahuano y toda la Región del Biobío.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Sitio Web
          </Link>
          <a href="#que-incluye" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
            Ver Qué Incluye
          </a>
        </div>
      </section>

      {/* Main Content */}
      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">

        {/* Por qué necesitas web */}
        <section id="por-que-web" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué necesitas un sitio web profesional?</h2>
          <p className="text-xl mb-8 leading-[1.9] text-justify">
            En 2026, <strong className="text-[var(--color-accent)] font-bold">el 93% de las decisiones de compra comienzan con una búsqueda en Google</strong>. Si tu negocio no tiene presencia web, o tiene un sitio lento y desactualizado, estás perdiendo clientes todos los días.
          </p>
          <p className="text-xl mb-8 leading-[1.9] text-justify">
            Un sitio web profesional no es solo "estar en internet". Es tu vendedor 24/7, tu carta de presentación digital y la base de toda tu estrategia de marketing digital.
          </p>

          <h3 className="text-2xl font-bold mb-6 mt-10">Beneficios de tener un sitio web profesional:</h3>
          <ul className="space-y-4 mt-6 text-lg">
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Credibilidad instantánea:</strong> Un sitio profesional transmite confianza y seriedad</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Ventas 24/7:</strong> Tu negocio trabaja mientras duermes</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Alcance ilimitado:</strong> Llegas a clientes en toda la región del Biobío</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Menor costo que publicidad tradicional:</strong> ROI superior a largo plazo</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Datos y métricas:</strong> Sabes exactamente qué funciona y qué no</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Escalabilidad:</strong> Crece al ritmo de tu negocio</li>
          </ul>
        </section>

        {/* Qué incluye */}
        <section id="que-incluye" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Qué incluye nuestro diseño web?</h2>
          <p className="text-xl mb-10 leading-[1.9] text-justify">
            No hacemos sitios genéricos. Cada web está pensada para tu negocio específico, tu audiencia y tus objetivos de conversión.
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
              description="Títulos, meta descriptions, headings, URLs optimizadas, sitemap, schema markup básico."
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
              description="Formulario de contacto que realmente funciona. Recibe consultas directo a tu email."
              animationType="forms"
            />

            <FeatureCard
              icon="🔒"
              title="HTTPS + Seguridad"
              description="Certificado SSL incluido, sitio seguro, backups automáticos semanales."
              animationType="security"
            />

            <FeatureCard
              icon="✏️"
              title="Fácil de Actualizar"
              description="Panel WordPress intuitivo. Puedes editar textos e imágenes tú mismo sin programar."
              animationType="update"
            />

            <FeatureCard
              icon="🌐"
              title="Hosting + Dominio"
              description="Primer año de hosting y dominio .cl incluidos en pack web anual."
              animationType="hosting"
            />
          </div>
        </section>

        {/* Proceso */}
        <section id="proceso" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Nuestro Proceso de Diseño Web</h2>
          <p className="text-xl mb-10 leading-[1.9] text-justify">
            Proceso transparente en 5 pasos. Sabes exactamente qué esperar en cada etapa.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Paso 1: Descubrimiento (Semana 1)</h3>
              <p className="text-lg leading-[1.8] text-justify">
                Entrevista para entender tu negocio, audiencia, competencia y objetivos. Definimos estructura del sitio, páginas necesarias y funcionalidades.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Paso 2: Diseño (Semana 2)</h3>
              <p className="text-lg leading-[1.8] text-justify">
                Mockup de homepage y 1-2 páginas internas para aprobación. Definimos paleta de colores, tipografías, estilo general.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Paso 3: Desarrollo (Semana 3-4)</h3>
              <p className="text-lg leading-[1.8] text-justify">
                Construcción del sitio en WordPress. Todas las páginas, formularios, optimización de velocidad, responsive design.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Paso 4: Contenido + SEO (Semana 4)</h3>
              <p className="text-lg leading-[1.8] text-justify">
                Carga de contenidos (que tú proporcionas), optimización SEO on-page, integración de Analytics, pruebas de velocidad.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Paso 5: Lanzamiento (Semana 5)</h3>
              <p className="text-lg leading-[1.8] text-justify">
                Revisión final, configuración de dominio y hosting, publicación, capacitación para que puedas administrar el sitio.
              </p>
            </div>

            <p className="text-lg mt-8 leading-[1.8]">
              <strong className="text-[var(--color-accent)] font-bold">Tiempo total:</strong> 4-5 semanas desde el pago inicial hasta el lanzamiento.
            </p>
          </div>
        </section>

        {/* Tecnologías */}
        <section id="tecnologias" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Tecnologías que Usamos</h2>
          <p className="text-xl mb-8 leading-[1.9] text-justify">
            Trabajamos principalmente con <strong className="text-[var(--color-accent)] font-bold">WordPress</strong> — el CMS más popular del mundo, usado por el 43% de todos los sitios web.
          </p>

          <h3 className="text-2xl font-bold mb-6 mt-10">¿Por qué WordPress?</h3>
          <ul className="space-y-4 mt-6 text-lg">
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Flexible y escalable:</strong> Desde landing page simple hasta ecommerce complejo</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Fácil de usar:</strong> Puedes editar contenido sin saber programar</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">SEO-friendly:</strong> Excelente para posicionamiento en Google</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Miles de plugins:</strong> Funcionalidades adicionales cuando las necesites</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Comunidad enorme:</strong> Soporte y recursos ilimitados</li>
          </ul>

          <h3 className="text-2xl font-bold mb-6 mt-10">También trabajamos con:</h3>
          <ul className="space-y-4 mt-6 text-lg">
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Shopify:</strong> Para ecommerce que necesitan empezar a vender rápido</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">HTML/CSS puro:</strong> Para landing pages ultra-rápidas</li>
          </ul>

          <p className="text-[var(--color-muted)] mt-8 italic text-lg">
            Nota: Shopify requiere plan mensual pagado por el cliente según tarifa vigente de Shopify.
          </p>
        </section>

        {/* Precios */}
        <section id="precios" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precios de Diseño Web en Biobío</h2>
          <p className="text-xl mb-10 leading-[1.9] text-justify">
            Precios transparentes. Sin sorpresas ni costos ocultos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Landing Page */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$169.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP/año (incluye hosting + dominio)</p>
              <ul className="space-y-2 text-left">
                <li>✓ 1 página optimizada</li>
                <li>✓ Diseño responsive</li>
                <li>✓ SEO base</li>
                <li>✓ Formulario contacto</li>
                <li>✓ Hosting + dominio .cl</li>
              </ul>
            </div>

            {/* Sitio Corporativo */}
            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Sitio Corporativo</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$390.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP (pago único)</p>
              <ul className="space-y-2 text-left">
                <li>✓ Hasta 5 páginas</li>
                <li>✓ Diseño personalizado</li>
                <li>✓ WordPress</li>
                <li>✓ SEO optimizado</li>
                <li>✓ Analytics + formularios</li>
                <li>✓ Capacitación incluida</li>
              </ul>
            </div>

            {/* Ecommerce */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Ecommerce</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $590.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP (según productos)</p>
              <ul className="space-y-2 text-left">
                <li>✓ WordPress + WooCommerce</li>
                <li>✓ O Shopify</li>
                <li>✓ Pagos online (Webpay/Flow)</li>
                <li>✓ Gestión de productos</li>
                <li>✓ Carro de compra</li>
                <li>✓ Envíos configurados</li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-8">
            <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              Solicitar Cotización Exacta
            </Link>
          </p>
        </section>

        {/* Garantía */}
        <section id="garantia" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Nuestra Garantía</h2>
          <p className="text-xl mb-8 leading-[1.9] text-justify">
            Estamos tan seguros de la calidad de nuestro trabajo que ofrecemos:
          </p>

          <ul className="space-y-4 text-lg">
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">1 mes de soporte post-lanzamiento:</strong> Cualquier ajuste o corrección sin costo</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Garantía de velocidad:</strong> Si tu sitio carga en más de 3 segundos, lo optimizamos gratis</li>
            <li className="leading-[1.8]"><strong className="text-[var(--color-accent)] font-bold">Revisiones ilimitadas:</strong> Durante la etapa de diseño, ajustamos hasta que estés 100% satisfecho</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-20">
          <h2 className="text-4xl font-black mb-10 text-[var(--color-accent)] text-center">Preguntas Frecuentes</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">¿Cuánto tarda en estar listo mi sitio web?</h3>
              <p className="text-lg leading-[1.8] text-justify">
                Landing page: 1-2 semanas. Sitio corporativo: 4-5 semanas. Ecommerce: 6-8 semanas. Depende del alcance y de la rapidez con que proporciones contenidos (textos, fotos, logos).
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">¿Puedo actualizar el sitio yo mismo después?</h3>
              <p className="text-lg leading-[1.8] text-justify">
                Sí. WordPress es muy intuitivo. Te damos capacitación de 1 hora para que puedas editar textos, subir fotos, crear entradas de blog. Para cambios de diseño o funcionalidad, podemos hacerlos nosotros.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">¿El hosting y dominio están incluidos?</h3>
              <p className="text-lg leading-[1.8] text-justify">
                En el Pack Web anual ($169.000/año), sí. En sitios corporativos y ecommerce, el hosting es aparte (desde $35.000/año). Podemos contratarlo nosotros o tú puedes usar tu hosting actual.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">¿Qué pasa si quiero agregar funcionalidades después?</h3>
              <p className="text-lg leading-[1.8] text-justify">
                Podemos agregar lo que necesites: blog, galería, sistema de reservas, membresías, etc. Se cotiza según complejidad.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">¿Trabajan con negocios de toda la región del Biobío?</h3>
              <p className="text-lg leading-[1.8] text-justify">
                Sí. Atendemos Concepción, Talcahuano, San Pedro, Chiguayante, Coronel, Los Ángeles y toda la región. Todo el proceso puede ser 100% remoto.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-16 text-center">
          <h2 className="text-4xl font-black mb-6 text-center">¿Listo para lanzar tu sitio web?</h2>
          <p className="text-xl text-[var(--color-muted)] mb-10 leading-[1.8]">
            Cotiza tu proyecto sin compromiso. Te respondemos en menos de 24 horas con una propuesta personalizada.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              Cotizar Mi Sitio Web
            </Link>
            <Link href="/seo-biobio" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
              Ver Servicios de SEO
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
