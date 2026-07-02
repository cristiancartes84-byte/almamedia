import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diseño Web Los Ángeles 2026 | Capital Provincial Biobío',
  description: 'Diseño web profesional en Los Ángeles. Especializados en comercio, agricultura, turismo y servicios provinciales. Desde $169.000/año. Cotiza gratis.',
  keywords: 'diseño web Los Ángeles, sitio web Los Ángeles, página web Biobío, diseño web capital provincial, desarrollo web Los Ángeles Chile',
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
    canonical: '/diseno-web-los-angeles',
  },
  openGraph: {
    title: 'Diseño Web Los Ángeles 2026 | Capital Provincial',
    description: 'Diseño web profesional en Los Ángeles. Comercio, agricultura, turismo y servicios provinciales.',
    url: 'https://almamedia.cl/diseno-web-los-angeles',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web Los Ángeles 2026 | Capital Provincial',
    description: 'Diseño web profesional. Comercio, agricultura, turismo provincial.',
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

export default function DisenoWebLosAngelesPage() {
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
            "name": "Diseño Web Profesional en Los Ángeles",
            "description": "Servicio profesional de diseño web en Los Ángeles, capital provincial de Biobío. Especializados en comercio, agricultura, turismo y servicios con alcance regional.",
            "provider": {
              "@type": "Organization",
              "name": "Alma Media",
              "url": "https://almamedia.cl"
            },
            "areaServed": {
              "@type": "City",
              "name": "Los Ángeles",
              "containedIn": {
                "@type": "AdministrativeArea",
                "name": "Provincia del Biobío"
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
          <span>Los Ángeles</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🏛️ Los Ángeles - Capital Provincial</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web en Los Ángeles: Capital Provincial del Biobío
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>El diseño web profesional en Los Ángeles</strong> crea sitios WordPress optimizados para comercio, agricultura, turismo y servicios provinciales con alcance regional. Los Ángeles es capital de la Provincia del Biobío y segundo centro urbano más importante de la región con más de 200.000 habitantes, siendo centro de servicios para toda la provincia: Cabrero, Nacimiento, Mulchén, Laja, Santa Bárbara, Antuco, Quilleco. El 78% de angelinos busca en Google antes de comprar. Ofrecemos diseño web desde $169.000/año para landing page, $390.000 para sitio corporativo, especializado en: comercio (tiendas retail, distribuidoras mayoristas, ferreterías), agricultura y ganadería (maquinaria agrícola, insumos, veterinarias, agroservicios), turismo (hoteles, cabañas, turismo aventura Alto Biobío, gastronomía local), servicios profesionales (notarías, estudios jurídicos, corredoras de propiedades), salud y educación (clínicas, colegios particulares). Atendemos Los Ángeles centro, Av. Alemania, Av. Ricardo Vicuña, sectores Plaza de Armas, Mall Portal Los Ángeles, y toda la provincia del Biobío.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Sitio Web →
          </Link>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Los Ángeles Necesita Presencia Digital?</h2>
          <div className="space-y-6">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Los Ángeles es capital provincial con alcance regional.</strong> A diferencia del Gran Concepción metropolitano, Los Ángeles es centro de servicios para toda la Provincia del Biobío: agricultores de Mulchén, ganaderos de Santa Bárbara, empresas madereras de Nacimiento, comerciantes de Cabrero, turistas que van al Alto Biobío. Los negocios aquí no solo atienden a los 200.000 habitantes de la ciudad, sino a toda una provincia con economía basada en agricultura, ganadería, forestal, turismo rural y comercio regional.
            </p>
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 78% de los angelinos busca en Google antes de comprar o contratar servicios.</strong> Cuando un agricultor necesita maquinaria agrícola, busca "venta tractores Los Ángeles" o "repuestos maquinaria Biobío". Cuando turistas planean visitar Saltos del Laja o Alto Biobío, buscan "hotel Los Ángeles centro" o "cabañas cerca Saltos Laja". Cuando empresas regionales necesitan insumos, buscan "distribuidora materiales construcción Los Ángeles". Si tu negocio NO aparece en Google, pierdes clientes que compran a competidores con presencia web, incluso si esos competidores están en Concepción o Santiago.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Un sitio web amplía tu mercado más allá de Los Ángeles centro:</strong> una ferretería con catálogo online puede vender a constructoras de Mulchén, Laja, Nacimiento sin que tengan que viajar a la ciudad. Una tienda de insumos agrícolas puede recibir pedidos de agricultores de todo el valle. Un hotel puede captar turistas de Santiago, Concepción, Temuco que buscan alojamiento cerca de Saltos del Laja antes de hacer el viaje. Corredoras de propiedades pueden mostrar terrenos, parcelas y casas a compradores de otras regiones interesados en invertir en el Biobío interior.
            </p>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precios Diseño Web en Los Ángeles</h2>
          <p className="text-xl mb-10 leading-[1.8] text-center max-w-3xl mx-auto text-justify">
            Precios transparentes para negocios en Los Ángeles y provincia del Biobío:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
                <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$169.000</p>
                <p className="text-[var(--color-muted)] mb-6">CLP/año (hosting incluido)</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ 1 página optimizada</li>
                  <li>✓ Diseño responsive</li>
                  <li>✓ SEO local Los Ángeles</li>
                  <li>✓ Formulario contacto</li>
                  <li>✓ Hosting + dominio .cl</li>
                  <li>✓ SSL (HTTPS) incluido</li>
                </ul>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all relative flex flex-col">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS POPULAR
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Sitio Corporativo</h3>
                <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$390.000</p>
                <p className="text-[var(--color-muted)] mb-6">CLP (pago único)</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ Hasta 5 páginas</li>
                  <li>✓ Diseño personalizado</li>
                  <li>✓ WordPress completo</li>
                  <li>✓ SEO optimizado</li>
                  <li>✓ Analytics + formularios</li>
                  <li>✓ Capacitación incluida</li>
                  <li>✓ 1 mes soporte gratis</li>
                </ul>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-all">
                Cotizar
              </Link>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Ecommerce</h3>
                <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $590.000</p>
                <p className="text-[var(--color-muted)] mb-6">CLP (según productos)</p>
                <ul className="space-y-2 text-sm mb-6">
                  <li>✓ WordPress + WooCommerce</li>
                  <li>✓ O Shopify</li>
                  <li>✓ Pagos online (Webpay/Flow)</li>
                  <li>✓ Gestión de productos</li>
                  <li>✓ Carro de compra</li>
                  <li>✓ Envíos configurados</li>
                  <li>✓ Capacitación ecommerce</li>
                </ul>
              </div>
              <Link href="/contacto" className="mt-auto block text-center px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para tu Sitio Web en Los Ángeles?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Amplía tu alcance más allá de la capital provincial. Genera clientes desde Google. Cotiza gratis:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Ahora →
          </Link>
        </div>
      </article>
    </>
  );
}
