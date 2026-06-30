import sanitize from 'sanitize-html';

export function sanitizeHtml(html: string): string {
  return sanitize(html, {
    allowedTags: [
      'p', 'br', 'strong', 'em', 'u', 's', 'blockquote', 'pre', 'code',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'a', 'img', 'figure', 'figcaption', 'span', 'div',
    ],
    allowedAttributes: {
      'a': ['href', 'title', 'target', 'rel'],
      'img': ['src', 'alt', 'title', 'width', 'height', 'style'],
      '*': ['id', 'class', 'data-align', 'style'],
    },
    allowedStyles: {
      '*': {
        'text-align': [/^left$/, /^right$/, /^center$/, /^justify$/],
        'color': [/^#[0-9a-fA-F]{3,6}$/, /^rgb\(\d+,\s*\d+,\s*\d+\)$/],
      },
      'img': {
        'width': [/^\d+(%|px|em|rem|vw)?$/],
        'height': [/^\d+(%|px|em|rem|vw|auto)?$/],
        'max-width': [/^\d+(%|px|em|rem|vw)?$/, /^100%$/],
        'display': [/^block$/, /^inline$/, /^inline-block$/],
        'margin': [/^[\d\s]+(px|em|rem|%|auto)*$/],
      },
    },
    // Permite data:image/* URIs en src de <img> (imágenes subidas como base64)
    // data: es seguro en img — no ejecuta scripts como sí lo haría en href
    allowedSchemesByTag: {
      img: ['http', 'https', 'data'],
    },
  });
}
