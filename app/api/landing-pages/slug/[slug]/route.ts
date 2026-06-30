import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener landing page por slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const page = await prisma.landingPage.findUnique({
      where: {
        slug: params.slug,
        status: 'published'
      },
    });

    if (!page) {
      return NextResponse.json({ error: 'Página no encontrada' }, { status: 404 });
    }

    return NextResponse.json(page);
  } catch (error) {
    console.error('Error fetching landing page by slug:', error);
    return NextResponse.json({ error: 'Error al cargar página' }, { status: 500 });
  }
}
