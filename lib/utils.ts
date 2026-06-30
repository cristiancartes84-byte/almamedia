/**
 * Formatea números en formato chileno (punto para miles, coma para decimales)
 * Ejemplo: 1234567.89 → "1.234.567,89"
 */
export function formatChileanNumber(num: number, decimals: number = 2): string {
  const fixed = num.toFixed(decimals);
  const [integer, decimal] = fixed.split('.');

  // Agregar puntos para separar miles
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Retornar con coma decimal si hay decimales
  return decimal ? `${formattedInteger},${decimal}` : formattedInteger;
}

/**
 * Formatea montos en pesos chilenos
 * Ejemplo: 924.50 → "$924,50"
 */
export function formatCLP(amount: number, includeSymbol: boolean = true): string {
  const formatted = formatChileanNumber(amount, 2);
  return includeSymbol ? `$${formatted}` : formatted;
}

/**
 * Formatea porcentajes
 * Ejemplo: 0.25 → "+0,25%"
 */
export function formatPercent(value: number, decimals: number = 2): string {
  const sign = value > 0 ? '+' : '';
  return `${sign}${formatChileanNumber(value, decimals)}%`;
}

/**
 * Formatea fechas en español
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Genera slug a partir de texto
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // Quitar acentos
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Trunca texto agregando "..."
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Calcula tiempo de lectura estimado
 */
export function readingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
