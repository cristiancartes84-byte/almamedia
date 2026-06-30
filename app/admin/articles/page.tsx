'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type Article = {
  id: string; title: string; slug: string; excerpt: string;
  category: string; author: string; publishedAt: string; updatedAt: string; status: string;
};

export default function ArticlesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);

  const loadArticles = async () => {
    const res = await fetch('/api/articles');
    if (res.ok) setArticles(await res.json());
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  useEffect(() => { loadArticles(); }, []);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 512 512" fill="#F59E0B">
                <path d="M104,480H64a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,104,480Z"/>
                <path d="M232,480H192a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,232,480Z"/>
                <path d="M360,480H320a24,24,0,0,1-24-24V184a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,360,480Z"/>
                <path d="M488,480H448a24,24,0,0,1-24-24V88a24,24,0,0,1,24-24h40a24,24,0,0,1,24,24V456A24,24,0,0,1,488,480Z"/>
                <path d="M104,168c-5.1,0-10.2-2-14.1-5.9L36,108.1c-7.8-7.8-7.8-20.5,0-28.3l53.9-53.9c7.8-7.8,20.5-7.8,28.3,0l107,107,91-91c7.8-7.8,20.5-7.8,28.3,0l120,120c3.9,3.9,5.9,9,5.9,14.1s-2,10.2-5.9,14.1l-16,16c-7.8,7.8-20.5,7.8-28.3,0l-89.9-89.9-91,91c-7.8,7.8-20.5,7.8-28.3,0l-107-107-39.9,39.9C114.2,166,109.1,168,104,168z"/>
              </svg>
              <div>
                <span className="text-xl font-bold" style={{ color: '#064E38' }}>Divisa</span>
                <span className="text-xl font-bold" style={{ color: '#F59E0B' }}>Chile</span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
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
            <h1 className="text-3xl font-bold text-gray-900">Mis Artículos</h1>
            <p className="text-gray-600 mt-1">Gestiona todos tus artículos</p>
          </div>
          <Link
            href="/admin/articles/new"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nuevo Artículo
          </Link>
        </div>

        {/* Articles list */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Título
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Categoría
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Autor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {articles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{article.title}</div>
                      <div className="text-sm text-gray-500">{article.excerpt?.substring(0, 60)}...</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {article.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{article.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{new Date(article.updatedAt).toLocaleDateString('es-CL')}</div>
                    <div className="text-xs text-gray-400">
                      {new Date(article.updatedAt).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', hour12: false })}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      article.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-amber-100 text-amber-700 border border-amber-300'
                    }`}>
                      {article.status === 'published' ? 'Publicado' : '✎ Borrador'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/${article.slug}`} target="_blank" className="text-blue-600 hover:text-blue-900" title="Ver">👁️</Link>
                      <Link href={`/admin/articles/${article.id}/edit`} className="text-green-600 hover:text-green-900" title="Editar">✏️</Link>
                      <button
                        onClick={async () => {
                          if (confirm('¿Eliminar este artículo?')) {
                            await fetch(`/api/articles/${article.id}`, { method: 'DELETE' });
                            loadArticles();
                          }
                        }}
                        className="text-red-600 hover:text-red-900"
                        title="Eliminar"
                      >🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No tienes artículos todavía</p>
            <Link
              href="/admin/articles/new"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Crear tu primer artículo →
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
