export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage?: string;
  tags: string[];
  views: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface FinancialData {
  indicator: string;
  value: number;
  unit: string;
  date: string;
  change?: number;
  source: string;
}

export interface ConversionResult {
  from: string;
  to: string;
  amount: number;
  result: number;
  rate: number;
  timestamp: string;
}
