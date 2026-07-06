import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Digital Servicios Profesionales 2026 | Abogados, Médicos, Contadores',
  description: 'Marketing digital para servicios profesionales: abogados, médicos, dentistas, contadores, arquitectos. Web profesional, SEO local, Google Maps. Desde $249.000.',
  keywords: 'marketing digital abogados, SEO médicos, web servicios profesionales, Google Maps dentistas',
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
    canonical: '/marketing-digital-servicios-profesionales',
  },
  openGraph: {
    title: 'Marketing Digital Servicios Profesionales 2026',
    description: 'Marketing digital para abogados, médicos, contadores. Web, SEO local, Google Maps.',
    url: 'https://almamedia.cl/marketing-digital-servicios-profesionales',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Digital Servicios Profesionales 2026',
    description: 'Marketing para abogados, médicos, contadores.',
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

export default function MarketingDigitalServiciosProfesionalesPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/servicios" className="hover:text-[var(--color-accent)] transition-colors">Servicios</Link>
          <span className="mx-2">/</span>
          <span>Servicios Profesionales</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚖️ Servicios Profesionales</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Marketing Digital para Servicios Profesionales
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Marketing digital especializado para servicios profesionales:</strong> abogados, médicos, dentistas, contadores, arquitectos, psicólogos, consultores. Diseño web profesional y sobrio que genera confianza, SEO local para aparecer cuando buscan "abogado + especialidad + ciudad", Google Business Profile optimizado con reseñas, contenido educativo que demuestra expertise. Pack completo desde $249.000 con web WordPress + SEO mensual + Google Maps + blog con 4 artículos/mes. El 82% de clientes de servicios profesionales investiga online antes de contratar. Atendemos profesionales en toda la Región del Biobío: Concepción centro, Pedro de Valdivia, Talcahuano, Los Ángeles. +40 profesionales gestionados: estudios jurídicos, clínicas, estudios contables, arquitectura.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Marketing Profesional →
        </Link>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Por Profesión */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Servicios por Profesión</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Abogados</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Web con áreas de práctica, blog jurídico, casos de éxito. SEO: "abogado laboral Concepción", "abogado familia Biobío".
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Médicos / Dentistas</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Web con especialidades, reserva online, Google Maps. SEO local: "dentista Concepción centro", "traumatólogo Talcahuano".
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Contadores</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Web con servicios contables, blog tributario, calculadoras. SEO: "contador Concepción", "asesoría tributaria Biobío".
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Arquitectos</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Portafolio online, galería proyectos, blog diseño. SEO: "arquitecto Concepción", "remodelación casas Biobío".
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Psicólogos</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Web con especialidades, reserva online, blog salud mental. SEO: "psicólogo Concepción", "terapia familiar Biobío".
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">Consultores</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed text-justify">
                Web con servicios, casos éxito, blog expertise. SEO: "consultor empresas Concepción", "asesoría PYME Biobío".
              </p>
            </div>
          </div>
        </section>

        {/* Servicios incluidos */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">¿Qué Incluye?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Web Profesional</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Sitio WordPress profesional y sobrio. Áreas de práctica/especialidades, equipo, casos de éxito, formulario contacto, reserva online opcional.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Diseño profesional</li>
                <li>✓ Servicios detallados</li>
                <li>✓ Formulario contacto</li>
                <li>✓ Google Analytics</li>
              </ul>
              <div className="text-2xl font-black text-[var(--color-accent)]">$199.000/año</div>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 relative">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                ESENCIAL
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">SEO + Contenido</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                SEO local + blog mensual con artículos educativos que demuestran expertise. Posiciona para keywords "profesión + especialidad + ciudad".
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ SEO local</li>
                <li>✓ 4 artículos/mes blog</li>
                <li>✓ Google Business Profile</li>
                <li>✓ Gestión reseñas</li>
              </ul>
              <div className="text-2xl font-black text-[var(--color-accent)]">$249.000/mes</div>
            </div>
          </div>
        </section>

        {/* Por qué marketing profesionales */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Marketing Digital para Profesionales?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 82% de clientes de servicios profesionales investiga online antes de contratar.</strong> Cuando alguien necesita abogado, dentista, o contador, lo primero que hace es buscar en Google: "abogado laboral Concepción", "dentista cerca de mí", "contador para PYME". Si no tienes presencia digital profesional — web actualizada, reseñas positivas en Google, contenido que demuestre expertise — pierdes clientes que contratan a competidores que SÍ invirtieron en marketing. Presencia digital genera confianza: web profesional = profesional confiable.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Contenido educativo posiciona como experto y atrae clientes cualificados.</strong> Blog con artículos educativos ("¿Cómo demandar despido injustificado?", "¿Cuándo necesito blanqueamiento dental?") atrae búsquedas informacionales de alta intención. Usuario que lee tu artículo, encuentra respuesta útil, ve que dominas el tema → te contacta cuando necesita el servicio. SEO de contenido tiene ROI superior a largo plazo: artículo bien posicionado genera consultas constantes durante años sin inversión publicitaria adicional.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Atraer Más Clientes?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Pack Profesional: Web + SEO + Blog. Auditoría gratis de tu presencia digital actual. Cotiza:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Marketing Profesional →
          </Link>
        </div>

      </article>
    </>
  );
}
