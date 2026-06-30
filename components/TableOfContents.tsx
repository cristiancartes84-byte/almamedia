'use client';

import { useState } from 'react';
import type { Heading } from '@/lib/content';
export { extractHeadings, injectHeadingIds } from '@/lib/content';

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [open, setOpen] = useState(true);

  if (headings.length < 2) return null;

  return (
    <nav className="bg-gray-50 border border-gray-200 rounded-xl mb-8 overflow-hidden">
      {/* Header clickeable */}
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-100 transition-colors"
      >
        <span className="text-base font-bold text-gray-900 flex items-center gap-2">
          <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h10" />
          </svg>
          Tabla de Contenidos
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Contenido colapsable */}
      {open && (
        <ol className="px-5 pb-4 space-y-1.5 border-t border-gray-200 pt-3">
          {headings.map((h, i) => (
            <li key={h.id} style={{ paddingLeft: `${(h.level - 2) * 16}px` }}>
              <a
                href={`#${h.id}`}
                className="text-sm text-green-800 hover:text-green-600 flex items-start gap-2 group"
              >
                <span className="text-gray-400 font-mono text-xs mt-0.5 min-w-[18px]">{i + 1}.</span>
                <span className="group-hover:underline">{h.text}</span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
