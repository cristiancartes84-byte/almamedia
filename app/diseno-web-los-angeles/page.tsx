import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Diseño Web en Los Ángeles - Sitios para Capital Provincial | Alma Media',
  description: 'Diseño web en Los Ángeles: sitios profesionales para comercio, agricultura, turismo y servicios provinciales. WordPress optimizado desde $169.000/año.',
};

export default function DisenoWebLosAngelesPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/diseno-web-biobio" className="hover:text-[var(--color-accent)] transition-colors">Diseño Web Biobío</Link>
          <span className="mx-2">/</span>
          <span>Los Ángeles</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">Los Ángeles</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web en Los Ángeles: Capital Provincial
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Sitios web profesionales para negocios en Los Ángeles. Comercio, agricultura, turismo y servicios provinciales. Alcance regional desde la capital del Biobío.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Mi Sitio Web
        </Link>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">¿Por qué Los Ángeles necesita presencia digital?</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Los Ángeles es la capital de la Provincia del Biobío y el segundo centro urbano más importante de la región después de Concepción. Con más de 200.000 habitantes y siendo centro de servicios para toda la provincia (Cabrero, Nacimiento, Mulchén, Laja, Santa Bárbara), tiene un mercado comercial extenso.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            A diferencia del Gran Concepción metropolitano, Los Ángeles es <strong className="text-[var(--color-accent)] font-bold">capital provincial con alcance regional</strong>. Los negocios aquí no solo atienden angelinos, sino clientes de todo el valle: agricultores, empresas madereras, turistas que van al Alto Biobío, comercio mayorista.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            <strong className="text-[var(--color-accent)] font-bold">El 78% de los angelinos busca en Google</strong> antes de comprar. Si tienes un negocio en la Plaza de Armas, Av. Alemania, Av. Ricardo Vicuña o sectores comerciales, necesitas aparecer cuando buscan "tu servicio + Los Ángeles".
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Sectores Económicos en Los Ángeles</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Los Ángeles tiene una economía diversificada entre servicios, comercio, agricultura y turismo:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🌾 Agricultura y Agroindustria</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Venta de maquinaria agrícola, insumos, semillas, fertilizantes, servicios técnicos. Clientes: agricultores de toda la provincia.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🪵 Forestal y Maderero</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Aserraderos, venta de madera, empresas forestales, transporte de troncos. Los Ángeles es hub forestal del Biobío.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏪 Comercio Regional</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Tiendas mayoristas, distribuidoras, ferreterías industriales que abastecen comunas cercanas: Cabrero, Nacimiento, Mulchén.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏥 Salud y Educación</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Clínicas, consultas médicas, colegios particulares, preuniversitarios. Los Ángeles concentra servicios de salud y educación provincial.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏞️ Turismo</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Hoteles, cabañas, restaurantes, tour operators. Puerta de entrada al Salto del Laja y Alto Biobío (rafting, termas, esquí).</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🚗 Automotriz</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Concesionarias, talleres mecánicos, repuestos, lubricentros. Alto flujo vehicular entre Los Ángeles y comunas vecinas.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Casos de Éxito en Los Ángeles</h2>
          <ul className="space-y-3">
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Distribuidora de Insumos Agrícolas:</strong> Ecommerce B2B con catálogo de productos, cotización online. Ventas a agricultores de Mulchén, Nacimiento, Cabrero sin necesidad de visita presencial.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Hotel cerca del Salto del Laja:</strong> Web con reservas online, galería de habitaciones, paquetes turísticos. 60% de reservas vienen desde Google por turistas que buscan alojamiento en Los Ángeles.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Clínica Dental en Centro:</strong> Sitio con especialidades, equipo médico, agenda de horas. Pacientes de Mulchén y Cabrero viajan a Los Ángeles para atenderse después de encontrarlos online.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Concesionaria de Vehículos:</strong> Catálogo de vehículos usados, financiamiento, test drive online. Genera consultas de toda la provincia sin depender solo de tráfico peatonal.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Alcance Regional desde Los Ángeles</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Tu negocio en Los Ángeles NO solo atiende angelinos. Tienes alcance provincial:
          </p>

          <h3 className="text-2xl font-bold mb-4">Comunas que Gravitan a Los Ángeles</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Cabrero, Nacimiento, Laja, Mulchén, Santa Bárbara, Quilaco, Quilleco, Antuco, Alto Biobío. Todas estas comunas menores buscan servicios en Los Ángeles (capital provincial más cercana).
          </p>

          <h3 className="text-2xl font-bold mb-4">Búsquedas Regionales</h3>
          <p className="text-lg mb-6 leading-relaxed">
            La gente busca "especialista médico Los Ángeles", "maquinaria agrícola Provincia del Biobío", "hotel Salto del Laja". Son búsquedas con intención de viajar a Los Ángeles desde otras comunas.
          </p>

          <h3 className="text-2xl font-bold mb-4">Estrategia SEO Provincial</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Tu web debe rankear NO solo para "servicio + Los Ángeles" sino también "servicio + Provincia del Biobío", "servicio + entre Concepción y Temuco". Posicionamiento regional amplio.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Precios para Negocios en Los Ángeles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$169.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP/año</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 1 página servicios</li>
                <li>✓ Google Maps</li>
                <li>✓ Formulario contacto</li>
                <li>✓ Hosting + dominio</li>
                <li>✓ SEO regional</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Sitio Corporativo</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$390.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Hasta 5 páginas</li>
                <li>✓ WordPress</li>
                <li>✓ Galería proyectos</li>
                <li>✓ Blog/noticias</li>
                <li>✓ SEO optimizado</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Catálogo / Ecommerce</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $590.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Catálogo productos</li>
                <li>✓ Cotización online</li>
                <li>✓ Webpay integrado</li>
                <li>✓ Stock administrable</li>
                <li>✓ Envíos provincia</li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-16 text-center">
          <h2 className="text-4xl font-black mb-4">¿Listo para tu sitio web en Los Ángeles?</h2>
          <p className="text-xl text-[var(--color-muted)] mb-8">
            Especialistas en alcance provincial y comercio regional. Cotiza sin compromiso.
          </p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Sitio Web
          </Link>
        </div>
      </div>
    </>
  );
}
