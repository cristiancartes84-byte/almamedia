'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(10,10,10,0.85)] backdrop-blur-xl border-b border-[var(--color-border)]">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--color-accent)] rounded-md flex items-center justify-center text-[var(--color-bg)] font-black">
            A
          </div>
          <span className="text-xl font-black">Alma Media</span>
        </Link>

        <ul className="hidden md:flex gap-8 items-center">
          <li><Link href="#servicios" className="text-[var(--color-muted)] hover:text-white transition-colors">Servicios</Link></li>
          <li><Link href="/nosotros" className="text-[var(--color-muted)] hover:text-white transition-colors">Nosotros</Link></li>
          <li><Link href="#casos" className="text-[var(--color-muted)] hover:text-white transition-colors">Casos</Link></li>
          <li><Link href="/contacto" className="text-[var(--color-muted)] hover:text-white transition-colors">Contacto</Link></li>
          <li>
            <Link href="/contacto" className="px-6 py-2 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-accent)] transition-all font-semibold">
              Cotizar Proyecto
            </Link>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]">
          <ul className="flex flex-col p-8 gap-4">
            <li><Link href="/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
            <li><Link href="/servicios" className="block py-2" onClick={() => setIsMenuOpen(false)}>Servicios</Link></li>
            <li><Link href="/blog" className="block py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/nosotros" className="block py-2" onClick={() => setIsMenuOpen(false)}>Nosotros</Link></li>
            <li>
              <Link href="/contacto" className="block py-3 px-6 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg text-center font-bold" onClick={() => setIsMenuOpen(false)}>
                Cotizar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
