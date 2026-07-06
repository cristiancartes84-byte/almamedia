import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import CurrentYear from '@/components/CurrentYear';
import Link from 'next/link';
import type { Metadata } from 'next';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Marketing Digital Ecommerce ${currentYear} | Diseño Web + SEO + Fotos`,
  description: 'Marketing digital para ecommerce: diseño web optimizado, SEO transaccional, fotografía de producto, video. Pack completo desde $399.000. Aumenta ventas online.',
  keywords: 'marketing digital ecommerce, SEO ecommerce, diseño web tienda online, fotografía producto ecommerce',
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
    canonical: '/marketing-digital-ecommerce',
  },
  openGraph: {
    title: `Marketing Digital Ecommerce ${currentYear} | Diseño Web + SEO + Fotos`,
    description: 'Marketing digital para tiendas online. Pack completo desde $399.000.',
    url: 'https://almamedia.cl/marketing-digital-ecommerce',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Marketing Digital Ecommerce ${currentYear}`,
    description: 'Marketing digital para tiendas online. Pack completo.',
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

export default function MarketingDigitalEcommercePage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/servicios" className="hover:text-[var(--color-accent)] transition-colors">Servicios</Link>
          <span className="mx-2">/</span>
          <span>Marketing Digital Ecommerce</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🛒 Marketing Ecommerce</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Marketing Digital para Ecommerce
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Marketing digital especializado para tiendas online:</strong> diseño web ecommerce optimizado para conversión, SEO transaccional (keywords "comprar + producto"), fotografía de producto fondo blanco + lifestyle, video marketing para redes sociales. Pack completo desde $399.000 con WooCommerce, pasarelas de pago chilenas (Transbank, Mercado Pago, Flow), Google Shopping, Meta Ads, email marketing. Aumentamos conversión promedio 35% optimizando checkout, fotos profesionales, velocidad de carga, y SEO para keywords de compra. Ideal para retail online, moda, tecnología, hogar, deportes. +50 ecommerces gestionados, ventas mensuales $500k-$5M CLP. Incluye estrategia completa: tráfico (SEO + Ads), conversión (UX + fotos), retención (email + remarketing).
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Pack Ecommerce →
        </Link>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Servicios para Ecommerce */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Servicios para Ecommerce</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Diseño Web Ecommerce</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Tienda online WooCommerce optimizada para conversión. Pasarelas chilenas, checkout simplificado, carga &lt;2 seg, mobile-first. Categorías, filtros, carrito persistente.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ WooCommerce optimizado</li>
                <li>✓ Transbank / MercadoPago</li>
                <li>✓ Checkout 1 página</li>
                <li>✓ Google Analytics Ecommerce</li>
              </ul>
              <div className="text-2xl font-black text-[var(--color-accent)]">Desde $490.000</div>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 relative">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                ESENCIAL
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">SEO Ecommerce</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                SEO transaccional para keywords de compra: "comprar + producto", "precio + producto". Optimización fichas producto, schema Product, Google Shopping feed.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Keywords transaccionales</li>
                <li>✓ Fichas producto optimizadas</li>
                <li>✓ Google Shopping</li>
                <li>✓ Schema Product</li>
              </ul>
              <div className="text-2xl font-black text-[var(--color-accent)]">$249.000/mes</div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Fotografía Producto</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Sesiones fotográficas para catálogo ecommerce. Fondo blanco para fichas producto, lifestyle para home/banners. Aumenta conversión 35% vs fotos amateur.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Fondo blanco $9.900/unidad</li>
                <li>✓ Descuento volumen 10+ -15%</li>
                <li>✓ PNG sin fondo incluido</li>
                <li>✓ Alta resolución</li>
              </ul>
              <div className="text-2xl font-black text-[var(--color-accent)]">Desde $9.900/producto</div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Video + Ads</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Videos de producto para Instagram/TikTok + campañas Meta Ads / Google Ads. Tráfico pagado complementa SEO orgánico para máximo alcance.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Video producto $19.900</li>
                <li>✓ Meta Ads setup</li>
                <li>✓ Google Shopping Ads</li>
                <li>✓ Remarketing</li>
              </ul>
              <div className="text-2xl font-black text-[var(--color-accent)]">Desde $19.900 + budget</div>
            </div>
          </div>
        </section>

        {/* Por qué marketing ecommerce */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Necesitas Marketing Digital para tu Ecommerce?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 93% de compradores online considera fotos como factor más importante al decidir compra.</strong> Tener ecommerce no garantiza ventas — necesitas tráfico cualificado (SEO + Ads) y optimización de conversión (UX + fotos profesionales). Ecommerce promedio convierte 2-3% de visitas en ventas. Con marketing digital optimizado: SEO trae tráfico gratis constante, fotos profesionales aumentan conversión a 4-5%, email marketing recupera carritos abandonados 25%, remarketing reconvierte visitantes que no compraron primera vez.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Keywords transaccionales tienen ROI 5x superior vs keywords informacionales.</strong> Usuario que busca "comprar zapatillas running hombre" tiene intención de compra inmediata vs usuario que busca "qué zapatillas comprar". SEO ecommerce optimiza fichas de producto para keywords transaccionales de alta conversión, implementa schema Product para Rich Snippets en Google (precio, stock, reseñas), configura Google Shopping para aparecer en resultados visuales. Inversión se paga sola con 10-20 ventas extra mensuales generadas por mejor posicionamiento.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> <CurrentYear /></span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Vender Más en tu Ecommerce?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Pack completo: Web + SEO + Fotos + Ads. Auditoría gratis de tu tienda actual. Cotiza:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Pack Ecommerce →
          </Link>
        </div>

      </article>
    </>
  );
}
