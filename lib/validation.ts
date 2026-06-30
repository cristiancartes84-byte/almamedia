import { z } from 'zod';

export const articleInputSchema = z.object({
  title: z.string().min(1).max(300),
  slug: z.string().max(300).optional(),
  excerpt: z.string().max(1000).optional().default(''),
  content: z.string().max(10_000_000).optional().default(''),
  category: z.string().max(100).optional().default('Divisas'),
  author: z.string().max(150).optional().default('Equipo DivisaChile'),
  tags: z.array(z.string().max(50)).optional().default([]),
  metaTitle: z.string().max(300).optional().default(''),
  metaDescription: z.string().max(500).optional().default(''),
  metaKeywords: z.string().max(500).optional().default(''),
  featuredImage: z.string().max(5_000_000).optional().default(''),
  featuredImageAlt: z.string().max(300).optional().default(''),
  status: z.enum(['draft', 'published']).optional().default('draft'),
});

export type ArticleInput = z.infer<typeof articleInputSchema>;
