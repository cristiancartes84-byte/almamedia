import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Diseño Web en Talcahuano - Sitios para Negocios del Puerto | Alma Media',
  description: 'Diseño web en Talcahuano: sitios profesionales para negocios del puerto, comercio y servicios. WordPress optimizado desde $169.000/año.',
};

export default function DisenoWebTalcahuanoPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/diseno-web-biobio" className="hover:text-[var(--color-accent)] transition-colors">Diseño Web Biobío</Link>
          <span className="mx-2">/</span>
          <span>Talcahuano</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">Talcahuano</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web en Talcahuano: Sitios para Negocios del Puerto
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Sitios web profesionales para empresas en Talcahuano. Especializados en negocios portuarios, comercio, servicios navales e industria pesquera.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Mi Sitio Web
        </Link>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">¿Por qué tu negocio en Talcahuano necesita presencia digital?</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Talcahuano es la comuna portuaria más importante de Chile y centro industrial del Gran Concepción. Con el Puerto de Talcahuano, las bases navales, el terminal pesquero y la industria naval, la actividad comercial es intensa y diversa.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            <strong className="text-[var(--color-accent)] font-bold">Más de 180.000 habitantes</strong> y miles de empresas relacionadas con servicios marítimos, logística, pesca, construcción naval y comercio al por mayor dependen de encontrar proveedores y servicios rápidamente.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Si tienes un negocio de suministros navales en el puerto, una ferretería industrial en Higueras, un restaurante de mariscos en el centro, o servicios de mantención cerca de ASMAR, <strong className="text-[var(--color-accent)] font-bold">necesitas que te encuentren en Google cuando buscan lo que ofreces</strong>.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Sectores que Dominan en Talcahuano</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Talcahuano tiene una economía diferente a Concepción. Trabajamos con los sectores más importantes de la comuna portuaria:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">⚓ Servicios Portuarios y Marítimos</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Suministros navales, agencias navieras, servicios de estiba, logística portuaria, empresas de carga y descarga.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🐟 Pesca e Industria Pesquera</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Comercializadoras de pescado, plantas procesadoras, distribuidoras mayoristas, servicios a la flota pesquera.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏗️ Industria Naval y Mantención</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Talleres de reparación naval, servicios de mantención de embarcaciones, suministros industriales, soldadura y metalmecánica.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🍽️ Gastronomía Costera</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Restaurantes de mariscos, cevicherías, cocinerías en terminal pesquero, comedores para trabajadores portuarios.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🛒 Comercio al por Mayor</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Ferreterías industriales, distribuidoras de materiales de construcción, repuestos marítimos, venta de equipos pesados.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏘️ Servicios Residenciales</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Negocios en sectores residenciales: Higueras, El Morro, Gaete, Las Salinas. Minimarkets, panaderías, servicios locales.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Casos de Éxito en Talcahuano</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Negocios talcahuaninos que hoy generan clientes desde su sitio web:
          </p>
          <ul className="space-y-3">
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Distribuidora de Suministros Navales:</strong> Catálogo online de productos para embarcaciones. Recibe cotizaciones de toda la costa chilena, no solo Talcahuano.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Restaurante de Mariscos en Terminal Pesquero:</strong> Web con menú, horarios, ubicación en Google Maps. Turistas de Concepción lo encuentran antes de visitar Talcahuano.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Taller de Reparación Naval:</strong> Landing page con servicios, certificaciones, galería de trabajos. Contactos de empresas navieras que buscan en Google.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Ferretería Industrial cerca de ASMAR:</strong> Ecommerce B2B con stock, precios mayoristas. Empresas constructoras hacen pedidos online con entrega en obra.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Precios para Negocios en Talcahuano</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Landing B2B</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$169.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP/año</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Página servicios B2B</li>
                <li>✓ Formulario cotización</li>
                <li>✓ Hosting + dominio</li>
                <li>✓ Certificados SSL</li>
                <li>✓ Email corporativo</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Catálogo Online</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$390.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Hasta 100 productos</li>
                <li>✓ Fichas técnicas</li>
                <li>✓ Sistema de cotización</li>
                <li>✓ PDF descargable</li>
                <li>✓ Administración fácil</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Ecommerce B2B</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $590.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Tienda completa</li>
                <li>✓ Precios mayoristas</li>
                <li>✓ Clientes corporativos</li>
                <li>✓ Facturación integrada</li>
                <li>✓ Gestión de stock</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Zonas de Talcahuano que Atendemos</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Todo Talcahuano y sectores aledaños: Puerto de Talcahuano, Base Naval, Terminal Pesquero, ASMAR, Higueras, El Morro, Las Salinas, Gaete, sector industrial, Hualpencillo, Tumbes.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            También trabajamos con empresas en zonas portuarias cercanas: San Vicente, Penco, Lirquén, Tomé.
          </p>
        </section>
      </article>

      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-16 text-center">
          <h2 className="text-4xl font-black mb-4">¿Listo para digitalizar tu negocio en Talcahuano?</h2>
          <p className="text-xl text-[var(--color-muted)] mb-8">
            Cotiza sin compromiso. Especialistas en negocios portuarios e industriales.
          </p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Sitio Web
          </Link>
        </div>
      </div>
    </>
  );
}
