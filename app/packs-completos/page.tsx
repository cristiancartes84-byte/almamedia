import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Packs Completos Marketing Digital Chile 2026 | Ahorra 30%',
  description: 'Packs completos de marketing digital: Web + SEO + Foto + Video. Desde $169.000/año. Ahorra hasta 40% vs servicios separados. +200 empresas confían.',
  keywords: 'packs marketing digital Chile, pack web completo, pack visual producto, pack SEO mensual, servicios marketing digital, paquetes marketing digital, combo web SEO foto video',
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
    canonical: '/packs-completos',
  },
  openGraph: {
    title: 'Packs Completos Marketing Digital Chile 2026 | Ahorra 30%',
    description: 'Packs completos: Web + SEO + Foto + Video. Desde $169.000/año. Ahorra hasta 40%.',
    url: 'https://almamedia.cl/packs-completos',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packs Completos Marketing Digital Chile 2026 | Ahorra 30%',
    description: 'Packs completos marketing digital. Desde $169.000/año. Ahorra hasta 40%.',
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

export default function PacksCompletosPage() {
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
                "@type": "Product",
                "name": "Packs Completos Marketing Digital Chile",
                "description": "Packs completos de marketing digital que combinan diseño web, SEO, fotografía y video profesional. Solución todo-en-uno para empresas que quieren vender online con máxima eficiencia y ahorro hasta 40% vs servicios separados.",
                "brand": {
                  "@type": "Brand",
                  "name": "Alma Media"
                },
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Pack Web Inicial",
                    "price": "169000",
                    "priceCurrency": "CLP"
                  },
                  {
                    "@type": "Offer",
                    "name": "Pack Visual Completo",
                    "price": "199000",
                    "priceCurrency": "CLP"
                  },
                  {
                    "@type": "Offer",
                    "name": "Pack Todo-en-Uno",
                    "price": "399000",
                    "priceCurrency": "CLP"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Qué incluyen los packs completos de marketing digital?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Los packs completos combinan múltiples servicios en un solo paquete: Pack Web (landing page + SEO base + hosting + fotos), Pack Visual (10 fotos fondo blanco + 10 lifestyle + 3 videos), Pack SEO Mensual (SEO técnico + local + 3 artículos + link building), y Pack Todo-en-Uno (web completa + SEO mensual + 20 fotos + 5 videos). Ahorras 30-40% vs contratar servicios por separado."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Cuánto cuesta un pack completo de marketing digital?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Pack Web Inicial: $169.000 CLP/año, Pack Visual Completo: $199.000 CLP pago único, Pack SEO Mensual: $249.000 CLP/mes, Pack Todo-en-Uno: $399.000 CLP único + $249.000/mes SEO. Incluyen todos los servicios, sin costos ocultos. Ahorro de 30-40% vs servicios individuales."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Por qué contratar un pack en lugar de servicios separados?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Los packs ahorran 30-40% de costo, tienen un solo punto de contacto (gestión simplificada), servicios integrados que funcionan mejor juntos (web optimizada para SEO, fotos optimizadas para conversión), plazos de entrega coordinados, y evitan la complejidad de coordinar múltiples proveedores. Ideal para empresas que quieren resultados rápidos sin complicaciones."
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
          <span>Packs Completos</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Packs Todo-en-Uno Chile</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Packs Completos de Marketing Digital
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Los packs completos de marketing digital en Chile</strong> combinan múltiples servicios profesionales en un solo paquete integrado: diseño web, SEO posicionamiento, fotografía de producto y video marketing. Ahorra hasta 40% vs contratar servicios por separado, con un solo punto de contacto y plazos de entrega coordinados. Ofrecemos Pack Web Inicial desde $169.000/año (landing page + SEO base + hosting + 3 fotos), Pack Visual Completo $199.000 pago único (10 fotos fondo blanco + 10 lifestyle + 3 videos), Pack SEO Mensual $249.000/mes (SEO técnico + local + 3 artículos + link building + reportes), y Pack Todo-en-Uno $399.000 + $249.000/mes (web completa + SEO mensual + 20 fotos + 5 videos). Todos los servicios están integrados y optimizados para funcionar juntos: web diseñada para conversión, fotos optimizadas para SEO, videos para engagement, contenido para posicionamiento. +200 empresas confían en nuestros packs para vender más online con máxima eficiencia y mínimo esfuerzo.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Pack Gratis →
          </Link>
          <a href="#packs" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
            Ver Packs
          </a>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">

        {/* Por qué Pack Completo */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué un Pack Completo?</h2>

          <div className="space-y-6">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Los packs completos ahorran entre 30% y 40% de costo</strong> vs contratar servicios individuales. Cuando combinas diseño web ($450.000), SEO mensual ($249.000/mes), fotografía de producto ($200.000 por 20 productos) y video ($100.000 por 5 videos), pagarías $999.000 + mensualidad. Con nuestro Pack Todo-en-Uno pagas $399.000 inicial + $249.000/mes SEO = ahorro de $600.000 en el primer año.
            </p>
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Un solo punto de contacto simplifica la gestión:</strong> en lugar de coordinar 4 proveedores diferentes (diseñador web, fotógrafo, productor de video, especialista SEO), tienes un solo equipo que conoce tu marca, tu audiencia y tus objetivos. Esto acelera la ejecución, evita errores de comunicación, y permite que todos los servicios estén alineados estratégicamente para maximizar resultados.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Los servicios integrados funcionan mejor juntos:</strong> diseñamos tu web pensando en SEO desde el inicio (estructura, velocidad, schema markup), las fotos de producto se optimizan con nombres de archivo y alt text para posicionamiento, los videos se cargan con lazy loading para no afectar performance, el contenido SEO usa las mismas fotos/videos para coherencia visual. Esta integración aumenta conversión 35% vs servicios descoordinados.
            </p>
          </div>
        </section>

        {/* Beneficios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center">Beneficios de los Packs</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">💰 Ahorra 30-40%</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Packs combinados cuestan 30-40% menos que servicios separados. Mismo resultado profesional, menor inversión total.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">⚡ Gestión Simplificada</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Un solo punto de contacto, un solo equipo. No coordines 4 proveedores diferentes. Ahorra tiempo y estrés.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🎯 Servicios Integrados</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Web optimizada para SEO, fotos optimizadas para conversión, videos para engagement. Todo diseñado para funcionar juntos.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">📅 Plazos Coordinados</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Entrega completa en 15-30 días. No esperes meses coordinando proveedores. Lanza rápido y vende más pronto.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🏆 Resultados Comprobados</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">+200 empresas confían en nuestros packs. Casos reales de +35% conversión y ROI 5x en primer año.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🔧 Soporte Continuo</h3>
              <p className="text-[var(--color-muted)] leading-relaxed text-justify">Incluye soporte técnico, actualizaciones web, ajustes SEO mensuales, y 1 sesión foto/video adicional anual gratis.</p>
            </div>
          </div>
        </section>

        {/* Packs Disponibles */}
        <section id="packs" className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center">Nuestros Packs</h2>

          <div className="space-y-8">
            {/* Pack Web Inicial */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 mb-3 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
                    <span className="text-[var(--color-accent)] text-xs font-bold uppercase">Para Empezar</span>
                  </div>
                  <h3 className="text-3xl font-black mb-3">🌐 Pack Web Inicial</h3>
                  <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">Lanza tu presencia online profesional con landing page optimizada, SEO base, hosting incluido y 3 fotos de producto. Ideal para negocios que arrancan su ecommerce o servicios.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Landing page profesional:</strong> Diseño responsivo, hasta 5 secciones, formulario de contacto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>SEO base:</strong> Metadata, schema markup, optimización de velocidad, indexación Google</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Hosting + dominio .cl:</strong> Incluido por 1 año, SSL, backups automáticos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>3 fotos de producto:</strong> Fondo blanco profesional con retoque</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Entrega:</strong> 10-15 días hábiles</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center md:text-right flex-shrink-0">
                  <div className="text-sm text-[var(--color-muted)] line-through mb-1">$280.000</div>
                  <div className="text-5xl font-black text-[var(--color-accent)] mb-2">$169.000</div>
                  <div className="text-[var(--color-muted)] mb-4">CLP/año</div>
                  <div className="text-xs text-[var(--color-accent)] font-bold mb-4">Ahorro: $111.000 (40%)</div>
                  <Link href="/contacto" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-transform">
                    Contratar
                  </Link>
                </div>
              </div>
            </div>

            {/* Pack Visual Completo */}
            <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 mb-3 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
                    <span className="text-[var(--color-accent)] text-xs font-bold uppercase">Más Popular</span>
                  </div>
                  <h3 className="text-3xl font-black mb-3">📸 Pack Visual Completo</h3>
                  <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">Todo el contenido visual profesional que necesitas: fotos de catálogo con fondo blanco, fotos lifestyle para redes sociales, y videos cortos para engagement. Perfecto para lanzar o renovar tu ecommerce con contenido que convierte.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>10 fotos fondo blanco:</strong> Para catálogo/marketplaces (Amazon, Mercado Libre), retoque profesional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>10 fotos lifestyle:</strong> Con ambientación para Instagram, Facebook, branding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>3 videos cortos (15-30 seg):</strong> Para redes sociales, ecommerce, con música y textos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Edición profesional:</strong> Color grading, retoque, formatos multiplataforma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Entrega:</strong> 7-10 días hábiles</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center md:text-right flex-shrink-0">
                  <div className="text-sm text-[var(--color-muted)] line-through mb-1">$298.000</div>
                  <div className="text-5xl font-black text-[var(--color-accent)] mb-2">$199.000</div>
                  <div className="text-[var(--color-muted)] mb-4">CLP pago único</div>
                  <div className="text-xs text-[var(--color-accent)] font-bold mb-4">Ahorro: $99.000 (33%)</div>
                  <Link href="/contacto" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-transform">
                    Contratar
                  </Link>
                </div>
              </div>
            </div>

            {/* Pack SEO Mensual */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 mb-3 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
                    <span className="text-[var(--color-accent)] text-xs font-bold uppercase">Suscripción Mensual</span>
                  </div>
                  <h3 className="text-3xl font-black mb-3">🚀 Pack SEO Mensual</h3>
                  <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">Posicionamiento SEO profesional con trabajo continuo: optimización técnica, SEO local, creación de contenido mensual, link building, y reportes de progreso. Para empresas que quieren dominar Google en su nicho.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>SEO técnico + local:</strong> Optimización completa, Google Business Profile, citaciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)} flex-shrink-0">✓</span>
                      <span><strong>3 artículos SEO/mes:</strong> 1500+ palabras, investigación keywords, optimizados para conversión</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Link building:</strong> 5 backlinks de calidad/mes, outreach a medios, guest posts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Reportes semanales:</strong> Rankings, tráfico orgánico, conversiones, recomendaciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Soporte prioritario:</strong> Ajustes técnicos ilimitados, reuniones mensuales</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center md:text-right flex-shrink-0">
                  <div className="text-sm text-[var(--color-muted)] line-through mb-1">$349.000</div>
                  <div className="text-5xl font-black text-[var(--color-accent)] mb-2">$249.000</div>
                  <div className="text-[var(--color-muted)] mb-4">CLP/mes</div>
                  <div className="text-xs text-[var(--color-accent)] font-bold mb-4">Ahorro: $100.000/mes (29%)</div>
                  <Link href="/contacto" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-transform">
                    Contratar
                  </Link>
                </div>
              </div>
            </div>

            {/* Pack Todo-en-Uno */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 mb-3 bg-[rgba(200,255,0,0.25)] border border-[rgba(200,255,0,0.6)] rounded-full">
                    <span className="text-[var(--color-accent)] text-xs font-bold uppercase">Solución Completa</span>
                  </div>
                  <h3 className="text-3xl font-black mb-3">🏆 Pack Todo-en-Uno</h3>
                  <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">La solución completa para empresas serias: web profesional completa, SEO mensual continuo, 20 fotos de producto, y 5 videos marketing. Todo lo que necesitas para vender online desde el día 1, con resultados medibles y garantizados.</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Web completa (hasta 10 páginas):</strong> Diseño custom, ecommerce opcional, integraciones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>SEO mensual continuo:</strong> Todo del Pack SEO + auditorías trimestrales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>20 fotos profesionales:</strong> Mix fondo blanco + lifestyle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>5 videos marketing:</strong> Mix redes sociales + web</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Hosting + dominio + SSL:</strong> Incluido por 1 año</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>1 sesión foto/video anual gratis:</strong> Renovación contenido cada año</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] flex-shrink-0">✓</span>
                      <span><strong>Entrega:</strong> 20-30 días hábiles</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center md:text-right flex-shrink-0">
                  <div className="text-sm text-[var(--color-muted)] line-through mb-1">$649.000</div>
                  <div className="text-5xl font-black text-[var(--color-accent)] mb-2">$399.000</div>
                  <div className="text-[var(--color-muted)] mb-1">CLP inicial</div>
                  <div className="text-2xl font-bold text-white mb-4">+ $249.000/mes SEO</div>
                  <div className="text-xs text-[var(--color-accent)] font-bold mb-4">Ahorro: $250.000 inicial (38%)</div>
                  <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                    Contratar Ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center">Preguntas Frecuentes</h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué incluyen los packs completos de marketing digital?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Los <strong>packs completos</strong> combinan múltiples servicios profesionales en un solo paquete integrado: <strong>Pack Web Inicial</strong> ($169.000/año) incluye landing page, SEO base, hosting y 3 fotos. <strong>Pack Visual Completo</strong> ($199.000 único) incluye 10 fotos fondo blanco + 10 lifestyle + 3 videos cortos. <strong>Pack SEO Mensual</strong> ($249.000/mes) incluye SEO técnico + local + 3 artículos + link building + reportes. <strong>Pack Todo-en-Uno</strong> ($399.000 + $249.000/mes) incluye web completa + SEO mensual + 20 fotos + 5 videos. Ahorras 30-40% vs contratar servicios por separado.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto cuesta un pack completo de marketing digital?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Pack Web Inicial:</strong> $169.000 CLP/año (era $280.000, ahorro 40%). <strong>Pack Visual Completo:</strong> $199.000 CLP pago único (era $298.000, ahorro 33%). <strong>Pack SEO Mensual:</strong> $249.000 CLP/mes (era $349.000, ahorro 29%). <strong>Pack Todo-en-Uno:</strong> $399.000 CLP inicial + $249.000/mes SEO (era $649.000, ahorro 38%). Todos los precios incluyen servicios completos, sin costos ocultos. Formas de pago: transferencia, Webpay, PayPal, cuotas con tarjeta.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Por qué contratar un pack en lugar de servicios separados?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Los <strong>packs ahorran 30-40% de costo</strong> vs servicios separados. Además: <strong>un solo punto de contacto</strong> simplifica gestión (vs coordinar 4 proveedores), <strong>servicios integrados</strong> funcionan mejor juntos (web optimizada para SEO, fotos para conversión, videos para engagement), <strong>plazos coordinados</strong> entregan todo en 15-30 días (vs meses coordinando), <strong>coherencia visual</strong> y estratégica en todos los canales, y <strong>soporte continuo</strong> con un equipo que conoce tu marca y objetivos.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto demora la entrega de un pack completo?</h3>
              <p className="text-lg leading-relaxed text-justify">
                <strong>Pack Web Inicial:</strong> 10-15 días hábiles. <strong>Pack Visual Completo:</strong> 7-10 días (sesión de fotos/videos + edición). <strong>Pack SEO Mensual:</strong> inicio inmediato con primeros resultados visibles en 30-60 días. <strong>Pack Todo-en-Uno:</strong> 20-30 días para entrega completa coordinada (web + contenido visual), SEO continúa mensualmente. Todos los plazos incluyen 1 ronda de ajustes sin costo. Plazos pueden acelerarse con fee de urgencia.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Puedo personalizar un pack según mis necesidades?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Sí, todos los <strong>packs son personalizables.</strong> Puedes agregar servicios extras: más páginas web (+$50.000/página), más fotos (+$9.900/producto), más videos (+$19.900/video), integración ecommerce (+$150.000), email marketing mensual (+$99.000/mes), gestión redes sociales (+$149.000/mes). También puedes quitar servicios que no necesitas para reducir precio. Contáctanos para cotización personalizada que se ajuste exactamente a tu presupuesto y objetivos.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué pasa si no estoy conforme con los resultados?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Todos los packs incluyen <strong>1 ronda de ajustes sin costo</strong> para asegurar tu satisfacción. Para el <strong>Pack SEO Mensual</strong> ofrecemos garantía: si no vemos mejora de tráfico orgánico en los primeros 90 días, trabajamos gratis hasta lograr resultados medibles. Para <strong>Pack Todo-en-Uno</strong> incluimos auditoría de conversión a los 60 días y optimizaciones basadas en datos reales de usuarios. +200 empresas confían en nuestros packs con tasa de satisfacción 94%.
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
            ¿Listo para tu Pack Completo?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Únete a <strong className="text-[var(--color-accent)]">+200 empresas</strong> que ahorran 30-40% con packs integrados. Cotiza gratis tu pack personalizado:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Cotización gratis</p>
              <p className="text-xs text-[var(--color-muted)]">Presupuesto en 24h</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Pack personalizado</p>
              <p className="text-xs text-[var(--color-muted)]">A tu medida</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Ahorro 30-40%</p>
              <p className="text-xs text-[var(--color-muted)]">vs servicios separados</p>
            </div>
          </div>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Mi Pack Ahora →
          </Link>
        </div>
      </div>
    </>
  );
}
