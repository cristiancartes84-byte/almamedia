import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Digital para Restaurantes [Guía Completa 2026]',
  description: 'Estrategia completa de marketing digital para restaurantes: SEO local, redes sociales, fotografía gastronómica, delivery online y Google Maps.',
  keywords: 'marketing digital restaurantes, marketing gastronómico, redes sociales restaurante, SEO restaurantes',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog/marketing-digital-restaurantes-guia',
  },
  openGraph: {
    title: 'Marketing Digital para Restaurantes: Guía Completa 2026',
    description: 'Estrategia completa: SEO local, redes sociales, fotografía gastronómica, delivery online y Google Maps para restaurantes.',
    url: 'https://almamedia.cl/blog/marketing-digital-restaurantes-guia',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'article',
    publishedTime: '2026-07-04T10:00:00Z',
    authors: ['Alma Media'],
    images: [{
      url: '/og-images/marketing-digital-restaurantes-guia.jpg',
      width: 1200,
      height: 630,
      alt: 'Marketing Digital Restaurantes Guía 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Digital para Restaurantes: Guía Completa 2026',
    description: 'SEO local, redes sociales, fotografía gastronómica y más. Estrategia completa para restaurantes.',
    images: ['/og-images/marketing-digital-restaurantes-guia.jpg'],
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
          <span>Marketing Restaurantes</span>
        </div>

        <article className="relative z-10 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                Por Industria
              </span>
              <span className="text-sm text-[var(--color-muted)]">10 min lectura</span>
              <span className="text-sm text-[var(--color-muted)]"><CurrentMonth /> <CurrentYear /></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Marketing Digital para Restaurantes [Guía Completa <CurrentYear />]
            </h1>

            <p className="text-xl text-[var(--color-muted)] leading-relaxed text-justify">
              <strong className="text-white">El 87% de comensales busca restaurantes en Google antes de decidir dónde comer.</strong> Si tienes un restaurante y quieres más clientes, esta guía te enseña paso a paso cómo usar marketing digital: Google Maps, redes sociales, fotografía gastronómica, delivery online, y reseñas. Estrategias probadas específicas para la industria gastronómica en Chile.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">1. Google Maps: Tu Primera Prioridad</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-white">El 46% de búsquedas en Google son locales</strong> ("restaurante cerca de mí", "dónde almorzar Concepción"). Si tu restaurante NO aparece en Google Maps, pierdes casi la mitad de clientes potenciales. Google Business Profile es GRATIS y lo más importante para restaurantes.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Configuración Completa Google Business Profile</h3>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-6 not-prose">
              <h4 className="font-bold mb-3">✅ Checklist Optimización:</h4>
              <ul className="space-y-2 text-sm">
                <li>☐ Nombre exacto del restaurante (sin keywords spam)</li>
                <li>☐ Categoría principal correcta (ej: "Restaurante italiano")</li>
                <li>☐ Categorías secundarias (ej: "Pizzería", "Bar de vinos")</li>
                <li>☐ Dirección completa + mapa preciso</li>
                <li>☐ Teléfono con WhatsApp Business</li>
                <li>☐ Horario de atención actualizado (incluyendo feriados)</li>
                <li>☐ Menú con precios (PDF o fotos legibles)</li>
                <li>☐ Link a página web/Instagram</li>
                <li>☐ Atributos (Wi-Fi, terraza, estacionamiento, acepta tarjetas)</li>
                <li>☐ Fotos profesionales (mínimo 10, actualizar mensual)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Estrategia de Reseñas (Factor #1 de Ranking)</h3>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Restaurante con 50 reseñas y 4.5 estrellas aparece ANTES que restaurante con 10 reseñas y 5 estrellas. Volumen + calidad > perfección. <strong className="text-[var(--color-accent)]">Cómo conseguir más reseñas:</strong>
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-lg leading-relaxed"><strong>Al pagar:</strong> Garzon/cajero menciona "Si te gustó, nos ayudarías mucho con una reseña en Google". Mostrar código QR en mesa/cuenta.</li>
              <li className="text-lg leading-relaxed"><strong>Post-visita:</strong> Enviar WhatsApp 24h después: "Gracias por visitarnos 😊 ¿Nos dejarías tu opinión en Google? [link directo]"</li>
              <li className="text-lg leading-relaxed"><strong>Incentivo:</strong> "Los primeros 50 que dejen reseña entran a sorteo de cena para 2" (legal y efectivo)</li>
              <li className="text-lg leading-relaxed"><strong>Responder TODAS:</strong> Buenas Y malas. Respuesta educada a reseña negativa mejora percepción 70%.</li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">2. Instagram: Red Social #1 para Restaurantes</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Instagram es visual. Comida es visual. Match perfecto. <strong className="text-white">El 78% de usuarios de Instagram sigue al menos 1 marca gastronómica.</strong> Estrategia probada:
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Qué Publicar (Contenido que Funciona)</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
                <h4 className="font-bold mb-3 text-[var(--color-accent)]">Contenido Principal (70%)</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Platos estrella:</strong> Foto profesional, descripción apetitosa, precio</li>
                  <li>• <strong>Behind the scenes:</strong> Chef preparando, cocina en acción</li>
                  <li>• <strong>Clientes felices:</strong> Re-postear historias donde te etiquetan</li>
                  <li>• <strong>Nuevo menú:</strong> Anunciar platos nuevos con anticipación</li>
                  <li>• <strong>Eventos especiales:</strong> Día del padre, aniversario, fechas clave</li>
                </ul>
              </div>

              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
                <h4 className="font-bold mb-3 text-white">Contenido Engagement (30%)</h4>
                <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                  <li>• <strong>Encuestas stories:</strong> "¿Cazuela o Pastel de Choclo?" (genera interacción)</li>
                  <li>• <strong>Preguntas:</strong> "¿Qué plato quieres que vuelva al menú?"</li>
                  <li>• <strong>Tips gastronómicos:</strong> Cómo maridar vino, secreto del chef</li>
                  <li>• <strong>Equipo:</strong> Presentar meseros, chef, historia del local</li>
                  <li>• <strong>UGC:</strong> Re-postear fotos de clientes (con permiso)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Frecuencia y Horarios Óptimos</h3>

            <ul className="space-y-3 mb-8">
              <li className="text-lg leading-relaxed"><strong>Feed:</strong> 3-4 posts/semana (Martes 12pm, Jueves 7pm, Sábado 1pm, Domingo 6pm)</li>
              <li className="text-lg leading-relaxed"><strong>Stories:</strong> 2-3 diarias (mostrar día a día del restaurante, crear cercanía)</li>
              <li className="text-lg leading-relaxed"><strong>Reels:</strong> 1-2/semana (recetas rápidas, plating, ambiente, viraliza más que fotos)</li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">3. Fotografía Gastronómica: Invierte Aquí</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Foto amateur con celular sin luz vs foto profesional = diferencia entre "scroll past" y "quiero comer eso YA". <strong className="text-white">Inversión en fotografía profesional paga ROI 300%+</strong> para restaurantes. Una buena foto se usa 50+ veces: Instagram, Google, menú digital, carta física, publicidad.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Qué Fotografiar (Sesión Completa)</h3>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <ul className="space-y-3">
                <li><strong className="text-[var(--color-accent)]">Platos individuales:</strong> 5-10 platos estrella en plano cenital y 45° con ambiente desenfocado</li>
                <li><strong className="text-[var(--color-accent)]">Ambiente:</strong> Salón vacío, mesa servida, barra, terraza (si hay)</li>
                <li><strong className="text-[var(--color-accent)]">Equipo en acción:</strong> Chef cocinando, meseros atendiendo, cocina (limpia)</li>
                <li><strong className="text-[var(--color-accent)]">Detalles:</strong> Textura pan, vino sirviéndose, postre siendo cortado</li>
                <li><strong className="text-[var(--color-accent)]">Fachada exterior:</strong> Entrada, letrero, terraza de día Y de noche</li>
              </ul>
            </div>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong>Costo:</strong> Sesión completa 3 horas = $180.000-$250.000. Recibes 40-60 fotos editadas profesionales. Actualizar cada 6 meses o cuando cambies menú significativamente.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">4. Sitio Web + Delivery Online</h2>

            <h3 className="text-2xl font-bold mb-4 mt-8">Tu Sitio Web Debe Tener (Mínimo)</h3>

            <ul className="space-y-3 mb-8">
              <li className="text-lg leading-relaxed"><strong>Menú digital actualizado:</strong> Con precios, fotos, descripciones, alérgenos</li>
              <li className="text-lg leading-relaxed"><strong>Reservas online:</strong> Sistema simple (formulario o WhatsApp directo)</li>
              <li className="text-lg leading-relaxed"><strong>Delivery/Take away:</strong> Integración PedidosYa, Rappi, o sistema propio</li>
              <li className="text-lg leading-relaxed"><strong>Ubicación clara:</strong> Mapa Google embebido + dirección + cómo llegar</li>
              <li className="text-lg leading-relaxed"><strong>Horarios:</strong> Visibles en homepage, actualizados con feriados</li>
              <li className="text-lg leading-relaxed"><strong>Contacto fácil:</strong> WhatsApp floating button, teléfono clickeable</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">Delivery: ¿Propio o Plataforma?</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse not-prose">
                <thead>
                  <tr className="border-b-2 border-[var(--color-accent)]">
                    <th className="text-left p-4">Criterio</th>
                    <th className="text-center p-4">Plataforma (Rappi/PedidosYa)</th>
                    <th className="text-center p-4">Sistema Propio</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--color-muted)]">
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Comisión</td>
                    <td className="text-center p-4">25-35% por pedido</td>
                    <td className="text-center p-4">0% (solo costo delivery propio)</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Visibilidad</td>
                    <td className="text-center p-4">Alta (te encuentran buscando)</td>
                    <td className="text-center p-4">Baja (solo clientes que ya te conocen)</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Control marca</td>
                    <td className="text-center p-4">Bajo (experiencia genérica)</td>
                    <td className="text-center p-4">Alto (packaging, servicio, todo tuyo)</td>
                  </tr>
                  <tr className="border-b border-[var(--color-border)]">
                    <td className="p-4 font-bold">Inversión inicial</td>
                    <td className="text-center p-4">$0 (solo crear perfil)</td>
                    <td className="text-center p-4">$300k-$500k (sitio web + sistema pedidos)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Ideal para</td>
                    <td className="text-center p-4">Comenzar, validar demanda</td>
                    <td className="text-center p-4">Restaurante consolidado, +100 pedidos/mes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Recomendación:</strong> Empieza con plataformas para validar. Cuando tengas base clientes sólida (6+ meses), agrega sistema propio para reducir comisiones gradualmente.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">5. Email Marketing para Restaurantes</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Email NO está muerto. <strong className="text-white">ROI promedio email marketing = $36 por cada $1 invertido.</strong> Para restaurantes, email es perfecto para: anunciar menú nuevo, eventos especiales, promociones cumpleaños, recuperar clientes inactivos.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Cómo Construir Lista de Emails</h3>

            <ul className="space-y-3 mb-8">
              <li className="text-lg leading-relaxed"><strong>Al pagar:</strong> "¿Quieres recibir promociones exclusivas? Déjanos tu email" (tablet o papel)</li>
              <li className="text-lg leading-relaxed"><strong>Reservas online:</strong> Capturar email en formulario reserva</li>
              <li className="text-lg leading-relaxed"><strong>Wi-Fi gratis:</strong> Pedir email para acceder a WiFi del local</li>
              <li className="text-lg leading-relaxed"><strong>Lead magnet:</strong> "Suscríbete y recibe 10% descuento próxima visita"</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">Qué Enviar (Calendario Mensual)</h3>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <ul className="space-y-2">
                <li><strong>Semana 1:</strong> Newsletter con plato del mes + evento próximo</li>
                <li><strong>Semana 2:</strong> Email cumpleaños (automático con descuento 20%)</li>
                <li><strong>Semana 3:</strong> Promoción especial (2x1 lunes, happy hour, etc)</li>
                <li><strong>Semana 4:</strong> Email re-engagement a inactivos (30+ días sin visitar)</li>
              </ul>
            </div>

          </div>

          {/* CTA Conversión */}
          <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)] mt-16">
            <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
              <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🍽️ Especialistas en Restaurantes</span>
            </div>
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
              ¿Necesitas Más Clientes para tu Restaurante?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
              Estrategia completa de marketing digital para restaurantes: Google Maps, Instagram, fotografía gastronómica, sitio web con menú digital.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                Solicitar Estrategia Gratis →
              </Link>
              <Link href="/marketing-digital-restaurantes" className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-white text-lg font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Ver Casos Restaurantes →
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              ⭐ Experiencia en 12+ restaurantes • ROI promedio 285%
            </p>
          </div>

        </article>
      </div>

      {/* Schema.org Article Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Marketing Digital para Restaurantes: Guía Completa 2026",
        "description": "Estrategia completa de marketing digital para restaurantes: SEO local, redes sociales, fotografía gastronómica, delivery online y Google Maps.",
        "image": "https://almamedia.cl/og-images/marketing-digital-restaurantes-guia.jpg",
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
            "url": "https://almamedia.cl/logo.png"
          }
        },
        "datePublished": "2026-07-04T10:00:00Z",
        "dateModified": "2026-07-05T10:00:00Z",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://almamedia.cl/blog/marketing-digital-restaurantes-guia"
        },
        "keywords": "marketing digital restaurantes, marketing gastronómico, redes sociales restaurante, SEO restaurantes",
        "articleSection": "Por Industria",
        "wordCount": 2400,
        "timeRequired": "PT10M",
        "inLanguage": "es-CL"
      })}} />
    </>
  );
}
