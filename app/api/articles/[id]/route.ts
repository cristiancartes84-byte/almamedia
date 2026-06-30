import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { articleInputSchema } from "@/lib/validation";
import { Prisma } from "@prisma/client";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const article = await prisma.article.findUnique({ where: { id } });
    if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(article);
  } catch (err: unknown) {
    console.error("GET /api/articles/[id] falló:", err);
    return NextResponse.json({ error: "Error al obtener el artículo" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { id } = await params;
    const parsed = articleInputSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Datos de artículo inválidos" }, { status: 400 });
    }
    const data = parsed.data;

    const buildUpdate = (slug: string | undefined) => ({
      title: data.title,
      slug,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category,
      author: data.author,
      tags: data.tags,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      metaKeywords: data.metaKeywords,
      featuredImage: data.featuredImage,
      featuredImageAlt: data.featuredImageAlt,
      status: data.status,
    });

    try {
      const article = await prisma.article.update({ where: { id }, data: buildUpdate(data.slug) });
      return NextResponse.json(article);
    } catch (updateErr: unknown) {
      if (updateErr instanceof Prisma.PrismaClientKnownRequestError && updateErr.code === 'P2002') {
        const article = await prisma.article.update({
          where: { id },
          data: buildUpdate(data.slug ? `${data.slug}-${Date.now()}` : undefined),
        });
        return NextResponse.json(article);
      }
      throw updateErr;
    }
  } catch (err: unknown) {
    console.error("PUT /api/articles/[id] falló:", err);
    return NextResponse.json({ error: "Error al actualizar el artículo" }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { id } = await params;
    await prisma.article.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("DELETE /api/articles/[id] falló:", err);
    return NextResponse.json({ error: "Error al eliminar el artículo" }, { status: 500 });
  }
}
