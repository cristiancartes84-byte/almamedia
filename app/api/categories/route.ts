import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Obtener todas las categorías únicas
export async function GET() {
  try {
    // Obtener todas las categorías únicas de artículos publicados
    const articles = await prisma.article.findMany({
      where: {
        status: 'published',
        category: {
          not: '',
        },
      },
      select: {
        category: true,
      },
      distinct: ['category'],
      orderBy: {
        category: 'asc',
      },
    });

    // Extraer solo los nombres de categorías
    const categories = articles
      .map(article => article.category)
      .filter(category => category && category.trim() !== '')
      .sort();

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json([]);
  }
}
