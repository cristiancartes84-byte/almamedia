import ParticlesBackground from '@/components/Particles';
import Link from 'next/link';

export const metadata = {
  title: 'Diseño Web en San Pedro de la Paz - Sitios para Negocios Residenciales | Alma Media',
  description: 'Diseño web en San Pedro de la Paz: sitios profesionales para negocios en sectores residenciales, educación y servicios. WordPress desde $169.000/año.',
};

export default function DisenoWebSanPedroPazPage() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/diseno-web-biobio" className="hover:text-[var(--color-accent)] transition-colors">Diseño Web Biobío</Link>
          <span className="mx-2">/</span>
          <span>San Pedro de la Paz</span>
        </div>
      </div>

      <section className="relative z-10 py-16 text-center px-8">
        <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
          <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider">San Pedro de la Paz</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          Diseño Web en San Pedro de la Paz
        </h1>
        <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
          Sitios web profesionales para negocios en San Pedro. Educación, salud, servicios residenciales y comercio local. WordPress optimizado para Google.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
          Cotizar Mi Sitio Web
        </Link>
      </section>

      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">¿Por qué tu negocio en San Pedro necesita un sitio web?</h2>
          <p className="text-lg mb-6 leading-relaxed">
            San Pedro de la Paz es la tercera comuna más poblada del Gran Concepción con más de 145.000 habitantes. Es una comuna predominantemente residencial con sectores de alto, medio y emergente desarrollo económico.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            La población de San Pedro es joven, familias con hijos en edad escolar y universitaria, profesionales que trabajan en Concepción pero viven en San Pedro. <strong className="text-[var(--color-accent)] font-bold">El 87% busca servicios locales en Google antes de decidir</strong>: colegios, clínicas, supermercados, gimnasios, centros de estética, veterinarias.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Si tienes un negocio en Michihue, Lomas Coloradas, Boca Sur, Candelaria, Los Conquistadores o cualquier sector residencial de San Pedro, necesitas aparecer cuando familias de la comuna buscan "tu servicio + San Pedro" en Google.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Sectores Principales en San Pedro de la Paz</h2>
          <p className="text-lg mb-8 leading-relaxed">
            San Pedro tiene una economía enfocada en servicios para residentes. Trabajamos con:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🎓 Educación</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Colegios particulares, jardines infantiles, preuniversitarios, academias de inglés, reforzamiento escolar en Lomas Coloradas, Michihue.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏥 Salud y Bienestar</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Clínicas dentales, centros médicos, consultas pediátricas, veterinarias, farmacias en sectores residenciales cercanos a hogares.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">💪 Fitness y Deporte</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Gimnasios, boxes CrossFit, estudios de yoga, pilates, danza. San Pedro tiene alta demanda de centros deportivos en condominios y barrios.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">💇 Estética y Belleza</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Peluquerías, barberías, centros de estética, spa, salones de uñas en sectores residenciales donde vive tu clientela.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🛒 Retail y Servicios Locales</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Minimarkets, almacenes, panaderías, ferreterías de barrio, servicios de reparación, lavanderías en condominios y pasajes.</p>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[var(--color-accent)]">🏡 Inmobiliarias y Corretaje</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">Venta y arriendo de propiedades en San Pedro. Departamentos en Lomas, casas en Michihue, parcelas en sectores rurales.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Casos de Éxito en San Pedro de la Paz</h2>
          <ul className="space-y-3">
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Jardín Infantil en Lomas Coloradas:</strong> Web con información de proyecto educativo, vacantes, proceso de matrícula. 70% de consultas vienen desde Google por padres que buscan "jardín infantil San Pedro".</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Centro Médico en Michihue:</strong> Sitio con especialidades, horarios de atención, reserva de horas online. Pasó de depender de referencias boca a boca a recibir 20+ consultas mensuales desde la web.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Gimnasio en Condominio Los Conquistadores:</strong> Landing page con planes, clases, instructores, fotos. Llena cupos cada mes con inscripciones online sin publicidad pagada.</li>
            <li className="leading-relaxed"><strong className="text-[var(--color-accent)] font-bold">Veterinaria en Candelaria:</strong> Web con servicios, emergencias 24/7, productos, blog de cuidados. Dueños de mascotas de toda San Pedro la encuentran antes que competencia sin web.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Características del Mercado Digital en San Pedro</h2>

          <h3 className="text-2xl font-bold mb-4">Búsquedas Hiperlocales</h3>
          <p className="text-lg mb-6 leading-relaxed">
            La gente de San Pedro busca servicios DENTRO de San Pedro, no en Concepción. Buscan "pediatra San Pedro", "gimnasio Lomas Coloradas", "colegio Michihue". Tu web debe rankear para esas búsquedas específicas de sector.
          </p>

          <h3 className="text-2xl font-bold mb-4">Decisión Familiar</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Muchas compras son decisiones familiares (colegio de los hijos, clínica familiar, supermercado del barrio). Tu web debe transmitir confianza, testimonios de vecinos, cercanía.
          </p>

          <h3 className="text-2xl font-bold mb-4">Competencia Local Baja</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Muchos negocios en San Pedro NO tienen web o tienen sitios desactualizados de hace 10 años. Si tú tienes web profesional, destacas inmediatamente y capturas todo ese tráfico de búsqueda.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Precios para Negocios en San Pedro</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Landing Page</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$169.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP/año</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Servicios + contacto</li>
                <li>✓ Google Maps integrado</li>
                <li>✓ Formulario consultas</li>
                <li>✓ Hosting + dominio</li>
                <li>✓ Responsive móvil</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border-2 border-[var(--color-accent)] rounded-xl p-8 hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Sitio Profesional</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">$390.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 5 páginas completas</li>
                <li>✓ Galería de fotos</li>
                <li>✓ Blog/noticias</li>
                <li>✓ Testimonios clientes</li>
                <li>✓ SEO optimizado</li>
              </ul>
            </div>

            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">Ecommerce</h3>
              <p className="text-5xl font-black text-[var(--color-accent)] mb-2">Desde $590.000</p>
              <p className="text-[var(--color-muted)] mb-6 text-sm">CLP</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Tienda online</li>
                <li>✓ Webpay integrado</li>
                <li>✓ Delivery San Pedro</li>
                <li>✓ Stock administrable</li>
                <li>✓ Email automático</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-black mb-6 text-[var(--color-accent)]">Zonas de San Pedro que Cubrimos</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Todo San Pedro de la Paz: Lomas Coloradas, Michihue, Boca Sur, Candelaria, Los Conquistadores, Huertos Familiares, Santa Clara, San Pedro Centro, sectores residenciales y comerciales.
          </p>
        </section>
      </article>

      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-16 text-center">
          <h2 className="text-4xl font-black mb-4">¿Listo para tu sitio web en San Pedro?</h2>
          <p className="text-xl text-[var(--color-muted)] mb-8">
            Especialistas en negocios para sectores residenciales. Cotiza sin compromiso.
          </p>
          <Link href="/contacto" className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all">
            Cotizar Mi Sitio Web
          </Link>
        </div>
      </div>
    </>
  );
}
