import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Diseño Web Región del Biobío 2026 | Sitios Profesionales',
  description: 'Diseño web profesional en toda la Región del Biobío. Concepción, Talcahuano, Los Ángeles, Chillán, Coronel. Desde $169.000/año. Cotiza gratis.',
  keywords: 'diseño web Biobío, sitio web región Biobío, página web Concepción, diseño web Gran Concepción, desarrollo web Biobío Chile',
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
    canonical: '/diseno-web-biobio',
  },
  openGraph: {
    title: 'Diseño Web Región del Biobío 2026 | Sitios Profesionales',
    description: 'Diseño web profesional en toda la Región del Biobío. Concepción, Talcahuano, Los Ángeles, Chillán.',
    url: 'https://almamedia.cl/diseno-web-biobio',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web Región del Biobío 2026',
    description: 'Diseño web profesional en toda la región. Concepción, Talcahuano, Los Ángeles, Chillán.',
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

export default function DisenoWebBiobioPage() {
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
            "name": "Diseño Web Profesional en Región del Biobío",
            "description": "Servicio profesional de diseño web en toda la Región del Biobío. Atendemos Concepción, Talcahuano, San Pedro, Los Ángeles, Chillán, Coronel y todas las comunas de la región.",
            "provider": {
              "@type": "Organization",
              "name": "Alma Media",
              "url": "https://almamedia.cl"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Región del Biobío",
              "containedIn": {
                "@type": "Country",
                "name": "Chile"
              }
            }
          })
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Región del Biobío</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🌄 Región del Biobío</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web en la Región del Biobío
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El diseño web profesional en la Región del Biobío</strong> crea sitios WordPress optimizados para negocios en toda la región: Gran Concepción (Concepción, Talcahuano, San Pedro de la Paz, Hualpén, Chiguayante, Penco, Tomé, Lota, Coronel), Provincia de Biobío (Los Ángeles, Cabrero, Nacimiento, Mulchén, Laja, Santa Bárbara), Provincia de Ñuble (Chillán, Chillán Viejo, San Carlos, Bulnes). Más de 2 millones de habitantes y economía diversa: industria portuaria, manufactura, servicios, agricultura, turismo, educación superior (4 universidades tradicionales). El 84% de la población del Biobío busca en Google antes de comprar o contratar. Ofrecemos diseño web desde $169.000/año para landing page, $390.000 para sitio corporativo hasta 5 páginas, especializado en todos los sectores regionales: industria y manufactura, comercio retail y mayorista, servicios profesionales, educación y salud, turismo regional, agricultura y ganadería. Atendemos todas las provincias: Concepción, Biobío, Arauco, Ñuble. Presencia en terreno para reuniones presenciales o 100% remoto según prefieras.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Sitio Web →
          </Link>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Cobertura en Toda la Región del Biobío</h2>
          <div className="space-y-6">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Atendemos empresas y negocios en todas las provincias de la Región del Biobío:</strong> Provincia de Concepción (Gran Concepción metropolitano: Concepción, Talcahuano, San Pedro de la Paz, Hualpén, Chiguayante, Penco, Tomé, Lota, Coronel, Hualqui), Provincia de Biobío (Los Ángeles, Cabrero, Nacimiento, Mulchén, Laja, Santa Bárbara, Antuco, Quilleco, Alto Biobío), Provincia de Arauco (Arauco, Lebu, Cañete, Contulmo, Curanilahue, Los Álamos, Tirúa), Provincia de Ñuble (Chillán, Chillán Viejo, San Carlos, Bulnes, Quillón, Yungay, Coelemu, Quirihue).
            </p>
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">La Región del Biobío tiene más de 2 millones de habitantes</strong> y es la segunda región más poblada de Chile después de la Metropolitana. Economía diversificada: industria portuaria y naval en Talcahuano, manufactura y servicios en Concepción, agricultura y ganadería en Los Ángeles y Chillán, turismo costero en Arauco, educación superior con 4 universidades tradicionales (UdeC, UBB, Ucsc, Utalca campus Laja). El 84% de la población busca productos y servicios en Google antes de decidir — presencia web profesional ya no es opcional, es obligatoria para competir.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Trabajamos presencial y remoto:</strong> para negocios en Gran Concepción podemos hacer reuniones presenciales (oficina en Concepción), para empresas en provincias de Biobío, Arauco, Ñuble trabajamos 100% remoto (videollamadas, coordinación por WhatsApp/email) con la misma calidad profesional. Diseñamos sitios web para todo tipo de negocios regionales: industrias manufactureras, distribuidoras mayoristas, ferreterías, clínicas y centros médicos, colegios particulares, hoteles y cabañas turísticas, restaurants, agroservicios, corredoras de propiedades, estudios jurídicos, servicios profesionales.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Ciudades Principales que Atendemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/diseno-web-concepcion" className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">Concepción</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Capital regional. Centro de servicios, educación superior, comercio y cultura del Biobío.</p>
            </Link>

            <Link href="/diseno-web-talcahuano" className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">Talcahuano</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Puerto principal. Industria portuaria, naval, pesca y servicios marítimos.</p>
            </Link>

            <Link href="/diseno-web-san-pedro-paz" className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">San Pedro de la Paz</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Comuna residencial. Servicios locales, educación, salud, fitness, comercio de barrio.</p>
            </Link>

            <Link href="/diseno-web-los-angeles" className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">Los Ángeles</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Capital provincial. Comercio, agricultura, ganadería, turismo Alto Biobío.</p>
            </Link>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">Chillán</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Capital Ñuble. Agricultura, gastronomía, turismo termal, comercio regional.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">Coronel</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Costa carbonifera. Turismo costero, comercio, servicios zona sur Gran Concepción.</p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para tu Sitio Web en el Biobío?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Atendemos toda la región. Desde Concepción a Chillán, desde Talcahuano a Los Ángeles. Cotiza gratis:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Ahora →
          </Link>
        </div>
      </article>
    </>
  );
}
