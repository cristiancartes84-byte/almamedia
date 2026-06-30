import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET - Obtener todos los banners con filtrado de visibilidad
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get('active') === 'true';

    // Intentar obtener banners de la base de datos
    const banners = await prisma.sidebarBanner.findMany({
      where: activeOnly ? { isActive: true } : undefined,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(banners);
  } catch (error: any) {
    console.error('Error fetching banners:', error);

    // Si la tabla no existe (error P2021), devolver array vacío
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      console.warn('SidebarBanner table does not exist yet. Run: npx prisma migrate deploy');
      return NextResponse.json([]);
    }

    // Para otros errores, devolver array vacío en lugar de 500
    return NextResponse.json([]);
  }
}

// POST - Crear nuevo banner
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const body = await request.json();

    const banner = await prisma.sidebarBanner.create({
      data: {
        title: body.title,
        description: body.description || '',
        buttonText: body.buttonText || 'Ver más',
        link: body.link,
        image: body.image || '',
        bgColor: body.bgColor || '#10B981',
        textColor: body.textColor || '#ffffff',
        order: body.order || 0,
        isActive: body.isActive !== undefined ? body.isActive : true,
        isSticky: body.isSticky !== undefined ? body.isSticky : false,
        visibility: body.visibility || 'global',
        targetCategory: body.targetCategory || '',
        targetSlug: body.targetSlug || '',
      },
    });

    return NextResponse.json(banner, { status: 201 });
  } catch (error: any) {
    console.error('Error creating banner:', error);

    // Si la tabla no existe
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return NextResponse.json(
        {
          error: 'Tabla no existe. Ejecuta: npx prisma migrate deploy',
          code: 'TABLE_NOT_EXISTS'
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'Error al crear banner', details: error?.message },
      { status: 500 }
    );
  }
}
