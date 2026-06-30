const STORAGE_KEY = 'divisachile_articles';

export interface StoredArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  featuredImage: string;
  featuredImageAlt: string;
  status: 'published' | 'draft';
  publishedAt: string;
  updatedAt: string;
}

export function getStoredArticles(): StoredArticle[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function saveArticle(data: Omit<StoredArticle, 'id' | 'publishedAt' | 'updatedAt'>): StoredArticle {
  const articles = getStoredArticles();
  const now = new Date().toISOString();
  const article: StoredArticle = {
    ...data,
    id: `local-${Date.now()}`,
    publishedAt: now,
    updatedAt: now,
  };
  articles.unshift(article);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  return article;
}

export function updateArticle(id: string, data: Omit<StoredArticle, 'id' | 'publishedAt' | 'updatedAt'>): StoredArticle | null {
  const articles = getStoredArticles();
  const index = articles.findIndex(a => a.id === id);
  if (index === -1) return null;
  const updated: StoredArticle = {
    ...articles[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  articles[index] = updated;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  return updated;
}

export function deleteStoredArticle(id: string): void {
  const articles = getStoredArticles().filter(a => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

const HIDDEN_MOCKS_KEY = 'divisachile_hidden_mocks';

export function getHiddenMockIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(HIDDEN_MOCKS_KEY) || '[]');
  } catch {
    return [];
  }
}

export function hideMockArticle(id: string): void {
  const hidden = getHiddenMockIds();
  if (!hidden.includes(id)) {
    hidden.push(id);
    localStorage.setItem(HIDDEN_MOCKS_KEY, JSON.stringify(hidden));
  }
}
