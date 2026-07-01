import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
// import { articleInputSchema } from "@/lib/validation";
import { Prisma } from "@prisma/client";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");
  const slug = searchParams.get("slug");

  const where: Record<string, unknown> = {};
  if (status) where.status = status;
  if (slug) where.slug = slug;

  const articles = await prisma.article.findMany({
    where,
    orderBy: { publishedAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      category: true,
      author: true,
      tags: true,
      featuredImage: true,
      featuredImageAlt: true,
      status: true,
      publishedAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json(articles);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const data = await req.json();

    const baseSlug = data.slug || `articulo-${Date.now()}`;
    const buildData = (slug: string) => ({
      title: data.title,
      slug,
      excerpt: data.excerpt || '',
      content: data.content || '',
      category: data.category || '',
      author: data.author || 'Admin',
      tags: Array.isArray(data.tags) ? data.tags.join(', ') : (data.tags || ''),
      metaTitle: data.metaTitle || '',
      metaDescription: data.metaDescription || '',
      metaKeywords: data.metaKeywords || '',
      featuredImage: data.featuredImage || '',
      featuredImageAlt: data.featuredImageAlt || '',
      status: data.status || 'draft',
    });

    const article = await prisma.article.create({ data: buildData(baseSlug) });
    return NextResponse.json(article, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
      const article = await prisma.article.create({ data: buildData(`${baseSlug}-${Date.now()}`) });
      return NextResponse.json(article, { status: 201 });
    }
    console.error("POST /api/articles error:", err);
    return NextResponse.json({ error: "Error al crear artículo" }, { status: 500 });
  }
}
