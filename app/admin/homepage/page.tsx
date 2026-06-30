'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getHomepageSettings, saveHomepageSettings, HomepageSettings } from '@/lib/homepageSettings';
import Logo from '@/components/Logo';

const ALL_CATEGORIES = ['Divisas', 'Guías', 'Criptomonedas', 'Indicadores', 'Noticias'];

export default function HomepageManagerPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [settings, setSettings] = useState<HomepageSettings>({
    maxArticles: 6,
    categories: [],
    displayMode: 'grid',
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login');
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') setSettings(getHomepageSettings());
  }, [status]);

  const handleSave = () => {
    saveHomepageSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const toggleCategory = (cat: string) => {
    setSettings(prev => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter(c => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (!session) return null;

  const categoryColors: Record<string, string> = {
    Divisas: 'bg-blue-100 text-blue-800 border-blue-300',
    Guías: 'bg-purple-100 text-purple-800 border-purple-300',
    Criptomonedas: 'bg-orange-100 text-orange-800 border-orange-300',
    Indicadores: 'bg-green-100 text-green-800 border-green-300',
    Noticias: 'bg-red-100 text-red-800 border-red-300',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <Logo className="w-9 h-9" />
              <div>
                <span className="text-lg font-bold" style={{ color: '#064E38' }}>Divisa</span>
                <span className="text-lg font-bold" style={{ color: '#F59E0B' }}>Chile</span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
                ← Dashboard
              </Link>
              <Link href="/" target="_blank" className="text-sm text-blue-600 hover:underline">
                Ver inicio ↗
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">🏠 Mantenedor del Inicio</h1>
          <p className="text-gray-500 mt-1 text-sm">Controla qué artículos y cómo se muestran en la página de inicio.</p>
        </div>

        <div className="grid gap-6">

          {/* Cantidad de artículos */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-1">Artículos a mostrar</h2>
            <p className="text-sm text-gray-500 mb-5">Cuántos artículos aparecen en el inicio.</p>
            <div className="flex items-center gap-5">
              <input
                type="range"
                min={1}
                max={20}
                value={settings.maxArticles}
                onChange={e => setSettings(prev => ({ ...prev, maxArticles: Number(e.target.value) }))}
                className="flex-1 h-2 accent-green-600"
              />
              <span className="text-3xl font-bold text-green-600 w-10 text-center">{settings.maxArticles}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1</span>
              <span>20</span>
            </div>
          </div>

          {/* Modo de visualización */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-1">Modo de visualización</h2>
            <p className="text-sm text-gray-500 mb-5">Elige cómo se organizan los artículos en el inicio.</p>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setSettings(prev => ({ ...prev, displayMode: 'grid' }))}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  settings.displayMode === 'grid'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">⊞</div>
                <div className="font-medium text-gray-900">Grid unificado</div>
                <div className="text-xs text-gray-500 mt-1">Todos los artículos en una grilla, del más reciente al más antiguo.</div>
              </button>
              <button
                type="button"
                onClick={() => setSettings(prev => ({ ...prev, displayMode: 'cluster' }))}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  settings.displayMode === 'cluster'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl mb-2">☰</div>
                <div className="font-medium text-gray-900">Por categoría (Cluster)</div>
                <div className="text-xs text-gray-500 mt-1">Artículos agrupados por categoría, cada una con su propio título de sección.</div>
              </button>
            </div>
          </div>

          {/* Filtro de categorías */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-1">Filtro de categorías</h2>
            <p className="text-sm text-gray-500 mb-5">
              Selecciona las categorías a mostrar.{' '}
              <span className="font-medium text-gray-700">
                {settings.categories.length === 0
                  ? 'Mostrando todas las categorías.'
                  : `Mostrando: ${settings.categories.join(', ')}.`}
              </span>
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {ALL_CATEGORIES.map(cat => {
                const active = settings.categories.includes(cat);
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                      active
                        ? categoryColors[cat] + ' border-current'
                        : 'bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {active ? '✓ ' : ''}{cat}
                  </button>
                );
              })}
            </div>
            {settings.categories.length > 0 && (
              <button
                type="button"
                onClick={() => setSettings(prev => ({ ...prev, categories: [] }))}
                className="text-xs text-red-500 hover:text-red-700 underline"
              >
                Limpiar selección (mostrar todas)
              </button>
            )}
          </div>

          {/* Resumen */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-semibold text-green-800 mb-2">Resumen de configuración</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• <strong>{settings.maxArticles}</strong> artículos en el inicio</li>
              <li>• Modo: <strong>{settings.displayMode === 'grid' ? 'Grid unificado' : 'Por categoría (Cluster)'}</strong></li>
              <li>• Categorías: <strong>{settings.categories.length === 0 ? 'Todas' : settings.categories.join(', ')}</strong></li>
            </ul>
          </div>

          {/* Guardar */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleSave}
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
            >
              💾 Guardar configuración
            </button>
            {saved && (
              <span className="text-green-600 font-medium text-sm flex items-center gap-1.5">
                ✅ Guardado correctamente
              </span>
            )}
            <Link
              href="/"
              target="_blank"
              className="text-sm text-blue-600 hover:underline ml-auto"
            >
              Ver resultado en el inicio ↗
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
