'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import ClassicEditor from '@/components/ClassicEditor';
import AlmaSEO from '@/components/AlmaSEO';

type AutoSaveStatus = 'idle' | 'saving' | 'saved' | 'error';

export default function NewArticlePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [postType, setPostType] = useState<'entrada' | 'pagina'>('entrada');
  const metaSyncedRef = useRef(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Marketing Digital',
    tags: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    author: 'Equipo AlmaMedia',
    featuredImage: '',
    featuredImageAlt: '',
    status: 'published' as 'published' | 'draft',
  });

  const [showPreview, setShowPreview] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishError, setPublishError] = useState('');

  // Auto-save state
  const [autoSaveStatus, setAutoSaveStatus] = useState<AutoSaveStatus>('idle');
  const [autoSavedAt, setAutoSavedAt] = useState('');
  const autoSavedIdRef = useRef<string | null>(null);
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login');
  }, [status, router]);

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && !formData.slug) {
      const slug = formData.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, formData.slug]);

  // Auto-sync excerpt → metaDescription (once)
  useEffect(() => {
    if (!metaSyncedRef.current && formData.excerpt && !formData.metaDescription) {
      setFormData(prev => ({ ...prev, metaDescription: formData.excerpt }));
      metaSyncedRef.current = true;
    }
  }, [formData.excerpt, formData.metaDescription]);

  // Auto-save (debounced 2 s)
  useEffect(() => {
    console.log('👀 useEffect auto-save triggered. Title:', formData.title);

    if (!formData.title || formData.title.trim().length === 0) {
      console.log('⚠️ No hay título, auto-save cancelado');
      return;
    }

    if (autoSaveTimerRef.current) {
      console.log('⏱️ Limpiando timer anterior');
      clearTimeout(autoSaveTimerRef.current);
    }

    setAutoSaveStatus('idle');

    autoSaveTimerRef.current = setTimeout(async () => {
      console.log('🔄 Auto-save iniciado... Título:', formData.title);
      setAutoSaveStatus('saving');
      try {
        // Build slug inline in case the slug useEffect hasn't fired yet
        const slug = formData.slug || formData.title.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

        const payload = {
          title: formData.title,
          slug,
          content: formData.content,
          excerpt: formData.excerpt,
          metaTitle: formData.metaTitle,
          metaDescription: formData.metaDescription,
          metaKeywords: formData.metaKeywords,
          author: formData.author,
          status: 'draft' as const,
          // Campos opcionales de LandingPage
          badge: '',
          heroTitle: formData.title,
          heroSubtitle: formData.excerpt || '',
        };

        console.log('📦 Payload:', payload);

        let res: Response;
        if (autoSavedIdRef.current) {
          console.log('📝 Actualizando página existente:', autoSavedIdRef.current);
          res = await fetch(`/api/landing-pages/${autoSavedIdRef.current}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
        } else {
          console.log('✨ Creando nueva página...');
          res = await fetch('/api/landing-pages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
          if (res.ok) {
            const created = await res.json();
            autoSavedIdRef.current = created.id;
            console.log('✅ Página creada con ID:', created.id);
            window.history.replaceState({}, '', `/admin/pages/${created.id}/edit`);
          }
        }

        if (res.ok) {
          console.log('✅ Auto-save exitoso');
          setAutoSaveStatus('saved');
          setAutoSavedAt(new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' }));
          // Volver a idle después de 1 segundo
          setTimeout(() => setAutoSaveStatus('idle'), 1000);
        } else {
          const errorData = await res.json().catch(() => ({}));
          console.error('❌ Auto-save falló:', res.status, errorData);
          setAutoSaveStatus('error');
        }
      } catch (error) {
        console.error('❌ Auto-save error:', error);
        setAutoSaveStatus('error');
      }
    }, 2000);
  }, [formData]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => { if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current); };
  }, []);

  const buildSlug = (title: string) =>
    title.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    setIsPublishing(true);
    setPublishError('');
    try {
      const tags = formData.tags.split(',').map(t => t.trim()).filter(Boolean);
      const slug = formData.slug || buildSlug(formData.title);
      const payload = { ...formData, slug, status: 'published' as const, tags };
      let res: Response;
      if (autoSavedIdRef.current) {
        res = await fetch(`/api/landing-pages/${autoSavedIdRef.current}`, {
          method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
        });
      } else {
        res = await fetch('/api/landing-pages', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
        });
      }
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setPublishError(err.error || `Error ${res.status}`);
        return;
      }
      router.push('/admin/pages');
    } catch {
      setPublishError('Error de conexión al servidor');
    } finally {
      setIsPublishing(false);
    }
  };

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
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
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
              {/* Auto-save indicator */}
              {autoSaveStatus === 'saving' && (
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <svg className="animate-spin w-3 h-3" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Guardando...
                </span>
              )}
              {autoSaveStatus === 'saved' && (
                <span className="text-xs text-green-600 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                  </svg>
                  Guardado
                </span>
              )}
              {autoSaveStatus === 'error' && (
                <span className="text-xs text-red-500">⚠ Error al guardar</span>
              )}
              <Link href="/admin/pages" className="text-sm text-gray-600 hover:text-gray-900">
                ← Volver a artículos
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main content + Alma SEO sidebar */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        <main className="flex-1 px-6 py-8 min-w-0">

          {/* Post type selector */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Nuevo Artículo</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600">Tipo:</span>
              <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setPostType('entrada')}
                  className={`px-5 py-2 text-sm font-medium transition-colors ${
                    postType === 'entrada' ? 'bg-[#3858e9] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  📰 Entrada
                </button>
                <button
                  type="button"
                  onClick={() => setPostType('pagina')}
                  className={`px-5 py-2 text-sm font-medium transition-colors border-l border-gray-300 ${
                    postType === 'pagina' ? 'bg-[#3858e9] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  📄 Página
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 items-start">

              {/* Editor column — fills available space like WP */}
              <div className="flex-1 min-w-0 space-y-3">

                {/* Title */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-0 py-1 border-0 focus:ring-0 font-semibold text-xl text-gray-900 placeholder-gray-300 outline-none"
                    placeholder="Escribe un título"
                    required
                  />
                  {/* Permalink */}
                  {formData.slug && (
                    <div className="flex items-center gap-1 mt-1.5 pt-1.5 border-t border-gray-100">
                      <span className="text-xs text-gray-400">Permalink:</span>
                      <span className="text-xs text-gray-400">divisachile.cl/</span>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        className="text-xs border-0 border-b border-dashed border-gray-300 focus:border-green-500 outline-none px-0 text-gray-600 bg-transparent min-w-0 flex-1"
                      />
                    </div>
                  )}
                </div>

                {/* Editor */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <ClassicEditor
                    initialValue={formData.content}
                    onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                  />
                  {(() => {
                    const words = formData.content.replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).filter(Boolean).length;
                    return (
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-400">Editor visual — HTML</p>
                        <p className={`text-xs font-medium ${
                          words === 0 ? 'text-gray-400' : words < 600 ? 'text-red-500' : words < 1000 ? 'text-yellow-500' : 'text-green-600'
                        }`}>
                          {words.toLocaleString('es-CL')} palabras
                          {words > 0 && words < 600 && ' — muy corto'}
                          {words >= 600 && words < 1000 && ' — aceptable'}
                          {words >= 1000 && ' — excelente'}
                        </p>
                      </div>
                    );
                  })()}
                </div>

              </div>

              {/* Right sidebar: publish + meta */}
              <div className="w-64 sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm">

                {/* Publish actions */}
                <div className="p-3 border-b border-gray-200 space-y-2">
                  {/* Auto-save status indicator */}
                  <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium ${
                    autoSaveStatus === 'saving' ? 'bg-blue-50 border-blue-200 text-blue-700' :
                    autoSaveStatus === 'saved' ? 'bg-green-50 border-green-200 text-green-700' :
                    autoSaveStatus === 'error' ? 'bg-red-50 border-red-200 text-red-700' :
                    'bg-gray-50 border-gray-200 text-gray-500'
                  }`}>
                    {autoSaveStatus === 'saving' && <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>}
                    {autoSaveStatus === 'saved' && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>}
                    {autoSaveStatus === 'error' && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>}
                    {autoSaveStatus === 'idle' && <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14"/></svg>}
                    <span>
                      {autoSaveStatus === 'saving' ? 'Guardando borrador...' :
                       autoSaveStatus === 'saved' ? `Borrador guardado${autoSavedAt ? ` a las ${autoSavedAt}` : ''}` :
                       autoSaveStatus === 'error' ? 'Error al guardar' :
                       'Borrador no guardado'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPreview(true)}
                    className="w-full px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors border border-gray-300"
                  >
                    👁 Previsualizar
                  </button>
                  {publishError && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded px-2 py-1">{publishError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isPublishing}
                    className="w-full px-3 py-2 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isPublishing ? 'Publicando...' : '✓ Publicar'}
                  </button>
                </div>

                {/* Featured image */}
                <div className="p-3 border-b border-gray-200">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">🖼️ Imagen Destacada</h3>
                  {formData.featuredImage && (
                    <div className="relative mb-2">
                      <img
                        src={formData.featuredImage}
                        alt={formData.featuredImageAlt || 'Preview'}
                        className="w-full h-28 object-cover rounded-lg border border-gray-200"
                        onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, featuredImage: '', featuredImageAlt: '' }))}
                        className="absolute top-1 right-1 bg-red-600 text-white rounded px-1.5 py-0.5 text-xs hover:bg-red-700"
                      >✕</button>
                    </div>
                  )}
                  <input
                    type="url"
                    value={formData.featuredImage}
                    onChange={e => setFormData(prev => ({ ...prev, featuredImage: e.target.value }))}
                    placeholder="https://imagen.com/foto.jpg"
                    className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 outline-none mb-1.5"
                  />
                  <label className="flex items-center justify-center gap-1.5 w-full px-2 py-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg text-xs text-gray-700 cursor-pointer transition-colors mb-1.5">
                    📁 Subir desde equipo
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        if (file.size > 3 * 1024 * 1024) { alert('La imagen debe ser menor a 3MB'); return; }
                        const reader = new FileReader();
                        reader.onload = ev => setFormData(prev => ({ ...prev, featuredImage: ev.target?.result as string }));
                        reader.readAsDataURL(file);
                      }}
                    />
                  </label>
                  <input
                    type="text"
                    value={formData.featuredImageAlt}
                    onChange={e => setFormData(prev => ({ ...prev, featuredImageAlt: e.target.value }))}
                    placeholder="Alt text (para SEO)"
                    className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 outline-none"
                  />
                </div>

                {/* Category */}
                {postType === 'entrada' && (
                  <div className="p-3 border-b border-gray-200">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Categoría *</h3>
                    <select
                      value={formData.category}
                      onChange={e => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-yellow-500 outline-none"
                      required
                    >
                      <option value="Marketing Digital">Marketing Digital</option>
                      <option value="Diseño Web">Diseño Web</option>
                      <option value="SEO">SEO</option>
                      <option value="Contenido Visual">Contenido Visual</option>
                      <option value="Noticias">Noticias</option>
                      <option value="Tutoriales">Tutoriales</option>
                    </select>
                  </div>
                )}

                {/* Excerpt */}
                <div className="p-3 border-b border-gray-200">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Extracto</h3>
                  <textarea
                    value={formData.excerpt}
                    onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Resumen breve del artículo..."
                    rows={3}
                    className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 outline-none resize-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">Se usa en listados y meta description</p>
                </div>

                {/* Author */}
                <div className="p-3 border-b border-gray-200">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Autor</h3>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={e => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 outline-none"
                  />
                </div>

                {/* Tags */}
                <div className="p-3">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Etiquetas</h3>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={e => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="dólar, cambio, chile, uf"
                    className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">Separadas por comas</p>
                </div>

              </div>
            </div>

            <div className="flex items-center justify-start pt-6 border-t border-gray-200 mt-6">
              <Link href="/admin/pages" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                ← Cancelar
              </Link>
            </div>
          </form>
        </main>

        {/* Alma SEO Sidebar */}
        <AlmaSEO
          metaTitle={formData.metaTitle}
          metaDescription={formData.metaDescription}
          metaKeywords={formData.metaKeywords}
          articleTitle={formData.title}
          articleSlug={formData.slug}
          articleContent={formData.content}
          articleExcerpt={formData.excerpt}
          featuredImage={formData.featuredImage}
          featuredImageAlt={formData.featuredImageAlt}
          onChange={(field, value) => setFormData(prev => ({ ...prev, [field]: value }))}
        />
      </div>

      {/* Preview modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl my-8">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">👁 Previsualización</h2>
              <button onClick={() => setShowPreview(false)} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
            </div>
            <div className="px-8 py-6">
              {formData.category && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4" style={{ backgroundColor: '#064E38' }}>
                  {formData.category}
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
                {formData.title || <span className="text-gray-400 italic">Sin título</span>}
              </h1>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                <span>{formData.author}</span>
                {formData.category && <><span>•</span><span>{formData.category}</span></>}
              </div>
              {formData.featuredImage && (
                <img src={formData.featuredImage} alt={formData.featuredImageAlt || formData.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              )}
              {formData.excerpt && (
                <p className="text-gray-600 text-lg italic border-l-4 pl-4 mb-6" style={{ borderColor: '#064E38' }}>
                  {formData.excerpt}
                </p>
              )}
              {formData.content ? (
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-green-700" dangerouslySetInnerHTML={{ __html: formData.content }} />
              ) : (
                <p className="text-gray-400 italic text-center py-12">Sin contenido aún</p>
              )}
            </div>
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
              <button onClick={() => setShowPreview(false)} className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300">
                Cerrar
              </button>
              <button
                onClick={() => { setShowPreview(false); handleSubmit(new Event('submit') as unknown as React.FormEvent); }}
                disabled={isPublishing}
                className="px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-60"
              >
                {isPublishing ? 'Publicando...' : '✓ Publicar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
