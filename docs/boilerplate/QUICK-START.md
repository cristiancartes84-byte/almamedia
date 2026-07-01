# ⚡ Quick Start - 5 Minutos

Guía ultra-rápida para integrar el sistema admin en un proyecto nuevo.

## 🚀 Instalación Express

\`\`\`bash
# 1. Copiar archivos
cp -r BOILERPLATE-ADMIN-SYSTEM/* tu-proyecto/

# 2. Instalar dependencias
cd tu-proyecto
npm install

# 3. Configurar DB
echo 'DATABASE_URL="file:./prisma/db.db"' >> .env.local
echo 'NEXTAUTH_SECRET="'$(openssl rand -base64 32)'"' >> .env.local
echo 'NEXTAUTH_URL="http://localhost:3000"' >> .env.local

# 4. Migrar DB
npx prisma generate
npx prisma migrate dev --name init

# 5. Personalizar (buscar/reemplazar)
# VS Code: Ctrl+Shift+H
# - #064E38 → tu color primario
# - AlmaMedia → TuMarca
# - admin@almamedia.cl → admin@tudominio.com

# 6. Ejecutar
npm run dev
\`\`\`

## ✅ Verificar

- **Login**: http://localhost:3000/admin/login
- **Crear**: http://localhost:3000/admin/articles/new
- **Credenciales**: admin@almamedia.cl / AlmaMedia2026!

## 📝 Cambios Mínimos Obligatorios

### 1. Colores (3 archivos principales)

**components/ClassicEditor.tsx:**
- Línea ~252: \`prose-a:text-green-700\` → \`prose-a:text-tu-color-700\`

**components/AlmaSEO.tsx:**
- Línea ~78: \`bg-green-600\` → \`bg-tu-color-600\`

**app/admin/articles/new/page.tsx:**
- Línea ~183: \`color: '#C8FF00'\` → \`color: '#TU_HEX'\`
- Línea ~343: \`bg-yellow-600\` → \`bg-tu-color-600\`

### 2. Branding (1 archivo)

**app/admin/articles/new/page.tsx:**
- Línea ~183-184: Logo texto
- Línea ~270: \`almamedia.cl/\` → \`tudominio.com/\`
- Línea ~24: Categoría default
- Línea ~29: Autor default
- Línea ~409-415: Opciones categorías

### 3. Auth (1 archivo)

**lib/auth.ts:**
- Línea ~15-16: Email y password admin

## 🎯 Estructura Final

\`\`\`
tu-proyecto/
├── components/
│   ├── ClassicEditor.tsx ✅
│   └── AlmaSEO.tsx ✅
├── app/
│   ├── admin/
│   │   ├── login/page.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── articles/
│   │   │   ├── page.tsx
│   │   │   ├── new/page.tsx ✅
│   │   │   └── [id]/edit/page.tsx
│   │   └── layout.tsx
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       └── articles/route.ts
├── lib/
│   └── auth.ts ✅
├── prisma/
│   └── schema.prisma ✅
└── .env.local ✅
\`\`\`

## 🐛 Errores Comunes

| Error | Solución |
|-------|----------|
| Cannot find module | \`npm install\` |
| Prisma not configured | \`npx prisma generate\` |
| NEXTAUTH_SECRET missing | Agregar a \`.env.local\` |
| Texto invisible editor | Verificar \`text-gray-900\` en ClassicEditor |
| 404 en /admin/login | Crear \`app/admin/login/page.tsx\` |

## 📦 Dependencias Esenciales

\`\`\`json
{
  "@tiptap/react": "^3.27.1",
  "next-auth": "^4.24.14",
  "@prisma/client": "^5.22.0"
}
\`\`\`

## 🔗 Archivos Clave

1. **ClassicEditor.tsx** - Editor TipTap completo (600 líneas)
2. **AlmaSEO.tsx** - 15 tests SEO en tiempo real (400 líneas)
3. **app/admin/articles/new/page.tsx** - Página crear artículo (533 líneas)
4. **lib/auth.ts** - NextAuth config con fallback (50 líneas)
5. **prisma/schema.prisma** - Modelo Article (40 líneas)

---

**Tiempo total**: 5-10 minutos
**Nivel**: Intermedio
**Soporte**: Ver INSTALL.md para guía detallada
