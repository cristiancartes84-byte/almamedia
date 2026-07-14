import ParticlesBackground from '@/components/Particles';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - Cotiza tu Proyecto | Alma Media Biobío',
  description: 'Contacta con Alma Media para cotizar tu proyecto de diseño web, SEO o contenido visual en Biobío. Te respondemos en menos de 24 horas.',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto - Cotiza tu Proyecto | Alma Media',
    description: 'Cotiza tu proyecto de diseño web, SEO o contenido visual. Respuesta en menos de 24 horas.',
    url: 'https://almamedia.cl/contacto',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contacto - Alma Media',
    description: 'Cotiza tu proyecto de marketing digital. Respuesta en 24h.',
  },
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
          <ContactForm />

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
                  <a href="tel:+56961605142" className="text-[var(--color-accent)] hover:underline">
                    +56 9 6160 5142
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
