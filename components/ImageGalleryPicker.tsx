'use client';

import { useState, useEffect } from 'react';

interface MediaImage {
  id: string;
  filename: string;
  imageData: string;
  size: number;
  createdAt: string;
}

interface ImageGalleryPickerProps {
  onSelect: (imageData: string) => void;
  currentImage?: string;
}

export default function ImageGalleryPicker({ onSelect, currentImage }: ImageGalleryPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<MediaImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<'gallery' | 'upload'>('gallery');

  useEffect(() => {
    if (isOpen) {
      fetchImages();
    }
  }, [isOpen]);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/media-gallery');
      if (res.ok) {
        const data = await res.json();
        setImages(data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validar tamaño (10MB máximo)
    if (file.size > 10 * 1024 * 1024) {
      alert('La imagen no puede superar los 10MB');
      return;
    }

    setUploading(true);
    try {
      // Convertir a WebP
      const webpData = await convertToWebP(file);

      // Subir a galería
      const res = await fetch('/api/media-gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename: file.name.replace(/\.[^/.]+$/, '.webp'),
          imageData: webpData,
        }),
      });

      if (res.ok) {
        const newImage = await res.json();
        setImages([newImage, ...images]);
        onSelect(webpData);
        setIsOpen(false);
        alert('Imagen subida y seleccionada correctamente');
      } else {
        alert('Error al subir la imagen');
      }
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Error al procesar la imagen');
    } finally {
      setUploading(false);
    }
  };

  const convertToWebP = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('No se pudo crear el contexto del canvas'));
            return;
          }

          // Redimensionar si es muy grande
          let width = img.width;
          let height = img.height;
          const maxWidth = 800;
          const maxHeight = 600;

          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width = width * ratio;
            height = height * ratio;
          }

          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          // Convertir a WebP con calidad 85%
          const webpData = canvas.toDataURL('image/webp', 0.85);
          resolve(webpData);
        };
        img.onerror = () => reject(new Error('Error al cargar la imagen'));
        img.src = e.target?.result as string;
      };
      reader.onerror = () => reject(new Error('Error al leer el archivo'));
      reader.readAsDataURL(file);
    });
  };

  const handleSelectImage = (imageData: string) => {
    onSelect(imageData);
    setIsOpen(false);
  };

  const handleDeleteImage = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('¿Eliminar esta imagen de la galería?')) return;

    try {
      const res = await fetch(`/api/media-gallery?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setImages(images.filter(img => img.id !== id));
        alert('Imagen eliminada');
      } else {
        alert('Error al eliminar');
      }
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Error al eliminar');
    }
  };

  return (
    <div>
      {/* Botón para abrir el picker */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        {currentImage ? 'Cambiar Imagen' : 'Seleccionar o Subir Imagen'}
      </button>

      {/* Preview de la imagen actual */}
      {currentImage && (
        <div className="mt-3 relative">
          <img
            src={currentImage}
            alt="Preview"
            className="w-full h-32 object-cover rounded-lg border-2 border-gray-300"
          />
          <button
            type="button"
            onClick={() => onSelect('')}
            className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full hover:bg-red-600 flex items-center justify-center text-sm"
          >
            ×
          </button>
        </div>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-bold">Seleccionar Imagen</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Tabs */}
            <div className="border-b flex">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'gallery'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Galería ({images.length})
              </button>
              <button
                onClick={() => setActiveTab('upload')}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === 'upload'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Subir Nueva
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {activeTab === 'gallery' && (
                <div>
                  {isLoading ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
                      ))}
                    </div>
                  ) : images.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      <p>No hay imágenes en la galería</p>
                      <button
                        onClick={() => setActiveTab('upload')}
                        className="mt-4 text-blue-600 hover:underline"
                      >
                        Subir la primera imagen
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {images.map(img => (
                        <div
                          key={img.id}
                          className="relative group cursor-pointer"
                          onClick={() => handleSelectImage(img.imageData)}
                        >
                          <img
                            src={img.imageData}
                            alt={img.filename}
                            className="w-full aspect-square object-cover rounded-lg border-2 border-gray-300 group-hover:border-blue-500 transition-colors"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity rounded-lg flex items-center justify-center">
                            <button
                              onClick={(e) => handleDeleteImage(img.id, e)}
                              className="opacity-0 group-hover:opacity-100 bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition-all"
                            >
                              Eliminar
                            </button>
                          </div>
                          <div className="mt-1 text-xs text-gray-600 truncate">
                            {img.filename}
                          </div>
                          <div className="text-xs text-gray-400">
                            {(img.size / 1024).toFixed(1)} KB
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'upload' && (
                <div className="max-w-md mx-auto">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      disabled={uploading}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className={`cursor-pointer ${uploading ? 'opacity-50' : ''}`}
                    >
                      <div className="text-4xl mb-4">📤</div>
                      <p className="text-lg font-medium mb-2">
                        {uploading ? 'Subiendo...' : 'Selecciona una imagen'}
                      </p>
                      <p className="text-sm text-gray-500">
                        Máximo 10MB - Se convertirá a WebP automáticamente
                      </p>
                      <div className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg inline-block hover:bg-blue-700">
                        Seleccionar archivo
                      </div>
                    </label>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 text-center">
                    La imagen se redimensionará automáticamente a 800x600px máximo
                    y se comprimirá en formato WebP (85% calidad)
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
