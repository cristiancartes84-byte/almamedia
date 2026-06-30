import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// PUT - Actualizar banner
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await request.json();
    const banner = await prisma.sidebarBanner.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        buttonText: body.buttonText,
        link: body.link,
        image: body.image,
        bgColor: body.bgColor,
        textColor: body.textColor,
        order: body.order,
        isActive: body.isActive,
        isSticky: body.isSticky,
        visibility: body.visibility,
        targetCategory: body.targetCategory,
        targetSlug: body.targetSlug,
      },
    });

    return NextResponse.json(banner);
  } catch (error) {
    console.error('Error updating banner:', error);
    return NextResponse.json({ error: 'Error al actualizar banner' }, { status: 500 });
  }
}

// DELETE - Eliminar banner
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { id } = await context.params;
    await prisma.sidebarBanner.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting banner:', error);
    return NextResponse.json({ error: 'Error al eliminar banner' }, { status: 500 });
  }
}
