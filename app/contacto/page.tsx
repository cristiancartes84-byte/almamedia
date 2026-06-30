import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Contacto - Cotiza tu Proyecto | Alma Media Biobío',
  description: 'Contacta con Alma Media para cotizar tu proyecto de diseño web, SEO o contenido visual en Biobío. Te respondemos en menos de 24 horas.',
};

export default function ContactoPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Hero */}
      <section className="relative z-10 pt-24 pb-16 px-8 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">
            Contacto
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl mx-auto">
          ¿Listo para crecer online?
        </h1>

        <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Cotiza tu proyecto sin compromiso. Te respondemos en menos de 24 horas con una propuesta personalizada.
        </p>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Envía tu consulta</h2>

            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  placeholder="Juan Pérez"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  placeholder="juan@empresa.cl"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                  placeholder="+56 9 1234 5678"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2">
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="diseno-web">Diseño Web</option>
                  <option value="seo">SEO</option>
                  <option value="seo-local">SEO Local</option>
                  <option value="fotografia">Fotografía de Producto</option>
                  <option value="video">Video de Producto</option>
                  <option value="paquete">Paquete Completo</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                  placeholder="Describe brevemente qué necesitas..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all"
              >
                Enviar Consulta
              </button>

              <p className="text-sm text-[var(--color-muted)] text-center">
                * Campos obligatorios
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(200,255,0,0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a href="mailto:contacto@almamedia.cl" className="text-[var(--color-accent)] hover:underline">
                    contacto@almamedia.cl
                  </a>
                  <p className="text-sm text-[var(--color-muted)] mt-2">
                    Respuesta en menos de 24 horas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(200,255,0,0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Teléfono</h3>
                  <a href="tel:+56XXXXXXXXX" className="text-[var(--color-accent)] hover:underline">
                    +56 X XXXX XXXX
                  </a>
                  <p className="text-sm text-[var(--color-muted)] mt-2">
                    Lun - Vie: 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(200,255,0,0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Ubicación</h3>
                  <p className="text-[var(--color-muted)]">
                    Concepción, Región del Biobío<br />
                    Chile
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[rgba(200,255,0,0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Horario de Atención</h3>
                  <p className="text-[var(--color-muted)]">
                    Lunes a Viernes<br />
                    9:00 - 18:00 hrs
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage Areas */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6">
              <h3 className="font-bold mb-4">Zonas que Atendemos</h3>
              <div className="flex flex-wrap gap-2">
                {['Concepción', 'Talcahuano', 'San Pedro', 'Hualpén', 'Chiguayante', 'Coronel', 'Los Ángeles', 'Tomé', 'Lota', 'Penco'].map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.2)] rounded-full text-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[var(--color-muted)] mt-4">
                + Toda la Región del Biobío
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pb-24">
        <h2 className="text-3xl font-black text-center mb-12">Preguntas Frecuentes</h2>

        <div className="space-y-4">
          <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-6 cursor-pointer hover:border-[var(--color-accent)] transition-colors">
            <summary className="font-bold">¿Cuánto demoran en responder?</summary>
            <p className="text-[var(--color-muted)] mt-4">
              Respondemos todas las consultas en menos de 24 horas hábiles. Generalmente contestamos el mismo día.
            </p>
          </details>

          <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-6 cursor-pointer hover:border-[var(--color-accent)] transition-colors">
            <summary className="font-bold">¿La cotización tiene algún costo?</summary>
            <p className="text-[var(--color-muted)] mt-4">
              No, la cotización es 100% gratuita y sin compromiso. Solo pagas si decides contratar el servicio.
            </p>
          </details>

          <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-6 cursor-pointer hover:border-[var(--color-accent)] transition-colors">
            <summary className="font-bold">¿Trabajan solo en Concepción?</summary>
            <p className="text-[var(--color-muted)] mt-4">
              Atendemos toda la Región del Biobío. El 90% del proceso es remoto, así que la ubicación física no es limitante.
            </p>
          </details>

          <details className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-6 cursor-pointer hover:border-[var(--color-accent)] transition-colors">
            <summary className="font-bold">¿Cuánto tiempo toma un proyecto?</summary>
            <p className="text-[var(--color-muted)] mt-4">
              Depende del servicio: Landing page (1-2 semanas), Sitio corporativo (3-4 semanas), Ecommerce (4-6 semanas). Te damos plazos exactos en la cotización.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
