import ParticlesBackground from '@/components/Particles';
import ServiceCard from '@/components/ServiceCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import Testimonials from '@/components/Testimonials';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
  title: 'Agencia de Marketing Digital en Biobío 2026 | Alma Media - Diseño Web y SEO',
  description: 'Agencia digital #1 en Concepción. Diseño web, SEO y contenido visual. +45 proyectos exitosos. Cotización y auditoría SEO gratis.',
  keywords: 'agencia marketing digital Concepción, diseño web Biobío, SEO Concepción, agencia digital Chile',
  openGraph: {
    title: 'Alma Media - Agencia Digital #1 en Biobío | Diseño Web y SEO',
    description: 'Transformamos negocios con marketing digital: diseño web, SEO y contenido visual. +45 proyectos exitosos en Concepción y Biobío.',
    type: 'website',
    url: 'https://almamedia.cl',
  }
};

const services = [
  {
    icon: '🎨',
    title: 'Diseño Web',
    description: 'Sitios web rápidos, responsive y optimizados para convertir visitas en clientes. WordPress, landing pages y ecommerce.',
    link: '/diseno-web'
  },
  {
    icon: '🔍',
    title: 'SEO / Posicionamiento',
    description: 'Aparece en Google cuando te buscan. Auditoría SEO, optimización técnica, contenido y link building para primera página.',
    link: '/seo-posicionamiento'
  },
  {
    icon: '📍',
    title: 'SEO Local',
    description: 'Optimización para Google Maps y búsquedas locales. Aparece cuando buscan tu servicio + tu ciudad.',
    link: '/seo-local'
  },
  {
    icon: '📸',
    title: 'Fotografía de Producto',
    description: 'Fotos profesionales de productos: fondo blanco para catálogo y lifestyle para redes sociales y web.',
    link: '/fotografia-producto'
  },
  {
    icon: '🎥',
    title: 'Video de Producto',
    description: 'Videos cortos de productos para ecommerce, Instagram y campañas publicitarias. Aumenta confianza y conversión.',
    link: '/video-producto'
  },
  {
    icon: '📦',
    title: 'Packs Completos',
    description: 'Pack Web, Pack Visual o Pack SEO Mensual. Todo lo que necesitas para vender online desde $169.000 CLP/año.',
    link: '/packs-completos'
  }
];

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-8 text-center pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="max-w-[900px] animate-fade-in">
          <div className="mb-6 animate-slide-down" style={{animationDelay: '0.1s'}}>
            <span className="inline-block px-4 py-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-[20px] text-[var(--color-accent)] text-[0.75rem] font-bold uppercase tracking-[0.1em]">
              🏆 Agencia #1 de Marketing Digital en Biobío
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] mb-6 tracking-[-0.02em] animate-slide-down" style={{animationDelay: '0.2s'}}>
            Transforma tu Negocio con Marketing Digital que Genera Resultados
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-[var(--color-muted)] mb-4 leading-[1.7] animate-slide-down" style={{animationDelay: '0.3s'}}>
            Agencia especializada en <strong className="text-white">diseño web profesional, SEO y contenido visual</strong> para empresas en Concepción y Biobío.
          </p>

          <p className="text-sm md:text-base lg:text-lg text-[var(--color-accent)] mb-10 font-semibold animate-slide-down" style={{animationDelay: '0.4s'}}>
            ✓ Más de 45 proyectos exitosos · ✓ Respuesta en 24 horas · ✓ Cotización gratuita
          </p>

          <div className="flex gap-3 md:gap-4 flex-wrap justify-center mb-8 md:mb-12 px-4 animate-slide-up" style={{animationDelay: '0.5s'}}>
            <Link href="/contacto" className="px-6 md:px-8 py-3 md:py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-md hover:transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all text-sm md:text-base hover:scale-105">
              🚀 Cotizar Proyecto Gratis
            </Link>
            <Link href="#servicios" className="px-6 md:px-8 py-3 md:py-4 bg-transparent border border-[var(--color-border)] font-bold rounded-md hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all text-sm md:text-base">
              Ver Servicios
            </Link>
          </div>

          {/* Zonas */}
          <div className="text-center pt-8 pb-8 border-b border-[var(--color-border)]">
            <p className="text-[var(--color-accent)] text-[0.85rem] mb-6 font-semibold uppercase tracking-[0.1em]">
              📍 Cobertura en toda la Región del Biobío
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-base font-semibold mb-3">
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Concepción</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Talcahuano</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">San Pedro de la Paz</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Hualpén</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Chiguayante</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Coronel</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Tomé</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 text-base font-semibold">
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Los Ángeles</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Lota</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Penco</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Lebu</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Arauco</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Curanilahue</span>
              <span>·</span>
              <span className="hover:text-[var(--color-accent)] hover:-translate-y-0.5 transition-all cursor-default">Cabrero</span>
            </div>
            <p className="mt-4 text-[0.75rem] text-[var(--color-muted)]">+ Todas las comunas de la Región del Biobío</p>
          </div>
        </div>
      </section>

      {/* Trust Badges - NUEVO */}
      <section className="relative z-10 py-12 px-4 md:px-8 border-b border-[var(--color-border)]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-center text-sm text-[var(--color-muted)] mb-8 uppercase tracking-wider">
            Confianza y Calidad Garantizada
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="text-xs font-semibold">Google Partner</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="text-xs font-semibold">SSL Certificado</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="text-xs font-semibold">Pago Seguro</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">✓</div>
              <p className="text-xs font-semibold">Soporte 24/7</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-4xl mb-2">✓</div>
              <p className="text-xs font-semibold">Garantía Total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué Alma Media */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
            <span className="text-[var(--color-accent)] font-semibold text-[0.75rem] md:text-[0.85rem] uppercase tracking-[0.1em]">Por Qué Elegirnos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Alma Media es diferente</h2>
          <p className="text-base md:text-lg lg:text-xl text-[var(--color-muted)] max-w-[700px] mx-auto px-4">
            No somos una agencia más. Somos tu socio estratégico en crecimiento digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 text-center hover:border-[var(--color-accent)] transition-all hover:-translate-y-2">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Entrega Rápida</h3>
            <p className="text-[var(--color-muted)]">Landing pages en 1-2 semanas. Sitios corporativos en 4-5 semanas. Sin demoras.</p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 text-center hover:border-[var(--color-accent)] transition-all hover:-translate-y-2">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-xl font-bold mb-3">Calidad Premium</h3>
            <p className="text-[var(--color-muted)]">Diseño profesional, código limpio, SEO optimizado. Sin plantillas genéricas.</p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 text-center hover:border-[var(--color-accent)] transition-all hover:-translate-y-2">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3">Soporte Real</h3>
            <p className="text-[var(--color-muted)]">Respuesta en 24 horas. 1 mes de soporte post-lanzamiento incluido.</p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
            <span className="text-[var(--color-accent)] font-semibold text-[0.75rem] md:text-[0.85rem] uppercase tracking-[0.1em]">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Marketing Digital que Genera Ventas</h2>
          <p className="text-base md:text-lg lg:text-xl text-[var(--color-muted)] max-w-[700px] mx-auto px-4">
            Servicios enfocados en resultados reales: más visitas, más clientes, más ventas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Stats con AnimatedCounter - MEJORADO */}
      <section className="relative z-10 py-12 md:py-20 px-4 md:px-8 text-center border-t border-b border-[var(--color-border)] bg-[radial-gradient(ellipse_at_center,rgba(200,255,0,0.05),transparent_70%)]">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Resultados que Hablan por Sí Solos</h2>
        <div className="grid md:grid-cols-4 gap-12 max-w-[1200px] mx-auto">
          <div className="group">
            <h3 className="text-[4rem] font-black text-[var(--color-accent)] mb-2 group-hover:scale-110 transition-transform">
              <AnimatedCounter end={45} suffix="+" />
            </h3>
            <p className="text-[var(--color-muted)] text-[0.95rem]">Proyectos completados</p>
          </div>
          <div className="group">
            <h3 className="text-[4rem] font-black text-[var(--color-accent)] mb-2 group-hover:scale-110 transition-transform">
              <AnimatedCounter end={5} suffix="k+" />
            </h3>
            <p className="text-[var(--color-muted)] text-[0.95rem]">Horas de trabajo</p>
          </div>
          <div className="group">
            <h3 className="text-[4rem] font-black text-[var(--color-accent)] mb-2 group-hover:scale-110 transition-transform">
              <AnimatedCounter end={4.8} decimals={1} />
            </h3>
            <p className="text-[var(--color-muted)] text-[0.95rem]">Calificación promedio</p>
          </div>
          <div className="group">
            <h3 className="text-[4rem] font-black text-[var(--color-accent)] mb-2 group-hover:scale-110 transition-transform">
              <AnimatedCounter end={100} suffix="%" />
            </h3>
            <p className="text-[var(--color-muted)] text-[0.95rem]">Clientes satisfechos</p>
          </div>
        </div>
      </section>

      {/* Testimonials - NUEVO */}
      <section className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
            <span className="text-[var(--color-accent)] font-semibold text-[0.75rem] md:text-[0.85rem] uppercase tracking-[0.1em]">Testimonios</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Lo que Dicen Nuestros Clientes</h2>
          <p className="text-base md:text-lg lg:text-xl text-[var(--color-muted)] max-w-[700px] mx-auto px-4">
            Resultados reales de empresas que confiaron en nosotros.
          </p>
        </div>

        <Testimonials />
      </section>

      {/* Garantía */}
      <section className="relative z-10 max-w-[900px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="bg-gradient-to-br from-[var(--color-card)] to-[#151515] border-2 border-[var(--color-accent)] rounded-2xl p-6 md:p-12 text-center hover:shadow-[0_20px_60px_rgba(200,255,0,0.2)] transition-all">
          <div className="text-5xl md:text-6xl mb-4 md:mb-6">🛡️</div>
          <h2 className="text-2xl md:text-3xl font-black mb-4">Garantía de Satisfacción Total</h2>
          <p className="text-base md:text-lg text-[var(--color-muted)] mb-6">
            Si tu sitio web carga en más de 3 segundos, <strong className="text-white">lo optimizamos gratis</strong>.
            <br/>1 mes de soporte post-lanzamiento incluido. Revisiones ilimitadas durante el diseño.
          </p>
          <p className="text-sm md:text-base text-[var(--color-accent)] font-bold">
            ✓ Garantía de velocidad · ✓ Revisiones ilimitadas · ✓ Soporte incluido
          </p>
        </div>
      </section>

      {/* FAQ Breve */}
      <section className="relative z-10 max-w-[800px] mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">Preguntas Frecuentes</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all">
            <h3 className="text-lg font-bold mb-2">¿Cuánto tarda en estar listo mi proyecto?</h3>
            <p className="text-[var(--color-muted)]">Landing pages: 1-2 semanas. Sitios corporativos: 4-5 semanas. Ecommerce: 6-8 semanas.</p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all">
            <h3 className="text-lg font-bold mb-2">¿Cuánto cuesta un sitio web?</h3>
            <p className="text-[var(--color-muted)]">Desde $169.000/año (landing page) hasta $890.000 (ecommerce completo). Cotización personalizada gratuita.</p>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] transition-all">
            <h3 className="text-lg font-bold mb-2">¿Incluyen hosting y dominio?</h3>
            <p className="text-[var(--color-muted)]">Sí, el primer año de hosting y dominio .cl están incluidos en nuestro Pack Web anual.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative z-10 py-16 md:py-24 px-4 md:px-8 text-center bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.08),transparent_70%)]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] mb-6">
          ¿Listo para Transformar tu Negocio?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-[var(--color-muted)] mb-4 max-w-[600px] mx-auto px-4">
          Cotiza tu proyecto sin compromiso. Te respondemos en menos de 24 horas con una propuesta personalizada.
        </p>
        <p className="text-base md:text-lg text-[var(--color-accent)] mb-8 md:mb-10 font-semibold">
          🎁 Auditoría SEO gratuita con cada cotización
        </p>
        <div className="flex gap-3 md:gap-4 justify-center flex-wrap px-4">
          <Link href="/contacto" className="px-6 md:px-8 py-3 md:py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-md hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all text-sm md:text-base hover:scale-105">
            Cotizar Mi Proyecto Ahora
          </Link>
          <Link href="/nosotros" className="px-6 md:px-8 py-3 md:py-4 bg-transparent border border-[var(--color-border)] font-bold rounded-md hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all text-sm md:text-base">
            Conocer Más
          </Link>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Alma Media",
            "description": "Agencia de marketing digital en Concepción, Biobío. Diseño web, SEO y contenido visual.",
            "url": "https://almamedia.cl",
            "logo": "https://almamedia.cl/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Concepción",
              "addressRegion": "Biobío",
              "addressCountry": "CL"
            },
            "areaServed": "Región del Biobío, Chile",
            "priceRange": "$$$"
          })
        }}
      />

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out backwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }
      `}</style>
    </>
  );
}
