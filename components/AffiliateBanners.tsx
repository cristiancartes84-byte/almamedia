'use client';

import { useState, useEffect } from 'react';

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
}

// Banners por defecto (fallback si la API falla)
const defaultBanners: Banner[] = [
  {
    id: 'default-1',
    title: 'Extensión DivisaChile',
    description: 'Acceso instantáneo a valores de divisas desde tu navegador',
    buttonText: 'Descargar Gratis',
    link: '#',
    image: '',
    bgColor: '#064E38',
    textColor: '#ffffff',
    order: 1,
    isActive: true,
    isSticky: false,
    visibility: 'global',
    targetCategory: '',
    targetSlug: '',
  },
  {
    id: 'default-2',
    title: 'Buda.com',
    description: 'Compra y vende Bitcoin',
    buttonText: 'Empezar a Invertir',
    link: '#',
    image: '',
    bgColor: '#16A34A',
    textColor: '#ffffff',
    order: 2,
    isActive: true,
    isSticky: false,
    visibility: 'global',
    targetCategory: '',
    targetSlug: '',
  },
  {
    id: 'default-3',
    title: 'Racional',
    description: 'Invierte en la bolsa de USA',
    buttonText: 'Crear Cuenta Gratis',
    link: '#',
    image: '',
    bgColor: '#2563EB',
    textColor: '#ffffff',
    order: 3,
    isActive: true,
    isSticky: false,
    visibility: 'global',
    targetCategory: '',
    targetSlug: '',
  },
];

interface AffiliateBannersProps {
  pageType?: 'home' | 'article' | 'page';
  category?: string;
  slug?: string;
}

export default function AffiliateBanners({
  pageType = 'home',
  category = '',
  slug = ''
}: AffiliateBannersProps = {}) {
  const [banners, setBanners] = useState<Banner[]>(defaultBanners);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const res = await fetch('/api/sidebar-banners?active=true');

      // Si la API devuelve error, usar banners por defecto
      if (!res.ok) {
        console.warn('API banners not available, using defaults');
        setBanners(defaultBanners);
        setIsLoading(false);
        return;
      }

      const data = await res.json();

      // Validar que data sea un array
      if (Array.isArray(data) && data.length > 0) {
        // Filtrar banners según visibilidad
        const filtered = data.filter(banner => {
          // Global: aparece en todas partes
          if (banner.visibility === 'global') return true;

          // Por categoría: solo en artículos de esa categoría
          if (banner.visibility === 'category') {
            return pageType === 'article' && category === banner.targetCategory;
          }

          // Por artículo específico
          if (banner.visibility === 'article') {
            return pageType === 'article' && slug === banner.targetSlug;
          }

          // Por página específica
          if (banner.visibility === 'page') {
            return pageType === 'page' && slug === banner.targetSlug;
          }

          return false;
        });

        // Ordenar: sticky primero, luego por order
        const sorted = filtered.sort((a, b) => {
          if (a.isSticky && !b.isSticky) return -1;
          if (!a.isSticky && b.isSticky) return 1;
          return a.order - b.order;
        });
        setBanners(sorted);
      } else {
        // Si no hay banners, usar los por defecto
        setBanners(defaultBanners);
      }
    } catch (error) {
      console.warn('Error fetching banners, using defaults:', error);
      setBanners(defaultBanners);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-200 rounded-xl h-48 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {banners.map(banner => (
        <div
          key={banner.id}
          className="rounded-xl shadow-lg p-6 transition-all hover:shadow-xl"
          style={{
            background: banner.bgColor.includes('gradient')
              ? banner.bgColor
              : `linear-gradient(135deg, ${banner.bgColor} 0%, ${adjustColor(banner.bgColor, 20)} 100%)`,
            color: banner.textColor
          }}
        >
          <h4 className="font-bold text-lg mb-2">{banner.title}</h4>
          {banner.description && (
            <p className="text-sm opacity-90 mb-4">{banner.description}</p>
          )}
          {banner.image && (
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
          )}
          <a
            href={banner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-4 py-2 rounded-lg font-medium transition-all hover:opacity-90"
            style={{
              backgroundColor: banner.textColor,
              color: banner.bgColor,
            }}
          >
            {banner.buttonText}
          </a>
        </div>
      ))}
    </div>
  );
}

// Función auxiliar para aclarar/oscurecer color
function adjustColor(color: string, amount: number): string {
  const hex = color.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
