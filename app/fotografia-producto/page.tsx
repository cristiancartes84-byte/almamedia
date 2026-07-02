import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fotografía Producto Chile 2026 | Fondo Blanco $9.900',
  description: 'Fotografía de producto profesional. Fondo blanco $9.900, lifestyle $14.900. +500 productos fotografiados. Aumenta conversión 35%. Cotiza gratis.',
  keywords: 'fotografía de producto Chile, fotografía producto profesional, fotos fondo blanco, fotografía lifestyle, fotografía ecommerce, fotos catálogo producto, sesión fotográfica productos, fotografía comercial Chile',
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
    canonical: '/fotografia-producto',
  },
  openGraph: {
    title: 'Fotografía Producto Chile 2026 | Fondo Blanco $9.900',
    description: 'Fotografía de producto profesional. Fondo blanco $9.900, lifestyle $14.900. +500 productos fotografiados.',
    url: 'https://almamedia.cl/fotografia-producto',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fotografía Producto Chile 2026 | Fondo Blanco $9.900',
    description: 'Fotografía de producto profesional. Fondo blanco $9.900, lifestyle $14.900. +500 productos.',
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

export default function FotografiaProductoPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Fotografía de Producto Profesional Chile",
                "description": "Servicio profesional de fotografía de producto en Chile. Fondo blanco para catálogos y marketplaces, fotografía lifestyle para redes sociales y branding. Aumenta conversión de ecommerce hasta 35%.",
                "provider": {
                  "@type": "Organization",
                  "name": "Alma Media",
                  "url": "https://almamedia.cl"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Chile"
                },
                "offers": [
                  {
                    "@type": "Offer",
                    "name": "Fotografía Fondo Blanco",
                    "price": "9900",
                    "priceCurrency": "CLP"
                  },
                  {
                    "@type": "Offer",
                    "name": "Fotografía Lifestyle",
                    "price": "14900",
                    "priceCurrency": "CLP"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "¿Cuánto cuesta la fotografía de producto en Chile?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "La fotografía de producto en Chile cuesta desde $9.900 por producto para fondo blanco (3-5 fotos con retoque) y $14.900 por producto para fotografía lifestyle (5-8 fotos con ambientación). Incluye descuentos por volumen: 10+ productos -15%, 20+ productos -25%."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Qué incluye la sesión de fotografía de producto?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "La sesión incluye fotografía profesional con iluminación de estudio, retoque profesional de todas las fotos, entrega en alta resolución, fondo blanco puro (o lifestyle según paquete), múltiples ángulos del producto, y entrega en 3-5 días hábiles."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "¿Por qué necesito fotografía profesional para mi ecommerce?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "La fotografía profesional de producto aumenta la conversión de ecommerce hasta 35%. El 93% de compradores considera las fotos como el factor más importante al decidir una compra online. Fotos profesionales generan confianza, reducen devoluciones y permiten competir con grandes marcas."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Fotografía de Producto</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Fotografía Profesional Chile</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Fotografía de Producto Profesional
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>La fotografía de producto profesional en Chile</strong> aumenta la conversión de tu ecommerce hasta 35% con imágenes de alta calidad que generan confianza. El 93% de compradores online considera las fotos como el factor decisivo de compra. Ofrecemos fotografía con fondo blanco puro para catálogos y marketplaces (Amazon, Mercado Libre) desde $9.900 por producto, y fotografía lifestyle con ambientación profesional para redes sociales y branding desde $14.900 por producto. Incluye iluminación de estudio, retoque profesional, múltiples ángulos, alta resolución y entrega en 3-5 días. Ideal para ecommerce, tiendas retail, productos artesanales, gastronomía, moda y accesorios. +500 productos fotografiados con resultados medibles en conversión.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Sesión Gratis →
          </Link>
          <a href="#beneficios" className="px-8 py-4 bg-transparent text-white border border-[var(--color-border)] font-bold rounded-lg hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all">
            Ver Beneficios
          </a>
        </div>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">

        {/* Por qué necesitas */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Necesitas Fotografía Profesional?</h2>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 mb-8">
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">La fotografía profesional de producto</strong> no es un gasto, es una inversión en conversión. El <strong>93% de compradores online</strong> considera las imágenes como el factor MÁS IMPORTANTE al decidir una compra, superando precio y descripción. Una buena foto genera confianza instantánea y reduce la fricción de compra.
            </p>
            <p className="text-xl mb-6 leading-[1.8] text-justify">
              Fotos con smartphone vs fotos profesionales pueden significar la diferencia entre <strong>conversión de 1% vs 3.5%</strong> en ecommerce. Si vendes 100 productos/mes a $20.000 promedio, esa diferencia son $600.000/mes adicionales ($7.2M al año). El ROI de fotografía profesional se recupera en el primer mes.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              Además, fotos profesionales reducen devoluciones (el cliente sabe exactamente qué esperar), aumentan ticket promedio (productos se ven más valiosos), y te permiten competir con grandes marcas en marketplaces como Amazon o Mercado Libre donde las fotos son tu única ventaja diferenciadora.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
              🎯 Solicitar Cotización Gratis
            </Link>
          </div>
        </section>

        {/* Beneficios */}
        <section id="beneficios" className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Beneficios de Fotografía Profesional</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">📈 +35% Conversión Promedio</h3>
              <p className="text-[var(--color-muted)] text-sm">
                Fotos profesionales aumentan conversión entre 20-50%. Promedio de nuestros clientes: +35% en primeros 3 meses post-implementación.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🛡️ -40% Devoluciones</h3>
              <p className="text-[var(--color-muted)] text-sm">
                Clientes saben exactamente qué esperan con fotos realistas. Reducción promedio de devoluciones: 40% vs fotos amateur.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">💰 Mayor Valor Percibido</h3>
              <p className="text-[var(--color-muted)] text-sm">
                Productos con fotos profesionales se perciben 30% más valiosos. Permite precios premium sin cambiar el producto.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">🏆 Ventaja en Marketplaces</h3>
              <p className="text-[var(--color-muted)] text-sm">
                En Amazon/Mercado Libre, fotos son tu única diferenciación. Cumplir estándares de imagen aumenta Buy Box wins 60%.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">📱 Contenido para Redes</h3>
              <p className="text-[var(--color-muted)] text-sm">
                Fotografía lifestyle genera contenido reutilizable: Instagram, Facebook Ads, Pinterest, catálogos digitales. ROI multiplicado.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-accent)]">⏱️ Ahorro de Tiempo</h3>
              <p className="text-[var(--color-muted)] text-sm">
                Sesión profesional fotografía 20 productos en 3-4 horas. Tú solo entregas productos, nosotros hacemos todo.
              </p>
            </div>
          </div>
        </section>

        {/* Tipos de Fotografía */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Tipos de Fotografía de Producto</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">📦 Fondo Blanco</h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Fotos limpias y profesionales para catálogos, marketplaces (Amazon, Mercado Libre) y ecommerce. Cumple estándares de todas las plataformas.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)] text-sm">
                <li>• Alta resolución (3000x3000px mínimo)</li>
                <li>• Fondo blanco RGB 255,255,255</li>
                <li>• Iluminación profesional 3 puntos</li>
                <li>• Retoque color/sombra incluido</li>
                <li>• Múltiples ángulos del producto</li>
                <li>• Entrega en JPG + PNG sin fondo</li>
              </ul>
              <p className="text-xs text-[var(--color-muted)] italic mt-4">
                Ideal para: Ecommerce, Amazon, Mercado Libre, catálogos PDF, retail
              </p>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all relative">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS ENGAGEMENT
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-accent)]">🎨 Lifestyle</h3>
              <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                Fotos con contexto y ambiente para redes sociales, campañas publicitarias y branding. Storytelling visual que conecta emocionalmente.
              </p>
              <ul className="space-y-2 text-[var(--color-muted)] text-sm">
                <li>• Ambientación profesional incluida</li>
                <li>• Props y escenografía según marca</li>
                <li>• Storytelling visual estratégico</li>
                <li>• Edición avanzada de color/mood</li>
                <li>• Composiciones creativas</li>
                <li>• Formato vertical + cuadrado (reels/feed)</li>
              </ul>
              <p className="text-xs text-[var(--color-muted)] italic mt-4">
                Ideal para: Instagram, Facebook Ads, Pinterest, lookbooks, branding
              </p>
            </div>
          </div>
        </section>

        {/* Tipos de Productos */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Productos que Fotografiamos</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Moda & Accesorios:</strong> <span className="text-[var(--color-muted)] text-sm">Ropa, zapatos, joyas, carteras, relojes</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Electrónica:</strong> <span className="text-[var(--color-muted)] text-sm">Smartphones, laptops, audífonos, gadgets</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Gastronomía:</strong> <span className="text-[var(--color-muted)] text-sm">Platos, productos gourmet, packaging alimentos</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Belleza & Cosméticos:</strong> <span className="text-[var(--color-muted)] text-sm">Maquillaje, skincare, perfumes</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Hogar & Deco:</strong> <span className="text-[var(--color-muted)] text-sm">Muebles, decoración, textiles, menaje</span>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-[var(--color-accent)] text-xl flex-shrink-0">✓</span>
              <div>
                <strong className="font-bold">Artesanía:</strong> <span className="text-[var(--color-muted)] text-sm">Productos hechos a mano, arte, souvenirs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">Precios Fotografía de Producto Chile 2026</h2>
          <p className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-sm font-semibold text-[var(--color-accent)]">
              ⚡ Promo <span className="capitalize"><CurrentMonth /></span>: Sesión de 5+ productos incluye 2 fotos lifestyle gratis (valor $29.800)
            </span>
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 text-center hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Fondo Blanco</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$9.900</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">por producto</p>
              <div className="flex-grow">
                <ul className="space-y-2 text-left mb-6 text-sm">
                  <li>✓ 3-5 fotos por producto</li>
                  <li>✓ Fondo blanco puro RGB 255</li>
                  <li>✓ Retoque profesional incluido</li>
                  <li>✓ Alta resolución (3000x3000px)</li>
                  <li>✓ Múltiples ángulos</li>
                  <li>✓ JPG + PNG sin fondo</li>
                  <li>✓ Entrega en 3-5 días</li>
                </ul>
                <p className="text-xs text-[var(--color-muted)] italic">Ideal para: Ecommerce, Amazon, Mercado Libre, catálogos</p>
              </div>
              <Link href="/contacto" className="mt-auto block px-6 py-3 bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] font-bold rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
                Cotizar
              </Link>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 text-center hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all relative flex flex-col">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-4 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                MÁS COMPLETO
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Lifestyle</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$14.900</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">por producto</p>
              <div className="flex-grow">
                <ul className="space-y-2 text-left mb-6 text-sm">
                  <li>✓ 5-8 fotos por producto</li>
                  <li>✓ Ambientación profesional</li>
                  <li>✓ Props y escenografía incluidos</li>
                  <li>✓ Edición avanzada de color</li>
                  <li>✓ Storytelling visual</li>
                  <li>✓ Formato vertical + cuadrado</li>
                  <li>✓ Optimizado para RRSS</li>
                  <li>✓ Entrega en 5-7 días</li>
                </ul>
                <p className="text-xs text-[var(--color-muted)] italic">Ideal para: Instagram, Facebook Ads, Pinterest, branding</p>
              </div>
              <Link href="/contacto" className="mt-auto block px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 transition-all">
                Cotizar
              </Link>
            </div>
          </div>

          <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-xl p-6 mt-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold mb-3 text-center">💰 Descuentos por Volumen</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="font-bold text-[var(--color-accent)]">10-19 productos</p>
                <p className="text-[var(--color-muted)]">-15% descuento</p>
              </div>
              <div>
                <p className="font-bold text-[var(--color-accent)]">20-49 productos</p>
                <p className="text-[var(--color-muted)]">-25% descuento</p>
              </div>
              <div>
                <p className="font-bold text-[var(--color-accent)]">50+ productos</p>
                <p className="text-[var(--color-muted)]">Cotización especial</p>
              </div>
            </div>
          </div>

          <p className="text-center mt-8">
            💬 <strong>¿Necesitas fotografía gastronómica o industrial?</strong>{' '}
            <Link href="/contacto" className="text-[var(--color-accent)] hover:underline font-semibold">
              Solicita cotización personalizada →
            </Link>
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-center text-[var(--color-accent)]">Preguntas Frecuentes sobre Fotografía de Producto</h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto cuesta la fotografía de producto en Chile?</h3>
              <p className="text-lg leading-relaxed text-justify">
                La <strong>fotografía de producto en Chile</strong> cuesta desde <strong>$9.900 por producto</strong> para fondo blanco (incluye 3-5 fotos con retoque profesional y alta resolución), y <strong>$14.900 por producto</strong> para fotografía lifestyle (5-8 fotos con ambientación profesional). Ofrecemos descuentos por volumen: 10+ productos -15%, 20+ productos -25%, 50+ cotización especial.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Qué incluye la sesión de fotografía de producto?</h3>
              <p className="text-lg leading-relaxed text-justify">
                La sesión incluye: <strong>fotografía profesional</strong> con iluminación de estudio 3 puntos, retoque profesional de todas las fotos (color, sombras, imperfecciones), entrega en alta resolución (3000x3000px mínimo), fondo blanco puro RGB 255,255,255 (o lifestyle según paquete), múltiples ángulos del producto, formatos JPG + PNG sin fondo, y entrega en 3-7 días hábiles según volumen.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Por qué necesito fotografía profesional para mi ecommerce?</h3>
              <p className="text-lg leading-relaxed text-justify">
                La <strong>fotografía profesional de producto</strong> aumenta la conversión de ecommerce hasta <strong>35%</strong> según estudios de conversión. El <strong>93% de compradores</strong> considera las fotos como el factor MÁS IMPORTANTE al decidir una compra online, superando precio y descripción. Fotos profesionales generan confianza, reducen devoluciones 40%, permiten precios premium, y te hacen competir con grandes marcas en marketplaces.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Cuánto demora una sesión fotográfica de productos?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Una <strong>sesión típica</strong> fotografía 20 productos en 3-4 horas. Tú solo entregas los productos, nosotros hacemos fotografía, retoque y entrega. Entrega de fotos editadas: <strong>3-5 días hábiles</strong> para fondo blanco, 5-7 días para lifestyle. Para volúmenes grandes (50+ productos), coordinamos sesiones de múltiples días con entrega escalonada.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Las fotos cumplen estándares de Amazon y Mercado Libre?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Sí, todas nuestras <strong>fotos de fondo blanco</strong> cumplen los estándares de Amazon, Mercado Libre y otros marketplaces: fondo blanco puro RGB 255,255,255, producto ocupa 85%+ del espacio, alta resolución mínima 1000px (entregamos 3000px), formato JPG, sin textos/logos/watermarks superpuestos. Sabemos los requerimientos de cada plataforma.
              </p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">¿Puedo usar las fotos lifestyle para publicidad en redes sociales?</h3>
              <p className="text-lg leading-relaxed text-justify">
                Sí, las <strong>fotos lifestyle</strong> están optimizadas específicamente para redes sociales: formato vertical (9:16) para Instagram Stories/Reels, formato cuadrado (1:1) para feed, alta resolución para Facebook Ads, composición pensada para engagement. Entregas la imagen y derechos completos de uso comercial: publicidad, branding, catálogos, web, lo que necesites.
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 md:p-16 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta Especial <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Fotos que Venden?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Únete a <strong className="text-[var(--color-accent)]">+500 productos fotografiados</strong> con resultados medibles. Cotiza gratis tu sesión fotográfica:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Cotización gratis</p>
              <p className="text-xs text-[var(--color-muted)]">Presupuesto en 24h</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Sesión de prueba</p>
              <p className="text-xs text-[var(--color-muted)]">1 producto gratis</p>
            </div>
            <div className="bg-[rgba(200,255,0,0.05)] border border-[rgba(200,255,0,0.2)] rounded-lg p-4">
              <p className="text-sm">✓ Sin mínimo</p>
              <p className="text-xs text-[var(--color-muted)]">Desde 1 producto</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold text-lg rounded-lg hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
              📸 Cotizar Sesión Gratis
            </Link>
            <Link href="/diseno-web" className="inline-block px-10 py-5 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-bold text-lg rounded-lg hover:bg-[rgba(200,255,0,0.1)] transition-all">
              Ver Diseño Web
            </Link>
          </div>
          <p className="text-sm text-[var(--color-muted)] mt-6">
            ⏰ Promo válida solo para las primeras 5 sesiones de <CurrentMonth /> • Sin compromiso • Respuesta en 24 horas
          </p>
        </div>
      </div>
    </>
  );
}
