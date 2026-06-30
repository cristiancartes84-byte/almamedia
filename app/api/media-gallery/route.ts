import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET - Obtener todas las imágenes de la galería
export async function GET() {
  try {
    const images = await prisma.mediaGallery.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100, // Limitar a 100 imágenes más recientes
    });

    return NextResponse.json(images);
  } catch (error: any) {
    console.error('Error fetching gallery images:', error);

    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return NextResponse.json([]);
    }

    return NextResponse.json([]);
  }
}

// POST - Subir nueva imagen a la galería
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const body = await request.json();

    // Validar que venga la imagen
    if (!body.imageData) {
      return NextResponse.json({ error: 'No se proporcionó imagen' }, { status: 400 });
    }

    // Calcular tamaño aproximado (base64)
    const sizeInBytes = Math.ceil((body.imageData.length * 3) / 4);

    const image = await prisma.mediaGallery.create({
      data: {
        filename: body.filename || `image-${Date.now()}.webp`,
        imageData: body.imageData,
        size: sizeInBytes,
        uploadedBy: session.user?.email || 'admin',
      },
    });

    return NextResponse.json(image, { status: 201 });
  } catch (error: any) {
    console.error('Error uploading image:', error);

    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      return NextResponse.json(
        {
          error: 'Tabla no existe. Ejecuta: npx prisma db push',
          code: 'TABLE_NOT_EXISTS'
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'Error al subir imagen', details: error?.message },
      { status: 500 }
    );
  }
}

// DELETE - Eliminar imagen de la galería
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID no proporcionado' }, { status: 400 });
    }

    await prisma.mediaGallery.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json({ error: 'Error al eliminar imagen' }, { status: 500 });
  }
}
