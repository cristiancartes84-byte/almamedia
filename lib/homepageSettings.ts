export interface HomepageSettings {
  maxArticles: number;
  categories: string[];
  displayMode: 'grid' | 'cluster';
}

const KEY = 'divisachile_homepage_settings';

const DEFAULT: HomepageSettings = {
  maxArticles: 6,
  categories: [],
  displayMode: 'grid',
};

export function getHomepageSettings(): HomepageSettings {
  if (typeof window === 'undefined') return DEFAULT;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULT, ...JSON.parse(raw) } : DEFAULT;
  } catch {
    return DEFAULT;
  }
}

export function saveHomepageSettings(settings: HomepageSettings): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(settings));
}
