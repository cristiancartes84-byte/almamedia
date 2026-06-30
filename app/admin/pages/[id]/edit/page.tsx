'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ClassicEditor from '@/components/ClassicEditor';
import AlmaSEO from '@/components/AlmaSEO';

export default function EditLandingPagePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const pageId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    badge: '',
    badgeColor: '#C8FF00',
    heroTitle: '',
    heroSubtitle: '',
    ctaText: 'Cotizar Mi Sitio Web',
    ctaLink: '/contacto',
    ctaColor: '#C8FF00',
    content: '',
    pricingPlans: '[]',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    excerpt: '',
    customCSS: '',
    layout: 'default',
    status: 'published' as 'published' | 'draft',
    author: 'Admin Alma Media',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/admin/login');
  }, [status, router]);

  // Cargar datos de la página
  useEffect(() => {
    if (session && pageId) {
      loadPage();
    }
  }, [session, pageId]);

  const loadPage = async () => {
    try {
      const res = await fetch(`/api/landing-pages/${pageId}`);
      if (res.ok) {
        const page = await res.json();
        setFormData({
          title: page.title,
          slug: page.slug,
          badge: page.badge,
          badgeColor: page.badgeColor,
          heroTitle: page.heroTitle,
          heroSubtitle: page.heroSubtitle,
          ctaText: page.ctaText,
          ctaLink: page.ctaLink,
          ctaColor: page.ctaColor,
          content: page.content,
          pricingPlans: page.pricingPlans,
          metaTitle: page.metaTitle,
          metaDescription: page.metaDescription,
          metaKeywords: page.metaKeywords,
          excerpt: page.excerpt,
          customCSS: page.customCSS,
          layout: page.layout,
          status: page.status,
          author: page.author,
        });
      } else {
        setError('Error al cargar la página');
      }
    } catch (err) {
      setError('Error al cargar la página');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setError('');
    setSaveMessage('');
    setIsSaving(true);

    try {
      const res = await fetch(`/api/landing-pages/${pageId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSaveMessage('✅ Página guardada correctamente');
        setTimeout(() => setSaveMessage(''), 3000);
      } else {
        setError('Error al guardar la página');
      }
    } catch (err) {
      setError('Error al guardar la página');
    } finally {
      setIsSaving(false);
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
      <header className="bg-[#1a1a1a] border-b border-[#2a2a2a] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/admin/dashboard" className="flex items-center gap-1">
              <span className="text-2xl font-black" style={{ color: '#C8FF00' }}>Alma</span>
              <span className="text-2xl font-black text-white">Media</span>
            </Link>

            <div className="flex items-center gap-4">
              {saveMessage && (
                <span className="text-sm text-green-400">{saveMessage}</span>
              )}
              <Link
                href={`/${formData.slug}`}
                target="_blank"
                className="text-sm text-gray-400 hover:text-white"
              >
                Ver Página →
              </Link>
              <Link href="/admin/pages" className="text-sm text-gray-400 hover:text-white">
                ← Volver
              </Link>
              <button
                onClick={handleSave}
                disabled={isSaving || !formData.title}
                className="px-6 py-2 bg-[#C8FF00] text-[#0a0a0a] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-all disabled:opacity-50"
              >
                {isSaving ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="bg-red-900/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
            {error}
          </div>
        </div>
      )}

      {/* Main content - Mismo formulario que new */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Editor */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Información Básica</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Título de la Página *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Slug (URL) *
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">almamedia.cl/</span>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="flex-1 px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Sección Hero</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Badge (etiqueta)
                    </label>
                    <input
                      type="text"
                      value={formData.badge}
                      onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Color del Badge
                    </label>
                    <input
                      type="color"
                      value={formData.badgeColor}
                      onChange={(e) => setFormData({ ...formData, badgeColor: e.target.value })}
                      className="w-full h-12 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Título Principal
                  </label>
                  <input
                    type="text"
                    value={formData.heroTitle}
                    onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subtítulo
                  </label>
                  <textarea
                    value={formData.heroSubtitle}
                    onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00]"
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Texto del Botón
                    </label>
                    <input
                      type="text"
                      value={formData.ctaText}
                      onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Link del Botón
                    </label>
                    <input
                      type="text"
                      value={formData.ctaLink}
                      onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Contenido Principal</h2>
              <ClassicEditor
                initialValue={formData.content}
                onChange={(content) => setFormData({ ...formData, content })}
              />
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Planes de Precios (JSON)</h2>
              <textarea
                value={formData.pricingPlans}
                onChange={(e) => setFormData({ ...formData, pricingPlans: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] font-mono text-sm"
                rows={15}
              />
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">CSS Personalizado</h2>
              <textarea
                value={formData.customCSS}
                onChange={(e) => setFormData({ ...formData, customCSS: e.target.value })}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] font-mono text-sm"
                rows={8}
              />
            </div>
          </div>

          {/* Right column - Alma SEO */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AlmaSEO
                metaTitle={formData.metaTitle}
                metaDescription={formData.metaDescription}
                metaKeywords={formData.metaKeywords}
                articleTitle={formData.title}
                articleSlug={formData.slug}
                articleContent={formData.content}
                articleExcerpt={formData.excerpt}
                onChange={(field, value) => setFormData({ ...formData, [field]: value })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
