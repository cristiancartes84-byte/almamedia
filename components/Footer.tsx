import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-border)] mt-24 bg-[radial-gradient(ellipse_at_bottom,rgba(200,255,0,0.03),transparent_50%)]">
      {/* CTA Section */}
      <div className="border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-8 py-16 text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-4">¿Listo para Impulsar tu Negocio?</h3>
          <p className="text-lg text-[var(--color-muted)] mb-8 max-w-2xl mx-auto">
            Cotiza tu proyecto sin compromiso. Te respondemos en menos de 24 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg)] font-bold rounded-lg hover:scale-105 hover:shadow-[0_10px_30px_rgba(200,255,0,0.3)] transition-all"
          >
            Cotizar Proyecto Gratis →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Columna 1: Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-lg font-light text-white tracking-widest" style={{letterSpacing: '0.15em'}}>
                A L M A
              </span>
              <span className="text-lg font-black text-white tracking-wider" style={{letterSpacing: '0.1em'}}>
                MEDIA
              </span>
            </Link>
            <p className="text-[var(--color-muted)] mb-6 leading-relaxed">
              Agencia de marketing digital especializada en diseño web, SEO y contenido visual.
              Transformamos negocios en Concepción y toda la Región del Biobío.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[var(--color-border)] rounded-lg flex items-center justify-center hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.1)] transition-all">
                <span className="text-lg">📘</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[var(--color-border)] rounded-lg flex items-center justify-center hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.1)] transition-all">
                <span className="text-lg">📷</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[var(--color-border)] rounded-lg flex items-center justify-center hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.1)] transition-all">
                <span className="text-lg">💼</span>
              </a>
              <a href="https://wa.me/56XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[var(--color-border)] rounded-lg flex items-center justify-center hover:border-[var(--color-accent)] hover:bg-[rgba(200,255,0,0.1)] transition-all">
                <span className="text-lg">💬</span>
              </a>
            </div>
            <div className="inline-block px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-xs text-[var(--color-muted)]">
              ⭐ +200 clientes satisfechos
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h4 className="font-bold mb-4 text-white">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/diseno-web" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">Diseño Web</Link></li>
              <li><Link href="/seo-posicionamiento" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">SEO Posicionamiento</Link></li>
              <li><Link href="/seo-local" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">SEO Local</Link></li>
              <li><Link href="/fotografia-producto" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">Fotografía Producto</Link></li>
              <li><Link href="/video-producto" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">Video Marketing</Link></li>
              <li><Link href="/packs-completos" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">Packs Completos</Link></li>
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h4 className="font-bold mb-4 text-white">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">Todos los Servicios</Link></li>
              <li><Link href="/nosotros" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">Nosotros</Link></li>
              <li><Link href="/contacto" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">Contacto</Link></li>
              <li><Link href="/marketing-digital-biobio" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">Marketing Digital Biobío</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] mt-0.5">📧</span>
                <a href="mailto:contacto@almamedia.cl" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                  contacto@almamedia.cl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] mt-0.5">📱</span>
                <a href="tel:+56961605142" className="text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
                  +56 9 6160 5142
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] mt-0.5">📍</span>
                <span className="text-[var(--color-muted)]">
                  Concepción, Región del Biobío
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] mt-0.5">⏰</span>
                <span className="text-[var(--color-muted)]">
                  Lun - Vie: 9:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ciudades Atendidas */}
        <div className="border-t border-[var(--color-border)] pt-8 pb-8">
          <h5 className="text-xs font-bold text-[var(--color-muted)] mb-4 uppercase tracking-wider">Ciudades que Atendemos</h5>
          <div className="flex flex-wrap gap-2">
            <Link href="/diseno-web-concepcion" className="px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-xs hover:border-[var(--color-accent)] transition-colors">Concepción</Link>
            <Link href="/diseno-web-talcahuano" className="px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-xs hover:border-[var(--color-accent)] transition-colors">Talcahuano</Link>
            <Link href="/diseno-web-san-pedro-paz" className="px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-xs hover:border-[var(--color-accent)] transition-colors">San Pedro</Link>
            <Link href="/diseno-web-los-angeles" className="px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-xs hover:border-[var(--color-accent)] transition-colors">Los Ángeles</Link>
            <Link href="/diseno-web-chillan" className="px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-xs hover:border-[var(--color-accent)] transition-colors">Chillán</Link>
            <Link href="/diseno-web-coronel" className="px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-xs hover:border-[var(--color-accent)] transition-colors">Coronel</Link>
            <span className="px-3 py-1.5 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full text-xs text-[var(--color-muted)]">+ Toda la región</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-muted)]">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>&copy; 2026 Alma Media. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="/privacidad" className="hover:text-[var(--color-accent)] transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-[var(--color-accent)] transition-colors">Términos</Link>
            </div>
          </div>
          <p className="flex items-center gap-2">
            Hecho con <span className="text-red-500">❤️</span> en Biobío, Chile
          </p>
        </div>
      </div>
    </footer>
  );
}
