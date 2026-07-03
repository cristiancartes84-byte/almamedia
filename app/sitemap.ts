import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://almamedia.cl'
  const lastModified = new Date()

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },

    // Main Pages
    {
      url: `${baseUrl}/servicios`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Service Pages - Diseño Web
    {
      url: `${baseUrl}/diseno-web`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diseno-web-biobio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/diseno-web-concepcion`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/diseno-web-talcahuano`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diseno-web-san-pedro-paz`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diseno-web-los-angeles`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diseno-web-chillan`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diseno-web-coronel`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Service Pages - SEO
    {
      url: `${baseUrl}/seo-posicionamiento`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seo-local`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/seo-biobio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/seo-local-biobio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Service Pages - Fotografía
    {
      url: `${baseUrl}/fotografia-producto`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios-fotografia-producto`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/fotografia-producto-biobio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Service Pages - Video
    {
      url: `${baseUrl}/video-producto`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/servicios-video-marketing`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/video-producto-biobio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Packs
    {
      url: `${baseUrl}/packs-completos`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Marketing Digital Pages
    {
      url: `${baseUrl}/marketing-digital-biobio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/marketing-digital-concepcion`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/marketing-digital-ecommerce`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketing-digital-restaurantes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/marketing-digital-servicios-profesionales`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/cuanto-cuesta-diseno-web-concepcion`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/cuanto-cuesta-seo-chile`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/landing-page-vs-sitio-web`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/fotografia-producto-vale-la-pena`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/como-elegir-agencia-marketing-digital-concepcion`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
