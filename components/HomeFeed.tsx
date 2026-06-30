'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { formatDate, readingTime } from '@/lib/utils';
import { getHomepageSettings, type HomepageSettings } from '@/lib/homepageSettings';

export interface FeedArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string | Date;
  featuredImage?: string;
  tags: string[];
}

function ArticleCard({ article }: { article: FeedArticle }) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100 group">
      <div className="relative h-48 overflow-hidden">
        {article.featuredImage ? (
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={e => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = 'none';
              el.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={`${article.featuredImage ? 'hidden' : ''} absolute inset-0 bg-gradient-to-br from-primary-900 to-tertiary flex items-center justify-center`}>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <svg className="w-16 h-16 text-white/30 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-secondary text-primary-900 px-3 py-1 rounded-full text-xs font-semibold">
            {article.category}
          </span>
          <span className="text-xs text-gray-500">
            {readingTime(article.content)} min lectura
          </span>
        </div>

        <Link href={`/articulos/${article.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-tertiary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{article.author.charAt(0)}</span>
            </div>
            <div className="text-xs">
              <div className="font-medium text-gray-900">{article.author}</div>
              <div className="text-gray-500">{formatDate(String(article.publishedAt))}</div>
            </div>
          </div>
          <Link href={`/articulos/${article.slug}`} className="text-tertiary font-semibold text-sm hover:underline flex items-center gap-1">
            Leer más
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

function ViewAllButton() {
  return (
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
  );
}

export default function HomeFeed({ articles }: { articles: FeedArticle[] }) {
  const [settings, setSettings] = useState<HomepageSettings>({
    maxArticles: 6,
    categories: [],
    displayMode: 'grid',
  });

  useEffect(() => {
    setSettings(getHomepageSettings());
  }, []);

  // Filtrar artículos según configuración
  const filteredArticles = articles
    .filter(a => {
      // Si no hay categorías seleccionadas, mostrar todas
      if (settings.categories.length === 0) return true;
      // Si hay categorías seleccionadas, filtrar por ellas
      return settings.categories.includes(a.category);
    })
    .slice(0, settings.maxArticles);

  // Agrupar por categoría para modo cluster
  const articlesByCategory: Record<string, FeedArticle[]> = {};
  if (settings.displayMode === 'cluster') {
    filteredArticles.forEach(article => {
      if (!articlesByCategory[article.category]) {
        articlesByCategory[article.category] = [];
      }
      articlesByCategory[article.category].push(article);
    });
  }

  return (
    <section className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Últimas Guías y Noticias</h2>
        <div className="h-1 w-20 bg-tertiary rounded" />
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-lg font-medium text-gray-500">No hay artículos publicados en las categorías seleccionadas</p>
          <p className="text-sm mt-1">Cambia el filtro de categorías en el mantenedor del inicio.</p>
        </div>
      ) : settings.displayMode === 'cluster' ? (
        // Modo Cluster: Agrupado por categoría
        <>
          {Object.entries(articlesByCategory).map(([category, categoryArticles]) => (
            <div key={category} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-tertiary to-transparent" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categoryArticles.map(a => <ArticleCard key={a.id} article={a} />)}
              </div>
            </div>
          ))}
          <ViewAllButton />
        </>
      ) : (
        // Modo Grid: Todo unificado
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map(a => <ArticleCard key={a.id} article={a} />)}
          </div>
          <ViewAllButton />
        </>
      )}
    </section>
  );
}
