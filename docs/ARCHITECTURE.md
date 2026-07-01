# 🏗️ Arquitectura AlmaMedia

## Sistema Base

AlmaMedia está construido sobre el **Boilerplate Admin System** completo, un CMS headless con editor visual tipo WordPress.

Ver documentación completa del boilerplate en: `docs/boilerplate/`

## Estructura del Proyecto

```
almamedia-nextjs/
├── app/
│   ├── admin/                    # Panel de administración
│   │   ├── layout.tsx           # Layout con topbar + nav
│   │   ├── login/               # Autenticación
│   │   ├── dashboard/           # Dashboard con stats
│   │   ├── articles/            # Gestión artículos blog
│   │   ├── pages/               # Páginas landing/pilares
│   │   ├── homepage/            # Editor homepage
│   │   ├── sidebar-banners/     # Banners laterales
│   │   └── settings/            # Configuración
│   │
│   ├── api/                     # API Routes
│   │   ├── auth/                # NextAuth endpoints
│   │   ├── articles/            # CRUD artículos
│   │   ├── landing-pages/       # CRUD páginas
│   │   ├── media-gallery/       # Galería imágenes
│   │   └── sidebar-banners/     # Banners API
│   │
│   ├── (landing)/               # Rutas públicas
│   │   ├── page.tsx            # Homepage
│   │   └── [slug]/             # Landing pages dinámicas
│   │
│   └── blog/                    # Blog público
│       └── [slug]/             # Artículos dinámicos
│
├── components/
│   ├── ClassicEditor.tsx        # Editor TipTap (600 líneas)
│   ├── AlmaSEO.tsx             # Sidebar SEO (400 líneas)
│   ├── LandingPageRenderer.tsx  # Renderizador páginas
│   └── ...                      # Componentes UI
│
├── lib/
│   ├── auth.ts                  # NextAuth config
│   ├── prisma.ts               # Prisma client
│   └── seo-tests.ts            # Tests SEO (15 tests)
│
├── prisma/
│   └── schema.prisma           # 6 modelos DB
│
└── docs/
    ├── ARCHITECTURE.md         # Este archivo
    └── boilerplate/            # Docs del sistema base
        ├── START-HERE.md
        ├── QUICK-START.md
        ├── INSTALL.md
        ├── CUSTOMIZATION.md
        └── ...
```

## Tecnologías

- **Framework**: Next.js 14.2+ (App Router)
- **Base de datos**: PostgreSQL (producción) / SQLite (desarrollo)
- **ORM**: Prisma
- **Autenticación**: NextAuth.js
- **Editor**: TipTap (extensible, tipo Notion)
- **Estilos**: Tailwind CSS + Typography plugin
- **Deployment**: Docker + Vercel/Railway

## Modelos de Datos (Prisma)

### 1. User
- Autenticación admin
- Roles y permisos

### 2. Article
- Artículos de blog
- SEO completo (meta title, description, keywords)
- Imagen destacada
- Categorías y tags
- Estado: draft/published

### 3. Page (Landing Pages)
- Páginas pilares y landing pages
- HTML/JSON flexible
- SEO optimizado
- ISR con revalidate: 3600

### 4. MediaGallery
- Galería de imágenes reutilizable
- URLs + alt text
- Organización por categorías

### 5. SidebarBanner
- Banners promocionales
- Posición configurable
- Activo/inactivo

### 6. Service
- Servicios ofrecidos
- Usado en homepage
- Iconos + descripciones

## Características Clave

### 🔐 Autenticación
- NextAuth con credenciales
- Fallback hardcoded para admin
- Protección de rutas admin
- Credenciales en: `CREDENCIALES-ADMIN.md`

### ✍️ Editor Visual
- TipTap completo (tipo Notion/WordPress)
- Toolbar: headings, listas, links, imágenes
- Galería de imágenes drag & drop
- Vista Visual / HTML
- Auto-save cada 2 segundos
- Contador de palabras en tiempo real

### 📊 SEO Avanzado
- **Alma SEO Sidebar**: 15 tests en tiempo real
- Puntaje 0-100 con colores (rojo/amarillo/verde)
- Vista previa SERP (Google snippet)
- Análisis de:
  - Keyword en título/descripción/contenido
  - Longitud de contenido (óptimo: 1000+ palabras)
  - URLs amigables
  - Alt text en imágenes
  - Power words en títulos
  - Números en títulos
  - Y más...

### 📄 Páginas Landing
- Sistema de landing pages dinámicas
- Renderizador HTML con sanitización
- ISR (Incremental Static Regeneration)
- SEO por página
- Slugs personalizados

### 🎨 Customización Visual
- Colores principales:
  - Primario: `#C8FF00` (amarillo neón)
  - Secundario: `#0a0a0a` (negro)
  - Texto: `#f1f1f1` (gris claro)
- Tipografía: Sistema sans-serif
- Modo oscuro por defecto

### 🚀 Performance
- ISR para páginas estáticas
- Imágenes optimizadas (Next.js Image)
- Lazy loading de componentes
- Cache de API routes
- React Server Components

## Páginas Pilares Creadas

6 páginas pilares de 2000+ palabras optimizadas para SEO:

1. **Diseño Web** (`/diseno-web`)
2. **SEO Posicionamiento** (`/seo-posicionamiento`)
3. **SEO Local** (`/seo-local`)
4. **Fotografía de Producto** (`/fotografia-producto`)
5. **Video de Producto** (`/video-producto`)
6. **Packs Completos** (`/packs-completos`)

Todas incluyen:
- 2000+ palabras de contenido
- SEO optimizado (título, description, keywords)
- Estructura semántica (H2, H3, H4)
- Call-to-actions
- Links internos
- Imágenes con alt text

## Flujo de Trabajo

### Crear una Landing Page:
1. Admin → "Páginas Landing" → "Nueva Página"
2. Escribir título (auto-genera slug)
3. Editar contenido en TipTap
4. Optimizar con Alma SEO (meta datos)
5. Preview
6. Publicar

### Crear un Artículo de Blog:
1. Admin → "Artículos" → "Nuevo Artículo"
2. Escribir contenido
3. Categoría + tags
4. Imagen destacada
5. SEO sidebar (puntaje >70)
6. Publicar

## Variables de Entorno

Ver `.env.local`:

```bash
# Base de datos
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"

# Base URL pública
NEXT_PUBLIC_BASE_URL="https://almamedia.cl"
```

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build
npm start

# Prisma
npx prisma studio          # UI para DB
npx prisma generate        # Generar cliente
npx prisma migrate dev     # Crear migración
npx prisma db push         # Push schema sin migración

# Docker
docker build -t almamedia .
docker run -p 3000:3000 almamedia
```

## Deployment

Ver: `INSTRUCCIONES-PRODUCCION.md`

## Próximas Mejoras

- [ ] Sistema de comentarios en blog
- [ ] Newsletter signup
- [ ] Analytics dashboard
- [ ] Multilenguaje (i18n)
- [ ] Búsqueda avanzada
- [ ] Versionado de contenido
- [ ] Roles de usuario granulares

## Referencias

- **Boilerplate completo**: `docs/boilerplate/`
- **Instalación**: `docs/boilerplate/INSTALL.md`
- **Personalización**: `docs/boilerplate/CUSTOMIZATION.md`
- **Credenciales**: `CREDENCIALES-ADMIN.md`
- **Producción**: `INSTRUCCIONES-PRODUCCION.md`

---

**Versión**: 1.0.0 (Basado en Boilerplate v2.0.0)  
**Fecha**: 2026-07-01  
**Stack**: Next.js 14 + Prisma + NextAuth + TipTap
