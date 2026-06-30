'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState([
    { name: 'Total Artículos', value: '...', icon: '📝', color: 'bg-blue-500' },
    { name: 'Publicados', value: '...', icon: '✅', color: 'bg-green-500' },
    { name: 'Borradores', value: '...', icon: '📄', color: 'bg-yellow-500' },
    { name: 'Categorías', value: '...', icon: '🏷️', color: 'bg-purple-500' },
  ]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  // Cargar estadísticas reales
  useEffect(() => {
    if (session) {
      fetch('/api/admin/stats')
        .then(res => res.json())
        .then(data => {
          setStats([
            { name: 'Total Artículos', value: data.totalArticles.toString(), icon: '📝', color: 'bg-blue-500' },
            { name: 'Publicados', value: data.publishedArticles.toString(), icon: '✅', color: 'bg-green-500' },
            { name: 'Borradores', value: data.draftArticles.toString(), icon: '📄', color: 'bg-yellow-500' },
            { name: 'Categorías', value: data.categories.toString(), icon: '🏷️', color: 'bg-purple-500' },
          ]);
        })
        .catch(err => console.error('Error loading stats:', err));
    }
  }, [session]);

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

  if (!session) {
    return null;
  }

  const quickActions = [
    { name: 'Nuevo Artículo', href: '/admin/articles/new', icon: '➕', color: 'bg-green-600' },
    { name: 'Mis Artículos', href: '/admin/articles', icon: '📚', color: 'bg-blue-600' },
    { name: 'Landing Pages', href: '/admin/pages', icon: '📄', color: 'bg-purple-600' },
    { name: 'Mantenedor Inicio', href: '/admin/homepage', icon: '🏠', color: 'bg-teal-600' },
    { name: 'Banners Laterales', href: '/admin/sidebar-banners', icon: '📌', color: 'bg-orange-600' },
    { name: 'Configuración', href: '/admin/settings', icon: '⚙️', color: 'bg-gray-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-black" style={{ color: '#C8FF00' }}>Alma</span>
              <span className="text-2xl font-black" style={{ color: '#0a0a0a' }}>Media</span>
            </Link>

            {/* User menu */}
            <div className="flex items-center gap-4">
              <Link href="/" target="_blank" className="text-sm text-gray-600 hover:text-gray-900">
                Ver sitio →
              </Link>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{session.user?.name}</p>
                  <p className="text-xs text-gray-500">{session.user?.email}</p>
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: '/admin/login' })}
                  className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Salir
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Bienvenido de vuelta, {session.user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-600">
            Gestiona tu contenido y configuración desde aquí
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Acciones Rápidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                href={action.href}
                className={`${action.color} text-white rounded-lg p-6 hover:opacity-90 transition-opacity`}
              >
                <div className="text-3xl mb-2">{action.icon}</div>
                <div className="font-bold">{action.name}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Actividad Reciente</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Sistema iniciado correctamente</p>
                <p className="text-sm text-gray-500">Panel de administración listo para usar</p>
              </div>
              <span className="text-sm text-gray-500">Ahora</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
