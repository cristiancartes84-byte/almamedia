import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: '10 Errores que Matan tu Sitio Web (y Cómo Solucionarlos) [2026]',
  description: 'Los 10 errores más comunes que arruinan sitios web: velocidad, SEO, diseño, contenido. Checklist completa con soluciones prácticas y fáciles de implementar.',
  keywords: 'errores sitio web, errores diseño web, problemas sitio web, checklist sitio web',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog/errores-sitio-web',
  },
  openGraph: {
    title: '10 Errores que Matan tu Sitio Web y Cómo Solucionarlos',
    description: 'Los 10 errores más comunes que arruinan sitios web con soluciones prácticas: velocidad, SEO, diseño y contenido.',
    url: 'https://almamedia.cl/blog/errores-sitio-web',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'article',
    publishedTime: '2026-07-04T10:00:00Z',
    authors: ['Alma Media'],
    images: [{
      url: '/og-images/errores-sitio-web.jpg',
      width: 1200,
      height: 630,
      alt: '10 Errores que Matan tu Sitio Web 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Errores que Matan tu Sitio Web y Cómo Solucionarlos',
    description: 'Checklist completa con soluciones prácticas para los 10 errores más comunes en sitios web.',
    images: ['/og-images/errores-sitio-web.jpg'],
  },
};

export default function ArticlePage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[var(--color-accent)] transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span>Errores Sitio Web</span>
        </div>

        <article className="relative z-10 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                Consejos
              </span>
              <span className="text-sm text-[var(--color-muted)]">9 min lectura</span>
              <span className="text-sm text-[var(--color-muted)]"><CurrentMonth /> <CurrentYear /></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              10 Errores que Matan tu Sitio Web (y Cómo Solucionarlos)
            </h1>

            <p className="text-xl text-[var(--color-muted)] leading-relaxed text-justify">
              <strong className="text-white">El 73% de sitios web de pequeñas empresas tienen al menos 3 de estos errores críticos.</strong> Si tu sitio web no genera leads, ventas o tráfico, probablemente está cometiendo uno (o varios) de estos 10 errores. Esta guía identifica los problemas más comunes que destruyen conversión y tráfico, con soluciones específicas que puedes implementar hoy mismo. No necesitas ser experto técnico.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Error #1: Carga Lenta (>3 Segundos)</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-white">53% de usuarios móviles abandonan si carga tarda +3 segundos.</strong> Cada segundo adicional = -7% conversión. Si tu sitio tarda 5 segundos, estás perdiendo 14% de ventas solo por velocidad.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Cómo Medir</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Ve a pagespeed.web.dev y pega URL de tu sitio. Google te da puntaje 0-100. <strong className="text-[var(--color-accent)]">Objetivo:</strong> +90 en mobile, +95 en desktop.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Cómo Solucionar</h3>
            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-8 not-prose">
              <ul className="space-y-3">
                <li><strong>1. Optimizar imágenes:</strong> Convierte JPG/PNG a WebP (70% más livianas). Usa TinyPNG.com o Squoosh.app. Imágenes pesan menos de 200KB cada una.</li>
                <li><strong>2. Usar CDN:</strong> Cloudflare (gratis) distribuye tu sitio en servidores mundiales. Activa en 10 minutos.</li>
                <li><strong>3. Activar caché:</strong> WordPress: instala plugin WP Rocket ($49/año) o W3 Total Cache (gratis). Reduce carga 60%.</li>
                <li><strong>4. Hosting rápido:</strong> Si pagas menos de $5.000/mes en hosting, probablemente es lento. Cambia a SiteGround, Webempresa, o Banahosting.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Error #2: No Responsive (No Funciona en Celular)</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-white">70% de tráfico web es móvil.</strong> Si tu sitio se ve mal en celular (texto minúsculo, botones imposibles de clickear, scroll horizontal), estás perdiendo 7 de cada 10 visitantes. Además, Google penaliza sitios no-responsive en rankings.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Cómo Medir</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Abre tu sitio en celular. ¿Se ve bien? ¿Puedes navegar fácil? ¿Botones son clickeables con dedo? También: search.google.com/test/mobile-friendly
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Cómo Solucionar</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Si tu sitio es viejo (pre-2018), probablemente necesita rediseño completo. Sitios modernos en WordPress con temas actuales (Astra, GeneratePress) son responsive por defecto. Costo rediseño responsive: $290.000-$390.000.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Error #3: Sin Call-to-Action Claro</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Usuario llega a tu sitio y pregunta "¿Qué hago ahora?". <strong className="text-white">Si no es obvio en 5 segundos, se va.</strong> Necesitas CTA (Call To Action) claro, visible, específico en cada página.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Ejemplos de CTAs Efectivos</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
              <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-6">
                <h4 className="font-bold mb-3 text-[var(--color-accent)]">✅ Buenos CTAs</h4>
                <ul className="space-y-2 text-sm">
                  <li>• "Cotizar Mi Proyecto Gratis"</li>
                  <li>• "Reservar Hora Ahora"</li>
                  <li>• "Descargar Catálogo PDF"</li>
                  <li>• "Ver Precios y Planes"</li>
                  <li>• "Llamar Ahora: +56 9 XXXX"</li>
                </ul>
              </div>

              <div className="bg-[var(--color-card)] border border-red-500 rounded-xl p-6">
                <h4 className="font-bold mb-3 text-red-400">❌ CTAs Débiles</h4>
                <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                  <li>• "Click Aquí" (¿para qué?)</li>
                  <li>• "Más Información" (vago)</li>
                  <li>• "Enviar" (sin contexto)</li>
                  <li>• "Saber Más" (aburrido)</li>
                  <li>• "Contacto" (no dice qué pasa)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Dónde Poner CTAs</h3>
            <ul className="space-y-2 mb-8">
              <li className="text-lg leading-relaxed">• Header (menú superior): botón destacado siempre visible</li>
              <li className="text-lg leading-relaxed">• Hero section (primera pantalla): CTA principal grande</li>
              <li className="text-lg leading-relaxed">• Después de cada sección: recordatorio de acción</li>
              <li className="text-lg leading-relaxed">• Footer: última oportunidad antes que se vayan</li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Error #4: Contenido Desactualizado</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Homepage dice "Promoción Navidad 2023", blog con último artículo de 2022, equipo con fotos de personas que ya no trabajan ahí. <strong className="text-white">Cliente piensa: "¿Siguen operando?"</strong> Sitio desactualizado = negocio abandonado.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Checklist Actualización</h3>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <ul className="space-y-2">
                <li>☐ Año actual en footer y contenido (automatiza con componente dinámico)</li>
                <li>☐ Promociones vigentes (quita las vencidas)</li>
                <li>☐ Fotos actuales del equipo y local</li>
                <li>☐ Precios al día (si suben, actualiza)</li>
                <li>☐ Blog con contenido reciente (mínimo 1 artículo cada 2 meses)</li>
                <li>☐ Horarios correctos (especialmente feriados)</li>
                <li>☐ Productos/servicios que realmente ofreces hoy</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Error #5: Sin Google Analytics (Volar a Ciegas)</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-white">No puedes mejorar lo que no mides.</strong> Sin Analytics no sabes: cuántas visitas recibes, de dónde vienen, qué páginas ven, cuánto tiempo quedan, qué los hace irse. Estás apostando en la oscuridad.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Qué Instalar (Gratis)</h3>
            <ul className="space-y-3 mb-8">
              <li className="text-lg leading-relaxed"><strong>Google Analytics 4:</strong> analytics.google.com — rastrea visitas, páginas vistas, conversiones</li>
              <li className="text-lg leading-relaxed"><strong>Google Search Console:</strong> search.google.com/search-console — muestra qué buscan en Google para encontrarte</li>
              <li className="text-lg leading-relaxed"><strong>Hotjar:</strong> hotjar.com (gratis 35 sesiones/día) — grabaciones de cómo usuarios usan tu sitio</li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Error #6: Formularios Largos y Complicados</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Formulario de contacto con 15 campos (nombre, apellido, RUT, dirección completa, teléfono fijo, móvil, email, empresa, cargo, industria, presupuesto, fecha nacimiento...). <strong className="text-white">Por cada campo adicional, pierdes 10% de conversiones.</strong>
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Regla de Oro</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Pide SOLO lo mínimo necesario para responder.</strong> Formulario contacto: Nombre + Email + Mensaje = 3 campos. Ya. Puedes pedir más info después por email/llamada cuando cliente esté comprometido.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Error #7: Sin HTTPS (Candado Rojo)</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              URL comienza con http:// (sin S) → navegador muestra "No seguro" → <strong className="text-white">84% de usuarios abandonan sitio sin HTTPS.</strong> Además, Google penaliza en rankings. SSL/HTTPS es OBLIGATORIO en <CurrentYear />.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Cómo Solucionar</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Pide a tu hosting que instale certificado SSL (gratis con Let's Encrypt). Toma 10 minutos. Si hosting cobra por SSL, cambia de hosting (hosting moderno incluye SSL gratis). En WordPress: instala plugin "Really Simple SSL" para forzar HTTPS.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Error #8: Mucho Texto, Pocas Imágenes</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Página con 3,000 palabras de texto corrido, sin imágenes, sin espacios, sin subtítulos. <strong className="text-white">Usuario promedio escanea, no lee.</strong> Si parece muro de texto, nadie lo leerá.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Formato Legible</h3>
            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-8 not-prose">
              <ul className="space-y-2">
                <li>• <strong>Párrafos cortos:</strong> 2-3 líneas máximo. Espacio en blanco ayuda.</li>
                <li>• <strong>Subtítulos cada 200 palabras:</strong> Ayuda escanear contenido rápido.</li>
                <li>• <strong>Imágenes cada 300 palabras:</strong> Descanso visual. Relacionada con contenido.</li>
                <li>• <strong>Listas con bullets:</strong> Más fácil de digerir que párrafos.</li>
                <li>• <strong>Negrita en conceptos clave:</strong> Guía la lectura rápida.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Error #9: Sin SEO Básico</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Títulos genéricos ("Inicio", "Servicios"), sin meta descriptions, URLs feas (sitio.cl/page?id=123), sin keywords. <strong className="text-white">Google no sabe de qué trata tu sitio → no te muestra en búsquedas.</strong>
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">SEO Básico Obligatorio</h3>
            <ul className="space-y-3 mb-8">
              <li className="text-lg leading-relaxed"><strong>Títulos descriptivos:</strong> "Ferretería Concepción | Herramientas y Materiales" en vez de "Inicio"</li>
              <li className="text-lg leading-relaxed"><strong>Meta descriptions:</strong> 150 caracteres resumen de cada página (aparece en Google)</li>
              <li className="text-lg leading-relaxed"><strong>URLs limpias:</strong> sitio.cl/servicios/diseno-web en vez de sitio.cl/page?id=42</li>
              <li className="text-lg leading-relaxed"><strong>Alt text imágenes:</strong> Describe qué hay en cada imagen (ayuda SEO + accesibilidad)</li>
              <li className="text-lg leading-relaxed"><strong>Sitemap XML:</strong> WordPress lo genera automático con Yoast SEO (plugin gratis)</li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Error #10: Hosting Malo/Barato</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Hosting $1.990/mes, sitio cae cada semana, soporte tarda 3 días en responder, backup inexistente. <strong className="text-white">Hosting es la fundación de tu casa digital.</strong> Si es débil, todo lo demás falla.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Señales de Hosting Malo</h3>
            <ul className="space-y-2 mb-8">
              <li className="text-lg leading-relaxed">• Sitio cae frecuentemente (downtime >1%)</li>
              <li className="text-lg leading-relaxed">• Carga lenta incluso con imágenes optimizadas</li>
              <li className="text-lg leading-relaxed">• Soporte técnico tarda días en responder</li>
              <li className="text-lg leading-relaxed">• Sin backups automáticos diarios</li>
              <li className="text-lg leading-relaxed">• Panel de control complicado</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">Hosting Recomendados Chile</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Presupuesto ajustado:</strong> Banahosting ($5.990/mes), Webempresa ($7.900/mes). <strong className="text-[var(--color-accent)]">Presupuesto amplio:</strong> SiteGround ($14.900/mes), WP Engine ($29.900/mes). Todos incluyen SSL gratis, backups diarios, soporte 24/7.
            </p>

          </div>

          {/* CTA Conversión */}
          <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)] mt-16">
            <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
              <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🔧 Auditoría Gratuita</span>
            </div>
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
              ¿Tu Sitio Tiene Estos Errores?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
              Auditoría gratuita de 47 puntos: velocidad, SEO, diseño, conversión. Te enviamos reporte con problemas encontrados y cómo solucionarlos.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                Solicitar Auditoría Gratis →
              </Link>
              <Link href="/diseno-web" className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-white text-lg font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Ver Sitios Optimizados →
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              ⭐ Reporte en 48h • Sin compromiso • Recomendaciones accionables
            </p>
          </div>

        </article>
      </div>

      {/* Schema.org Article Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "10 Errores que Matan tu Sitio Web y Cómo Solucionarlos",
        "description": "Los 10 errores más comunes que arruinan sitios web: velocidad, SEO, diseño, contenido. Checklist completa con soluciones prácticas y fáciles de implementar.",
        "image": "https://almamedia.cl/og-images/errores-sitio-web.jpg",
        "author": {
          "@type": "Organization",
          "name": "Alma Media",
          "url": "https://almamedia.cl"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Alma Media",
          "logo": {
            "@type": "ImageObject",
            "url": "https://almamedia.cl/logo.jpg"
          }
        },
        "datePublished": "2026-07-04T10:00:00Z",
        "dateModified": "2026-07-05T10:00:00Z",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://almamedia.cl/blog/errores-sitio-web"
        },
        "keywords": "errores sitio web, errores diseño web, problemas sitio web, checklist sitio web",
        "articleSection": "Consejos",
        "wordCount": 2300,
        "timeRequired": "PT9M",
        "inLanguage": "es-CL"
      })}} />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "10 Errores que Matan tu Sitio Web (y Cómo Solucionarlos)", url: "/blog/errores-sitio-web" }
      ]} />
    </>
  );
}
