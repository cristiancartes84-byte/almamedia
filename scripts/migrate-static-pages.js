const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const staticPages = [
  {
    title: 'Diseño Web en Concepción - Sitios que Venden',
    slug: 'diseno-web-concepcion',
    badge: 'Concepción',
    badgeColor: '#C8FF00',
    heroTitle: 'Diseño Web en Concepción: Sitios que Venden',
    heroSubtitle: 'Sitios web profesionales para negocios en Concepción. WordPress rápido, SEO optimizado y diseño moderno desde $169.000/año.',
    ctaText: 'Cotizar Mi Sitio Web',
    ctaLink: '/contacto',
    ctaColor: '#C8FF00',
    content: `
<section class="mb-16">
  <h2 class="text-4xl font-black mb-6 text-[var(--color-accent)]">¿Por qué tu negocio en Concepción necesita un sitio web?</h2>
  <p class="text-lg mb-6 leading-relaxed">
    Concepción es la segunda ciudad más grande de Chile con más de 230.000 habitantes y centro neurálgico del Gran Concepción (1 millón de habitantes). Es una ciudad universitaria, industrial y de servicios.
  </p>
  <p class="text-lg mb-6 leading-relaxed">
    <strong class="text-[var(--color-accent)] font-bold">El 82% de los penquistas busca en Google antes de comprar</strong>. Si tienes un negocio en el centro, Barrio Universitario, Lorenzo Arenas o cualquier sector comercial de Concepción, necesitas aparecer cuando buscan lo que vendes.
  </p>
</section>

<section class="mb-16">
  <h2 class="text-4xl font-black mb-6 text-[var(--color-accent)]">Sectores Principales en Concepción</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
      <h3 class="text-xl font-bold mb-3 text-[var(--color-accent)]">🎓 Educación</h3>
      <p class="text-[var(--color-muted)] leading-relaxed">Colegios, preuniversitarios, institutos, academias de inglés en sectores universitarios.</p>
    </div>
    <div class="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
      <h3 class="text-xl font-bold mb-3 text-[var(--color-accent)]">💼 Servicios Profesionales</h3>
      <p class="text-[var(--color-muted)] leading-relaxed">Abogados, contadores, consultoras, estudios de arquitectura en centro y Pedro de Valdivia.</p>
    </div>
    <div class="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
      <h3 class="text-xl font-bold mb-3 text-[var(--color-accent)]">🏥 Salud</h3>
      <p class="text-[var(--color-muted)] leading-relaxed">Clínicas, consultas médicas, centros dentales, farmacias en sectores residenciales.</p>
    </div>
  </div>
</section>
    `,
    metaTitle: 'Diseño Web Concepción: Sitios que Cargan Rápido y Convierten - Alma Media',
    metaDescription: 'Diseño web profesional en Concepción: sitios WordPress rápidos, SEO optimizado, desde $169.000/año. Especialistas en negocios locales.',
    metaKeywords: 'diseño web concepción, páginas web concepción, diseño wordpress concepción',
    excerpt: 'Diseño web profesional para negocios en Concepción',
    pricingPlans: JSON.stringify([
      {
        name: 'Landing Page',
        price: '$169.000',
        period: 'CLP/año',
        features: ['1 página servicios', 'Google Maps', 'Formulario contacto', 'Hosting + dominio', 'SEO básico'],
        highlighted: false
      },
      {
        name: 'Sitio Profesional',
        price: '$390.000',
        period: 'CLP',
        features: ['5 páginas completas', 'Galería fotos', 'Blog/noticias', 'Testimonios', 'SEO optimizado'],
        highlighted: true
      },
      {
        name: 'Ecommerce',
        price: 'Desde $590.000',
        period: 'CLP',
        features: ['Tienda online', 'Webpay integrado', 'Stock administrable', 'Email automático', 'Panel admin'],
        highlighted: false
      }
    ]),
    status: 'published',
  },
  {
    title: 'Diseño Web en Talcahuano - Negocios del Puerto',
    slug: 'diseno-web-talcahuano',
    badge: 'Talcahuano',
    badgeColor: '#C8FF00',
    heroTitle: 'Diseño Web en Talcahuano: Sitios para Negocios del Puerto',
    heroSubtitle: 'Sitios web profesionales para empresas en Talcahuano. Especializados en negocios portuarios, comercio, servicios navales e industria pesquera.',
    ctaText: 'Cotizar Mi Sitio Web',
    ctaLink: '/contacto',
    ctaColor: '#C8FF00',
    content: `
<section class="mb-16">
  <h2 class="text-4xl font-black mb-6 text-[var(--color-accent)]">Negocios Portuarios e Industriales</h2>
  <p class="text-lg mb-6">Talcahuano es la comuna portuaria más importante de Chile. Sitios web B2B para servicios marítimos, logística y pesca.</p>
</section>
    `,
    metaTitle: 'Diseño Web en Talcahuano - Sitios para Negocios del Puerto | Alma Media',
    metaDescription: 'Diseño web en Talcahuano: sitios profesionales para negocios del puerto, comercio y servicios. WordPress optimizado desde $169.000/año.',
    metaKeywords: 'diseño web talcahuano, sitios web puerto, páginas web talcahuano',
    excerpt: 'Sitios web para negocios portuarios en Talcahuano',
    pricingPlans: JSON.stringify([
      {
        name: 'Landing B2B',
        price: '$169.000',
        period: 'CLP/año',
        features: ['Página servicios B2B', 'Formulario cotización', 'Hosting + dominio', 'Certificados SSL', 'Email corporativo'],
        highlighted: false
      },
      {
        name: 'Catálogo Online',
        price: '$390.000',
        period: 'CLP',
        features: ['Hasta 100 productos', 'Fichas técnicas', 'Sistema de cotización', 'PDF descargable', 'Administración fácil'],
        highlighted: true
      },
      {
        name: 'Ecommerce B2B',
        price: 'Desde $590.000',
        period: 'CLP',
        features: ['Tienda completa', 'Precios mayoristas', 'Clientes corporativos', 'Facturación integrada', 'Gestión de stock'],
        highlighted: false
      }
    ]),
    status: 'published',
  },
  {
    title: 'Diseño Web en Los Ángeles - Capital Provincial',
    slug: 'diseno-web-los-angeles',
    badge: 'Los Ángeles',
    badgeColor: '#C8FF00',
    heroTitle: 'Diseño Web en Los Ángeles: Capital Provincial',
    heroSubtitle: 'Sitios web profesionales para negocios en Los Ángeles. Comercio, agricultura, turismo y servicios provinciales. Alcance regional desde la capital del Biobío.',
    ctaText: 'Cotizar Mi Sitio Web',
    ctaLink: '/contacto',
    ctaColor: '#C8FF00',
    content: `
<section class="mb-16">
  <h2 class="text-4xl font-black mb-6 text-[var(--color-accent)]">Capital Provincial con Alcance Regional</h2>
  <p class="text-lg mb-6">Los Ángeles es centro de servicios para toda la provincia: agricultura, turismo y comercio mayorista.</p>
</section>
    `,
    metaTitle: 'Diseño Web en Los Ángeles - Sitios para Capital Provincial | Alma Media',
    metaDescription: 'Diseño web en Los Ángeles: sitios profesionales para comercio, agricultura, turismo y servicios provinciales. WordPress optimizado desde $169.000/año.',
    metaKeywords: 'diseño web los ángeles, páginas web los ángeles, sitios web provincia biobío',
    excerpt: 'Sitios web para negocios en Los Ángeles',
    pricingPlans: JSON.stringify([
      {
        name: 'Landing Page',
        price: '$169.000',
        period: 'CLP/año',
        features: ['1 página servicios', 'Google Maps', 'Formulario contacto', 'Hosting + dominio', 'SEO regional'],
        highlighted: false
      },
      {
        name: 'Sitio Corporativo',
        price: '$390.000',
        period: 'CLP',
        features: ['Hasta 5 páginas', 'WordPress', 'Galería proyectos', 'Blog/noticias', 'SEO optimizado'],
        highlighted: true
      },
      {
        name: 'Catálogo / Ecommerce',
        price: 'Desde $590.000',
        period: 'CLP',
        features: ['Catálogo productos', 'Cotización online', 'Webpay integrado', 'Stock administrable', 'Envíos provincia'],
        highlighted: false
      }
    ]),
    status: 'published',
  },
  {
    title: 'Diseño Web en San Pedro de la Paz - Negocios Residenciales',
    slug: 'diseno-web-san-pedro-paz',
    badge: 'San Pedro de la Paz',
    badgeColor: '#C8FF00',
    heroTitle: 'Diseño Web en San Pedro de la Paz',
    heroSubtitle: 'Sitios web profesionales para negocios en San Pedro. Educación, salud, servicios residenciales y comercio local. WordPress optimizado para Google.',
    ctaText: 'Cotizar Mi Sitio Web',
    ctaLink: '/contacto',
    ctaColor: '#C8FF00',
    content: `
<section class="mb-16">
  <h2 class="text-4xl font-black mb-6 text-[var(--color-accent)]">Negocios para Sectores Residenciales</h2>
  <p class="text-lg mb-6">San Pedro es la tercera comuna del Gran Concepción. Familias buscan servicios locales: educación, salud, fitness, estética.</p>
</section>
    `,
    metaTitle: 'Diseño Web en San Pedro de la Paz - Sitios para Negocios Residenciales | Alma Media',
    metaDescription: 'Diseño web en San Pedro de la Paz: sitios profesionales para negocios en sectores residenciales, educación y servicios. WordPress desde $169.000/año.',
    metaKeywords: 'diseño web san pedro, páginas web san pedro de la paz, sitios web lomas coloradas',
    excerpt: 'Sitios web para negocios residenciales en San Pedro',
    pricingPlans: JSON.stringify([
      {
        name: 'Landing Page',
        price: '$169.000',
        period: 'CLP/año',
        features: ['Servicios + contacto', 'Google Maps integrado', 'Formulario consultas', 'Hosting + dominio', 'Responsive móvil'],
        highlighted: false
      },
      {
        name: 'Sitio Profesional',
        price: '$390.000',
        period: 'CLP',
        features: ['5 páginas completas', 'Galería de fotos', 'Blog/noticias', 'Testimonios clientes', 'SEO optimizado'],
        highlighted: true
      },
      {
        name: 'Ecommerce',
        price: 'Desde $590.000',
        period: 'CLP',
        features: ['Tienda online', 'Webpay integrado', 'Delivery San Pedro', 'Stock administrable', 'Email automático'],
        highlighted: false
      }
    ]),
    status: 'published',
  },
];

async function migratePages() {
  console.log('🚀 Iniciando migración de páginas estáticas...\n');

  for (const pageData of staticPages) {
    try {
      // Verificar si ya existe
      const existing = await prisma.landingPage.findUnique({
        where: { slug: pageData.slug }
      });

      if (existing) {
        console.log(`⚠️  Página "${pageData.slug}" ya existe. Actualizando...`);
        await prisma.landingPage.update({
          where: { slug: pageData.slug },
          data: pageData
        });
        console.log(`✅ Actualizada: ${pageData.title}`);
      } else {
        await prisma.landingPage.create({
          data: pageData
        });
        console.log(`✅ Creada: ${pageData.title}`);
      }
    } catch (error) {
      console.error(`❌ Error con "${pageData.slug}":`, error.message);
    }
  }

  console.log('\n🎉 Migración completada!');
  console.log('\nPáginas creadas:');
  staticPages.forEach(p => {
    console.log(`   - https://almamedia.cl/${p.slug}`);
  });

  await prisma.$disconnect();
}

migratePages()
  .catch((e) => {
    console.error('❌ Error fatal:', e);
    process.exit(1);
  });
