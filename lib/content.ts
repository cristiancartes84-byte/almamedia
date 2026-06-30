export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(html: string): Heading[] {
  const matches = [...html.matchAll(/<h([2-4])[^>]*>([\s\S]*?)<\/h[2-4]>/gi)];
  return matches.map((match, i) => ({
    id: `toc-heading-${i}`,
    text: match[2].replace(/<[^>]*>/g, "").trim(),
    level: parseInt(match[1]),
  }));
}

export function injectHeadingIds(html: string): string {
  let i = 0;
  return html.replace(/<h([2-4])([^>]*)>/gi, (_match, level, attrs) => {
    return `<h${level}${attrs} id="toc-heading-${i++}">`;
  });
}
