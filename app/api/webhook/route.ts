import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-webhook-secret");
  if (!secret || secret !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: {
    title: string;
    slug?: string;
    content?: string;
    excerpt?: string;
    category?: string;
    author?: string;
    status?: "draft" | "published";
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    tags?: string[];
    featuredImage?: string;
    featuredImageAlt?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const {
    title,
    content = "",
    excerpt = "",
    category = "Divisas",
    author = "Equipo DivisaChile",
    status = "draft",
    metaTitle = "",
    metaDescription = "",
    metaKeywords = "",
    tags = [],
    featuredImage = "",
    featuredImageAlt = "",
  } = body;

  if (!title) {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }

  const generateSlug = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 55);

  const baseSlug = body.slug ? generateSlug(body.slug) : generateSlug(title);

  const buildData = (slug: string) => ({
    title,
    slug,
    content,
    excerpt: excerpt || content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160),
    category,
    author,
    tags,
    metaTitle: metaTitle || title,
    metaDescription: metaDescription || excerpt,
    metaKeywords,
    featuredImage,
    featuredImageAlt,
    status,
  });

  try {
    const article = await prisma.article.upsert({
      where: { slug: baseSlug },
      update: buildData(baseSlug),
      create: buildData(baseSlug),
    });
    return NextResponse.json({ success: true, id: article.id, slug: article.slug }, { status: 201 });
  } catch (err: unknown) {
    console.error("POST /api/webhook error:", err);
    return NextResponse.json({ error: "Error al crear el artículo" }, { status: 500 });
  }
}
