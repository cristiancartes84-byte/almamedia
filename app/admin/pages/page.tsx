'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type LandingPage = {
  id: string;
  title: string;
  slug: string;
  heroTitle: string;
  status: string;
  updatedAt: string;
};

export default function LandingPagesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [pages, setPages] = useState<LandingPage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  const loadPages = async () => {
    try {
      const res = await fetch('/api/landing-pages');
      if (res.ok) {
        const data = await res.json();
        setPages(data);
      }
    } catch (error) {
      console.error('Error loading pages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session) {
      loadPages();
    }
  }, [session]);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`¿Seguro que quieres eliminar "${title}"?`)) return;

    try {
      const res = await fetch(`/api/landing-pages/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPages(pages.filter(p => p.id !== id));
      } else {
        alert('Error al eliminar la página');
      }
    } catch (error) {
      console.error('Error deleting page:', error);
      alert('Error al eliminar la página');
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C8FF00] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="bg-[#1a1a1a] border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/admin/dashboard" className="flex items-center gap-1">
              <span className="text-2xl font-black" style={{ color: '#C8FF00' }}>Alma</span>
              <span className="text-2xl font-black text-white">Media</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="text-sm text-gray-400 hover:text-white">
                ← Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Landing Pages</h1>
            <p className="text-gray-400 mt-1">Gestiona tus páginas de destino con editor visual + Alma SEO</p>
          </div>
          <Link
            href="/admin/pages/new"
            className="px-6 py-3 bg-[#C8FF00] text-[#0a0a0a] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-all"
          >
            + Nueva Página
          </Link>
        </div>

        {/* Pages grid */}
        {pages.length === 0 ? (
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-16 text-center">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-xl font-bold text-white mb-2">No tienes landing pages todavía</h3>
            <p className="text-gray-400 mb-6">
              Crea tu primera página editable con editor visual + SEO
            </p>
            <Link
              href="/admin/pages/new"
              className="inline-block px-6 py-3 bg-[#C8FF00] text-[#0a0a0a] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-all"
            >
              Crear Primera Página →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <div
                key={page.id}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#C8FF00] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{page.title}</h3>
                    <p className="text-sm text-[#C8FF00]">/{page.slug}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      page.status === 'published'
                        ? 'bg-green-900/30 text-green-400'
                        : 'bg-yellow-900/30 text-yellow-400'
                    }`}
                  >
                    {page.status === 'published' ? 'Publicada' : 'Borrador'}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {page.heroTitle || 'Sin título hero'}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <span>Actualizada: {new Date(page.updatedAt).toLocaleDateString()}</span>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/admin/pages/${page.id}/edit`}
                    className="flex-1 px-4 py-2 bg-[#2a2a2a] text-white text-sm font-semibold rounded-lg hover:bg-[#3a3a3a] transition-colors text-center"
                  >
                    Editar
                  </Link>
                  <Link
                    href={`/${page.slug}`}
                    target="_blank"
                    className="px-4 py-2 bg-[#2a2a2a] text-white text-sm font-semibold rounded-lg hover:bg-[#3a3a3a] transition-colors"
                  >
                    Ver
                  </Link>
                  <button
                    onClick={() => handleDelete(page.id, page.title)}
                    className="px-4 py-2 bg-red-900/30 text-red-400 text-sm font-semibold rounded-lg hover:bg-red-900/50 transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
