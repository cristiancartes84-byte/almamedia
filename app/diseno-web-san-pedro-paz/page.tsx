import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diseño Web San Pedro de la Paz 2026 | Sitios Profesionales',
  description: 'Diseño web profesional en San Pedro de la Paz. Especializados en negocios locales, educación, salud y servicios. Desde $169.000/año. Cotiza gratis.',
  keywords: 'diseño web San Pedro de la Paz, sitio web San Pedro, página web Lomas Coloradas, diseño web Michihue, desarrollo web San Pedro',
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
    canonical: '/diseno-web-san-pedro-paz',
  },
  openGraph: {
    title: 'Diseño Web San Pedro de la Paz 2026 | Sitios Profesionales',
    description: 'Diseño web profesional en San Pedro. Especializados en educación, salud y servicios locales.',
    url: 'https://almamedia.cl/diseno-web-san-pedro-paz',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web San Pedro de la Paz 2026',
    description: 'Diseño web profesional. Especializados en negocios locales, educación y salud.',
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

export default function DisenoWebSanPedroPazPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Diseño Web Profesional en San Pedro de la Paz",
            "description": "Servicio profesional de diseño web en San Pedro de la Paz. Especializados en sitios para negocios locales, educación, salud, fitness y servicios residenciales.",
            "provider": {
              "@type": "Organization",
              "name": "Alma Media",
              "url": "https://almamedia.cl"
            },
            "areaServed": {
              "@type": "City",
              "name": "San Pedro de la Paz",
              "containedIn": {
                "@type": "AdministrativeArea",
                "name": "Región del Biobío"
              }
            }
          })
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/diseno-web" className="hover:text-[var(--color-accent)] transition-colors">Diseño Web</Link>
          <span className="mx-2">/</span>
          <span>San Pedro de la Paz</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🏘️ San Pedro de la Paz</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web en San Pedro de la Paz
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El diseño web profesional en San Pedro de la Paz</strong> crea sitios WordPress optimizados para negocios locales, educación, salud, fitness y servicios residenciales. San Pedro es la tercera comuna más poblada del Gran Concepción con más de 145.000 habitantes, predominantemente residencial con familias jóvenes, profesionales y alta demanda de servicios locales. El 87% busca en Google antes de decidir: colegios, clínicas, gimnasios, centros de estética, veterinarias. Ofrecemos diseño web desde $169.000/año para landing page con formulario de contacto, $390.000 para sitio corporativo hasta 5 páginas, especializado en sectores: educación (colegios, jardines infantiles, preuniversitarios, academias), salud y bienestar (clínicas dentales, centros médicos, veterinarias), fitness (gimnasios, CrossFit, yoga, pilates), estética y belleza (peluquerías, centros de estética, spa), retail local (minimarkets, panaderías, ferreterías de barrio), inmobiliarias (venta y arriendo en Lomas Coloradas, Michihue, Los Conquistadores). Atendemos todas las zonas: Lomas Coloradas, Michihue, Boca Sur, Candelaria, Los Conquistadores, Huertos Familiares, Laguna Grande.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Sitio Web →
          </Link>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué tu Negocio en San Pedro Necesita un Sitio Web?</h2>
          <div className="space-y-6">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">San Pedro de la Paz tiene más de 145.000 habitantes</strong> y es la tercera comuna más poblada del Gran Concepción. Es predominantemente residencial con sectores de alto desarrollo (Lomas Coloradas, Boca Sur), sectores emergentes (Michihue, Los Conquistadores) y zonas rurales (Huertos Familiares, Laguna Grande). La población es joven: familias con hijos en edad escolar y universitaria, profesionales que trabajan en Concepción pero viven en San Pedro por calidad de vida, cercanía a Laguna Grande y espacios verdes.
            </p>
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 87% de residentes de San Pedro busca servicios locales en Google antes de decidir.</strong> Cuando necesitan un colegio para sus hijos, buscan "colegio particular San Pedro" o "jardín infantil Lomas Coloradas". Cuando necesitan dentista, buscan "clínica dental San Pedro de la Paz". Gimnasio: "gimnasio Michihue". Veterinaria: "veterinaria San Pedro 24 horas". Si tu negocio NO aparece en esas búsquedas, pierdes clientes que contratan a competidores que SÍ tienen sitio web profesional y posicionamiento en Google.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Un sitio web te diferencia en sectores residenciales competitivos:</strong> en Lomas Coloradas hay 5+ gimnasios, 10+ centros de estética, decenas de jardines infantiles. ¿Cómo te destacas? Con un sitio web profesional que muestra instalaciones, planes, horarios, testimonios, permite reservar hora online o consultar vacantes. Familias de San Pedro investigan online antes de visitar físicamente — si no te encuentran en Google, ni siquiera sabrán que existes aunque tu local esté a 2 cuadras de su casa.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para tu Sitio Web en San Pedro?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Únete a negocios locales de San Pedro que generan clientes desde Google. Cotiza gratis:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Ahora →
          </Link>
        </div>
      </article>
    </>
  );
}
