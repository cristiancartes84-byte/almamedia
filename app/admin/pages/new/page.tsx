'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ClassicEditor from '@/components/ClassicEditor';
import AlmaSEO from '@/components/AlmaSEO';

export default function NewLandingPagePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

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
    pricingPlans: JSON.stringify([
      {
        name: 'Landing Page',
        price: '$169.000',
        period: 'CLP/año',
        features: ['Servicios + contacto', 'Google Maps integrado', 'Formulario consultas', 'Hosting + dominio', 'Responsive móvil'],
        highlighted: false
      },
      {
        name: 'Sitio Profesional',
        price: '$390.000',
        period: 'CLP',
        features: ['5 páginas completas', 'Galería de fotos', 'Blog/Noticias', 'Testimonios Clientes', 'SEO optimizado'],
        highlighted: true
      },
      {
        name: 'Ecommerce',
        price: 'Desde $590.000',
        period: 'CLP',
        features: ['Tienda online', 'Webpay integrado', 'Delivery San Pedro', 'Stock administrable', 'Email automático'],
        highlighted: false
      }
    ], null, 2),
    customCSS: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    excerpt: ''
  });

  const [isPublishing, setIsPublishing] = useState(false);
  const [error, setError] = useState('');

  // Auto-generar slug desde el título
  useEffect(() => {
    if (formData.title && !formData.slug) {
      const slug = formData.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title]);

  const handleSubmit = async () => {
    if (!formData.title || !formData.slug) {
      setError('El título y slug son requeridos');
      return;
    }

    setIsPublishing(true);
    setError('');

    try {
      const res = await fetch('/api/landing-pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const page = await res.json();
        router.push(`/admin/pages/${page.id}/edit`);
      } else {
        setError('Error al crear la página');
      }
    } catch (err) {
      setError('Error al crear la página');
    } finally {
      setIsPublishing(false);
    }
  };

  if (status === 'loading') {
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
              <Link href="/admin/pages" className="text-sm text-gray-400 hover:text-white">
                ← Ver páginas
              </Link>
              <button
                onClick={handleSubmit}
                disabled={isPublishing || !formData.title}
                style={{ backgroundColor: '#C8FF00' }}
                className="px-6 py-2.5 text-[#0a0a0a] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-all disabled:opacity-50"
              >
                {isPublishing ? 'Guardando...' : 'Guardar Cambios'}
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

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Información Básica */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">Información Básica</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Título de la Página *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent"
                    placeholder="Escribe un título"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Slug (URL) *
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">almamedia.cl/</span>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="flex-1 px-4 py-2.5 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent"
                      placeholder="mi-pagina"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sección Hero */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">Sección Hero</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Badge (etiqueta)
                  </label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent"
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

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Título Principal
                  </label>
                  <input
                    type="text"
                    value={formData.heroTitle}
                    onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subtítulo
                  </label>
                  <textarea
                    value={formData.heroSubtitle}
                    onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent resize-none"
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
                      className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent"
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
                      className="w-full px-4 py-2.5 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Color del Botón
                  </label>
                  <input
                    type="color"
                    value={formData.ctaColor}
                    onChange={(e) => setFormData({ ...formData, ctaColor: e.target.value })}
                    className="w-full h-12 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Contenido Principal */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">Contenido Principal</h2>
              <ClassicEditor
                content={formData.content}
                onChange={(content) => setFormData({ ...formData, content })}
              />
            </div>

            {/* Planes de Precios (JSON) */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">Planes de Precios (JSON)</h2>
              <textarea
                value={formData.pricingPlans}
                onChange={(e) => setFormData({ ...formData, pricingPlans: e.target.value })}
                rows={12}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg font-mono text-sm focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent resize-none"
              />
            </div>

            {/* CSS Personalizado */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">CSS Personalizado</h2>
              <textarea
                value={formData.customCSS}
                onChange={(e) => setFormData({ ...formData, customCSS: e.target.value })}
                rows={8}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] text-white rounded-lg font-mono text-sm focus:ring-2 focus:ring-[#C8FF00] focus:border-transparent resize-none"
              />
            </div>
          </div>

          {/* Right column - SEO */}
          <div className="lg:col-span-1">
            <AlmaSEO
              title={formData.metaTitle || formData.title}
              description={formData.metaDescription}
              keywords={formData.metaKeywords}
              excerpt={formData.excerpt}
              content={formData.content}
              url={formData.slug}
              onMetaChange={(field, value) => setFormData({ ...formData, [field]: value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
