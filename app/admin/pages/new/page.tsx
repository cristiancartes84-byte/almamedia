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

  // Auto-generar slug
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C8FF00] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center gap-1">
              <span className="text-2xl font-black" style={{ color: '#C8FF00' }}>Alma</span>
              <span className="text-2xl font-black text-gray-900">Media</span>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/admin/pages" className="text-sm text-gray-600 hover:text-gray-900">
                ← Volver a las páginas
              </Link>
              <button
                onClick={handleSubmit}
                disabled={isPublishing || !formData.title}
                style={{ backgroundColor: '#C8FF00' }}
                className="px-6 py-2 text-gray-900 font-semibold rounded hover:opacity-90 transition disabled:opacity-50"
              >
                {isPublishing ? 'Guardando...' : 'Actualizar'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {error && (
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Main Editor */}
          <div className="lg:col-span-2">
            {/* Título */}
            <div className="mb-6">
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full text-3xl font-bold px-0 py-2 border-0 border-b-2 border-gray-200 focus:border-gray-400 focus:ring-0 focus:outline-none"
                placeholder="Escribe un título"
              />
              <p className="text-sm text-gray-500 mt-2">
                Permalink: <span className="text-blue-600">almamedia.cl/{formData.slug || 'slug-de-la-pagina'}</span>
              </p>
            </div>

            {/* Editor Visual/HTML */}
            <div className="mb-6">
              <div className="flex gap-2 mb-3">
                <button className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded">Visual</button>
                <button className="px-4 py-1.5 bg-gray-200 text-gray-700 text-sm font-medium rounded">HTML</button>
              </div>
              <ClassicEditor
                content={formData.content}
                onChange={(content) => setFormData({ ...formData, content })}
              />
              <p className="text-sm text-gray-500 mt-2 text-right">
                <span className="text-blue-600">{formData.content.split(/\s+/).filter(w => w).length} palabras</span> — excelente
              </p>
            </div>

            {/* Campos adicionales en acordeón simple */}
            <div className="space-y-4 mt-8 pt-6 border-t border-gray-200">
              <details className="bg-gray-50 rounded p-4">
                <summary className="font-semibold cursor-pointer text-gray-900">Sección Hero</summary>
                <div className="mt-4 space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm mb-1 text-gray-700">Badge (etiqueta)</label>
                      <input
                        type="text"
                        value={formData.badge}
                        onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1 text-gray-700">Color del Badge</label>
                      <input
                        type="color"
                        value={formData.badgeColor}
                        onChange={(e) => setFormData({ ...formData, badgeColor: e.target.value })}
                        className="w-full h-10 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm mb-1 text-gray-700">Texto del Botón</label>
                      <input
                        type="text"
                        value={formData.ctaText}
                        onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1 text-gray-700">Link del Botón</label>
                      <input
                        type="text"
                        value={formData.ctaLink}
                        onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1 text-gray-700">Color del Botón</label>
                    <input
                      type="color"
                      value={formData.ctaColor}
                      onChange={(e) => setFormData({ ...formData, ctaColor: e.target.value })}
                      className="w-full h-10 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </details>

              <details className="bg-gray-50 rounded p-4">
                <summary className="font-semibold cursor-pointer text-gray-900">Planes de Precios (JSON)</summary>
                <div className="mt-4">
                  <textarea
                    value={formData.pricingPlans}
                    onChange={(e) => setFormData({ ...formData, pricingPlans: e.target.value })}
                    rows={10}
                    className="w-full px-3 py-2 border border-gray-300 rounded font-mono text-xs"
                  />
                </div>
              </details>

              <details className="bg-gray-50 rounded p-4">
                <summary className="font-semibold cursor-pointer text-gray-900">CSS Personalizado</summary>
                <div className="mt-4">
                  <textarea
                    value={formData.customCSS}
                    onChange={(e) => setFormData({ ...formData, customCSS: e.target.value })}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded font-mono text-xs"
                  />
                </div>
              </details>
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
