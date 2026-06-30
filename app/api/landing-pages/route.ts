import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Listar todas las landing pages
export async function GET() {
  try {
    const pages = await prisma.landingPage.findMany({
      orderBy: { updatedAt: 'desc' },
    });
    return NextResponse.json(pages);
  } catch (error) {
    console.error('Error fetching landing pages:', error);
    return NextResponse.json({ error: 'Error al cargar páginas' }, { status: 500 });
  }
}

// POST - Crear nueva landing page
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const page = await prisma.landingPage.create({
      data: {
        title: body.title,
        slug: body.slug,
        badge: body.badge || '',
        badgeColor: body.badgeColor || '#C8FF00',
        heroTitle: body.heroTitle || '',
        heroSubtitle: body.heroSubtitle || '',
        ctaText: body.ctaText || 'Cotizar Mi Sitio Web',
        ctaLink: body.ctaLink || '/contacto',
        ctaColor: body.ctaColor || '#C8FF00',
        content: body.content || '',
        pricingPlans: body.pricingPlans || '[]',
        metaTitle: body.metaTitle || '',
        metaDescription: body.metaDescription || '',
        metaKeywords: body.metaKeywords || '',
        excerpt: body.excerpt || '',
        customCSS: body.customCSS || '',
        layout: body.layout || 'default',
        status: body.status || 'published',
        author: body.author || 'Admin Alma Media',
      },
    });

    return NextResponse.json(page, { status: 201 });
  } catch (error) {
    console.error('Error creating landing page:', error);
    return NextResponse.json({ error: 'Error al crear página' }, { status: 500 });
  }
}
