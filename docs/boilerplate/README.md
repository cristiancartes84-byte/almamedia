# 🚀 Sistema de Administración de Contenido - Boilerplate

Sistema completo de administración extraído de **DivisaChile** y usado en **AlmaMedia**.

## ✨ Características

### 1. Autenticación y Sesiones
- ✅ Login con NextAuth.js
- ✅ Protección de rutas admin
- ✅ Hardcoded fallback (admin@email.com / password)
- ✅ Sesiones persistentes

### 2. Editor Visual de Contenido
- ✅ TipTap (ClassicEditor)
- ✅ Vista Visual / HTML
- ✅ Toolbar completo: negritas, listas, enlaces, imágenes, alineación
- ✅ Subida de imágenes (drag & drop)
- ✅ Galería de imágenes reutilizables
- ✅ Contador de palabras
- ✅ Auto-save cada 2 segundos

### 3. Metadatos y Publicación
- ✅ Título + Permalink editable
- ✅ Imagen destacada con preview
- ✅ Categorías customizables
- ✅ Extracto (excerpt)
- ✅ Autor
- ✅ Tags (etiquetas)
- ✅ Estado: Publicado / Borrador

### 4. Alma SEO (antes RankMathSidebar)
- ✅ Puntaje SEO en tiempo real (0-100)
- ✅ 15 tests de optimización
- ✅ Vista previa de Google (SERP)
- ✅ Keyword principal
- ✅ Meta título con contador de caracteres
- ✅ Meta descripción con contador
- ✅ Palabras clave (tags con validación)
- ✅ Análisis de densidad de keyword
- ✅ Validación de imágenes ALT text

### 5. Preview Modal
- ✅ Previsualización del artículo antes de publicar
- ✅ Renderizado exacto al frontend
- ✅ Botón de publicar directo desde preview

## 📂 Estructura de Archivos

\`\`\`
BOILERPLATE-ADMIN-SYSTEM/
├── README.md (este archivo)
├── INSTALL.md (guía de instalación paso a paso)
├── components/
│   ├── ClassicEditor.tsx (Editor TipTap completo)
│   ├── AlmaSEO.tsx (Sidebar SEO con 15 tests)
│   └── ProtectedRoute.tsx (HOC para rutas admin)
├── app/admin/
│   ├── login/
│   │   └── page.tsx (Página de login)
│   ├── dashboard/
│   │   └── page.tsx (Dashboard principal)
│   ├── articles/
│   │   ├── page.tsx (Listado de artículos)
│   │   ├── new/page.tsx (Crear artículo)
│   │   └── [id]/edit/page.tsx (Editar artículo)
│   └── layout.tsx (Layout admin con topbar)
├── lib/
│   ├── auth.ts (Configuración NextAuth)
│   └── prisma.ts (Cliente Prisma)
├── api/
│   ├── auth/[...nextauth]/route.ts (API NextAuth)
│   └── articles/
│       ├── route.ts (GET todos, POST crear)
│       ├── [id]/route.ts (GET, PUT, DELETE uno)
│       └── slug/[slug]/route.ts (GET por slug)
├── prisma/
│   └── schema.prisma (Modelo Article completo)
├── styles/
│   └── editor.css (Estilos del editor)
└── package.json (Dependencias necesarias)
\`\`\`

## 📦 Dependencias

\`\`\`json
{
  "dependencies": {
    "next": "14.2.35",
    "react": "^18",
    "react-dom": "^18",
    "next-auth": "^4.24.14",
    "@prisma/client": "^5.22.0",
    "@tiptap/react": "^3.27.1",
    "@tiptap/starter-kit": "^3.27.1",
    "@tiptap/extension-image": "^3.27.1",
    "@tiptap/extension-link": "^3.27.1",
    "@tiptap/extension-placeholder": "^3.27.1",
    "@tiptap/extension-text-align": "^3.27.1",
    "@tiptap/extension-underline": "^3.27.1",
    "bcryptjs": "^3.0.3"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "prisma": "^5.22.0",
    "typescript": "^5",
    "tailwindcss": "^3.4.1"
  }
}
\`\`\`

## 🎨 Variables de Personalización

Al integrar en un nuevo proyecto, solo necesitas cambiar:

### 1. **Colores de Marca** (buscar y reemplazar)
\`\`\`typescript
// DivisaChile colors
'#064E38' → TU_COLOR_PRIMARIO (ej: '#C8FF00' para AlmaMedia)
'#F59E0B' → TU_COLOR_SECUNDARIO (ej: '#0a0a0a' para AlmaMedia)
'green-500' → 'tu-color-500'
'green-600' → 'tu-color-600'
'green-700' → 'tu-color-700'
\`\`\`

### 2. **Branding**
\`\`\`typescript
// Buscar y reemplazar:
'DivisaChile' → 'TU_MARCA'
'Divisa' → 'TU'
'Chile' → 'MARCA'
'divisachile.cl' → 'tudominio.com'
\`\`\`

### 3. **Categorías**
En \`app/admin/articles/new/page.tsx\` línea ~409:
\`\`\`typescript
// Cambiar categorías según tu proyecto:
<option value="Marketing Digital">Marketing Digital</option>
<option value="Diseño Web">Diseño Web</option>
// ... tus categorías
\`\`\`

### 4. **Autor por defecto**
En \`app/admin/articles/new/page.tsx\` línea ~29:
\`\`\`typescript
author: 'Equipo TuMarca',
\`\`\`

### 5. **Credenciales Admin**
En \`lib/auth.ts\`:
\`\`\`typescript
const ADMIN_EMAIL = 'admin@tudominio.com';
const ADMIN_PASSWORD = 'TuPassword2026!';
\`\`\`

## 🚀 Instalación Rápida (3 pasos)

### Paso 1: Copiar archivos
\`\`\`bash
cp -r BOILERPLATE-ADMIN-SYSTEM/* tu-nuevo-proyecto/
\`\`\`

### Paso 2: Instalar dependencias
\`\`\`bash
cd tu-nuevo-proyecto
npm install
\`\`\`

### Paso 3: Configurar base de datos
\`\`\`bash
# Editar .env
DATABASE_URL="file:./prisma/tu-db.db" # SQLite
# o
DATABASE_URL="postgresql://..." # PostgreSQL

# Migrar
npx prisma migrate dev --name init
\`\`\`

### Paso 4: Personalizar
1. Buscar y reemplazar colores (ver sección arriba)
2. Cambiar branding (DivisaChile → TuMarca)
3. Ajustar categorías
4. Configurar credenciales admin

## ✅ Verificación

Visita:
- \`http://localhost:3000/admin/login\` → Login
- \`http://localhost:3000/admin/dashboard\` → Dashboard
- \`http://localhost:3000/admin/articles/new\` → Crear artículo

Debería verse **exactamente** como DivisaChile/AlmaMedia.

## 📝 Notas Importantes

1. **Auto-save**: Guarda automáticamente cada 2 segundos como BORRADOR
2. **Galería de imágenes**: Se guarda en localStorage (cambiar a DB si quieres persistencia)
3. **Conversión WebP**: Las imágenes se comprimen automáticamente
4. **SEO Score**: Se calcula en tiempo real basado en 15 tests

## 🆘 Soporte

Si encuentras errores al integrar:
1. Verifica que todas las dependencias estén instaladas
2. Revisa que el schema.prisma coincida con tu DB
3. Asegúrate de tener NextAuth configurado
4. Comprueba las rutas de API (\`/api/articles\`, etc.)

## 📄 Licencia

Código extraído de DivisaChile/AlmaMedia.
Libre para uso en tus proyectos.

---

**Creado por:** Alma Media + Claude Sonnet 4.5
**Última actualización:** 2026-07-01
