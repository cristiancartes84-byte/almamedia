import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Diseño Web en Concepción - Sitios que Venden | Alma Media',
  description: 'Diseño web profesional en Concepción. Sitios WordPress rápidos, optimizados para Google y enfocados en convertir visitas en clientes. Desde $169.000/año.',
  openGraph: {
    title: 'Diseño Web en Concepción - Sitios que Venden',
    description: 'Sitios web profesionales para negocios en Concepción.',
    type: 'website',
  }
};

export default function DisenoWebConcepcionPage() {
  return (
    <>
      <ParticlesBackground />

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/diseno-web-biobio" className="hover:text-[var(--color-accent)] transition-colors">Diseño Web Biobío</Link>
          <span className="mx-2">/</span>
          <span>Concepción</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">Concepción</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web en Concepción: Sitios que Venden
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Sitios web profesionales para negocios en Concepción. WordPress rápido, optimizado para Google y enfocado en convertir visitas en clientes.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Mi Sitio Web
        </Link>
      </section>

      {/* Main Content */}
      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">

        {/* Por qué necesita web */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">¿Por qué tu negocio en Concepción necesita un sitio web profesional?</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Concepción es la capital de la Región del Biobío y el segundo polo económico más importante de Chile. Con más de 220.000 habitantes en la comuna y cerca de 1 millón en el Gran Concepción, la competencia comercial es intensa.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            En una ciudad universitaria con 8 universidades y más de 60.000 estudiantes, <strong className="text-[var(--color-accent)] font-bold">el 92% de los penquistas busca en Google antes de comprar</strong>. Si tu negocio no aparece online, pierdes clientes todos los días frente a tu competencia que sí tiene web.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Ya sea que tengas un café en Pedro de Valdivia, una clínica en Barrio Universitario, un restaurante en Plaza Perú o una ferretería en el centro, necesitas presencia digital profesional que genere confianza y conversiones.
          </p>
        </section>

        {/* Sectores */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Sectores que atendemos en Concepción</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Trabajamos con diversos tipos de negocios en Concepción y sectores específicos de la ciudad:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🎓 Educación y Servicios Universitarios</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Residencias estudiantiles, academias, librerías, cafeterías cerca de campus UdeC, UCSC, UBB, Inacap.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏥 Salud y Clínicas</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Clínicas dentales, centros médicos, consultas particulares, ópticas en sectores como Av. Paicaví, Barrio Universitario.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🍽️ Gastronomía</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Restaurantes, cafés, pubs en sectores turísticos: Plaza Perú, Barrio Estación, Pedro de Valdivia, Tribunales.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🛒 Retail y Comercio</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Tiendas de ropa, zapaterías, ferreterías en centro, Mall del Centro, calles Freire, Barros Arana, O'Higgins.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏗️ Servicios Profesionales</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Estudios contables, legales, arquitectura, inmobiliarias que atienden empresas del Gran Concepción.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">💪 Fitness y Deporte</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Gimnasios, boxes de CrossFit, estudios de yoga, tiendas deportivas en sectores residenciales y comerciales.</p>
            </div>
          </div>
        </section>

        {/* Casos de Éxito */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Casos de Éxito en Concepción</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Hemos trabajado con negocios locales que hoy generan clientes desde su web:
          </p>
          <ul className="space-y-3">
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Cafetería en Barrio Universitario:</strong> Web con menú digital y reservas online. Aumento del 45% en pedidos después de aparecer en Google Maps.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Clínica Dental en Paicaví:</strong> Landing page optimizada para "dentista Concepción". Pasó de 0 a 15 consultas mensuales desde Google.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Tienda de Deportes en Mall del Centro:</strong> Ecommerce con productos, envíos a domicilio en Gran Concepción. Ventas online representan 30% del total.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Academia Preuniversitaria:</strong> Web con información de cursos, testimonios, inscripciones online. 60% de matrículas vienen desde la web.</li>
          </ul>
        </section>

        {/* Servicios Complementarios */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Servicios Complementarios en Concepción</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Además del diseño web, ofrecemos servicios adicionales para potenciar tu presencia digital en Concepción:
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">SEO Local Concepción</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Optimización para Google Maps y búsquedas locales. Aparecer cuando buscan "tu servicio + Concepción". Incluye Google Business Profile, reseñas, citas locales en directorios.
          </p>

          <h3 className="text-2xl font-bold mb-4">Fotografía de Producto</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Sesiones fotográficas para ecommerce, catálogos, redes sociales. Fondo blanco profesional o lifestyle. Ideal para tiendas, restaurantes, productos artesanales.
          </p>

          <h3 className="text-2xl font-bold mb-4">Video Marketing</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Videos cortos para Instagram, TikTok, Facebook Ads. Reels de productos, testimoniales de clientes, tours virtuales de tu local en Concepción.
          </p>
        </section>

        {/* Precios */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Precios para Empresas en Concepción</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Paquetes adaptados al tamaño de tu negocio en Concepción:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$169.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP/año</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 1 página optimizada</li>
                <li>✓ Hosting + dominio .cl</li>
                <li>✓ Formulario de contacto</li>
                <li>✓ Google Analytics</li>
                <li>✓ SEO básico</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Sitio Corporativo</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$390.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP (pago único)</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Hasta 5 páginas</li>
                <li>✓ Diseño personalizado</li>
                <li>✓ WordPress</li>
                <li>✓ SEO optimizado</li>
                <li>✓ Capacitación incluida</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Ecommerce</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $590.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP</p>
              <ul className="space-y-2 text-sm">
                <li>✓ WooCommerce/Shopify</li>
                <li>✓ Webpay integrado</li>
                <li>✓ Gestión de productos</li>
                <li>✓ Envíos configurados</li>
                <li>✓ Panel administrable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Proceso de Trabajo con Clientes de Concepción</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Todo el proceso puede ser 100% remoto o con reunión presencial en Concepción según prefieras:
          </p>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Semana 1:</strong> Reunión inicial (presencial en Concepción o videollamada), briefing del proyecto, definición de estructura.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Semana 2-3:</strong> Diseño mockup para aprobación, desarrollo en WordPress, integración de contenidos.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Semana 4:</strong> Optimización SEO, pruebas de velocidad, revisión final, capacitación para administrar.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-[var(--color-accent)] font-bold">Semana 5:</strong> Lanzamiento, configuración de dominio, publicación oficial. Soporte post-lanzamiento 1 mes incluido.
            </p>
          </div>
        </section>

        {/* Zonas */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Zonas de Concepción que Cubrimos</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Atendemos todo Concepción y alrededores: Centro, Barrio Universitario, Pedro de Valdivia, Lorenzo Arenas, Collao, Barrio Estación, Barrio Norte, sector Paicaví, Plaza Perú, Tribunales, sectores residenciales y comerciales.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            También trabajamos con negocios del Gran Concepción: Talcahuano, San Pedro, Hualpén, Chiguayante, Penco, Tomé.
          </p>
        </section>
      </article>

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-16 text-center">
          <h2 className="text-4xl font-black mb-4">¿Listo para tu sitio web en Concepción?</h2>
          <p className="text-xl text-[var(--color-muted)] mb-8">
            Cotiza sin compromiso. Respuesta en menos de 24 horas.
          </p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Sitio Web
          </Link>
        </div>
      </div>
    </>
  );
}
