"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useCallback, useState, useRef } from "react";

export interface HtmlImportData {
  title?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
  featuredImageAlt?: string;
}

function extractFromHtml(rawHtml: string): HtmlImportData {
  const parser = new DOMParser();
  const doc = parser.parseFromString(rawHtml, 'text/html');

  const metaTitle =
    doc.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
    doc.querySelector('title')?.textContent?.trim() || '';

  const metaDescription =
    doc.querySelector('meta[name="description"]')?.getAttribute('content') ||
    doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';

  const metaKeywords =
    doc.querySelector('meta[name="keywords"]')?.getAttribute('content') || '';

  const ogImage =
    doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

  const title =
    doc.querySelector('h1')?.textContent?.trim() ||
    doc.querySelector('title')?.textContent?.trim() || '';

  // Prefer <article> or <main> for content, fallback to <body>
  const contentEl =
    doc.querySelector('article') ||
    doc.querySelector('main') ||
    doc.body;
  const content = contentEl?.innerHTML?.trim() || rawHtml;

  // Excerpt from first <p>
  const firstP = contentEl?.querySelector('p');
  const excerpt = (firstP?.textContent || doc.body?.textContent || '').trim().substring(0, 300);

  // Featured image: og:image first, then first <img> in content
  const firstImg = contentEl?.querySelector('img');
  const featuredImage = ogImage || firstImg?.getAttribute('src') || '';
  const featuredImageAlt = firstImg?.getAttribute('alt') || '';

  return { title, metaTitle: metaTitle || title, metaDescription, metaKeywords, excerpt, content, featuredImage, featuredImageAlt };
}

export interface SelectedImageAttrs {
  src: string;
  alt: string;
  title: string;
}

interface ClassicEditorProps {
  initialValue?: string;
  onChange: (content: string) => void;
  onHtmlImport?: (data: HtmlImportData) => void;
  onImageSelect?: (attrs: SelectedImageAttrs | null) => void;
  pendingImageUpdate?: { alt: string; title: string } | null;
}

// Interfaz para las imágenes de la galería
interface GalleryImage {
  id: string;
  src: string;
  name: string;
  uploadedAt: string;
}

// Extensión personalizada de Image con redimensionamiento.
// parseHTML sobrescrito para aceptar data: URIs — sin esto Tiptap ignora las
// imágenes base64 al cargar contenido guardado (comportamiento por defecto: allowBase64=false).
const ResizableImage = Image.extend({
  parseHTML() {
    return [{ tag: 'img[src]' }];
  },
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        renderHTML: attributes => {
          if (!attributes.width) return {};
          return { width: attributes.width };
        },
      },
      height: {
        default: null,
        renderHTML: attributes => {
          if (!attributes.height) return {};
          return { height: attributes.height };
        },
      },
      align: {
        default: 'center',
        renderHTML: attributes => {
          return { 'data-align': attributes.align };
        },
      },
      title: {
        default: '',
        renderHTML: attributes => {
          if (!attributes.title) return {};
          return { title: attributes.title };
        },
      },
    };
  },
  addNodeView() {
    return ({ node, getPos, editor }) => {
      const align = node.attrs.align || 'center';

      const container = document.createElement('div');
      container.className = 'image-wrapper';

      // Aplicar alineación
      let containerStyle = 'position: relative; max-width: 100%; user-select: none; margin: 1rem 0;';
      if (align === 'left') {
        containerStyle += 'display: inline-block; float: left; margin-right: 1rem; margin-bottom: 0.5rem;';
      } else if (align === 'right') {
        containerStyle += 'display: inline-block; float: right; margin-left: 1rem; margin-bottom: 0.5rem;';
      } else {
        containerStyle += 'display: block; margin-left: auto; margin-right: auto; text-align: center;';
      }
      container.style.cssText = containerStyle;

      const img = document.createElement('img');
      img.src = node.attrs.src;
      img.alt = node.attrs.alt || '';
      img.draggable = false;

      if (node.attrs.width) {
        img.style.width = node.attrs.width + 'px';
        img.style.height = 'auto';
      } else {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
      }

      // Label de tamaño
      const sizeLabel = document.createElement('div');
      sizeLabel.style.cssText = `
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        background: #22c55e;
        color: white;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 700;
        white-space: nowrap;
        pointer-events: none;
        display: none;
        z-index: 20;
        box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
      `;
      container.appendChild(sizeLabel);

      // Crear handles de redimensionamiento (4 esquinas)
      const handles = ['nw', 'ne', 'sw', 'se'];
      const handleElements: HTMLDivElement[] = [];

      handles.forEach(position => {
        const handle = document.createElement('div');
        handle.className = `resize-handle resize-${position}`;
        handle.style.cssText = `
          position: absolute;
          width: 24px;
          height: 24px;
          background: #22c55e;
          border: 4px solid white;
          border-radius: 50%;
          cursor: ${position.includes('n') ? (position.includes('w') ? 'nw' : 'ne') : (position.includes('w') ? 'sw' : 'se')}-resize;
          z-index: 10;
          display: none;
          box-shadow: 0 3px 8px rgba(0,0,0,0.3);
          transition: transform 0.15s ease;
        `;

        // Efecto hover
        handle.onmouseenter = () => {
          handle.style.transform = 'scale(1.2)';
        };
        handle.onmouseleave = () => {
          handle.style.transform = 'scale(1)';
        };

        // Posicionar handles en las esquinas
        if (position.includes('n')) handle.style.top = '-12px';
        if (position.includes('s')) handle.style.bottom = '-12px';
        if (position.includes('w')) handle.style.left = '-12px';
        if (position.includes('e')) handle.style.right = '-12px';

        // Lógica de redimensionamiento
        handle.addEventListener('mousedown', (e) => {
          e.preventDefault();
          e.stopPropagation();

          const startX = e.clientX;
          const startY = e.clientY;
          const startWidth = img.offsetWidth;
          const startHeight = img.offsetHeight;
          const aspectRatio = startHeight / startWidth;

          // Mostrar label de tamaño
          sizeLabel.style.display = 'block';

          const onMouseMove = (moveEvent: MouseEvent) => {
            let deltaX = moveEvent.clientX - startX;
            let deltaY = moveEvent.clientY - startY;

            // Invertir delta para esquinas izquierdas
            if (position.includes('w')) deltaX = -deltaX;
            if (position.includes('n')) deltaY = -deltaY;

            // Usar el delta mayor para mantener proporción
            const delta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY / aspectRatio;
            let newWidth = Math.round(startWidth + delta);

            if (newWidth > 50) {
              const newHeight = Math.round(newWidth * aspectRatio);
              img.style.width = newWidth + 'px';
              img.style.height = newHeight + 'px';

              // Actualizar label con tamaño actual
              sizeLabel.textContent = `${newWidth} × ${newHeight}px`;

              // Actualizar atributos en el editor
              if (typeof getPos === 'function') {
                const pos = getPos();
                if (pos !== false && pos !== undefined) {
                  editor.commands.updateAttributes('image', {
                    width: newWidth,
                    height: newHeight,
                  });
                }
              }
            }
          };

          const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.body.style.cursor = '';
            // Ocultar label después de 1 segundo
            setTimeout(() => {
              sizeLabel.style.display = 'none';
            }, 1000);
          };

          document.body.style.cursor = handle.style.cursor;
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
        });

        handleElements.push(handle);
        container.appendChild(handle);
      });

      container.appendChild(img);

      // Mostrar handles SIEMPRE (más fácil de usar)
      handleElements.forEach(h => h.style.display = 'block');
      container.style.outline = '3px dashed #22c55e';
      container.style.outlineOffset = '4px';

      // Agregar instrucciones visibles
      const instructionLabel = document.createElement('div');
      instructionLabel.textContent = '↔️ Arrastra las esquinas verdes para redimensionar';
      instructionLabel.style.cssText = `
        position: absolute;
        bottom: -35px;
        left: 50%;
        transform: translateX(-50%);
        background: #22c55e;
        color: white;
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        white-space: nowrap;
        pointer-events: none;
        z-index: 5;
        box-shadow: 0 2px 6px rgba(34, 197, 94, 0.3);
      `;
      container.appendChild(instructionLabel);

      return { dom: container };
    };
  },
});

function ToolbarButton({
  onClick,
  active,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`px-2 py-1 rounded text-sm transition-colors ${
        active
          ? "bg-gray-800 text-white"
          : "text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <span className="w-px h-5 bg-gray-300 mx-1" />;
}

export default function ClassicEditor({ initialValue = "", onChange, onHtmlImport, onImageSelect, pendingImageUpdate }: ClassicEditorProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [editorMode, setEditorMode] = useState<'visual' | 'html'>('visual');
  const [htmlSource, setHtmlSource] = useState('');
  const htmlDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      ResizableImage,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Escribe el contenido del artículo aquí..." }),
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-green-700 underline" } }),
    ],
    content: initialValue,
    editorProps: {
      attributes: {
        class:
          "min-h-[450px] px-5 py-4 focus:outline-none prose prose-lg max-w-none text-gray-900 prose-headings:text-gray-900 prose-p:text-gray-900 prose-li:text-gray-900 prose-strong:text-gray-900 prose-a:text-green-700",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    onSelectionUpdate({ editor }) {
      const { selection } = editor.state;
      const node = (selection as { node?: { type: { name: string }; attrs: Record<string, string> } }).node;
      if (node?.type?.name === 'image') {
        onImageSelect?.({ src: node.attrs.src || '', alt: node.attrs.alt || '', title: node.attrs.title || '' });
      } else {
        onImageSelect?.(null);
      }
    },
  });

  // Cargar galería desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem('divisachile-gallery');
    if (saved) {
      setGalleryImages(JSON.parse(saved));
    }
  }, []);

  // Eliminar imagen de galería
  const deleteFromGallery = useCallback((id: string) => {
    const updated = galleryImages.filter(img => img.id !== id);
    setGalleryImages(updated);
    localStorage.setItem('divisachile-gallery', JSON.stringify(updated));
  }, [galleryImages]);

  useEffect(() => {
    if (editor && initialValue && editor.isEmpty) {
      editor.commands.setContent(initialValue);
    }
  }, [editor, initialValue]);

  useEffect(() => {
    return () => { editor?.destroy(); };
  }, [editor]);

  useEffect(() => {
    if (!editor || !pendingImageUpdate) return;
    editor.chain().focus().updateAttributes('image', {
      alt: pendingImageUpdate.alt,
      title: pendingImageUpdate.title,
    }).run();
  }, [pendingImageUpdate, editor]);

  const switchToHtml = useCallback(() => {
    setHtmlSource(editor?.getHTML() || '');
    setEditorMode('html');
  }, [editor]);

  const switchToVisual = useCallback(() => {
    const extracted = extractFromHtml(htmlSource);
    editor?.commands.setContent(extracted.content);
    onChange(extracted.content);
    if (onHtmlImport) onHtmlImport(extracted);
    setEditorMode('visual');
  }, [editor, htmlSource, onChange, onHtmlImport]);

  const addLink = useCallback(() => {
    const url = window.prompt("URL del enlace:");
    if (!url) return;
    editor?.chain().focus().setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt("URL de la imagen:");
    if (!url) return;
    editor?.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const addImageFromFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];

      if (!file) return;

      if (file.size > 5 * 1024 * 1024) {
        alert('La imagen debe ser menor a 5MB');
        return;
      }

      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        const result = readerEvent.target?.result as string;
        if (!result) return;

        // Insertar imagen directamente - el usuario la escalará con el cursor
        if (editor) {
          editor.chain().focus().setImage({ src: result }).run();
        }

        // Guardar en galería
        setGalleryImages(prev => {
          const newImage: GalleryImage = {
            id: Date.now().toString(),
            src: result,
            name: file.name,
            uploadedAt: new Date().toISOString(),
          };
          const updated = [...prev, newImage];
          localStorage.setItem('divisachile-gallery', JSON.stringify(updated));
          return updated;
        });
      };

      reader.readAsDataURL(file);
    });

    input.click();
  };

  const insertFromGallery = useCallback((src: string) => {
    editor?.chain().focus().setImage({ src }).run();
    setShowGallery(false);
  }, [editor]);

  const isImageActive = editor?.isActive('image') ?? false;

  if (!editor) return null;

  return (
    <div className="border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden flex flex-col">
      {/* Tab switcher */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100 bg-gray-50">
        <div className="flex gap-0.5">
          <button
            type="button"
            onClick={switchToVisual}
            className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
              editorMode === 'visual'
                ? 'bg-white border border-gray-300 text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Visual
          </button>
          <button
            type="button"
            onClick={switchToHtml}
            className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
              editorMode === 'html'
                ? 'bg-white border border-gray-300 text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            HTML
          </button>
        </div>
        {editorMode === 'html' && (
          <span className="text-xs text-blue-600 italic">
            Pega tu artículo HTML · al cambiar a Visual se importa el SEO automáticamente
          </span>
        )}
      </div>

      {/* HTML textarea mode */}
      {editorMode === 'html' && (
        <textarea
          value={htmlSource}
          onChange={(e) => {
            const raw = e.target.value;
            setHtmlSource(raw);
            // Debounce: notifica al padre con el contenido parseado para
            // que el auto-save se active igual que en modo Visual
            if (htmlDebounceRef.current) clearTimeout(htmlDebounceRef.current);
            htmlDebounceRef.current = setTimeout(() => {
              const extracted = extractFromHtml(raw);
              onChange(extracted.content);
              if (onHtmlImport) onHtmlImport(extracted);
            }, 1000);
          }}
          className="w-full h-[540px] px-5 py-4 font-mono text-sm text-gray-800 bg-white resize-none outline-none border-0"
          placeholder="Pega aquí tu artículo en HTML..."
          spellCheck={false}
        />
      )}

      {/* Toolbar + editor — solo en modo Visual */}
      {editorMode === 'visual' && (
      <>
      <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-gray-200 bg-gray-50 sticky top-0 z-10 flex-shrink-0">
        {/* Headings */}
        <select
          value={
            editor.isActive("heading", { level: 2 }) ? "h2" :
            editor.isActive("heading", { level: 3 }) ? "h3" :
            editor.isActive("heading", { level: 4 }) ? "h4" : "p"
          }
          onChange={(e) => {
            const val = e.target.value;
            if (val === "p") editor.chain().focus().setParagraph().run();
            else editor.chain().focus().setHeading({ level: Number(val.replace("h", "")) as 2|3|4 }).run();
          }}
          className="text-sm border border-gray-300 rounded px-2 py-1 bg-white text-gray-700 mr-1"
        >
          <option value="p">Párrafo</option>
          <option value="h2">Encabezado 2</option>
          <option value="h3">Encabezado 3</option>
          <option value="h4">Encabezado 4</option>
        </select>

        <Divider />

        {/* Text format */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")} title="Negrita (Ctrl+B)">
          <strong>B</strong>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")} title="Cursiva (Ctrl+I)">
          <em>I</em>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive("underline")} title="Subrayado (Ctrl+U)">
          <span className="underline">U</span>
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive("strike")} title="Tachado">
          <span className="line-through">S</span>
        </ToolbarButton>

        <Divider />

        {/* Align */}
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign("left").run()} active={editor.isActive({ textAlign: "left" })} title="Alinear izquierda">
          ≡
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign("center").run()} active={editor.isActive({ textAlign: "center" })} title="Centrar">
          ☰
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign("right").run()} active={editor.isActive({ textAlign: "right" })} title="Alinear derecha">
          ≣
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign("justify").run()} active={editor.isActive({ textAlign: "justify" })} title="Justificar">
          ☷
        </ToolbarButton>

        <Divider />

        {/* Lists */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive("bulletList")} title="Lista con viñetas">
          • Lista
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive("orderedList")} title="Lista numerada">
          1. Lista
        </ToolbarButton>

        <Divider />

        {/* Block */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive("blockquote")} title="Cita">
          ❝ Cita
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive("codeBlock")} title="Bloque de código">
          {"</>"}
        </ToolbarButton>

        <Divider />

        {/* Link & Image */}
        <ToolbarButton onClick={addLink} active={editor.isActive("link")} title="Insertar enlace">
          🔗 Link
        </ToolbarButton>
        <ToolbarButton onClick={addImage} title="Insertar imagen por URL">
          🖼 Imagen URL
        </ToolbarButton>
        <ToolbarButton onClick={addImageFromFile} title="Subir imagen desde tu equipo">
          📁 Subir
        </ToolbarButton>
        <ToolbarButton onClick={() => setShowGallery(true)} title="Galería de imágenes">
          🎨 Galería ({galleryImages.length})
        </ToolbarButton>

        {/* Image resize button - ahora con icono de tijeras */}
        <ToolbarButton
          onClick={() => {
            if (!isImageActive) {
              alert('Primero selecciona una imagen haciendo clic sobre ella');
              return;
            }
            // Aquí simplemente recordamos al usuario que debe usar las esquinas
            alert('💡 Para escalar la imagen:\n\n1. Haz clic sobre la imagen en el editor\n2. Aparecerán círculos verdes en las 4 esquinas\n3. Arrastra cualquier esquina para redimensionar\n4. El tamaño se muestra en tiempo real mientras arrastras');
          }}
          active={isImageActive}
          title={isImageActive ? 'Instrucciones para escalar imagen' : 'Selecciona una imagen para redimensionar'}
        >
          <span className={isImageActive ? '' : 'opacity-40'}>✂️ Escalar</span>
        </ToolbarButton>


      </div>

      {/* Editor area con scroll */}
      <div className="overflow-y-auto h-[540px]">
        <EditorContent editor={editor} />
      </div>
      </>
      )} {/* fin editorMode === 'visual' */}

      {/* Modal Galería */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">🎨 Galería de Imágenes</h2>
              <button
                onClick={() => setShowGallery(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              {galleryImages.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No hay imágenes en la galería</p>
                  <p className="text-gray-500 text-sm mt-2">Sube imágenes usando el botón "📁 Subir"</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages.map((img) => (
                    <div key={img.id} className="relative group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={img.src}
                        alt={img.name}
                        className="w-full h-40 object-cover cursor-pointer"
                        onClick={() => insertFromGallery(img.src)}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => insertFromGallery(img.src)}
                          className="px-3 py-1.5 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                        >
                          ✓ Insertar
                        </button>
                        <button
                          onClick={() => {
                            if (confirm('¿Eliminar esta imagen de la galería?')) {
                              deleteFromGallery(img.id);
                            }
                          }}
                          className="px-3 py-1.5 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                        >
                          🗑 Eliminar
                        </button>
                      </div>
                      <div className="p-2 bg-gray-50">
                        <p className="text-xs text-gray-600 truncate" title={img.name}>{img.name}</p>
                        <p className="text-xs text-gray-400">{new Date(img.uploadedAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setShowGallery(false)}
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Estilos para handles de redimensionamiento y alineación */}
      <style jsx global>{`
        .ProseMirror .image-wrapper {
          margin: 0.5rem 0;
        }

        .ProseMirror .image-wrapper img {
          display: block;
        }

        /* Limpiar floats después de imágenes flotantes */
        .ProseMirror p:has(+ .image-wrapper[style*="float"]) {
          clear: both;
        }

        /* Asegurar que el contenido fluya alrededor de imágenes flotantes */
        .ProseMirror .image-wrapper[style*="float: left"],
        .ProseMirror .image-wrapper[style*="float: right"] {
          max-width: 50%;
        }

        /* Estilos visuales de encabezados en el editor */
        .ProseMirror h2 {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: #064E38;
          border-bottom: 2px solid #ECFDF5;
          padding-bottom: 0.25rem;
        }

        .ProseMirror h3 {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: #064E38;
          border-bottom: 2px solid #ECFDF5;
          padding-bottom: 0.25rem;
        }

        .ProseMirror h4 {
          font-size: 1.05rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.4rem;
          color: #374151;
        }

        .ProseMirror p {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
