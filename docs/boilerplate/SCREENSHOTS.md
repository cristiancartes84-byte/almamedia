# 📸 Capturas y Funcionalidades del Sistema

## Páginas Incluidas

### 1. Login (`/admin/login`)
**Funcionalidad:**
- Formulario de login con email y contraseña
- Validación de credenciales
- Mensajes de error claros
- Redirección automática al dashboard

**Credenciales por defecto:**
- Email: `admin@almamedia.cl`
- Password: `AlmaMedia2026!`

**Personalizar**: `lib/auth.ts` líneas 15-16

---

### 2. Dashboard (`/admin/dashboard`)
**Funcionalidad:**
- Estadísticas globales:
  - Total de artículos
  - Artículos publicados
  - Borradores
  - Visitas (si integras analytics)
- Grid con últimos 5 artículos
- Accesos rápidos:
  - Crear nuevo artículo
  - Ver todos los artículos
  - Configuración
- Información del usuario logueado

---

### 3. Listado de Artículos (`/admin/articles`)
**Funcionalidad:**
- Tabla con todos los artículos:
  - Título
  - Estado (Publicado/Borrador)
  - Categoría
  - Autor
  - Fecha de creación
  - Acciones (Editar/Eliminar)
- Filtros:
  - Por estado
  - Búsqueda por título
- Paginación automática (si >20 artículos)
- Botón "Nuevo Artículo" destacado
- Confirmación antes de eliminar

---

### 4. Crear Artículo (`/admin/articles/new`)
**Funcionalidad COMPLETA (igual a DivisaChile):**

#### Header:
- Logo de la marca
- Auto-save indicator ("Guardando..." / "Guardado")
- Link "Volver a artículos"

#### Post Type Selector:
- 📰 Entrada (artículo de blog)
- 📄 Página (página estática)

#### Editor Principal:
- **Título grande** con placeholder
- **Permalink editable** inline (tudominio.com/slug)
- **Editor Visual TipTap** con toolbar completa:
  - Selector de párrafo/H2/H3/H4
  - Negritas, cursiva, subrayado, tachado
  - Alineación (izquierda, centro, derecha, justificado)
  - Listas con viñetas y numeradas
  - Cita y bloque de código
  - Link e imágenes (URL o subir)
  - Galería de imágenes reutilizables
  - Deshacer/Rehacer
- **Contador de palabras** en tiempo real con indicadores:
  - Rojo (<600): "muy corto"
  - Amarillo (600-1000): "aceptable"  
  - Verde (1000+): "excelente"

#### Sidebar Derecho (Metadatos):
- **Auto-save status** con visual indicator
- **Botón Previsualizar** (modal)
- **Botón Publicar** (verde/amarillo según marca)
- **Imagen destacada:**
  - URL o subir desde equipo
  - Preview de la imagen
  - Alt text para SEO
- **Categoría** (dropdown)
- **Extracto** (textarea)
- **Autor** (input)
- **Etiquetas** (separadas por comas)

#### Sidebar Extremo Derecho (Alma SEO):
- **Puntaje SEO** (círculo 0-100):
  - 0-40: Rojo
  - 41-70: Amarillo
  - 71-100: Verde
- **Vista Previa Google** (SERP snippet):
  - Título SEO
  - URL
  - Meta descripción
- **General tab:**
  - Keyword principal
  - URL (slug)
  - Título SEO (contador caracteres)
  - Meta description (contador caracteres)
  - Palabras clave (tags)
- **15 Tests SEO**:
  - ✅ Keyword en título SEO
  - ❌ Keyword en meta description
  - ✅ Keyword al inicio del contenido
  - ✅ Longitud del contenido
  - ✅ Longitud de la URL
  - ✅ Imagen con Alt Text
  - ✅ Power Word en título
  - ✅ Número en título
  - ... y más

#### Auto-save:
- Cada 2 segundos
- Guarda como BORRADOR automáticamente
- No pierde cambios nunca
- Visual feedback en header

#### Preview Modal:
- Renderizado exacto del artículo
- Botones:
  - Cerrar
  - Publicar (directo desde preview)

---

### 5. Editar Artículo (`/admin/articles/[id]/edit`)
**Funcionalidad:**
- Idéntica a "Crear Artículo"
- Precarga datos existentes
- Botón "Guardar Cambios" en vez de "Publicar"
- Link "Ver artículo" (si está publicado)

---

## Componentes Reutilizables

### ClassicEditor
**Props:**
- `initialValue`: HTML inicial
- `onChange`: Callback con HTML actualizado

**Uso:**
\`\`\`typescript
<ClassicEditor
  initialValue={formData.content}
  onChange={(content) => setFormData({ ...formData, content })}
/>
\`\`\`

### AlmaSEO
**Props:**
- `metaTitle`, `metaDescription`, `metaKeywords`
- `articleTitle`, `articleSlug`, `articleContent`, `articleExcerpt`
- `featuredImage`, `featuredImageAlt`
- `onChange`: Callback con cambios

**Uso:**
\`\`\`typescript
<AlmaSEO
  metaTitle={formData.metaTitle}
  metaDescription={formData.metaDescription}
  metaKeywords={formData.metaKeywords}
  articleTitle={formData.title}
  articleSlug={formData.slug}
  articleContent={formData.content}
  articleExcerpt={formData.excerpt}
  featuredImage={formData.featuredImage}
  featuredImageAlt={formData.featuredImageAlt}
  onChange={(field, value) => setFormData({ ...formData, [field]: value })}
/>
\`\`\`

---

## API Endpoints

### GET `/api/articles`
Retorna todos los artículos.

**Query params:**
- `?status=published` - Solo publicados
- `?status=draft` - Solo borradores

**Response:**
\`\`\`json
[
  {
    "id": "clxxx",
    "title": "Mi Artículo",
    "slug": "mi-articulo",
    "excerpt": "Resumen...",
    "content": "<p>Contenido HTML...</p>",
    "category": "Marketing",
    "tags": "seo, marketing, digital",
    "metaTitle": "...",
    "metaDescription": "...",
    "metaKeywords": "...",
    "author": "Equipo",
    "featuredImage": "https://...",
    "featuredImageAlt": "...",
    "status": "published",
    "publishedAt": "2026-07-01T...",
    "createdAt": "2026-07-01T...",
    "updatedAt": "2026-07-01T..."
  }
]
\`\`\`

### POST `/api/articles`
Crea un nuevo artículo.

**Body:**
\`\`\`json
{
  "title": "Título",
  "slug": "titulo",
  "excerpt": "Resumen",
  "content": "<p>HTML...</p>",
  "category": "Categoría",
  "tags": ["tag1", "tag2"], // o "tag1, tag2"
  "metaTitle": "...",
  "metaDescription": "...",
  "metaKeywords": "...",
  "author": "Nombre",
  "featuredImage": "URL",
  "featuredImageAlt": "Alt text",
  "status": "published" // o "draft"
}
\`\`\`

### GET `/api/articles/[id]`
Retorna un artículo por ID.

### PUT `/api/articles/[id]`
Actualiza un artículo existente.

### DELETE `/api/articles/[id]`
Elimina un artículo.

### GET `/api/articles/slug/[slug]`
Retorna un artículo por slug (para frontend público).

---

## Flujo de Usuario Típico

1. **Login** → `/admin/login`
2. **Dashboard** → Ver estadísticas
3. **Crear artículo** → `/admin/articles/new`
4. **Escribir contenido** → Editor visual
5. **Optimizar SEO** → Alma SEO sidebar (puntaje >70)
6. **Previsualizar** → Modal preview
7. **Publicar** → Botón verde
8. **Redirección** → Listado de artículos
9. **Ver en frontend** → `/{slug}`

---

## Características Destacadas

### ✨ Auto-save Inteligente
- Guarda cada 2 segundos
- Solo si hay cambios
- No interfiere con la escritura
- Visual feedback claro
- Guarda como borrador automáticamente

### ✨ SEO en Tiempo Real
- 15 tests simultáneos
- Puntaje actualizado al escribir
- Sugerencias específicas
- Vista previa de Google
- Contadores de caracteres

### ✨ Editor Profesional
- Drag & drop de imágenes
- Galería reutilizable
- Shortcuts de teclado
- Undo/Redo ilimitado
- Vista HTML para avanzados

### ✨ UX Limpia
- Interfaz tipo WordPress
- Sin elementos distractores
- Todo en una sola pantalla
- Navegación intuitiva
- Responsive (funciona en tablets)

---

## Personalización Visual

Todas las capturas mostradas usan los colores de **AlmaMedia**:
- Primario: `#C8FF00` (Amarillo neón)
- Secundario: `#0a0a0a` (Negro)

**Para cambiar a tu marca:**
1. Buscar/reemplazar hex colors
2. Cambiar logo en header
3. Ajustar categorías
4. Actualizar permalink

Ver `CUSTOMIZATION.md` para guía completa.

---

**Nota**: Para ver el sistema en acción, ejecuta:
\`\`\`bash
npm run dev
\`\`\`

Y visita: `http://localhost:3000/admin/login`
