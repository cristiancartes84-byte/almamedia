'use client';

import Link from 'next/link';
import type { Article } from '@/types';
import { formatDate, truncate, readingTime } from '@/lib/utils';

interface ArticleGridProps {
  articles: Article[];
  title?: string;
}

export default function ArticleGrid({ articles, title = 'Últimas Guías y Noticias' }: ArticleGridProps) {
  return (
    <section className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <div className="h-1 w-20 bg-tertiary rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map(article => (
          <article
            key={article.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100 group"
          >
            {/* Imagen placeholder */}
            <div className="bg-gradient-to-br from-primary-900 to-tertiary h-48 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <svg className="w-16 h-16 text-white/30 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>

            <div className="p-6">
              {/* Categoría */}
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-secondary text-primary-900 px-3 py-1 rounded-full text-xs font-semibold">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500">
                  {readingTime(article.content)} min lectura
                </span>
              </div>

              {/* Título */}
              <Link href={`/${article.slug}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-tertiary transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {article.author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-gray-900">{article.author}</div>
                    <div className="text-gray-500">{formatDate(article.publishedAt)}</div>
                  </div>
                </div>

                <Link
                  href={`/${article.slug}`}
                  className="text-tertiary font-semibold text-sm hover:underline flex items-center gap-1"
                >
                  Leer más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Ver todos */}
      <div className="text-center mt-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-primary-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-tertiary transition-colors"
        >
          Ver Todas las Guías
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
