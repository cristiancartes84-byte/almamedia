import ParticlesBackground from '@/components/Particles';
import CurrentMonth from '@/components/CurrentMonth';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Digital Restaurantes 2026 | Web + Fotos + SEO Local',
  description: 'Marketing digital para restaurantes: diseño web con menú digital, fotografía gastronómica, SEO local Google Maps, redes sociales. Desde $249.000.',
  keywords: 'marketing digital restaurantes, fotografía gastronómica, SEO restaurantes, Google Maps restaurantes',
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
    canonical: '/marketing-digital-restaurantes',
  },
  openGraph: {
    title: 'Marketing Digital Restaurantes 2026 | Web + Fotos + SEO Local',
    description: 'Marketing digital para restaurantes. Web, fotografía gastronómica, SEO local.',
    url: 'https://almamedia.cl/marketing-digital-restaurantes',
    siteName: 'Alma Media',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Digital Restaurantes 2026',
    description: 'Marketing digital para restaurantes. Web, fotos, SEO local.',
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

export default function MarketingDigitalRestaurantesPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/servicios" className="hover:text-[var(--color-accent)] transition-colors">Servicios</Link>
          <span className="mx-2">/</span>
          <span>Marketing Digital Restaurantes</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">🍽️ Marketing Restaurantes</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Marketing Digital para Restaurantes
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
          <strong>Marketing digital especializado para restaurantes y gastronomía:</strong> diseño web con menú digital QR, fotografía gastronómica profesional que hace salivar, SEO local para aparecer en Google Maps cuando buscan "restaurant + ciudad", gestión Instagram/TikTok con contenido viral, videos de platos para redes sociales. Pack completo desde $249.000 con web responsive + menú PDF descargable + Google Business Profile optimizado + 20 fotos gastronómicas. El 76% de búsquedas de restaurantes resultan en visita física en 24 horas. Atendemos toda la Región del Biobío: Concepción, Talcahuano, San Pedro, Los Ángeles. Ideal para restaurantes, cafeterías, food trucks, catering, pastelerías, bares. +30 locales gastronómicos gestionados.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Pack Restaurant →
        </Link>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Servicios para Restaurantes */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">Servicios para Restaurantes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Web + Menú Digital</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Sitio web profesional con menú digital actualizable, código QR para mesas, horarios, ubicación Google Maps, reservas online. Responsive, carga rápida.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Menú digital actualizable</li>
                <li>✓ QR code para mesas</li>
                <li>✓ Reservas WhatsApp</li>
                <li>✓ Galería de fotos</li>
              </ul>
              <div className="text-2xl font-black text-[var(--color-accent)]">$169.000/año</div>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 relative">
              <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                CRÍTICO
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">SEO Local + Maps</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Aparecer en Google Maps y búsquedas "restaurant + ciudad". Optimización Google Business Profile, reseñas, fotos, horarios actualizados. 76% resulta en visita física.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ Google Business Profile</li>
                <li>✓ Gestión de reseñas</li>
                <li>✓ Fotos en Maps</li>
                <li>✓ Posts semanales</li>
              </ul>
              <div className="text-2xl font-black text-[var(--color-accent)]">$249.000/mes</div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Fotografía Gastronómica</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Sesión fotográfica de platos profesional. Styling gastronómico, iluminación natural/estudio, fotos que hacen salivar. Para web, redes, menú impreso.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ 20 platos fotografiados</li>
                <li>✓ Styling incluido</li>
                <li>✓ Ambientación</li>
                <li>✓ Alta resolución</li>
              </ul>
              <div className="text-2xl font-black text-[var(--color-accent)]">$199.000/sesión</div>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-accent)]">Video + Redes Sociales</h3>
              <p className="text-[var(--color-muted)] mb-6 leading-relaxed text-justify">
                Videos de platos para Instagram Reels/TikTok + gestión mensual de redes. Contenido viral, engagement, alcance orgánico. Aumenta visitas 40%.
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ 4 videos mensuales</li>
                <li>✓ Gestión Instagram</li>
                <li>✓ Stories diarias</li>
                <li>✓ Hashtags locales</li>
              </ul>
              <div className="text-2xl font-black text-[var(--color-accent)]">$149.000/mes</div>
            </div>
          </div>
        </section>

        {/* Por qué marketing digital restaurantes */}
        <section className="mb-20">
          <h2 className="text-4xl font-black mb-8 text-[var(--color-accent)] text-center">¿Por qué Marketing Digital para tu Restaurante?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">El 76% de búsquedas de restaurantes en Google resultan en visita física en 24 horas.</strong> Cuando alguien busca "restaurant italiano Concepción", "sushi Talcahuano", "café San Pedro", Google muestra mapa con resultados locales. Si tu restaurant NO aparece ahí con fotos atractivas, reseñas positivas, horarios actualizados, pierdes clientes que visitan a competidores que SÍ optimizaron Google Business Profile. SEO local + Maps convierte búsquedas online en mesas llenas el mismo día.
            </p>
            <p className="text-xl leading-[1.8] text-justify">
              <strong className="text-[var(--color-accent)] font-bold">Fotografía gastronómica aumenta decisión de compra 67%.</strong> Fotos profesionales de platos hacen salivar, muestran porciones generosas, presentación impecable, ingredientes frescos. En redes sociales, foto de hamburger jugosa con queso derretido genera 10x más engagement que texto promocional. Videos cortos de preparación en cocina (tiempo real acelerado) viralizan fácil en TikTok/Reels. Inversión en fotos/videos se paga sola con 5-10 clientes extra semanales atraídos por contenido visual irresistible.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#1a1a1a] border-2 border-[var(--color-accent)] rounded-2xl p-12 text-center shadow-[0_20px_60px_rgba(200,255,0,0.2)]">
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.15)] border border-[rgba(200,255,0,0.4)] rounded-full">
            <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">⚡ Oferta <CurrentMonth /> 2026</span>
          </div>
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[#9FCC00] bg-clip-text text-transparent">
            ¿Listo para Llenar tu Restaurant?
          </h2>
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-2xl mx-auto leading-relaxed text-justify">
            Pack Restaurant: Web + Fotos + SEO Local. Auditoría gratis de tu presencia actual. Cotiza:
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-lg font-bold rounded-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(200,255,0,0.4)] transition-all">
            Cotizar Pack Restaurant →
          </Link>
        </div>

      </article>
    </>
  );
}
