import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';
import CurrentYear from '@/components/CurrentYear';
import type { Metadata } from 'next';

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Blog Marketing Digital ${currentYear} | Guías y Consejos SEO - Alma Media`,
  description: 'Blog de marketing digital: guías, precios, consejos SEO, casos de éxito. Aprende cómo hacer crecer tu negocio online en Concepción y Biobío.',
  keywords: 'blog marketing digital, guías SEO, precios diseño web, consejos marketing digital',
  authors: [{ name: 'Alma Media' }],
  creator: 'Alma Media',
  publisher: 'Alma Media',
  metadataBase: new URL('https://almamedia.cl'),
  alternates: {
    canonical: '/blog',
  },
};

const articles = [
  {
    slug: 'cuanto-cuesta-diseno-web-concepcion',
    title: `¿Cuánto Cuesta un Sitio Web en Concepción? [Precios ${currentYear}]`,
    excerpt: 'Guía completa de precios de diseño web en Concepción: landing pages, sitios corporativos, ecommerce. Precios reales y qué incluye cada opción.',
    category: 'Precios',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'cuanto-cuesta-seo-chile',
    title: `¿Cuánto Cuesta SEO en Chile? [Precios Reales ${currentYear}]`,
    excerpt: 'Descubre cuánto cuesta SEO en Chile: precios por servicio, qué incluyen, ROI esperado y cómo elegir el mejor plan para tu negocio.',
    category: 'Precios',
    readTime: '7 min',
    featured: true,
  },
  {
    slug: 'landing-page-vs-sitio-web',
    title: `Landing Page vs Sitio Web: ¿Cuál Necesito? [Guía ${currentYear}]`,
    excerpt: 'Diferencias entre landing page y sitio web completo. Descubre cuál necesita tu negocio según objetivos, presupuesto y tipo de empresa.',
    category: 'Guías',
    readTime: '6 min',
    featured: true,
  },
  {
    slug: 'fotografia-producto-vale-la-pena',
    title: 'Fotografía de Producto: ¿Vale la Pena? [ROI Real]',
    excerpt: 'Análisis de ROI de fotografía profesional de producto: impacto en conversión, casos reales y cuándo invertir en fotos profesionales.',
    category: 'ROI',
    readTime: '7 min',
    featured: false,
  },
  {
    slug: 'como-elegir-agencia-marketing-digital-concepcion',
    title: 'Cómo Elegir Agencia de Marketing Digital en Concepción',
    excerpt: 'Guía para elegir la mejor agencia de marketing digital en Concepción: qué preguntar, banderas rojas, expectativas realistas.',
    category: 'Guías',
    readTime: '9 min',
    featured: false,
  },
  {
    slug: 'marketing-digital-restaurantes-guia',
    title: `Marketing Digital para Restaurantes [Guía Completa ${currentYear}]`,
    excerpt: 'Estrategia completa de marketing digital para restaurantes: SEO local, redes sociales, fotografía gastronómica, delivery.',
    category: 'Por Industria',
    readTime: '10 min',
    featured: true,
  },
  {
    slug: 'seo-local-google-maps',
    title: 'SEO Local: Cómo Aparecer en Google Maps [Paso a Paso]',
    excerpt: 'Guía paso a paso para aparecer en Google Maps: optimización Google Business Profile, reseñas, keywords locales.',
    category: 'SEO',
    readTime: '8 min',
    featured: false,
  },
  {
    slug: 'errores-sitio-web',
    title: '10 Errores que Matan tu Sitio Web (y Cómo Solucionarlos)',
    excerpt: 'Los 10 errores más comunes en sitios web de negocios y cómo corregirlos: velocidad, SEO, diseño, contenido.',
    category: 'Consejos',
    readTime: '9 min',
    featured: false,
  },
  {
    slug: 'marketing-digital-pymes',
    title: `Marketing Digital para PYMES: Por Dónde Empezar [${currentYear}]`,
    excerpt: 'Guía para PYMES que comienzan en marketing digital: presupuesto, prioridades, herramientas, estrategia paso a paso.',
    category: 'Guías',
    readTime: '10 min',
    featured: false,
  },
  {
    slug: 'caso-exito-seo-local',
    title: 'Caso de Éxito: Cómo un Restaurant Aumentó Ventas 60% con SEO',
    excerpt: 'Caso de éxito real: estrategia SEO local que aumentó visitas 300% y ventas 60% en 6 meses. Tácticas replicables.',
    category: 'Casos de Éxito',
    readTime: '6 min',
    featured: true,
  },
];

export default function BlogPage() {
  const featuredArticles = articles.filter(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>Blog</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">📚 Blog</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Aprende Marketing Digital
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto">
          Guías prácticas, precios reales, casos de éxito y consejos para hacer crecer tu negocio online.
        </p>
      </section>

      <article className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Artículos Destacados */}
        <section className="mb-16">
          <h2 className="text-3xl font-black mb-8 text-[var(--color-accent)]">Artículos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full text-xs font-bold text-[var(--color-accent)]">
                    {article.category}
                  </span>
                  <span className="text-xs text-[var(--color-muted)]">{article.readTime} lectura</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Otros Artículos */}
        <section>
          <h2 className="text-3xl font-black mb-8">Más Artículos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-xs font-bold">
                    {article.category}
                  </span>
                  <span className="text-xs text-[var(--color-muted)]">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
