'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';
import ImageGalleryPicker from '@/components/ImageGalleryPicker';
import Select from 'react-select';

interface Banner {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  image: string;
  bgColor: string;
  textColor: string;
  order: number;
  isActive: boolean;
  isSticky: boolean;
  visibility: string;
  targetCategory: string;
  targetSlug: string;
  createdAt: string | Date;
}

// Función para formatear fecha en hora de Chile
const formatChileDate = (date: string | Date) => {
  const d = new Date(date);
  return d.toLocaleString('es-CL', {
    timeZone: 'America/Santiago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export default function SidebarBannersPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [banners, setBanners] = useState<Banner[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState<Partial<Banner>>({
    title: '',
    description: '',
    buttonText: 'Ver más',
    link: '',
    image: '',
    bgColor: '#10B981',
    textColor: '#ffffff',
    order: 0,
    isActive: true,
    isSticky: false,
    visibility: 'global',
    targetCategory: '',
    targetSlug: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login');
  }, [status, router]);

  useEffect(() => {
    if (status === 'authenticated') {
      fetchBanners();
      fetchCategories();
    }
  }, [status]);

  const fetchBanners = async () => {
    try {
      const res = await fetch('/api/sidebar-banners');
      const data = await res.json();
      if (Array.isArray(data)) {
        setBanners(data);
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error fetching banners:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/categories');
      const data = await res.json();
      if (Array.isArray(data)) {
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const method = editingBanner ? 'PUT' : 'POST';
      const url = editingBanner
        ? `/api/sidebar-banners/${editingBanner.id}`
        : '/api/sidebar-banners';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        fetchBanners();
        setShowForm(false);
        setEditingBanner(null);
        setFormData({
          title: '',
          description: '',
          buttonText: 'Ver más',
          link: '',
          image: '',
          bgColor: '#10B981',
          textColor: '#ffffff',
          order: 0,
          isActive: true,
          isSticky: false,
          visibility: 'global',
          targetCategory: '',
          targetSlug: '',
        });
      } else {
        // Manejar error
        if (data.code === 'TABLE_NOT_EXISTS') {
          setErrorMessage(
            '⚠️ La tabla de banners no existe. Ejecuta la migración:\n\n' +
            'OPCIÓN 1 - Script automático (recomendado):\n' +
            '  PowerShell: .\\migrate-production.ps1\n' +
            '  Bash: bash migrate-production.sh\n\n' +
            'OPCIÓN 2 - Manual:\n' +
            '  1. ssh root@167.233.42.85\n' +
            '  2. docker ps  # Buscar CONTAINER_ID\n' +
            '  3. docker exec -it CONTAINER_ID bash\n' +
            '  4. npx prisma migrate deploy\n' +
            '  5. npx prisma generate'
          );
        } else {
          setErrorMessage(data.error || 'Error al guardar banner');
        }
      }
    } catch (error) {
      console.error('Error saving banner:', error);
      setErrorMessage('Error de conexión. Intenta de nuevo.');
    }
  };

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
    setFormData({
      ...banner,
      visibility: banner.visibility || 'global',
      targetCategory: banner.targetCategory || '',
      targetSlug: banner.targetSlug || '',
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Eliminar este banner?')) return;

    try {
      const res = await fetch(`/api/sidebar-banners/${id}`, { method: 'DELETE' });
      if (res.ok) fetchBanners();
    } catch (error) {
      console.error('Error deleting banner:', error);
    }
  };

  const handleClone = async (banner: Banner) => {
    const clonedData = {
      ...banner,
      title: `${banner.title} (Copia)`,
      order: banner.order + 1,
    };
    delete (clonedData as any).id;
    delete (clonedData as any).createdAt;
    delete (clonedData as any).updatedAt;

    try {
      const res = await fetch('/api/sidebar-banners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clonedData),
      });

      if (res.ok) {
        fetchBanners();
        alert('Banner clonado exitosamente');
      } else {
        const data = await res.json();
        alert(data.error || 'Error al clonar banner');
      }
    } catch (error) {
      console.error('Error cloning banner:', error);
      alert('Error al clonar banner');
    }
  };

  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <Logo className="w-9 h-9" />
              <div>
                <span className="text-lg font-bold" style={{ color: '#064E38' }}>Divisa</span>
                <span className="text-lg font-bold" style={{ color: '#F59E0B' }}>Chile</span>
              </div>
            </Link>
            <Link href="/admin/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
              ← Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">📌 Banners Laterales</h1>
            <p className="text-gray-500 mt-1 text-sm">Gestiona los banners de afiliados y extensión</p>
          </div>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingBanner(null);
              setFormData({
                title: '',
                description: '',
                buttonText: 'Ver más',
                link: '',
                image: '',
                bgColor: '#10B981',
                textColor: '#ffffff',
                order: 0,
                isActive: true,
                isSticky: false,
                visibility: 'global',
                targetCategory: '',
                targetSlug: '',
              });
            }}
            className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            {showForm ? '✕ Cancelar' : '+ Nuevo Banner'}
          </button>
        </div>

        {/* Formulario */}
        {showForm && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {editingBanner ? 'Editar Banner' : 'Nuevo Banner'}
            </h2>

            {errorMessage && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 text-lg">⚠️</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-red-800 mb-1">Error</p>
                    <pre className="text-xs text-red-700 whitespace-pre-wrap font-mono bg-red-100 p-2 rounded">
                      {errorMessage}
                    </pre>
                  </div>
                  <button
                    type="button"
                    onClick={() => setErrorMessage('')}
                    className="text-red-400 hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Extensión DivisaChile"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Texto del Botón</label>
                <input
                  type="text"
                  value={formData.buttonText}
                  onChange={e => setFormData({ ...formData, buttonText: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Descargar Gratis"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                <textarea
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={2}
                  placeholder="Acceso instantáneo a valores de divisas"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Enlace (URL) *</label>
                <input
                  type="url"
                  required
                  value={formData.link}
                  onChange={e => setFormData({ ...formData, link: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="https://ejemplo.com"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Imagen del Banner (opcional)
                </label>
                <ImageGalleryPicker
                  currentImage={formData.image}
                  onSelect={(imageData) => setFormData({ ...formData, image: imageData })}
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Color de Fondo</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={formData.bgColor}
                    onChange={e => setFormData({ ...formData, bgColor: e.target.value })}
                    className="w-12 h-10 rounded border border-gray-300"
                  />
                  <input
                    type="text"
                    value={formData.bgColor}
                    onChange={e => setFormData({ ...formData, bgColor: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="#10B981"
                  />
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Color de Texto</label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={formData.textColor}
                    onChange={e => setFormData({ ...formData, textColor: e.target.value })}
                    className="w-12 h-10 rounded border border-gray-300"
                  />
                  <input
                    type="text"
                    value={formData.textColor}
                    onChange={e => setFormData({ ...formData, textColor: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="#ffffff"
                  />
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Orden</label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={e => setFormData({ ...formData, order: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="col-span-2 grid grid-cols-2 gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={e => setFormData({ ...formData, isActive: e.target.checked })}
                    className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Activo</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.isSticky}
                    onChange={e => setFormData({ ...formData, isSticky: e.target.checked })}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">📌 Fijar (Sticky)</span>
                </label>
              </div>

              {/* Visibilidad */}
              <div className="col-span-2 border-t pt-4">
                <h3 className="font-bold text-gray-800 mb-3">📍 Dónde mostrar este banner</h3>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de visibilidad
                    </label>
                    <select
                      value={formData.visibility}
                      onChange={e => setFormData({
                        ...formData,
                        visibility: e.target.value,
                        targetCategory: '',
                        targetSlug: ''
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="global">🌍 Global - Todas las páginas</option>
                      <option value="category">📁 Por Categoría - Solo artículos de una categoría</option>
                      <option value="article">📄 Artículo Específico - Solo un artículo</option>
                      <option value="page">📋 Página Específica - Solo una página</option>
                    </select>
                  </div>

                  {/* Select condicional para categoría */}
                  {formData.visibility === 'category' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Categoría objetivo
                      </label>
                      <Select
                        value={formData.targetCategory ? { value: formData.targetCategory, label: formData.targetCategory } : null}
                        onChange={(option) => setFormData({ ...formData, targetCategory: option?.value || '' })}
                        options={categories.map(cat => ({ value: cat, label: cat }))}
                        placeholder="Selecciona una categoría..."
                        isClearable
                        className="react-select-container"
                        classNamePrefix="react-select"
                        styles={{
                          control: (base) => ({
                            ...base,
                            minHeight: '42px',
                            borderRadius: '0.5rem',
                            borderColor: '#d1d5db',
                            '&:hover': {
                              borderColor: '#10B981',
                            },
                          }),
                          menu: (base) => ({
                            ...base,
                            zIndex: 50,
                          }),
                        }}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Selecciona la categoría donde se mostrará este banner
                      </p>
                    </div>
                  )}

                  {/* Input condicional para artículo específico */}
                  {formData.visibility === 'article' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Slug del artículo
                      </label>
                      <input
                        type="text"
                        value={formData.targetSlug}
                        onChange={e => setFormData({ ...formData, targetSlug: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Ej: como-comprar-dolares"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        El slug es la parte final de la URL del artículo
                      </p>
                    </div>
                  )}

                  {/* Input condicional para página específica */}
                  {formData.visibility === 'page' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Slug de la página
                      </label>
                      <input
                        type="text"
                        value={formData.targetSlug}
                        onChange={e => setFormData({ ...formData, targetSlug: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Ej: contacto, sobre-nosotros"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        El slug es la parte final de la URL de la página
                      </p>
                    </div>
                  )}

                  {/* Ayuda visual */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      <strong>💡 Tip:</strong>{' '}
                      {formData.visibility === 'global' && 'Este banner aparecerá en todas las páginas del sitio.'}
                      {formData.visibility === 'category' && 'Este banner solo se mostrará en artículos que pertenezcan a la categoría especificada.'}
                      {formData.visibility === 'article' && 'Este banner solo aparecerá en el artículo específico que indiques.'}
                      {formData.visibility === 'page' && 'Este banner solo se mostrará en la página específica que indiques.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  {editingBanner ? '💾 Guardar Cambios' : '➕ Crear Banner'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Lista de Banners */}
        <div className="grid gap-4">
          {banners.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500">No hay banners creados todavía</p>
            </div>
          ) : (
            banners.map(banner => (
              <div key={banner.id} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center gap-4">
                  {/* Preview compacto */}
                  <div className="flex-1 flex items-center gap-4">
                    {/* Imagen miniatura */}
                    {banner.image && (
                      <img
                        src={banner.image}
                        alt={banner.title}
                        className="w-20 h-20 object-cover rounded-lg border-2"
                        style={{ borderColor: banner.bgColor }}
                      />
                    )}

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-lg">{banner.title}</h4>
                        {banner.isSticky && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">
                            📌 Fijado
                          </span>
                        )}
                        {banner.isActive ? (
                          <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                            ✓ Activo
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full">
                            ✕ Inactivo
                          </span>
                        )}
                        <span className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">
                          {banner.visibility === 'global' && '🌍 Global'}
                          {banner.visibility === 'category' && `📁 ${banner.targetCategory}`}
                          {banner.visibility === 'article' && `📄 ${banner.targetSlug}`}
                          {banner.visibility === 'page' && `📋 ${banner.targetSlug}`}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-1">{banner.description}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="truncate max-w-xs">🔗 {banner.link}</span>
                        <span>📊 Orden: {banner.order}</span>
                        <span>📅 {formatChileDate(banner.createdAt)}</span>
                        <span
                          className="px-2 py-0.5 rounded"
                          style={{ backgroundColor: banner.bgColor, color: banner.textColor }}
                        >
                          {banner.buttonText}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(banner)}
                      className="px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Editar"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleClone(banner)}
                      className="px-3 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                      title="Clonar"
                    >
                      📋
                    </button>
                    <button
                      onClick={() => handleDelete(banner.id)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Eliminar"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
