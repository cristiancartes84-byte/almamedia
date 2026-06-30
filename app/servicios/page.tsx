import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Servicios de Marketing Digital | Alma Media Biobío',
  description: 'Diseño web, SEO, SEO Local, fotografía y video de producto. Servicios de marketing digital para empresas en la Región del Biobío.',
};

const services = [
  {
    emoji: '🎨',
    title: 'Diseño Web',
    slug: 'diseno-web-biobio',
    description: 'Sitios WordPress profesionales, rápidos y optimizados para conversiones.',
    features: ['Landing pages', 'Sitios corporativos', 'Ecommerce', 'Responsive design', 'SEO optimizado'],
    priceFrom: '$169.000',
    pricePer: '/año',
  },
  {
    emoji: '📈',
    title: 'SEO',
    slug: 'seo-biobio',
    description: 'Posicionamiento en Google para que te encuentren cuando buscan lo que vendes.',
    features: ['Auditoría SEO', 'Optimización técnica', 'Contenido optimizado', 'Link building', 'Reportes mensuales'],
    priceFrom: 'Desde $150.000',
    pricePer: '/mes',
  },
  {
    emoji: '📍',
    title: 'SEO Local',
    slug: 'seo-local-biobio',
    description: 'Aparecer en Google Maps y búsquedas locales de tu ciudad.',
    features: ['Google Business Profile', 'Optimización local', 'Gestión de reseñas', 'Citaciones locales', 'Maps ranking'],
    priceFrom: '$95.000',
    pricePer: '/mes',
  },
  {
    emoji: '📸',
    title: 'Fotografía de Producto',
    slug: 'fotografia-producto-biobio',
    description: 'Fotos profesionales que venden. Fondo blanco o lifestyle para ecommerce y redes.',
    features: ['Fondo blanco', 'Lifestyle', 'Para ecommerce', 'Para redes sociales', 'Edición incluida'],
    priceFrom: '$150.000',
    pricePer: 'pack',
  },
  {
    emoji: '🎥',
    title: 'Video de Producto',
    slug: 'video-producto-biobio',
    description: 'Videos cortos para Instagram, TikTok, Facebook Ads. Contenido que convierte.',
    features: ['Videos 360°', 'Demos de producto', 'Reels', 'Ads', 'Edición profesional'],
    priceFrom: '$180.000',
    pricePer: 'pack',
  },
  {
    emoji: '📦',
    title: 'Paquetes Completos',
    slug: 'contacto',
    description: 'Combina diseño web + SEO + contenido visual para resultados máximos.',
    features: ['Web + SEO', 'Foto + Video', 'Servicio completo', 'Ahorro 20%', 'Todo incluido'],
    priceFrom: 'Consultar',
    pricePer: '',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Hero */}
      <section className="relative z-10 pt-24 pb-16 px-8 text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">
            Nuestros Servicios
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl mx-auto">
          Marketing Digital Completo
        </h1>

        <p className="text-xl text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
          Desde diseño web hasta contenido visual. Todo lo que necesitas para vender más online.
        </p>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all"
            >
              <div className="text-5xl mb-6">{service.emoji}</div>

              <h2 className="text-2xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                {service.title}
              </h2>

              <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--color-accent)]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-black text-[var(--color-accent)]">
                  {service.priceFrom}
                </span>
                {service.pricePer && (
                  <span className="text-[var(--color-muted)] text-sm">
                    {service.pricePer}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-[var(--color-accent)] font-semibold group-hover:gap-4 transition-all">
                <span>Ver más</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 pb-24">
        <h2 className="text-3xl font-black text-center mb-12">¿Por qué Alma Media?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
            <div className="w-12 h-12 bg-[rgba(200,255,0,0.1)] rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Enfoque en Resultados</h3>
            <p className="text-[var(--color-muted)]">
              No medimos éxito por "me gusta" sino por conversiones. ¿Aumentaron las ventas? Eso importa.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
            <div className="w-12 h-12 bg-[rgba(200,255,0,0.1)] rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Transparencia Total</h3>
            <p className="text-[var(--color-muted)]">
              Reportes mensuales claros. Sabes exactamente qué estamos haciendo y qué resultados obtienes.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
            <div className="w-12 h-12 bg-[rgba(200,255,0,0.1)] rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Rapidez</h3>
            <p className="text-[var(--color-muted)]">
              Respondemos en menos de 24h. Proyectos entregados en los plazos acordados, sin excusas.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
            <div className="w-12 h-12 bg-[rgba(200,255,0,0.1)] rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Sin Permanencia</h3>
            <p className="text-[var(--color-muted)]">
              En servicios mensuales puedes cancelar cuando quieras. Si no ves resultados, no tiene sentido seguir.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
            <div className="w-12 h-12 bg-[rgba(200,255,0,0.1)] rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🏘️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Local</h3>
            <p className="text-[var(--color-muted)]">
              Entendemos el mercado de Biobío. Sabemos cómo funciona el SEO local y qué busca la gente.
            </p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
            <div className="w-12 h-12 bg-[rgba(200,255,0,0.1)] rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Servicio Completo</h3>
            <p className="text-[var(--color-muted)]">
              Web, SEO, fotos, videos — todo bajo un mismo techo. No coordinas con 5 proveedores diferentes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 pb-24">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-black mb-4">¿No estás seguro cuál necesitas?</h2>
          <p className="text-[var(--color-muted)] text-lg mb-8">
            Cuéntanos tu caso y te recomendamos el mejor plan para ti.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 transition-all"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </>
  );
}
