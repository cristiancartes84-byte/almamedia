'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function AdminBar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    }
    if (userMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [userMenuOpen]);

  if (!session) return null;
  if (pathname?.startsWith('/admin')) return null;

  const initials = (session.user?.name ?? 'A').charAt(0).toUpperCase();

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 flex items-stretch"
        style={{ height: '32px', backgroundColor: '#1d2327', color: '#c3c4c7', fontSize: '13px', zIndex: 99999 }}
      >
        {/* Logo / site link */}
        <Link
          href="/admin/dashboard"
          className="flex items-center px-3 gap-1.5 hover:bg-[#2c3338] transition-colors"
          title="Ir al Dashboard"
        >
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 512 512" fill="#F59E0B">
            <path d="M104,480H64a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,104,480Z"/>
            <path d="M232,480H192a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,232,480Z"/>
            <path d="M360,480H320a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,360,480Z"/>
            <path d="M488,480H448a24,24,0,0,1-24-24V88a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,488,480Z"/>
            <path d="M104,168c-5.1,0-10.2-2-14.1-5.9L36,108.1c-7.8-7.8-7.8-20.5,0-28.3l53.9-53.9c7.8-7.8,20.5-7.8,28.3,0l107,107,91-91c7.8-7.8,20.5-7.8,28.3,0l120,120c3.9,3.9,5.9,9,5.9,14.1s-2,10.2-5.9,14.1l-16,16c-7.8,7.8-20.5,7.8-28.3,0l-89.9-89.9-91,91c-7.8,7.8-20.5,7.8-28.3,0l-107-107-39.9,39.9C114.2,166,109.1,168,104,168z"/>
          </svg>
          <span className="font-semibold hidden sm:inline" style={{ color: '#F59E0B' }}>DivisaChile</span>
        </Link>

        <div className="self-stretch w-px my-1" style={{ backgroundColor: '#3c434a' }} />

        <Link
          href="/admin/dashboard"
          className="hidden sm:flex items-center px-3 hover:bg-[#2c3338] hover:text-white transition-colors whitespace-nowrap"
        >
          Dashboard
        </Link>

        <Link
          href="/admin/articles/new"
          className="flex items-center px-3 gap-1 hover:bg-[#2c3338] hover:text-white transition-colors whitespace-nowrap"
        >
          <span className="text-base leading-none font-light mr-0.5">+</span>
          <span className="hidden sm:inline">Nueva Entrada</span>
        </Link>

        <Link
          href="/admin/articles"
          className="hidden md:flex items-center px-3 hover:bg-[#2c3338] hover:text-white transition-colors whitespace-nowrap"
        >
          Artículos
        </Link>

        <div className="flex-1" />

        {/* User dropdown */}
        <div ref={menuRef} className="relative flex items-stretch">
          <button
            onClick={() => setUserMenuOpen(v => !v)}
            className="flex items-center px-3 gap-2 hover:bg-[#2c3338] hover:text-white transition-colors whitespace-nowrap h-full"
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
              style={{ backgroundColor: '#3c434a' }}
            >
              {initials}
            </div>
            <span className="hidden sm:inline">Hola, {session.user?.name ?? 'Admin'}</span>
            <span className="text-[10px] leading-none">▾</span>
          </button>

          {userMenuOpen && (
            <div
              className="absolute right-0 top-full shadow-lg"
              style={{ backgroundColor: '#1d2327', border: '1px solid #3c434a', minWidth: '160px', zIndex: 100 }}
            >
              <Link
                href="/admin/settings"
                className="block px-4 py-2.5 hover:bg-[#2c3338] hover:text-white transition-colors"
                style={{ color: '#c3c4c7' }}
                onClick={() => setUserMenuOpen(false)}
              >
                Configuración
              </Link>
              <div style={{ borderTop: '1px solid #3c434a' }} />
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="w-full text-left px-4 py-2.5 hover:bg-[#2c3338] hover:text-white transition-colors"
                style={{ color: '#c3c4c7' }}
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Spacer so page content is not hidden behind the fixed bar */}
      <div style={{ height: '32px' }} />
    </>
  );
}
