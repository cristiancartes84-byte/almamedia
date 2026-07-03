import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Caso de Éxito: Cómo un Restaurant Aumentó Ventas 60% con SEO Local',
  description: 'Caso de éxito real: estrategia SEO local que aumentó visitas 300% y ventas 60% en 6 meses. Tácticas exactas, timeline, costos y resultados medibles.',
  keywords: 'caso exito SEO, caso exito SEO local, ejemplo SEO restaurante, resultados SEO',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog/caso-exito-seo-local',
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
          <span>Caso Éxito SEO</span>
        </div>

        <article className="relative z-10 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                Casos de Éxito
              </span>
              <span className="text-sm text-[var(--color-muted)]">6 min lectura</span>
              <span className="text-sm text-[var(--color-muted)]"><CurrentMonth /> <CurrentYear /></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Caso de Éxito: Cómo un Restaurant Aumentó Ventas 60% con SEO Local
            </h1>

            <p className="text-xl text-[var(--color-muted)] leading-relaxed text-justify">
              <strong className="text-white">Restaurant de comida chilena en Concepción pasó de 0 visitas orgánicas a 1,240/mes en 6 meses.</strong> Estrategia SEO local completa que aumentó ventas 60%, posicionó en Map Pack para 12 keywords, y generó 340 reservas desde Google. Este es el caso completo: situación inicial, estrategia exacta, tácticas implementadas, timeline mes a mes, costos reales, y resultados medibles. Todo replicable.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Cliente y Situación Inicial</h2>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-xl font-bold mb-4">Perfil del Cliente</h3>
              <ul className="space-y-2">
                <li><strong>Negocio:</strong> Restaurant comida chilena tradicional</li>
                <li><strong>Ubicación:</strong> Barrio universitario, Concepción</li>
                <li><strong>Años operando:</strong> 3 años (establecido, no startup)</li>
                <li><strong>Capacidad:</strong> 45 mesas, almuerzo y cena</li>
                <li><strong>Ticket promedio:</strong> $12.500/persona</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Problema (Enero 2025)</h3>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Restaurant dependía 100% de clientes recurrentes y boca a boca. <strong className="text-white">Ocupación promedio: 35%</strong> (15 mesas de 45 llenas en horario almuerzo/cena). Fines de semana 60%, semana 20%. Necesitaban flujo constante de clientes nuevos para subir ocupación a 70%+ sostenible.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Situación Digital Inicial</h3>

            <ul className="space-y-3 mb-8">
              <li className="text-lg leading-relaxed"><strong>Sitio web:</strong> Landing simple (1 página) sin SEO, sin blog, 80 visitas/mes</li>
              <li className="text-lg leading-relaxed"><strong>Google Maps:</strong> Perfil creado pero sin optimizar, 8 reseñas (4.6★)</li>
              <li className="text-lg leading-relaxed"><strong>Instagram:</strong> 420 seguidores, sin estrategia clara</li>
              <li className="text-lg leading-relaxed"><strong>Posicionamiento Google:</strong> No aparecía en primera página para ninguna keyword relevante</li>
              <li className="text-lg leading-relaxed"><strong>Tráfico orgánico:</strong> 0 visitas/mes desde Google búsqueda</li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Estrategia Implementada</h2>

            <h3 className="text-2xl font-bold mb-4 mt-8">Fase 1: Fundación (Mes 1-2) — Inversión $540.000</h3>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-8 not-prose">
              <h4 className="font-bold mb-3">Acciones:</h4>
              <ul className="space-y-3">
                <li>
                  <strong>1. Rediseño sitio web ($390.000):</strong> Sitio WordPress 7 páginas (Inicio, Menú, Nosotros, Galería, Reservas, Blog, Contacto). Responsive, optimizado velocidad (<2s carga), formulario reservas integrado WhatsApp.
                </li>
                <li>
                  <strong>2. Sesión fotografía gastronómica ($150.000):</strong> 3 horas, 40 fotos profesionales platos + ambiente + equipo. Fotos usadas en web, Google, Instagram.
                </li>
                <li>
                  <strong>3. Optimización Google Business Profile ($0 - in-house):</strong> Completar 100% perfil, subir 30 fotos, configurar atributos (terraza, Wi-Fi, acepta tarjetas), crear descripción optimizada con keywords.
                </li>
                <li>
                  <strong>4. Research keywords ($0 - in-house):</strong> Identificar 25 keywords objetivo: "restaurant chileno Concepción", "dónde comer pastel de choclo", "almuerzo casero Concepción", etc.
                </li>
              </ul>
              <p className="text-sm text-[var(--color-muted)] mt-4"><strong>Resultados Mes 2:</strong> Tráfico web 80 → 180 visitas/mes. Google Maps 0 → 45 clics/mes.</p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Fase 2: Contenido + Reseñas (Mes 3-4) — $249.000/mes</h3>

            <div className="bg-[var(--color-card)] border-l-4 border-white p-6 mb-8 not-prose">
              <h4 className="font-bold mb-3 text-white">Acciones:</h4>
              <ul className="space-y-3 text-[var(--color-muted)]">
                <li>
                  <strong className="text-white">1. Blog SEO (2 artículos/mes):</strong> "Dónde Comer Comida Chilena en Concepción", "Receta Cazuela de Vacuno Tradicional", "Mejores Restaurants Barrio Universitario", "Historia Pastel de Choclo". Artículos 1,200 palabras, optimizados SEO, con fotos.
                </li>
                <li>
                  <strong className="text-white">2. Campaña reseñas:</strong> Implementar sistema: mesero menciona al pagar, código QR en mesa, WhatsApp 24h después. Objetivo: 3-5 reseñas/semana. Incentivo: sorteo mensual cena para 2.
                </li>
                <li>
                  <strong className="text-white">3. Google Posts semanales:</strong> Plato de la semana, menú ejecutivo, evento especial. Mantiene perfil Google activo.
                </li>
                <li>
                  <strong className="text-white">4. Optimización técnica SEO:</strong> Schema markup LocalBusiness + Restaurant, velocidad web, sitemap XML, enlaces internos entre páginas.
                </li>
              </ul>
              <p className="text-sm text-white mt-4"><strong>Resultados Mes 4:</strong> Tráfico web 320 visitas/mes (+78%). Reseñas Google 8 → 32 (4.7★). Google Maps 120 clics/mes.</p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Fase 3: Escala + Link Building (Mes 5-6) — $390.000/mes</h3>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-8 not-prose">
              <h4 className="font-bold mb-3">Acciones:</h4>
              <ul className="space-y-3">
                <li>
                  <strong>1. Aumentar contenido (4 artículos/mes):</strong> Duplicar producción blog. Agregar keywords long-tail: "restaurant familiar domingo Concepción", "dónde almorzar barato centro Concepción".
                </li>
                <li>
                  <strong>2. Link building local (6-8 links/mes):</strong> Contactar blogs gastronómicos Concepción, guías turísticas, directorios locales. Links desde sitios relevantes mejoran autoridad.
                </li>
                <li>
                  <strong>3. Optimizar conversión:</strong> A/B test formulario reservas (reducir campos 7 → 4), agregar botón WhatsApp floating, urgencia ("Solo quedan 3 mesas disponibles hoy").
                </li>
                <li>
                  <strong>4. Integración Instagram:</strong> Feed Instagram embebido en web, stories destacadas con menú, CTA "Síguenos" en sitio.
                </li>
              </ul>
              <p className="text-sm text-[var(--color-muted)] mt-4"><strong>Resultados Mes 6:</strong> Tráfico web 1,240 visitas/mes. Reseñas 58 (4.8★). Map Pack para 12 keywords. Google Maps 420 clics/mes.</p>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Resultados Finales (6 Meses)</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
              <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Métricas Digitales</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Tráfico web:</strong> 80 → 1,240 visitas/mes (+1,450%)</li>
                  <li><strong>Posiciones Google:</strong> 0 → 12 keywords en Map Pack</li>
                  <li><strong>Reseñas:</strong> 8 → 58 reseñas (4.8★ promedio)</li>
                  <li><strong>Google Maps clics:</strong> 0 → 420/mes</li>
                  <li><strong>Llamadas desde Google:</strong> 145/mes</li>
                  <li><strong>Reservas online:</strong> Sistema nuevo, 95/mes</li>
                </ul>
              </div>

              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Impacto en Negocio</h3>
                <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                  <li><strong>Ocupación promedio:</strong> 35% → 63% (+80%)</li>
                  <li><strong>Clientes nuevos/mes:</strong> ~40 → 180 (+350%)</li>
                  <li><strong>Ventas mensuales:</strong> $8.2M → $13.1M (+60%)</li>
                  <li><strong>Ticket promedio:</strong> $12.500 → $12.900 (+3%)</li>
                  <li><strong>ROI campaña:</strong> 287% en 6 meses</li>
                  <li><strong>Costo adquisición cliente:</strong> $4,200 (recupera en 1 visita)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Inversión Total y ROI</h2>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <h3 className="text-xl font-bold mb-4">Desglose Inversión 6 Meses</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Rediseño sitio web (mes 1):</span>
                  <span className="font-bold">$390.000</span>
                </div>
                <div className="flex justify-between">
                  <span>Fotografía profesional (mes 1):</span>
                  <span className="font-bold">$150.000</span>
                </div>
                <div className="flex justify-between">
                  <span>SEO mensual (mes 3-4, $249k/mes):</span>
                  <span className="font-bold">$498.000</span>
                </div>
                <div className="flex justify-between">
                  <span>SEO mensual (mes 5-6, $390k/mes):</span>
                  <span className="font-bold">$780.000</span>
                </div>
                <div className="border-t border-[var(--color-border)] pt-3 mt-3 flex justify-between text-lg">
                  <span className="font-bold">TOTAL INVERSIÓN:</span>
                  <span className="font-bold text-white">$1.818.000</span>
                </div>
                <div className="border-t border-[var(--color-border)] pt-3 mt-3">
                  <div className="flex justify-between mb-2">
                    <span>Ventas adicionales 6 meses:</span>
                    <span className="font-bold text-[var(--color-accent)]">+$29.400.000</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Inversión total:</span>
                    <span>-$1.818.000</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Costos operacionales extra (30%):</span>
                    <span>-$8.820.000</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-[var(--color-accent)]">
                    <span className="text-[var(--color-accent)]">GANANCIA NETA:</span>
                    <span className="text-[var(--color-accent)]">$18.762.000</span>
                  </div>
                  <p className="text-center text-2xl font-black text-[var(--color-accent)] mt-4">ROI: 1,032%</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Tácticas Replicables (Lo Que Puedes Copiar)</h2>

            <h3 className="text-2xl font-bold mb-4 mt-8">1. Sistema de Reseñas (Más Importante)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              Pasaron de 8 a 58 reseñas en 6 meses = 8 reseñas/mes promedio. <strong className="text-[var(--color-accent)]">Cómo:</strong> (1) Mesero menciona al entregar cuenta: "Si disfrutó, nos ayudaría mucho una reseña en Google" + muestra código QR. (2) WhatsApp automático 24h después con link directo. (3) Sorteo mensual cena para 2 entre quienes dejen reseña (legal porque no piden "reseña positiva", solo "reseña"). <strong>Tasa conversión: 12%</strong> (12 de cada 100 clientes dejan reseña).
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">2. Contenido Blog con Keywords Long-Tail</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              NO competir por "restaurant Concepción" (muy competitivo). Competir por <strong className="text-[var(--color-accent)]">long-tail:</strong> "dónde comer pastel de choclo centro Concepción", "restaurant familiar domingo Concepción", "almuerzo casero barato Concepción". Menos búsquedas, pero más fácil rankear + intención alta. Artículo bien optimizado para long-tail puede rankear top 3 en 2-3 meses.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">3. Fotografía Profesional (ROI Inmediato)</h3>
            <p className="text-lg leading-[1.8] text-justify mb-6">
              $150.000 en fotos profesionales generó 40 imágenes usadas 200+ veces (web, Google, Instagram, menú digital, publicidad). <strong className="text-white">CTR en Google Maps aumentó 85%</strong> después de actualizar fotos. Cliente ve foto profesional de plato → saliva → reserva. Sesión fotográfica se paga sola en 3 semanas.
            </p>

          </div>

          {/* CTA Conversión */}
          <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)] mt-16">
            <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
              <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">📈 Resultados Reales</span>
            </div>
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
              ¿Quieres Resultados Como Este Caso?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
              Estrategia SEO local completa: sitio optimizado, Google Maps, contenido mensual, sistema de reseñas. Primeros resultados visibles en 60-90 días.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                Solicitar Estrategia SEO →
              </Link>
              <Link href="/seo-local" className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-white text-lg font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Más Casos de Éxito →
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              ⭐ ROI promedio 287% en 6 meses • Desde $249k/mes
            </p>
          </div>

        </article>
      </div>
    </>
  );
}
