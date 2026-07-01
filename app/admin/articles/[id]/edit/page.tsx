'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import ClassicEditor, { SelectedImageAttrs } from '@/components/ClassicEditor';
import AlmaSEO from '@/components/AlmaSEO';
import { sanitizeHtml } from '@/lib/sanitize';
import { mockArticles } from '@/data/mockArticles';

type AutoSaveStatus = 'idle' | 'saving' | 'saved' | 'error';

export default function EditArticlePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [postType, setPostType] = useState<'entrada' | 'pagina'>('entrada');
  const [notFound, setNotFound] = useState(false);
  const [isMockArticle, setIsMockArticle] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishError, setPublishError] = useState('');
  const [autoSavedAt, setAutoSavedAt] = useState('');
  const hasInitialized = useRef(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImageAttrs | null>(null);
  const [pendingImageUpdate, setPendingImageUpdate] = useState<{ alt: string; title: string } | null>(null);
  const [seoImageAlt, setSeoImageAlt] = useState('');
  const [seoImageTitle, setSeoImageTitle] = useState('');

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

  // Auto-save state
  const [autoSaveStatus, setAutoSaveStatus] = useState<AutoSaveStatus>('idle');
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(false);
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSavingRef = useRef(false);
  const pendingSaveRef = useRef(false);
  const formDataRef = useRef(formData);
  const isMountedRef = useRef(true);

  // Image editor state
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [imageToEdit, setImageToEdit] = useState<string>('');
  const [imageScale, setImageScale] = useState({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const imageEditorRef = useRef<HTMLDivElement>(null);

  // Helper function - defined before useEffects
  const buildSlug = (title: string) =>
    title.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  // Convert image to WebP
  const convertToWebP = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('No se pudo obtener el contexto del canvas'));
            return;
          }
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Error al convertir imagen'));
                return;
              }
              const reader2 = new FileReader();
              reader2.onload = () => resolve(reader2.result as string);
              reader2.onerror = reject;
              reader2.readAsDataURL(blob);
            },
            'image/webp',
            0.85 // Calidad 85%
          );
        };
        img.onerror = reject;
        img.src = e.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Handle file upload with WebP conversion
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert('La imagen debe ser menor a 10MB');
      return;
    }

    try {
      const webpDataUrl = await convertToWebP(file);
      setFormData(prev => ({ ...prev, featuredImage: webpDataUrl }));
    } catch (error) {
      console.error('Error converting image:', error);
      alert('Error al procesar la imagen');
    }
  };

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login');
  }, [status, router]);

  useEffect(() => {
    if (status !== 'authenticated') return;
    async function loadArticle() {
      const res = await fetch(`/api/articles/${id}`);
      if (res.ok) {
        const stored = await res.json();
        setFormData({
          title: stored.title, slug: stored.slug, excerpt: stored.excerpt ?? '',
          content: stored.content, category: stored.category,
          tags: (stored.tags ?? []).join(', '), metaTitle: stored.metaTitle ?? '',
          metaDescription: stored.metaDescription ?? '', metaKeywords: stored.metaKeywords ?? '',
          author: stored.author, featuredImage: stored.featuredImage ?? '',
          featuredImageAlt: stored.featuredImageAlt ?? '', status: stored.status,
        });
        setTimeout(() => setAutoSaveEnabled(true), 800);
        return;
      }

      // Fallback: mock articles
      const mock = mockArticles.find(a => a.id === id);
      if (mock) {
        setIsMockArticle(true);
        setFormData({
          title: mock.title, slug: mock.slug, excerpt: mock.excerpt,
          content: mock.content ?? '', category: mock.category,
          tags: (mock.tags ?? []).join(', '), metaTitle: '',
          metaDescription: mock.excerpt, metaKeywords: (mock.tags ?? []).join(', '),
          author: mock.author, featuredImage: '', featuredImageAlt: '', status: 'published',
        });
        return;
      }

      setNotFound(true);
    }
    loadArticle();
  }, [id, status]);

  useEffect(() => {
    if (selectedImage) {
      setSeoImageAlt(selectedImage.alt);
      setSeoImageTitle(selectedImage.title);
    }
  }, [selectedImage]);

  // Sync formDataRef with latest state so unmount cleanup can access it
  useEffect(() => { formDataRef.current = formData; }, [formData]);

  // Auto-sync excerpt → metaDescription (once on load)
  useEffect(() => {
    if (!hasInitialized.current && formData.excerpt && !formData.metaDescription) {
      setFormData(prev => ({ ...prev, metaDescription: formData.excerpt }));
      hasInitialized.current = true;
    }
  }, [formData.excerpt, formData.metaDescription]);

  // Auto-save: debounce 2s tras el último cambio en formData
  useEffect(() => {
    if (!autoSaveEnabled || !formData.title || isMockArticle) return;
    if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    pendingSaveRef.current = true;

    autoSaveTimerRef.current = setTimeout(async () => {
      if (isSavingRef.current) return;
      isSavingRef.current = true;
      pendingSaveRef.current = false;
      if (isMountedRef.current) setAutoSaveStatus('saving');
      try {
        const tags = formData.tags.split(',').map(t => t.trim()).filter(Boolean);
        const slug = formData.slug || buildSlug(formData.title);
        const res = await fetch(`/api/articles/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, slug, tags }),
        });
        if (res.ok) {
          if (isMountedRef.current) {
            setAutoSaveStatus('saved');
            setAutoSavedAt(new Date().toLocaleString('es-CL', {
                    day: '2-digit', month: '2-digit',
                    hour: '2-digit', minute: '2-digit', hour12: false,
                  }));
          }
        } else {
          if (isMountedRef.current) setAutoSaveStatus('error');
        }
      } catch {
        if (isMountedRef.current) setAutoSaveStatus('error');
      } finally {
        isSavingRef.current = false;
      }
    }, 2000);
  }, [formData, id, isMockArticle, autoSaveEnabled]);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
      // Flush pending save when navigating away.
      // No bloqueamos si hay un save en curso (isSavingRef) porque ese save
      // puede tener contenido anterior (sin imagen). Enviamos igualmente para
      // que el último write (con imagen) gane en la base de datos.
      if (pendingSaveRef.current) {
        const data = formDataRef.current;
        if (data.title) {
          const tags = data.tags.split(',').map(t => t.trim()).filter(Boolean);
          const slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          // Sin keepalive: soporta payloads grandes (imágenes base64).
          // Funciona en navegación cliente porque el tab sigue abierto.
          fetch(`/api/articles/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, slug, tags }),
          }).catch(() => {});
        }
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    setIsPublishing(true);
    setPublishError('');
    try {
      const tags = formData.tags.split(',').map(t => t.trim()).filter(Boolean);
      const slug = formData.slug || buildSlug(formData.title);
      const data = { ...formData, slug, status: 'published' as const, tags };
      const method = isMockArticle ? 'POST' : 'PUT';
      const url = isMockArticle ? '/api/articles' : `/api/articles/${id}`;
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setPublishError(err.error || `Error ${res.status}`);
        return;
      }
      router.push('/admin/articles');
    } catch {
      setPublishError('Error de conexión al servidor');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleSidebarChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

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

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 mb-2">Artículo no encontrado</p>
          <p className="text-gray-500 mb-6">Este artículo no existe o fue eliminado.</p>
          <Link href="/admin/articles" className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
            ← Volver a artículos
          </Link>
        </div>
      </div>
    );
  }

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
            </div>
          </div>
        </div>
      </header>

      {/* Main content + Alma SEO sidebar */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        <main className="flex-1 px-6 py-8 min-w-0">

          {/* Post type selector */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Editar Artículo</h1>
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

          {isMockArticle && (
            <div className="mb-4 px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
              <strong>Artículo de ejemplo.</strong> Los cambios se guardarán como una nueva entrada en tu lista.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 items-start">

              {/* Editor column — fills available space */}
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
                    onHtmlImport={(data) => setFormData(prev => ({
                      ...prev,
                      content: data.content,
                      ...(data.title && !prev.title && { title: data.title }),
                      ...(data.excerpt && { excerpt: data.excerpt }),
                      ...(data.metaTitle && { metaTitle: data.metaTitle }),
                      ...(data.metaDescription && { metaDescription: data.metaDescription }),
                      ...(data.metaKeywords && { metaKeywords: data.metaKeywords }),
                      ...(data.featuredImage && { featuredImage: data.featuredImage }),
                      ...(data.featuredImageAlt && { featuredImageAlt: data.featuredImageAlt }),
                    }))}
                    onImageSelect={setSelectedImage}
                    pendingImageUpdate={pendingImageUpdate}
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
                       autoSaveStatus === 'saved' ? `Borrador guardado${autoSavedAt ? ` ${autoSavedAt}` : ''}` :
                       autoSaveStatus === 'error' ? 'Error al guardar' :
                       'Auto guardado'}
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
                    {isPublishing
                      ? (formData.status === 'draft' ? 'Publicando...' : 'Actualizando...')
                      : (formData.status === 'draft' ? '✓ Publicar' : '✓ Actualizar')}
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
                    📁 Subir desde equipo (máx 10MB, se convierte a WebP)
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
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
                      className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 outline-none"
                      required
                    >
                      <option value="Divisas">Divisas</option>
                      <option value="Guías">Guías</option>
                      <option value="Criptomonedas">Criptomonedas</option>
                      <option value="Indicadores">Indicadores</option>
                      <option value="Noticias">Noticias</option>
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

                {/* SEO IMAGEN — visible solo al seleccionar imagen en el editor */}
                {selectedImage && (
                  <div className="p-3 border-b border-gray-200" style={{ backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }}>
                    <h3 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: '#1D4ED8' }}>
                      🖼 SEO IMAGEN
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <label className="text-xs text-gray-500 block mb-1">Texto alternativo (Alt)</label>
                        <input
                          type="text"
                          value={seoImageAlt}
                          onChange={e => setSeoImageAlt(e.target.value)}
                          placeholder="Describe la imagen..."
                          className="w-full px-2 py-1.5 text-xs border border-blue-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 block mb-1">Título</label>
                        <input
                          type="text"
                          value={seoImageTitle}
                          onChange={e => setSeoImageTitle(e.target.value)}
                          placeholder="Título de la imagen..."
                          className="w-full px-2 py-1.5 text-xs border border-blue-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setPendingImageUpdate({ alt: seoImageAlt, title: seoImageTitle })}
                        className="w-full px-2 py-1.5 text-xs rounded-lg font-medium transition-colors text-white"
                        style={{ backgroundColor: '#1D4ED8' }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1E40AF')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1D4ED8')}
                      >
                        Aplicar cambios
                      </button>
                    </div>
                  </div>
                )}

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
              <Link href="/admin/articles" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                ← Volver a los artículos
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
          onChange={handleSidebarChange}
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
                <span>•</span>
                <span className={`font-medium ${formData.status === 'draft' ? 'text-yellow-600' : 'text-green-600'}`}>
                  {formData.status === 'draft' ? '📝 Borrador' : '✓ Publicado'}
                </span>
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
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: sanitizeHtml(formData.content) }} />
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
                {isPublishing
                  ? (formData.status === 'draft' ? 'Publicando...' : 'Actualizando...')
                  : (formData.status === 'draft' ? '✓ Publicar' : '✓ Actualizar')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Editor Modal */}
      {isEditingImage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">✂️ Escalar Imagen</h2>
              <button
                onClick={() => setIsEditingImage(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              <div className="mb-4">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ancho (px)</label>
                    <input
                      type="number"
                      value={imageScale.width}
                      onChange={e => setImageScale(prev => ({ ...prev, width: parseInt(e.target.value) || 0 }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                      min="1"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Alto (px)</label>
                    <input
                      type="number"
                      value={imageScale.height}
                      onChange={e => setImageScale(prev => ({ ...prev, height: parseInt(e.target.value) || 0 }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                      min="1"
                    />
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-300 rounded-lg overflow-visible bg-gray-50 p-8 flex justify-center items-center min-h-[400px] relative">
                {/* Dimensiones flotantes */}
                {isDragging && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg z-50">
                    {imageScale.width} × {imageScale.height} px
                  </div>
                )}

                <div
                  ref={imageEditorRef}
                  className="relative border-4 border-dashed border-green-500"
                  style={{
                    width: `${imageScale.width}px`,
                    height: `${imageScale.height}px`,
                    maxWidth: '100%',
                    maxHeight: '60vh'
                  }}
                >
                  <img
                    src={imageToEdit}
                    alt="Editando"
                    className="w-full h-full object-contain pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* Esquina Superior Izquierda */}
                  <div
                    className="absolute -top-2 -left-2 w-6 h-6 bg-green-600 border-4 border-white rounded-full cursor-nwse-resize shadow-lg hover:scale-125 transition-transform z-10"
                    title="Arrastrar para redimensionar"
                    onMouseDown={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDragging(true);
                      const startX = e.clientX;
                      const startY = e.clientY;
                      const startWidth = imageScale.width;
                      const startHeight = imageScale.height;
                      const aspectRatio = startWidth / startHeight;

                      const handleMouseMove = (e: MouseEvent) => {
                        const deltaX = startX - e.clientX;
                        const deltaY = startY - e.clientY;
                        const newWidth = Math.max(200, startWidth + deltaX);
                        setImageScale({
                          width: newWidth,
                          height: Math.max(200, Math.round(newWidth / aspectRatio))
                        });
                      };

                      const handleMouseUp = () => {
                        setIsDragging(false);
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                      };

                      document.addEventListener('mousemove', handleMouseMove);
                      document.addEventListener('mouseup', handleMouseUp);
                    }}
                  />

                  {/* Esquina Superior Derecha */}
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 border-4 border-white rounded-full cursor-nesw-resize shadow-lg hover:scale-125 transition-transform z-10"
                    title="Arrastrar para redimensionar"
                    onMouseDown={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDragging(true);
                      const startX = e.clientX;
                      const startY = e.clientY;
                      const startWidth = imageScale.width;
                      const startHeight = imageScale.height;
                      const aspectRatio = startWidth / startHeight;

                      const handleMouseMove = (e: MouseEvent) => {
                        const deltaX = e.clientX - startX;
                        const newWidth = Math.max(200, startWidth + deltaX);
                        setImageScale({
                          width: newWidth,
                          height: Math.max(200, Math.round(newWidth / aspectRatio))
                        });
                      };

                      const handleMouseUp = () => {
                        setIsDragging(false);
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                      };

                      document.addEventListener('mousemove', handleMouseMove);
                      document.addEventListener('mouseup', handleMouseUp);
                    }}
                  />

                  {/* Esquina Inferior Izquierda */}
                  <div
                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-600 border-4 border-white rounded-full cursor-nesw-resize shadow-lg hover:scale-125 transition-transform z-10"
                    title="Arrastrar para redimensionar"
                    onMouseDown={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDragging(true);
                      const startX = e.clientX;
                      const startY = e.clientY;
                      const startWidth = imageScale.width;
                      const startHeight = imageScale.height;
                      const aspectRatio = startWidth / startHeight;

                      const handleMouseMove = (e: MouseEvent) => {
                        const deltaX = startX - e.clientX;
                        const newWidth = Math.max(200, startWidth + deltaX);
                        setImageScale({
                          width: newWidth,
                          height: Math.max(200, Math.round(newWidth / aspectRatio))
                        });
                      };

                      const handleMouseUp = () => {
                        setIsDragging(false);
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                      };

                      document.addEventListener('mousemove', handleMouseMove);
                      document.addEventListener('mouseup', handleMouseUp);
                    }}
                  />

                  {/* Esquina Inferior Derecha */}
                  <div
                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-600 border-4 border-white rounded-full cursor-nwse-resize shadow-lg hover:scale-125 transition-transform z-10"
                    title="Arrastrar para redimensionar"
                    onMouseDown={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsDragging(true);
                      const startX = e.clientX;
                      const startY = e.clientY;
                      const startWidth = imageScale.width;
                      const startHeight = imageScale.height;
                      const aspectRatio = startWidth / startHeight;

                      const handleMouseMove = (e: MouseEvent) => {
                        const deltaX = e.clientX - startX;
                        const newWidth = Math.max(200, startWidth + deltaX);
                        setImageScale({
                          width: newWidth,
                          height: Math.max(200, Math.round(newWidth / aspectRatio))
                        });
                      };

                      const handleMouseUp = () => {
                        setIsDragging(false);
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                      };

                      document.addEventListener('mousemove', handleMouseMove);
                      document.addEventListener('mouseup', handleMouseUp);
                    }}
                  />
                </div>
              </div>

              <p className="text-sm font-medium text-gray-700 mt-4 text-center bg-green-50 p-3 rounded-lg border border-green-200">
                📏 Arrastra las <strong className="text-green-600">esquinas verdes</strong> para redimensionar • Mantiene proporción automáticamente
              </p>
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setIsEditingImage(false)}
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={async () => {
                  // Apply scale and convert to WebP
                  const img = new Image();
                  img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = imageScale.width;
                    canvas.height = imageScale.height;
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                      ctx.drawImage(img, 0, 0, imageScale.width, imageScale.height);
                      canvas.toBlob(
                        (blob) => {
                          if (blob) {
                            const reader = new FileReader();
                            reader.onload = () => {
                              setFormData(prev => ({ ...prev, featuredImage: reader.result as string }));
                              setIsEditingImage(false);
                            };
                            reader.readAsDataURL(blob);
                          }
                        },
                        'image/webp',
                        0.85
                      );
                    }
                  };
                  img.src = imageToEdit;
                }}
                className="px-5 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
              >
                ✓ Aplicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
