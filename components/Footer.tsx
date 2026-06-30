import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--color-border)] mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold mb-4">Alma Media</h4>
            <p className="text-[var(--color-muted)] text-sm">Agencia de marketing digital en Biobío.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/diseno-web-biobio" className="text-[var(--color-muted)] hover:text-white">Diseño Web</Link></li>
              <li><Link href="/seo-biobio" className="text-[var(--color-muted)] hover:text-white">SEO</Link></li>
              <li><Link href="/seo-local-biobio" className="text-[var(--color-muted)] hover:text-white">SEO Local</Link></li>
              <li><Link href="/fotografia-producto-biobio" className="text-[var(--color-muted)] hover:text-white">Fotografía</Link></li>
              <li><Link href="/video-producto-biobio" className="text-[var(--color-muted)] hover:text-white">Video</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-[var(--color-muted)] hover:text-white">Inicio</Link></li>
              <li><Link href="/servicios" className="text-[var(--color-muted)] hover:text-white">Servicios</Link></li>
              <li><Link href="/blog" className="text-[var(--color-muted)] hover:text-white">Blog</Link></li>
              <li><Link href="/nosotros" className="text-[var(--color-muted)] hover:text-white">Nosotros</Link></li>
              <li><Link href="/contacto" className="text-[var(--color-muted)] hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              <li><a href="tel:+56XXXXXXXXX" className="hover:text-white">+56 X XXXX XXXX</a></li>
              <li><a href="mailto:contacto@almamedia.cl" className="hover:text-white">contacto@almamedia.cl</a></li>
              <li>Concepción, Biobío</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-muted)]">
          <p>&copy; 2026 Alma Media. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en Biobío</p>
        </div>
      </div>
    </footer>
  );
}
