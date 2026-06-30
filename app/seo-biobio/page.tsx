import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'SEO en Biobío: Cómo Aparecer en Google y Generar Clientes - Alma Media',
  description: 'Guía completa de SEO en Biobío: auditoría, SEO técnico y contenido por intención (servicios + ecommerce). Aparece en Google cuando te buscan.',
  openGraph: {
    title: 'SEO en Biobío: Cómo Aparecer en Google y Generar Clientes',
    description: 'Estrategia completa de posicionamiento SEO para empresas en Concepción, Talcahuano y la Región del Biobío.',
    type: 'article',
  }
};

export default function SEOBiobioPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>SEO en Biobío</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">Guía Completa de SEO</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          SEO en Biobío: Cómo Aparecer en Google y Generar Clientes
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Estrategia completa de posicionamiento SEO para empresas en Concepción, Talcahuano y la Región del Biobío. Auditoría, SEO técnico y contenido optimizado para aparecer cuando te buscan.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Solicitar Auditoría SEO
          </Link>
          <a href="#que-es-seo" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
            Ver Guía Completa
          </a>
        </div>
      </section>

      {/* Main Content */}
      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">

        {/* Qué es el SEO */}
        <section id="que-es-seo" className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">¿Qué es el SEO y por qué tu negocio lo necesita?</h2>
          <p className="text-lg mb-6 leading-relaxed">
            El <strong className="text-[var(--color-accent)] font-bold">SEO (Search Engine Optimization)</strong> es el proceso de optimizar tu sitio web para aparecer en las primeras posiciones de Google cuando tus clientes potenciales buscan lo que ofreces.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            En la Región del Biobío, la competencia online crece cada día. Si tu negocio no aparece en Google, estás perdiendo clientes que están buscando activamente tus servicios o productos.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Beneficios del SEO para tu negocio:</h3>
          <ul className="space-y-3 mt-6">
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Tráfico orgánico constante:</strong> Clientes que te encuentran sin pagar por cada clic</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Mayor credibilidad:</strong> Aparecer en Google transmite confianza y autoridad</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">ROI a largo plazo:</strong> El SEO sigue funcionando meses después de la inversión inicial</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Ventaja competitiva:</strong> Muchos negocios locales aún no invierten en SEO</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Leads calificados:</strong> Las personas que buscan en Google tienen intención de compra</li>
          </ul>
        </section>

        {/* Auditoría SEO */}
        <section id="auditoria-seo" className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Auditoría SEO: El Primer Paso</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Antes de optimizar, necesitamos saber dónde estás parado. Una <strong className="text-[var(--color-accent)] font-bold">auditoría SEO profesional</strong> revisa todos los aspectos técnicos y de contenido que afectan tu posicionamiento.
          </p>

          <h3 className="text-2xl font-bold mb-6 mt-8">Lo que revisamos en una auditoría:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">📊 SEO Técnico</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Velocidad de carga, estructura de URLs, indexación, sitemap, robots.txt, errores 404, redirecciones.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">📝 Contenido</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Calidad del contenido, keywords, títulos, meta descriptions, headings, thin content.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏗️ Arquitectura</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Estructura de silos, enlaces internos, profundidad de páginas, breadcrumbs.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">📍 SEO Local</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Google Business Profile, NAP consistency, reseñas, schema LocalBusiness.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🔗 Backlinks</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Perfil de enlaces entrantes, calidad vs cantidad, anchor text, toxic links.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">⚡ Performance</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Core Web Vitals, LCP, FID, CLS, optimización móvil, experiencia de usuario.</p>
            </div>
          </div>

          <p className="mt-8">
            <Link href="/contacto" className="text-[var(--color-accent)] font-bold hover:underline">
              → Solicita tu auditoría SEO gratuita
            </Link>
          </p>
        </section>

        {/* SEO Técnico */}
        <section id="seo-tecnico" className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">SEO Técnico: La Base de Todo</h2>
          <p className="text-lg mb-6 leading-relaxed">
            El SEO técnico asegura que Google pueda rastrear, indexar y entender tu sitio correctamente. Sin una base técnica sólida, todo el contenido del mundo no te posicionará.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Elementos críticos del SEO técnico:</h3>
          <ol className="space-y-3 mt-6 list-decimal pl-6">
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Velocidad de carga:</strong> Objetivo menor a 2 segundos</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Mobile-friendly:</strong> Diseño responsive obligatorio</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">HTTPS:</strong> Certificado SSL activo</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Sitemap XML:</strong> Mapa del sitio para Google</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Robots.txt:</strong> Instrucciones para rastreadores</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Estructura de URLs:</strong> Limpias, descriptivas y keyword-friendly</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Schema markup:</strong> Datos estructurados para rich snippets</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Canonical tags:</strong> Evitar contenido duplicado</li>
          </ol>
        </section>

        {/* Contenido SEO */}
        <section id="contenido-seo" className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Contenido SEO: Escribir para Google y para Personas</h2>
          <p className="text-lg mb-6 leading-relaxed">
            El contenido es el rey, pero solo si está optimizado correctamente. No basta con escribir mucho texto — necesitas contenido que responda las preguntas de tus clientes potenciales y que Google entienda de qué trata.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Estrategia de contenido efectiva:</h3>
          <ul className="space-y-3 mt-6">
            <li className="leading-relaxed">Investigación de keywords con herramientas profesionales</li>
            <li className="leading-relaxed">Análisis de intención de búsqueda (informacional, transaccional, navegacional)</li>
            <li className="leading-relaxed">Estructura de topic clusters (páginas pilar + clusters)</li>
            <li className="leading-relaxed">Contenido largo para pilares (1,500+ palabras)</li>
            <li className="leading-relaxed">Optimización de títulos, H1, H2, H3</li>
            <li className="leading-relaxed">Meta descriptions que generen clicks</li>
            <li className="leading-relaxed">Enlaces internos estratégicos</li>
            <li className="leading-relaxed">Imágenes optimizadas con alt text descriptivo</li>
          </ul>

          <p className="text-lg mt-6 leading-relaxed">
            Para un negocio en Biobío, esto significa crear contenido que mencione naturalmente Concepción, Talcahuano y otras ciudades de la región, sin forzar las keywords.
          </p>
        </section>

        {/* SEO Local */}
        <section id="seo-local" className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">SEO Local en Biobío</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Para negocios que atienden clientes localmente, el <strong className="text-[var(--color-accent)] font-bold">SEO local</strong> es crítico. El 46% de todas las búsquedas en Google tienen intención local.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Componentes del SEO local:</h3>
          <ol className="space-y-6 mt-6 list-decimal pl-6">
            <li className="leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Google Business Profile optimizado</strong>
              <ul className="mt-2 space-y-2 list-disc pl-6">
                <li>Ficha completa con horarios, fotos, servicios</li>
                <li>Categoría principal y secundarias correctas</li>
                <li>Reseñas activas y respondidas</li>
                <li>Posts semanales</li>
              </ul>
            </li>
            <li className="leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">NAP Consistency</strong>
              <ul className="mt-2 space-y-2 list-disc pl-6">
                <li>Nombre, dirección y teléfono exactamente iguales en todo internet</li>
                <li>Directorios locales (Páginas Amarillas, Mercado Libre, etc.)</li>
              </ul>
            </li>
            <li className="leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Contenido geo-localizado</strong>
              <ul className="mt-2 space-y-2 list-disc pl-6">
                <li>Páginas por ciudad/comuna</li>
                <li>Menciones naturales de ubicaciones</li>
                <li>Testimonios de clientes locales</li>
              </ul>
            </li>
            <li className="leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Schema LocalBusiness</strong>
              <ul className="mt-2 space-y-2 list-disc pl-6">
                <li>Datos estructurados con ubicación, horarios, contacto</li>
              </ul>
            </li>
          </ol>

          <p className="mt-8">
            <Link href="/seo-local-biobio" className="text-[var(--color-accent)] font-bold hover:underline">
              → Lee la guía completa de SEO Local en Biobío
            </Link>
          </p>
        </section>

        {/* Proceso */}
        <section id="proceso" className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Nuestro Proceso de SEO</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Trabajar con Alma Media significa un proceso estructurado y medible:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Mes 1: Auditoría y Base</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Auditoría completa, corrección de errores técnicos críticos, investigación de keywords, definición de estrategia.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Mes 2-3: Optimización</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Optimización on-page de páginas principales, creación de contenido pilar, implementación de schema, mejora de velocidad.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Mes 4+: Escalado</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Contenido regular (2-4 artículos/mes), construcción de enlaces, optimización continua, reportes mensuales.</p>
            </div>
          </div>

          <p className="text-lg mt-6 leading-relaxed">
            Medimos resultados mes a mes: posiciones de keywords, tráfico orgánico, conversiones, autoridad de dominio.
          </p>
        </section>

        {/* Precios */}
        <section id="precios" className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">¿Cuánto cuesta el SEO en Biobío?</h2>
          <p className="text-lg mb-6 leading-relaxed">
            El SEO es una inversión a mediano-largo plazo. Los resultados típicamente empiezan a verse entre el mes 3 y 6, dependiendo de la competencia.
          </p>

          <p className="text-xl font-bold mb-4">Nuestros servicios de SEO:</p>
          <ul className="space-y-3">
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Auditoría SEO inicial:</strong> Desde $89,000 CLP (una vez)</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">SEO mensual básico:</strong> $120,000 CLP/mes (2 contenidos + optimización)</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">SEO mensual avanzado:</strong> $180,000 CLP/mes (4 contenidos + link building)</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">SEO local:</strong> Desde $95,000 CLP/mes (GBP + web + directorio)</li>
          </ul>

          <p className="text-lg mt-6 leading-relaxed">
            Sin permanencia mínima. Puedes cancelar cuando quieras si no ves resultados.
          </p>
        </section>
      </article>

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-16 text-center">
          <h2 className="text-4xl font-black mb-4">¿Listo para aparecer en Google?</h2>
          <p className="text-xl text-[var(--color-muted)] mb-8">
            Solicita tu auditoría SEO y descubre qué está impidiendo que tu negocio aparezca en las búsquedas.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              Solicitar Auditoría SEO
            </Link>
            <Link href="/seo-local-biobio" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
              Ver SEO Local
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
