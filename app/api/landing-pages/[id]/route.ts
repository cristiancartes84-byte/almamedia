import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener una landing page por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const page = await prisma.landingPage.findUnique({
      where: { id: params.id },
    });

    if (!page) {
      return NextResponse.json({ error: 'Página no encontrada' }, { status: 404 });
    }

    return NextResponse.json(page);
  } catch (error) {
    console.error('Error fetching landing page:', error);
    return NextResponse.json({ error: 'Error al cargar página' }, { status: 500 });
  }
}

// PUT - Actualizar landing page
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const page = await prisma.landingPage.update({
      where: { id: params.id },
      data: {
        title: body.title,
        slug: body.slug,
        badge: body.badge ?? '',
        badgeColor: body.badgeColor ?? '#C8FF00',
        heroTitle: body.heroTitle ?? '',
        heroSubtitle: body.heroSubtitle ?? '',
        ctaText: body.ctaText ?? 'Cotizar Mi Sitio Web',
        ctaLink: body.ctaLink ?? '/contacto',
        ctaColor: body.ctaColor ?? '#C8FF00',
        content: body.content ?? '',
        pricingPlans: body.pricingPlans ?? '[]',
        metaTitle: body.metaTitle ?? '',
        metaDescription: body.metaDescription ?? '',
        metaKeywords: body.metaKeywords ?? '',
        excerpt: body.excerpt ?? '',
        customCSS: body.customCSS ?? '',
        layout: body.layout ?? 'default',
        status: body.status ?? 'draft',
        author: body.author ?? 'Admin Alma Media',
      },
    });

    return NextResponse.json(page);
  } catch (error) {
    console.error('Error updating landing page:', error);
    return NextResponse.json({ error: 'Error al actualizar página' }, { status: 500 });
  }
}

// DELETE - Eliminar landing page
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.landingPage.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Página eliminada' });
  } catch (error) {
    console.error('Error deleting landing page:', error);
    return NextResponse.json({ error: 'Error al eliminar página' }, { status: 500 });
  }
}
