import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Local: Cómo Aparecer en Google Maps [Paso a Paso 2026]',
  description: 'Guía paso a paso para aparecer en Google Maps y Google Business Profile: optimización, reseñas, fotos, keywords locales. Domina tu zona geográfica.',
  keywords: 'SEO local, Google Maps, Google Business Profile, aparecer Google Maps, SEO local Chile',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog/seo-local-google-maps',
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
          <span>SEO Local</span>
        </div>

        <article className="relative z-10 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                SEO
              </span>
              <span className="text-sm text-[var(--color-muted)]">8 min lectura</span>
              <span className="text-sm text-[var(--color-muted)]"><CurrentMonth /> <CurrentYear /></span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              SEO Local: Cómo Aparecer en Google Maps [Paso a Paso <CurrentYear />]
            </h1>

            <p className="text-xl text-[var(--color-muted)] leading-relaxed text-justify">
              <strong className="text-white">El 46% de búsquedas en Google son locales y el 88% resulta en llamada o visita en 24 horas.</strong> Si tu negocio no aparece en Google Maps cuando alguien busca tu servicio + tu ciudad, estás perdiendo casi la mitad de clientes potenciales. Esta guía paso a paso te enseña exactamente cómo optimizar Google Business Profile para aparecer en el Map Pack (los 3 primeros resultados locales) y dominar tu zona geográfica.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 1: Crear y Verificar Google Business Profile</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Tiempo: 15 minutos.</strong> Ve a google.com/business y crea perfil. Google enviará código de verificación por correo postal (2-3 semanas) o llamada/SMS si eres elegible. IMPORTANTE: No puedes rankear hasta verificar. Pide código inmediatamente.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Errores Comunes al Crear Perfil</h3>

            <div className="bg-[var(--color-card)] border border-red-500 rounded-xl p-6 mb-8 not-prose">
              <h4 className="text-xl font-bold mb-4 text-red-400">❌ NO hagas esto:</h4>
              <ul className="space-y-3">
                <li><strong>Nombre con keywords spam:</strong> "Ferretería Los Pinos Concepción Herramientas Construcción" → Google penaliza. Usa nombre real del negocio.</li>
                <li><strong>Dirección imprecisa:</strong> Pin de mapa debe estar EXACTAMENTE en tu ubicación física. Error de 50 metros = ranking más bajo.</li>
                <li><strong>Categoría incorrecta:</strong> Elegir categoría más popular en vez de más precisa. Ej: "Tienda" en vez de "Ferretería" → menos relevancia.</li>
                <li><strong>Múltiples perfiles:</strong> NO crear perfil nuevo si ya existe. Reclamar el existente. Duplicados = suspensión.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 2: Optimización Completa del Perfil</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Perfil 100% completo rankea 2.7x mejor que perfil 50% completo. <strong className="text-white">Completa TODO. Cada campo cuenta.</strong>
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Información Básica (Crítico)</h3>

            <ul className="space-y-4 mb-8">
              <li className="text-lg leading-relaxed">
                <strong className="text-[var(--color-accent)]">Nombre del negocio:</strong> Nombre oficial registrado. Si tu marca local incluye ciudad (ej: "Ferretería Los Pinos Concepción" es tu nombre comercial real), úsalo. Si no, solo nombre sin keywords adicionales.
              </li>
              <li className="text-lg leading-relaxed">
                <strong className="text-[var(--color-accent)]">Categoría principal:</strong> La MÁS específica posible. "Ferretería" > "Tienda". "Restaurante italiano" > "Restaurante". Esta es la categoría por la que competirás principalmente.
              </li>
              <li className="text-lg leading-relaxed">
                <strong className="text-[var(--color-accent)]">Categorías secundarias:</strong> Agrega todas relevantes (máximo 10). Ferretería puede ser: Ferretería, Tienda materiales construcción, Tienda pintura, Tienda herramientas eléctricas. Esto amplía búsquedas que te activan.
              </li>
              <li className="text-lg leading-relaxed">
                <strong className="text-[var(--color-accent)]">Dirección:</strong> Exacta, con calle, número, comuna, región, código postal. Pin de mapa debe estar EN tu local, no en la calle ni una cuadra más allá.
              </li>
              <li className="text-lg leading-relaxed">
                <strong className="text-[var(--color-accent)]">Área de servicio:</strong> Si atiendes a domicilio (plomero, electricista), marca las comunas donde trabajas. Esto te hace aparecer en búsquedas de esas comunas aunque no tengas oficina ahí.
              </li>
              <li className="text-lg leading-relaxed">
                <strong className="text-[var(--color-accent)]">Horario:</strong> Actualiza SIEMPRE. Horario incorrecto = cliente llega y está cerrado = reseña negativa. Marca horarios especiales en feriados.
              </li>
              <li className="text-lg leading-relaxed">
                <strong className="text-[var(--color-accent)]">Teléfono:</strong> Usa número con WhatsApp. Cliente puede llamar o escribir directo desde Google.
              </li>
              <li className="text-lg leading-relaxed">
                <strong className="text-[var(--color-accent)]">Sitio web:</strong> Link a tu sitio. Si no tienes, crea sitio gratuito con Google (google.com/business/website) o usa landing page.
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8">Descripción del Negocio (750 caracteres)</h3>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Google lee tu descripción para entender qué ofreces. <strong className="text-[var(--color-accent)]">Estructura ganadora:</strong>
            </p>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <p className="text-sm mb-4"><strong>Ejemplo: Ferretería</strong></p>
              <p className="text-sm mb-3">
                "Ferretería Los Pinos en Concepción. Especialistas en herramientas eléctricas, materiales de construcción, pinturas y artículos de plomería. Atendemos a maestros, contratistas y particulares desde 1998. Stock permanente de marcas Bosch, Makita, DeWalt. Envío a domicilio en Gran Concepción. Asesoría técnica gratuita. Abierto lunes a sábado 9:00-19:00."
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-4">
                <strong>Por qué funciona:</strong> Menciona ubicación, servicios específicos, público objetivo, diferenciadores (marcas, envío, asesoría), horario. Incluye keywords naturalmente sin spam.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Atributos (Muy Importante)</h3>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Atributos son filtros que Google muestra en búsquedas. Cliente busca "restaurante con terraza Concepción" → Google filtra por atributo "terraza". Si no lo marcaste, no apareces. <strong className="text-white">Marca TODOS los que apliquen:</strong>
            </p>

            <ul className="space-y-2 mb-8">
              <li className="text-lg leading-relaxed">• Propiedad de la empresa (mujeres, veteranos, LGBTQ+, etc)</li>
              <li className="text-lg leading-relaxed">• Accesibilidad (entrada/baño/estacionamiento accesible)</li>
              <li className="text-lg leading-relaxed">• Amenidades (Wi-Fi, terraza, estacionamiento, acepta tarjetas)</li>
              <li className="text-lg leading-relaxed">• Servicios (delivery, retiro en tienda, reservas online)</li>
              <li className="text-lg leading-relaxed">• Planificación (se requiere cita, aceptan walk-ins)</li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 3: Fotografías (Factor Ranking #2)</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Negocios con 100+ fotos reciben 520% más llamadas y 180% más clics al sitio web vs negocios sin fotos. <strong className="text-white">Fotografías no son "nice to have" — son obligatorias para rankear.</strong>
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Qué Fotografías Subir (Mínimo)</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
              <div className="bg-[var(--color-card)] border border-[var(--color-accent)] rounded-xl p-6">
                <h4 className="font-bold mb-3 text-[var(--color-accent)]">Fotos Obligatorias</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Logo:</strong> Fondo transparente, 720x720px mínimo</li>
                  <li>• <strong>Portada:</strong> Fachada exterior del local (1080x608px)</li>
                  <li>• <strong>Interior:</strong> 5-10 fotos del espacio (productos, pasillos, área atención)</li>
                  <li>• <strong>Productos/servicios:</strong> 10-20 fotos de lo que vendes/ofreces</li>
                  <li>• <strong>Equipo:</strong> 3-5 fotos del equipo trabajando</li>
                </ul>
              </div>

              <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
                <h4 className="font-bold mb-3 text-white">Fotos Extra (Impulso Ranking)</h4>
                <ul className="space-y-2 text-sm text-[var(--color-muted)]">
                  <li>• <strong>360°:</strong> Tour virtual del local (Google Street View app)</li>
                  <li>• <strong>Clientes felices:</strong> Fotos reales usando tus servicios</li>
                  <li>• <strong>Ofertas:</strong> Promociones actuales con precios visibles</li>
                  <li>• <strong>Eventos:</strong> Actividades especiales, inauguraciones</li>
                  <li>• <strong>Antes/después:</strong> Si aplica (remodelaciones, etc)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Frecuencia de Actualización</h3>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Sube 2-3 fotos NUEVAS cada semana. Google prioriza negocios activos. Fotos nuevas = negocio activo = ranking mejor. Usa función "Google Posts" para publicar ofertas semanales con foto.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 4: Reseñas (Factor Ranking #1)</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-white">Reseñas son el factor #1 de ranking local.</strong> Negocio con 50 reseñas y 4.5★ aparece ANTES que negocio con 10 reseñas y 5★. Necesitas volumen + calidad + frescura (reseñas recientes).
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Estrategia para Conseguir Más Reseñas</h3>

            <div className="bg-[var(--color-card)] border-l-4 border-[var(--color-accent)] p-6 mb-8 not-prose">
              <h4 className="font-bold mb-4">Sistema Probado (10-15 reseñas/mes):</h4>
              <ol className="space-y-3">
                <li><strong>1. Pedir en persona (momento perfecto):</strong> Después de servicio exitoso, pregunta: "Si quedó satisfecho, nos ayudaría mucho una reseña en Google". Tasa aceptación 30-40%.</li>
                <li><strong>2. Facilitar el proceso:</strong> Crea link directo a tu perfil de reseñas (g.page/[tu-negocio]/review). Guarda en QR impreso o envía por WhatsApp.</li>
                <li><strong>3. Seguimiento 24h después:</strong> Envía WhatsApp: "Hola [nombre], gracias por tu visita. ¿Nos ayudarías con una reseña? [link]"</li>
                <li><strong>4. Incentivo:</strong> "Los primeros 50 que dejen reseña entran a sorteo [premio]". Legal y efectivo (pero NO digas "reseña positiva" — eso viola políticas).</li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Responder Reseñas (TODAS)</h3>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Responde reseñas positivas:</strong> "Gracias [nombre] por tu comentario. Nos alegra que [mencionar algo específico de la reseña]. ¡Te esperamos pronto!" (personalizado, no copy-paste).
            </p>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              <strong className="text-[var(--color-accent)]">Responde reseñas negativas (CRÍTICO):</strong> Respuesta educada mejora percepción 70%. Template: "Lamentamos tu experiencia, [nombre]. Esto no refleja nuestro estándar. ¿Puedes contactarnos al [teléfono] para resolver? Queremos hacerlo bien." — Público ve que te importa resolver problemas.
            </p>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 5: Posts y Actualizaciones</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Google Posts son publicaciones que aparecen en tu perfil Business. Funcionan como mini-anuncios gratuitos. <strong className="text-white">Negocios que publican semanalmente rankean 12% mejor.</strong>
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Qué Publicar (Calendario Semanal)</h3>

            <ul className="space-y-3 mb-8">
              <li className="text-lg leading-relaxed"><strong>Lunes:</strong> Oferta de la semana (con foto + precio + botón "Comprar")</li>
              <li className="text-lg leading-relaxed"><strong>Miércoles:</strong> Producto nuevo o destacado (foto + descripción + link)</li>
              <li className="text-lg leading-relaxed"><strong>Viernes:</strong> Evento próximo o recordatorio horario fin de semana</li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12 text-[var(--color-accent)]">Paso 6: Preguntas y Respuestas</h2>

            <p className="text-lg leading-[1.8] text-justify mb-6">
              Sección Q&A permite que cualquiera haga pregunta pública. <strong className="text-[var(--color-accent)]">Riesgo:</strong> Competencia puede dejar preguntas negativas ("¿Es verdad que atienden mal?"). <strong className="text-white">Solución:</strong> Sé proactivo.
            </p>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 mb-8 not-prose">
              <h4 className="font-bold mb-4">Estrategia Q&A:</h4>
              <ol className="space-y-2 text-sm">
                <li><strong>1. Crea preguntas frecuentes:</strong> Tú mismo haz 10-15 preguntas comunes y respóndelas. Esto llena la sección con info útil antes que lleguen preguntas negativas.</li>
                <li><strong>2. Monitorea diario:</strong> Recibe notificaciones de preguntas nuevas. Responde en <24h.</li>
                <li><strong>3. Marca respuestas correctas:</strong> Como dueño puedes marcar la mejor respuesta.</li>
              </ol>
            </div>

          </div>

          {/* CTA Conversión */}
          <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)] mt-16">
            <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
              <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">📍 Expertos en SEO Local</span>
            </div>
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
              ¿Quieres Dominar Google Maps en tu Zona?
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
              Optimizamos tu Google Business Profile completo: fotos profesionales, estrategia de reseñas, posts semanales, Q&A, todo listo para aparecer en el Map Pack.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
                Solicitar Auditoría SEO Local →
              </Link>
              <Link href="/seo-local" className="inline-block px-8 py-4 border-2 border-[var(--color-accent)] text-white text-lg font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Ver Casos de Éxito →
              </Link>
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-6">
              ⭐ +30 negocios en Map Pack • Primeros resultados en 30 días
            </p>
          </div>

        </article>
      </div>
    </>
  );
}
