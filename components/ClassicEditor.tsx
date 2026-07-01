"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useCallback, useState } from "react";

interface ClassicEditorProps {
  initialValue?: string;
  onChange: (content: string) => void;
}

// Interfaz para las imágenes de la galería
interface GalleryImage {
  id: string;
  src: string;
  name: string;
  uploadedAt: string;
}

// Extensión personalizada de Image con redimensionamiento
const ResizableImage = Image.extend({
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
    };
  },
  addNodeView() {
    return ({ node, getPos, editor }) => {
      const container = document.createElement('div');
      container.className = 'image-wrapper';
      container.style.cssText = 'position: relative; display: inline-block; max-width: 100%; user-select: none;';

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
        top: -32px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(59, 130, 246, 0.95);
        color: white;
        padding: 4px 12px;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        pointer-events: none;
        display: none;
        z-index: 20;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
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
          width: 14px;
          height: 14px;
          background: #3b82f6;
          border: 2px solid white;
          border-radius: 50%;
          cursor: ${position.includes('n') ? (position.includes('w') ? 'nw' : 'ne') : (position.includes('w') ? 'sw' : 'se')}-resize;
          z-index: 10;
          display: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        `;

        // Posicionar handles en las esquinas
        if (position.includes('n')) handle.style.top = '-7px';
        if (position.includes('s')) handle.style.bottom = '-7px';
        if (position.includes('w')) handle.style.left = '-7px';
        if (position.includes('e')) handle.style.right = '-7px';

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

      // Mostrar/ocultar handles al hacer clic en la imagen
      let selected = false;
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        selected = !selected;
        handleElements.forEach(h => h.style.display = selected ? 'block' : 'none');
      });

      // Ocultar handles al hacer clic fuera
      document.addEventListener('click', (e) => {
        if (!container.contains(e.target as Node)) {
          selected = false;
          handleElements.forEach(h => h.style.display = 'none');
          sizeLabel.style.display = 'none';
        }
      });

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

export default function ClassicEditor({ initialValue = "", onChange }: ClassicEditorProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [showSizePanel, setShowSizePanel] = useState(false);
  const [sizeInput, setSizeInput] = useState('');

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
          "min-h-[450px] px-5 py-4 focus:outline-none prose prose-lg max-w-none text-gray-900 prose-headings:text-gray-900 prose-p:text-gray-900 prose-a:text-green-700",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
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

  const applyImageSize = useCallback(() => {
    const w = parseInt(sizeInput);
    if (w > 0) {
      editor?.chain().focus().updateAttributes('image', { width: w, height: null }).run();
    }
    setShowSizePanel(false);
    setSizeInput('');
  }, [editor, sizeInput]);

  const resetImageSize = useCallback(() => {
    editor?.chain().focus().updateAttributes('image', { width: null, height: null }).run();
    setShowSizePanel(false);
    setSizeInput('');
  }, [editor]);

  const isImageActive = editor?.isActive('image') ?? false;

  if (!editor) return null;

  return (
    <div className="border border-gray-300 rounded-lg bg-white shadow-sm overflow-hidden flex flex-col">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-gray-200 bg-gray-50 sticky top-0 z-10 rounded-t-lg flex-shrink-0">
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

        {/* Image resize button */}
        <div className="relative">
          <ToolbarButton
            onClick={() => {
              if (!isImageActive) return;
              const currentWidth = editor.getAttributes('image').width ?? '';
              setSizeInput(String(currentWidth));
              setShowSizePanel(v => !v);
            }}
            active={showSizePanel}
            title={isImageActive ? 'Cambiar tamaño de la imagen seleccionada' : 'Selecciona una imagen para redimensionar'}
          >
            <span className={isImageActive ? '' : 'opacity-40'}>📐 Tamaño</span>
          </ToolbarButton>

          {showSizePanel && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl p-3 z-50 w-52">
              <p className="text-xs font-semibold text-gray-700 mb-2">Ancho de imagen (px)</p>
              <div className="flex gap-2 mb-2">
                <input
                  type="number"
                  value={sizeInput}
                  onChange={e => setSizeInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') applyImageSize(); if (e.key === 'Escape') setShowSizePanel(false); }}
                  placeholder="ej: 600"
                  className="flex-1 px-2 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  min="50"
                  max="1200"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={applyImageSize}
                  className="px-2.5 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700"
                >
                  OK
                </button>
              </div>
              <p className="text-xs text-gray-400 mb-2">Alto se ajusta automáticamente</p>
              <button
                type="button"
                onClick={resetImageSize}
                className="w-full text-xs text-gray-500 hover:text-gray-800 py-1 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                Restablecer tamaño original
              </button>
            </div>
          )}
        </div>

        <Divider />

        {/* Undo / Redo */}
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()} title="Deshacer (Ctrl+Z)">
          ↩
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()} title="Rehacer (Ctrl+Y)">
          ↪
        </ToolbarButton>
      </div>

      {/* Editor area con scroll */}
      <div className="overflow-y-auto h-[540px]">
        <EditorContent editor={editor} />
      </div>

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

      {/* Estilos para handles de redimensionamiento */}
      <style jsx global>{`
        .ProseMirror .image-wrapper {
          margin: 0.5rem 0;
        }

        .ProseMirror img {
          display: block;
        }
      `}</style>
    </div>
  );
}
