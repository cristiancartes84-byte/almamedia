"use client";

import React, { useState, useEffect } from "react";

interface RankMathSidebarProps {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  articleTitle: string;
  articleSlug: string;
  articleContent: string;
  articleExcerpt: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  onChange: (field: string, value: string) => void;
}

interface SEOTest {
  id: string;
  label: string;
  status: 'pass' | 'warning' | 'fail';
  message: string;
  points: number;
  maxPoints: number;
}

export default function RankMathSidebar({
  metaTitle,
  metaDescription,
  metaKeywords,
  articleTitle,
  articleSlug,
  articleContent,
  articleExcerpt,
  featuredImage,
  featuredImageAlt,
  onChange,
}: RankMathSidebarProps) {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [openSection, setOpenSection] = useState<string | null>("basic");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [score, setScore] = useState(0);
  const [tests, setTests] = useState<SEOTest[]>([]);
  // Cuando hay metaTitle pre-existente (artículo en edición), no sobreescribir
  const [metaTitleEdited, setMetaTitleEdited] = useState(() => !!metaTitle);

  // Inicializar keywords desde metaKeywords
  useEffect(() => {
    if (metaKeywords) {
      const kws = metaKeywords.split(',').map(k => k.trim()).filter(Boolean);
      setKeywords(kws);
      if (kws.length > 0 && !focusKeyword) {
        setFocusKeyword(kws[0]);
      }
    }
  }, [metaKeywords, focusKeyword]);

  // Seguir el Título del artículo en tiempo real mientras el usuario no edite Título SEO manualmente
  useEffect(() => {
    if (!metaTitleEdited) {
      onChange('metaTitle', articleTitle);
    }
  }, [articleTitle, metaTitleEdited, onChange]);

  // Calcular score SEO en tiempo real
  useEffect(() => {
    const newTests: SEOTest[] = [];
    let totalScore = 0;
    let maxScore = 0;

    const title = metaTitle || articleTitle;
    const description = metaDescription || articleExcerpt;
    const content = articleContent;
    const slug = articleSlug;
    const primaryKeyword = focusKeyword || keywords[0] || '';

    // Helper functions
    const normalizeText = (text: string) => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const containsKeyword = (text: string, keyword: string) => {
      if (!keyword) return false;
      return normalizeText(text).includes(normalizeText(keyword));
    };
    const stripHtml = (html: string) =>
      html.replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim();
    const wordCount = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;
    const plainContent = stripHtml(content);

    // 1. KEYWORD IN TITLE (10 points)
    maxScore += 10;
    if (primaryKeyword && containsKeyword(title, primaryKeyword)) {
      const titleWords = title.toLowerCase().split(/\s+/);
      const keywordPosition = titleWords.findIndex(word => containsKeyword(word, primaryKeyword));
      const titleLength = titleWords.length;
      const isInFirstHalf = keywordPosition < titleLength / 2;

      if (isInFirstHalf) {
        newTests.push({
          id: 'keyword-in-title',
          label: 'Keyword en Título SEO',
          status: 'pass',
          message: `✅ Keyword "${primaryKeyword}" en la primera mitad del título`,
          points: 10,
          maxPoints: 10
        });
        totalScore += 10;
      } else {
        newTests.push({
          id: 'keyword-in-title',
          label: 'Keyword en Título SEO',
          status: 'warning',
          message: `⚠️ Mueve "${primaryKeyword}" al inicio del título`,
          points: 5,
          maxPoints: 10
        });
        totalScore += 5;
      }
    } else {
      newTests.push({
        id: 'keyword-in-title',
        label: 'Keyword en Título SEO',
        status: 'fail',
        message: primaryKeyword ? `❌ "${primaryKeyword}" no está en el título` : '❌ Define una keyword',
        points: 0,
        maxPoints: 10
      });
    }

    // 2. KEYWORD IN META DESCRIPTION (10 points)
    maxScore += 10;
    if (primaryKeyword && containsKeyword(description, primaryKeyword)) {
      const descWords = description.split(/\s+/);
      const keywordAt = descWords.findIndex(word => containsKeyword(word, primaryKeyword));
      const isInFirst20 = keywordAt < 20;

      if (isInFirst20) {
        newTests.push({
          id: 'keyword-in-desc',
          label: 'Keyword en Meta Description',
          status: 'pass',
          message: `✅ Keyword en las primeras 20 palabras`,
          points: 10,
          maxPoints: 10
        });
        totalScore += 10;
      } else {
        newTests.push({
          id: 'keyword-in-desc',
          label: 'Keyword en Meta Description',
          status: 'warning',
          message: `⚠️ Mueve keyword a las primeras 20 palabras`,
          points: 5,
          maxPoints: 10
        });
        totalScore += 5;
      }
    } else {
      newTests.push({
        id: 'keyword-in-desc',
        label: 'Keyword en Meta Description',
        status: 'fail',
        message: `❌ Agrega "${primaryKeyword}" en la descripción`,
        points: 0,
        maxPoints: 10
      });
    }

    // 3. KEYWORD IN URL (10 points)
    // Convierte espacios a guiones para comparar keyword con slug (ej: "dólar peso" → "dolar-peso")
    const keywordAsSlug = normalizeText(primaryKeyword).replace(/\s+/g, '-');
    maxScore += 10;
    if (primaryKeyword && normalizeText(slug).includes(keywordAsSlug)) {
      newTests.push({
        id: 'keyword-in-url',
        label: 'Keyword en URL',
        status: 'pass',
        message: `✅ Keyword presente en la URL`,
        points: 10,
        maxPoints: 10
      });
      totalScore += 10;
    } else {
      newTests.push({
        id: 'keyword-in-url',
        label: 'Keyword en URL',
        status: 'fail',
        message: `❌ Incluye "${primaryKeyword}" en la URL`,
        points: 0,
        maxPoints: 10
      });
    }

    // 4. KEYWORD AT BEGINNING OF CONTENT (10 points)
    maxScore += 10;
    if (primaryKeyword && plainContent) {
      const contentWords = wordCount(plainContent);
      const first10Percent = Math.max(50, Math.floor(contentWords * 0.1));
      const firstPart = plainContent.split(/\s+/).slice(0, first10Percent).join(' ');

      if (containsKeyword(firstPart, primaryKeyword)) {
        newTests.push({
          id: 'keyword-in-intro',
          label: 'Keyword al inicio del contenido',
          status: 'pass',
          message: `✅ Keyword en el primer 10% del contenido`,
          points: 10,
          maxPoints: 10
        });
        totalScore += 10;
      } else {
        newTests.push({
          id: 'keyword-in-intro',
          label: 'Keyword al inicio del contenido',
          status: 'fail',
          message: `❌ Usa "${primaryKeyword}" en el primer párrafo`,
          points: 0,
          maxPoints: 10
        });
      }
    } else {
      newTests.push({
        id: 'keyword-in-intro',
        label: 'Keyword al inicio del contenido',
        status: 'fail',
        message: '❌ Sin contenido o keyword',
        points: 0,
        maxPoints: 10
      });
    }

    // 5. CONTENT LENGTH (15 points)
    maxScore += 15;
    const contentWordCount = wordCount(plainContent);
    let lengthPoints = 0;
    let lengthStatus: 'pass' | 'warning' | 'fail' = 'fail';
    let lengthMessage = '';

    if (contentWordCount >= 2500) {
      lengthPoints = 15;
      lengthStatus = 'pass';
      lengthMessage = `✅ Excelente: ${contentWordCount} palabras`;
    } else if (contentWordCount >= 2000) {
      lengthPoints = 12;
      lengthStatus = 'pass';
      lengthMessage = `✅ Muy bien: ${contentWordCount} palabras`;
    } else if (contentWordCount >= 1500) {
      lengthPoints = 10;
      lengthStatus = 'warning';
      lengthMessage = `⚠️ Bueno: ${contentWordCount} palabras. Ideal: 2500+`;
    } else if (contentWordCount >= 1000) {
      lengthPoints = 7;
      lengthStatus = 'warning';
      lengthMessage = `⚠️ Regular: ${contentWordCount} palabras`;
    } else if (contentWordCount >= 600) {
      lengthPoints = 4;
      lengthStatus = 'warning';
      lengthMessage = `⚠️ Mínimo: ${contentWordCount} palabras`;
    } else {
      lengthPoints = 0;
      lengthStatus = 'fail';
      lengthMessage = `❌ Muy corto: ${contentWordCount} palabras`;
    }

    newTests.push({
      id: 'content-length',
      label: 'Longitud del contenido',
      status: lengthStatus,
      message: lengthMessage,
      points: lengthPoints,
      maxPoints: 15
    });
    totalScore += lengthPoints;

    // 6. KEYWORD IN HEADINGS (8 points)
    maxScore += 8;
    // Content is HTML from Tiptap — use HTML tag regex
    const headings = content.match(/<h[234][^>]*>(.*?)<\/h[234]>/gi) || [];
    const hasKeywordInHeading = headings.some(h => containsKeyword(h.replace(/<[^>]*>/g, ''), primaryKeyword));

    if (hasKeywordInHeading) {
      newTests.push({
        id: 'keyword-in-headings',
        label: 'Keyword en subtítulos',
        status: 'pass',
        message: `✅ Keyword en ${headings.length} subtítulos`,
        points: 8,
        maxPoints: 8
      });
      totalScore += 8;
    } else if (headings.length === 0) {
      newTests.push({
        id: 'keyword-in-headings',
        label: 'Keyword en subtítulos',
        status: 'fail',
        message: '❌ Agrega subtítulos H2/H3',
        points: 0,
        maxPoints: 8
      });
    } else {
      newTests.push({
        id: 'keyword-in-headings',
        label: 'Keyword en subtítulos',
        status: 'warning',
        message: `⚠️ Incluye "${primaryKeyword}" en H2 o H3`,
        points: 3,
        maxPoints: 8
      });
      totalScore += 3;
    }

    // 7. KEYWORD DENSITY (7 points)
    maxScore += 7;
    if (primaryKeyword && contentWordCount > 0) {
      const kwPattern = normalizeText(primaryKeyword).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const keywordMatches = (normalizeText(plainContent).match(new RegExp(kwPattern, 'g')) || []).length;
      const density = (keywordMatches / contentWordCount) * 100;

      if (density >= 0.5 && density <= 1.5) {
        newTests.push({
          id: 'keyword-density',
          label: 'Densidad de keyword',
          status: 'pass',
          message: `✅ Óptima: ${density.toFixed(2)}%`,
          points: 7,
          maxPoints: 7
        });
        totalScore += 7;
      } else if (density > 1.5 && density <= 2.5) {
        newTests.push({
          id: 'keyword-density',
          label: 'Densidad de keyword',
          status: 'warning',
          message: `⚠️ Alta: ${density.toFixed(2)}%`,
          points: 4,
          maxPoints: 7
        });
        totalScore += 4;
      } else if (density > 2.5) {
        newTests.push({
          id: 'keyword-density',
          label: 'Densidad de keyword',
          status: 'fail',
          message: `❌ Muy alta: ${density.toFixed(2)}%`,
          points: 0,
          maxPoints: 7
        });
      } else {
        newTests.push({
          id: 'keyword-density',
          label: 'Densidad de keyword',
          status: 'fail',
          message: `❌ Muy baja: ${density.toFixed(2)}%`,
          points: 0,
          maxPoints: 7
        });
      }
    } else {
      newTests.push({
        id: 'keyword-density',
        label: 'Densidad de keyword',
        status: 'fail',
        message: '❌ Sin keyword o contenido',
        points: 0,
        maxPoints: 7
      });
    }

    // 8. URL LENGTH (5 points)
    maxScore += 5;
    const fullUrl = `divisachile.cl/${slug}`;
    if (fullUrl.length <= 75) {
      newTests.push({
        id: 'url-length',
        label: 'Longitud de URL',
        status: 'pass',
        message: `✅ URL corta: ${fullUrl.length} caracteres`,
        points: 5,
        maxPoints: 5
      });
      totalScore += 5;
    } else {
      newTests.push({
        id: 'url-length',
        label: 'Longitud de URL',
        status: 'fail',
        message: `❌ URL larga: ${fullUrl.length} chars. Máx: 75`,
        points: 0,
        maxPoints: 5
      });
    }

    // 9. EXTERNAL LINKS (5 points)
    maxScore += 5;
    // HTML href attributes (Tiptap generates <a href="...">)
    const externalLinks = (content.match(/href="https?:\/\/[^"]*"/gi) || []).filter(link =>
      !link.includes('divisachile.cl')
    );

    if (externalLinks.length >= 1) {
      newTests.push({
        id: 'external-links',
        label: 'Enlaces externos',
        status: 'pass',
        message: `✅ ${externalLinks.length} enlace(s) externo(s)`,
        points: 5,
        maxPoints: 5
      });
      totalScore += 5;
    } else {
      newTests.push({
        id: 'external-links',
        label: 'Enlaces externos',
        status: 'fail',
        message: '❌ Agrega enlace a fuente autorizada',
        points: 0,
        maxPoints: 5
      });
    }

    // 10. INTERNAL LINKS (5 points)
    maxScore += 5;
    const internalLinks = (content.match(/href="\/[^"]*"/gi) || []);

    if (internalLinks.length >= 1) {
      newTests.push({
        id: 'internal-links',
        label: 'Enlaces internos',
        status: 'pass',
        message: `✅ ${internalLinks.length} enlace(s) interno(s)`,
        points: 5,
        maxPoints: 5
      });
      totalScore += 5;
    } else {
      newTests.push({
        id: 'internal-links',
        label: 'Enlaces internos',
        status: 'fail',
        message: '❌ Enlaza a otras páginas del sitio',
        points: 0,
        maxPoints: 5
      });
    }

    // 11. IMAGE WITH ALT (5 points)
    maxScore += 5;
    if (featuredImage && featuredImageAlt && containsKeyword(featuredImageAlt, primaryKeyword)) {
      newTests.push({
        id: 'image-alt',
        label: 'Imagen con Alt Text',
        status: 'pass',
        message: `✅ Imagen con keyword en alt text`,
        points: 5,
        maxPoints: 5
      });
      totalScore += 5;
    } else if (featuredImage && featuredImageAlt) {
      newTests.push({
        id: 'image-alt',
        label: 'Imagen con Alt Text',
        status: 'warning',
        message: `⚠️ Incluye "${primaryKeyword}" en alt text`,
        points: 2,
        maxPoints: 5
      });
      totalScore += 2;
    } else if (featuredImage) {
      newTests.push({
        id: 'image-alt',
        label: 'Imagen con Alt Text',
        status: 'warning',
        message: '⚠️ Agrega alt text a la imagen',
        points: 1,
        maxPoints: 5
      });
      totalScore += 1;
    } else {
      newTests.push({
        id: 'image-alt',
        label: 'Imagen con Alt Text',
        status: 'fail',
        message: '❌ Agrega imagen destacada',
        points: 0,
        maxPoints: 5
      });
    }

    // 12. POWER WORD (5 points)
    maxScore += 5;
    const powerWords = ['mejor', 'completa', 'definitiva', 'oficial', 'gratis', 'actualizado', 'guía', 'top', 'experto', 'probado', 'exclusivo'];
    const hasPowerWord = powerWords.some(pw => containsKeyword(title, pw));

    if (hasPowerWord) {
      newTests.push({
        id: 'power-word',
        label: 'Power Word en título',
        status: 'pass',
        message: '✅ Título persuasivo',
        points: 5,
        maxPoints: 5
      });
      totalScore += 5;
    } else {
      newTests.push({
        id: 'power-word',
        label: 'Power Word en título',
        status: 'warning',
        message: '⚠️ Agrega: mejor, completa, guía...',
        points: 0,
        maxPoints: 5
      });
    }

    // 13. NUMBER IN TITLE (5 points)
    maxScore += 5;
    const hasNumber = /\d/.test(title);

    if (hasNumber) {
      newTests.push({
        id: 'number-in-title',
        label: 'Número en título',
        status: 'pass',
        message: '✅ Título incluye número',
        points: 5,
        maxPoints: 5
      });
      totalScore += 5;
    } else {
      newTests.push({
        id: 'number-in-title',
        label: 'Número en título',
        status: 'warning',
        message: '⚠️ Incluye año o cantidad',
        points: 0,
        maxPoints: 5
      });
    }

    setTests(newTests);
    setScore(Math.round((totalScore / maxScore) * 100));
  }, [metaTitle, metaDescription, articleTitle, articleContent, articleExcerpt, articleSlug, focusKeyword, keywords, featuredImage, featuredImageAlt]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const kw = inputValue.trim();
      if (kw && !keywords.includes(kw)) {
        const newKeywords = [...keywords, kw];
        setKeywords(newKeywords);
        onChange('metaKeywords', newKeywords.join(', '));
        if (!focusKeyword) {
          setFocusKeyword(kw);
        }
      }
      setInputValue("");
    }
  };

  const removeKeyword = (kw: string) => {
    const newKeywords = keywords.filter(k => k !== kw);
    setKeywords(newKeywords);
    onChange('metaKeywords', newKeywords.join(', '));
  };

  const displayTitle = metaTitle || articleTitle || "Título del artículo";
  const displayDesc = metaDescription || articleExcerpt || "Descripción del artículo...";
  const displaySlug = articleSlug || "url-del-articulo";

  const scoreColor = score >= 81 ? 'bg-green-600' : score >= 51 ? 'bg-yellow-500' : 'bg-red-600';

  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col text-sm text-gray-700 font-sans sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">

      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="font-bold text-base">Alma SEO</h2>
        <div className={`${scoreColor} text-white font-bold px-3 py-1 rounded-full text-sm`}>
          {score} / 100
        </div>
      </div>

      {/* Score Bar */}
      <div className="px-5 py-3 border-b border-gray-200">
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className={`h-full ${scoreColor} transition-all duration-500`}
            style={{ width: `${score}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center font-medium">
          {score >= 81 ? '🎉 ¡Excelente!' : score >= 51 ? '⚠️ Necesita mejoras' : '❌ Requiere trabajo'}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 px-5 pt-2 gap-4 text-gray-500 text-sm">
        <button className="border-b-2 border-blue-500 text-blue-600 pb-2 font-semibold">⚙️ General</button>
      </div>

      <div className="px-5 py-4 space-y-5 flex-1 overflow-y-auto">

        {/* Vista previa Google */}
        <div>
          <h3 className="font-semibold mb-2 text-xs text-gray-500 uppercase tracking-wide">Vista Previa Google</h3>
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <p className="text-blue-600 text-sm font-medium truncate hover:underline cursor-pointer">
              {displayTitle}
            </p>
            <p className="text-green-700 text-xs truncate mt-0.5">divisachile.cl › {displaySlug}</p>
            <p className="text-gray-600 text-xs mt-1 line-clamp-2">{displayDesc}</p>
          </div>
        </div>

        {/* Focus Keyword */}
        <div>
          <label className="block font-semibold mb-1.5 text-sm">🎯 Keyword Principal</label>
          <input
            type="text"
            value={focusKeyword}
            onChange={(e) => setFocusKeyword(e.target.value)}
            placeholder="Ej: dolar chile"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <p className="text-xs text-gray-500 mt-1">Define tu palabra clave objetivo</p>
        </div>

        {/* Slug */}
        <div>
          <label className="block font-semibold mb-1.5 text-sm">URL (Slug)</label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            <span className="px-3 py-2 text-sm text-gray-400 bg-gray-50 border-r border-gray-300">/</span>
            <input
              type="text"
              value={articleSlug}
              onChange={e => onChange('slug', e.target.value)}
              placeholder="mi-articulo"
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>

        {/* Meta Title */}
        <div>
          <label className="block font-semibold mb-1.5 text-sm">Título SEO</label>
          <input
            type="text"
            value={metaTitle}
            onChange={e => {
              const val = e.target.value;
              setMetaTitleEdited(val.length > 0);
              onChange('metaTitle', val);
            }}
            maxLength={60}
            placeholder={articleTitle || "Título optimizado para SEO"}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <p className={`text-xs mt-1 ${metaTitle.length > 60 ? 'text-red-600' : 'text-gray-500'}`}>
            {metaTitle.length} / 60 caracteres
          </p>
        </div>

        {/* Meta Description */}
        <div>
          <label className="block font-semibold mb-1.5 text-sm">Meta Description</label>
          <textarea
            value={metaDescription}
            onChange={e => onChange('metaDescription', e.target.value)}
            maxLength={155}
            rows={3}
            placeholder={articleExcerpt || "Descripción para resultados de búsqueda"}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          />
          <p className={`text-xs mt-1 ${metaDescription.length > 155 ? 'text-red-600' : 'text-gray-500'}`}>
            {metaDescription.length} / 155 caracteres
          </p>
        </div>

        {/* Keywords */}
        <div>
          <label className="block font-semibold mb-1.5 text-sm">Palabras clave</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {keywords.map((kw, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                  i === 0 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                }`}
              >
                {i === 0 && <span className="text-yellow-500">★</span>}
                {kw}
                <button onClick={() => removeKeyword(kw)} className="hover:text-red-600 ml-0.5">✕</button>
              </span>
            ))}
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe y presiona Enter"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <p className="text-xs text-gray-500 mt-1">La primera keyword es la principal (★)</p>
        </div>

        {/* SEO Tests Accordion */}
        <div>
          <button
            onClick={() => toggleSection('basic')}
            className="w-full flex items-center justify-between py-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
          >
            <span>📊 ALMA SEO ({tests.filter(t => t.status === 'pass').length}/{tests.length} checks)</span>
            <svg className={`w-4 h-4 transition-transform ${openSection === 'basic' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {openSection === 'basic' && (
            <div className="space-y-1.5 mt-2">
              {tests.map(test => (
                <div key={test.id} className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100">
                  <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-0.5 ${
                    test.status === 'pass' ? 'bg-green-500' : test.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}>
                    {test.status === 'pass' ? '✓' : test.status === 'warning' ? '!' : '✕'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium text-gray-900 leading-snug">{test.label}</p>
                      <span className="text-xs text-gray-400 whitespace-nowrap">{test.points}/{test.maxPoints}pts</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5 leading-snug">{test.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
