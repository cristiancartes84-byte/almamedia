import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const SYNC_SECRET = process.env.SYNC_SECRET;

export async function POST(req: NextRequest) {
  if (!SYNC_SECRET) {
    return NextResponse.json(
      { error: "Sync no configurado en el servidor" },
      { status: 503 }
    );
  }
  const secret = req.headers.get("x-sync-secret");
  if (secret !== SYNC_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { articles } = await req.json();
  if (!Array.isArray(articles)) {
    return NextResponse.json({ error: "articles must be an array" }, { status: 400 });
  }

  const results = [];
  for (const a of articles) {
    const baseSlug = a.slug || `articulo-${Date.now()}`;
    let slug = baseSlug;
    const existing = await prisma.article.findUnique({ where: { slug } });
    if (existing) slug = `${baseSlug}-${Date.now()}`;

    const created = await prisma.article.create({
      data: {
        title: a.title || "Sin título",
        slug,
        excerpt: a.excerpt ?? "",
        content: a.content ?? "",
        category: a.category ?? "Divisas",
        author: a.author ?? "Equipo DivisaChile",
        tags: a.tags ?? [],
        metaTitle: a.metaTitle ?? "",
        metaDescription: a.metaDescription ?? "",
        metaKeywords: a.metaKeywords ?? "",
        featuredImage: a.featuredImage ?? "",
        featuredImageAlt: a.featuredImageAlt ?? "",
        status: a.status ?? "draft",
      },
    });
    results.push({ id: created.id, title: created.title, slug: created.slug });
  }

  return NextResponse.json({ synced: results.length, articles: results });
}
