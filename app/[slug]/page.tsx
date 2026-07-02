import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import LandingPageRenderer from '@/components/LandingPageRenderer';

type PageProps = {
  params: { slug: string };
};

// Fetch landing page data
async function getLandingPage(slug: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/landing-pages/slug/${slug}`, {
      next: { revalidate: 3600 } // ISR: Revalidate every hour
    });

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching landing page:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await getLandingPage(params.slug);

  if (!page) {
    return {
      title: 'Página no encontrada - Alma Media',
    };
  }

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || page.excerpt,
    keywords: page.metaKeywords,
  };
}

// Static generation for known slugs
export async function generateStaticParams() {
  // Return empty array - pages will be generated on-demand (ISR)
  // Static routes like /diseno-web-concepcion now have dedicated pages
  return [];
}

export default async function DynamicLandingPage({ params }: PageProps) {
  const page = await getLandingPage(params.slug);

  if (!page) {
    notFound();
  }

  return <LandingPageRenderer page={page} />;
}
