import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'SEO y Posicionamiento Web en Chile | Aparece en Google - Alma Media',
  description: 'Servicios de SEO profesional en Chile. Auditoría, optimización técnica, contenido y link building para aparecer en la primera página de Google.',
  openGraph: {
    title: 'SEO y Posicionamiento Web | Aparece en Google',
    description: 'Estrategia completa de SEO: auditoría, optimización técnica, contenido y link building.',
    type: 'website',
  }
};

export default function SEOPosicionamientoPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>SEO / Posicionamiento</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">SEO Profesional</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          SEO y Posicionamiento Web | Aparece en Google
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Estrategia completa de SEO para aparecer en la primera página de Google. Auditoría, optimización técnica, contenido y link building.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Solicitar Auditoría SEO
          </Link>
          <a href="#servicios" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
            Ver Servicios
          </a>
        </div>
      </section>

      {/* Main Content */}
      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">

        {/* Qué es SEO */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Qué es el SEO?</h2>

          <div className="space-y-6">
            <p className="text-xl leading-[1.8]">
              <strong className="text-[var(--color-accent)] font-bold">SEO (Search Engine Optimization)</strong> es el proceso de optimizar tu sitio web para aparecer en las primeras posiciones de Google cuando tus clientes potenciales buscan lo que ofreces.
            </p>
            <p className="text-xl leading-[1.8]">
              El 93% de las experiencias online comienzan con un motor de búsqueda. Si tu sitio no aparece en la primera página de Google, estás perdiendo el 75% del tráfico potencial.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-6 mt-12 text-center">Beneficios del SEO:</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Tráfico orgánico constante:</strong>
                <span className="text-[var(--color-muted)]">Visitantes sin pagar por cada clic</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Credibilidad y confianza:</strong>
                <span className="text-[var(--color-muted)]">Estar en Google transmite autoridad</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">ROI a largo plazo:</strong>
                <span className="text-[var(--color-muted)]">Inversión que sigue dando resultados meses después</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Leads calificados:</strong>
                <span className="text-[var(--color-muted)]">Usuarios con intención de compra real</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Ventaja competitiva:</strong>
                <span className="text-[var(--color-muted)]">Supera a tu competencia en resultados</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="text-[var(--color-accent)] font-bold block mb-1">Resultados medibles:</strong>
                <span className="text-[var(--color-muted)]">Métricas claras de rendimiento</span>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios SEO */}
        <section id="servicios" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Nuestros Servicios de SEO</h2>
          <p className="text-xl mb-10 leading-[1.8] text-center max-w-3xl mx-auto">
            Estrategia completa de posicionamiento adaptada a tu negocio y objetivos.
          </p>

          <div className="grid gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">🔍 Auditoría SEO Completa</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Análisis profundo de tu sitio web para identificar oportunidades de mejora. Revisamos SEO técnico, contenido, arquitectura, enlaces y competencia.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Análisis técnico (velocidad, indexación, errores)</li>
                <li>• Análisis de contenido y keywords</li>
                <li>• Análisis de competencia</li>
                <li>• Reporte con plan de acción priorizado</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">⚙️ SEO Técnico</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Optimización de todos los aspectos técnicos que afectan tu posicionamiento en Google.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Optimización de velocidad de carga</li>
                <li>• Estructura de URLs y redirects</li>
                <li>• Sitemap y robots.txt</li>
                <li>• Schema markup (datos estructurados)</li>
                <li>• Core Web Vitals</li>
                <li>• Mobile-first optimization</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">📝 Contenido SEO</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Creación y optimización de contenido que Google quiere posicionar y tus usuarios quieren leer.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Investigación de keywords (palabras clave)</li>
                <li>• Optimización de títulos y meta descriptions</li>
                <li>• Creación de contenido optimizado</li>
                <li>• Optimización de imágenes y multimedia</li>
                <li>• Arquitectura de contenido (silos)</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">🔗 Link Building</h3>
              <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                Construcción de autoridad mediante enlaces de calidad desde sitios relevantes.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)]">
                <li>• Análisis de perfil de enlaces actual</li>
                <li>• Estrategia de link building white-hat</li>
                <li>• Construcción de enlaces de calidad</li>
                <li>• Link reclamation (recuperación de enlaces)</li>
                <li>• Monitoreo de backlinks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section id="precios" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precios de SEO</h2>
          <p className="text-xl mb-10 leading-[1.8] text-center max-w-3xl mx-auto">
            Planes adaptados al tamaño de tu negocio y objetivos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Auditoría */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Auditoría SEO</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$129.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP (pago único)</p>
              <ul className="space-y-2 text-left">
                <li>✓ Análisis completo del sitio</li>
                <li>✓ Análisis de competencia</li>
                <li>✓ Investigación de keywords</li>
                <li>✓ Reporte detallado + plan de acción</li>
                <li>✓ 1 sesión de consultoría</li>
              </ul>
            </div>

            {/* SEO Mensual */}
            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">SEO Mensual</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$195.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP/mes (mínimo 6 meses)</p>
              <ul className="space-y-2 text-left">
                <li>✓ Optimización técnica continua</li>
                <li>✓ 2 artículos SEO/mes</li>
                <li>✓ Link building mensual</li>
                <li>✓ Reportes mensuales</li>
                <li>✓ Soporte prioritario</li>
              </ul>
            </div>

            {/* SEO Avanzado */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">SEO Avanzado</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $395.000</p>
              <p className="text-[var(--color-muted)] mb-6">CLP/mes (según proyecto)</p>
              <ul className="space-y-2 text-left">
                <li>✓ Todo lo de SEO Mensual</li>
                <li>✓ 4+ artículos SEO/mes</li>
                <li>✓ Link building agresivo</li>
                <li>✓ SEO técnico avanzado</li>
                <li>✓ Análisis semanal</li>
              </ul>
            </div>
          </div>

          <p className="text-center mt-8">
            <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              Solicitar Cotización
            </Link>
          </p>
        </section>

      </article>

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-16 text-center">
          <h2 className="text-4xl font-black mb-6 text-center">¿Listo para aparecer en Google?</h2>
          <p className="text-xl text-[var(--color-muted)] mb-10 leading-[1.8]">
            Solicita una auditoría SEO gratuita. Te mostramos el potencial de tu sitio web.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              Solicitar Auditoría Gratuita
            </Link>
            <Link href="/seo-local" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
              Ver SEO Local
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
