# 🎨 Sistema de Landing Pages Editables - Alma Media

## ✅ Implementado

### 1. **Base de Datos**
- ✅ Modelo `LandingPage` en Prisma
- ✅ Campos para Hero, Content, Pricing, SEO, Custom CSS
- ✅ Índices para performance

### 2. **API REST**
- ✅ `GET /api/landing-pages` - Listar todas
- ✅ `POST /api/landing-pages` - Crear nueva
- ✅ `GET /api/landing-pages/[id]` - Obtener por ID
- ✅ `PUT /api/landing-pages/[id]` - Actualizar
- ✅ `DELETE /api/landing-pages/[id]` - Eliminar
- ✅ `GET /api/landing-pages/slug/[slug]` - Obtener por slug (frontend)

### 3. **Panel de Administración**
- ✅ `/admin/pages` - Lista de landing pages
- ✅ `/admin/pages/new` - Crear nueva página
- ⏳ `/admin/pages/[id]/edit` - Editar página (en progreso)

### 4. **Editor Visual**
- ✅ ClassicEditor (WYSIWYG completo)
- ✅ Alma SEO (optimización en tiempo real)
- ✅ Campos personalizables:
  * Badge (texto + color)
  * Hero Title + Subtitle
  * CTA Button (texto + link + color)
  * Contenido rico (HTML)
  * Pricing Plans (JSON editable)
  * CSS Personalizado

## 📋 Pendientes

- [ ] Crear página de edición `/admin/pages/[id]/edit`
- [ ] Crear componente de renderizado dinámico
- [ ] Convertir rutas estáticas a dinámicas con ISR
- [ ] Migrar 4 páginas existentes a BD
- [ ] Actualizar dashboard con sección "Páginas"

## 🚀 Cómo Usar

### Crear Nueva Página:
1. `/admin/pages` → Click "+ Nueva Página"
2. Editar Hero, Content, Pricing
3. Optimizar con Alma SEO
4. "Publicar Página"

### Campos Editables:

**Sección Hero:**
- Badge text + color
- Título principal
- Subtítulo
- Botón CTA (texto + link)

**Contenido:**
- Editor visual completo
- Imágenes, listas, formato

**Pricing:**
- JSON con 3 planes
- Precios, features, destacados

**SEO:**
- Meta title, description, keywords
- Score automático
- Preview Google SERP

**Diseño:**
- CSS personalizado
- Estilos únicos por página

## 🔄 Next Steps

Después de completar la edición:
1. Crear componente `<LandingPageRenderer />`
2. Actualizar rutas dinámicas `[...slug]/page.tsx`
3. Configurar ISR (revalidate: 3600)
4. Migrar contenido existente a BD
