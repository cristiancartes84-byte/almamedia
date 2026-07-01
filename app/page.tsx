import ParticlesBackground from '@/components/Particles';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export const metadata = {
  title: 'Alma Media - Agencia de Marketing Digital en Biobío | Diseño Web, SEO y Contenido Visual',
  description: 'Agencia de marketing digital en Concepción, Biobío. Diseño web rápido, SEO para aparecer en Google, fotografía y video de producto.',
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

      {/* Hero */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-8 text-center pt-24 pb-16">
        <div className="max-w-[900px]">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-[20px] text-[var(--color-accent)] text-[0.75rem] font-bold uppercase tracking-[0.1em]">
              Agencia de Marketing Digital en Biobío
            </span>
          </div>

          <h1 className="text-[clamp(3rem,6vw,5rem)] font-black leading-[1.1] mb-6 tracking-[-0.02em]">
            Marketing digital de la manera eficiente
          </h1>

          <p className="text-xl text-[var(--color-muted)] mb-10 leading-[1.7]">
            Diseño web rápido, SEO para aparecer en Google y contenido visual que vende. Para empresas en Concepción, Talcahuano y toda la Región del Biobío.
          </p>

          <div className="flex gap-4 flex-wrap justify-center mb-12">
            <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-md hover:transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all text-[0.95rem]">
              Cotizar Mi Proyecto
            </Link>
            <Link href="#servicios" className="px-8 py-4 bg-transparent border border-[var(--color-border)] font-bold rounded-md hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all text-[0.95rem]">
              Ver Servicios
            </Link>
          </div>

          {/* Zonas */}
          <div className="text-center pt-8 pb-8 border-b border-[var(--color-border)]">
            <p className="text-[var(--color-accent)] text-[0.85rem] mb-6 font-semibold uppercase tracking-[0.1em]">
              Zonas de cobertura en Región del Biobío
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

      {/* Servicios */}
      <section id="servicios" className="relative z-10 max-w-[1400px] mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
            <span className="text-[var(--color-accent)] font-semibold text-[0.85rem] uppercase tracking-[0.1em]">Nuestros Servicios</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black mb-4">Lo que hacemos por tu negocio</h2>
          <p className="text-[1.1rem] text-[var(--color-muted)] max-w-[700px] mx-auto">
            Servicios de marketing digital enfocados en resultados: más visitas, más clientes, más ventas.
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

      {/* Stats */}
      <section className="relative z-10 py-20 px-8 text-center border-t border-b border-[var(--color-border)]">
        <div className="grid md:grid-cols-3 gap-12 max-w-[1000px] mx-auto">
          <div>
            <h3 className="text-[4rem] font-black text-[var(--color-accent)] mb-2">45+</h3>
            <p className="text-[var(--color-muted)] text-[0.95rem]">Proyectos completados</p>
          </div>
          <div>
            <h3 className="text-[4rem] font-black text-[var(--color-accent)] mb-2">5k+</h3>
            <p className="text-[var(--color-muted)] text-[0.95rem]">Horas de trabajo</p>
          </div>
          <div>
            <h3 className="text-[4rem] font-black text-[var(--color-accent)] mb-2">4.8</h3>
            <p className="text-[var(--color-muted)] text-[0.95rem]">Calificación promedio</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-8 text-center bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.08),transparent_70%)]">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.2] mb-6">¿Listo para crecer online?</h2>
        <p className="text-xl text-[var(--color-muted)] mb-10 max-w-[600px] mx-auto">
          Cotiza tu proyecto sin compromiso. Te respondemos en menos de 24 horas con una propuesta personalizada.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contacto" className="px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-md hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all text-[0.95rem]">
            Cotizar Mi Proyecto
          </Link>
          <Link href="/nosotros" className="px-8 py-4 bg-transparent border border-[var(--color-border)] font-bold rounded-md hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.05)] transition-all text-[0.95rem]">
            Conocer Más
          </Link>
        </div>
      </section>
    </>
  );
}
