# 🎨 Guía de Personalización

## Cambios Obligatorios (Buscar y Reemplazar)

### 1. Colores de Marca

Abre **TODOS** los archivos en \`components/\`, \`app/admin/\` y busca/reemplaza:

| Color Actual | Reemplazar Por | Uso |
|--------------|----------------|-----|
| \`#064E38\` | \`#TU_HEX\` | Verde primario DivisaChile |
| \`#F59E0B\` | \`#TU_HEX\` | Naranja DivisaChile |
| \`#C8FF00\` | \`#TU_HEX\` | Amarillo AlmaMedia |
| \`#0a0a0a\` | \`#TU_HEX\` | Negro/Gris oscuro |
| \`green-500\` | \`tu-color-500\` | Clases Tailwind |
| \`green-600\` | \`tu-color-600\` | Clases Tailwind |
| \`green-700\` | \`tu-color-700\` | Clases Tailwind |
| \`yellow-500\` | \`tu-color-500\` | Clases Tailwind AlmaMedia |
| \`yellow-600\` | \`tu-color-600\` | Clases Tailwind AlmaMedia |

**Comando rápido (Linux/Mac/Git Bash):**
\`\`\`bash
# Ejemplo: Cambiar a azul (#1E40AF)
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/#064E38/#1E40AF/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/#F59E0B/#3B82F6/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/#C8FF00/#1E40AF/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/green-/blue-/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/yellow-/blue-/g' {} +
\`\`\`

**VS Code (Buscar/Reemplazar en múltiples archivos):**
1. Ctrl+Shift+H (Find in Files)
2. Buscar: \`#064E38\`
3. Reemplazar: \`#TU_HEX\`
4. Click "Replace All"
5. Repetir para cada color

---

### 2. Branding y Textos

#### A. Logo/Nombre (Header del Editor)

**Archivo**: \`app/admin/articles/new/page.tsx\`
**Líneas**: ~182-185

\`\`\`typescript
// ANTES:
<span className="text-xl font-bold" style={{ color: '#C8FF00' }}>Alma</span>
<span className="text-xl font-bold" style={{ color: '#0a0a0a' }}>Media</span>

// DESPUÉS:
<span className="text-xl font-bold" style={{ color: '#TU_COLOR' }}>Tu</span>
<span className="text-xl font-bold" style={{ color: '#TU_COLOR_2' }}>Marca</span>
\`\`\`

#### B. Permalink (URL del sitio)

**Archivo**: \`app/admin/articles/new/page.tsx\`
**Línea**: ~270

\`\`\`typescript
// ANTES:
<span className="text-xs text-gray-400">almamedia.cl/</span>

// DESPUÉS:
<span className="text-xs text-gray-400">tudominio.com/</span>
\`\`\`

#### C. Categoría por defecto

**Archivo**: \`app/admin/articles/new/page.tsx\`
**Línea**: ~24

\`\`\`typescript
// ANTES:
category: 'Marketing Digital',

// DESPUÉS:
category: 'Tu Categoría Default',
\`\`\`

#### D. Autor por defecto

**Archivo**: \`app/admin/articles/new/page.tsx\`
**Línea**: ~29

\`\`\`typescript
// ANTES:
author: 'Equipo AlmaMedia',

// DESPUÉS:
author: 'Equipo TuMarca',
\`\`\`

#### E. Opciones de Categorías

**Archivo**: \`app/admin/articles/new/page.tsx\`
**Líneas**: ~409-415

\`\`\`typescript
// ANTES:
<option value="Marketing Digital">Marketing Digital</option>
<option value="Diseño Web">Diseño Web</option>
<option value="SEO">SEO</option>
<option value="Contenido Visual">Contenido Visual</option>
<option value="Noticias">Noticias</option>
<option value="Tutoriales">Tutoriales</option>

// DESPUÉS:
<option value="Categoría 1">Categoría 1</option>
<option value="Categoría 2">Categoría 2</option>
<option value="Categoría 3">Categoría 3</option>
// ... tus categorías
\`\`\`

---

### 3. Credenciales de Admin

**Archivo**: \`lib/auth.ts\`
**Líneas**: ~15-17

\`\`\`typescript
// ANTES:
const ADMIN_EMAIL = 'admin@almamedia.cl';
const ADMIN_PASSWORD = 'AlmaMedia2026!';

// DESPUÉS:
const ADMIN_EMAIL = 'admin@tudominio.com';
const ADMIN_PASSWORD = 'TuPasswordSeguro2026!';
\`\`\`

---

### 4. Variables de Entorno

**Archivo**: \`.env.local\` (crear en raíz del proyecto)

\`\`\`env
# Base de datos
DATABASE_URL="file:./prisma/tu-db.db"

# NextAuth
NEXTAUTH_SECRET="genera-un-secret-aleatorio-seguro-aqui"
NEXTAUTH_URL="http://localhost:3000" # Cambiar en producción
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
\`\`\`

**Generar NEXTAUTH_SECRET:**
\`\`\`bash
openssl rand -base64 32
\`\`\`

---

### 5. Modelo de Base de Datos (Opcional)

Si tu modelo se llama diferente a \`Article\`:

**Archivo**: \`prisma/schema.prisma\`

\`\`\`prisma
// Cambiar nombre del modelo:
model Article {  // → model TuModelo {
  id               String   @id @default(cuid())
  title            String
  // ... resto igual
}
\`\`\`

**Y ajustar en API routes**:

**Archivo**: \`app/api/articles/route.ts\`
\`\`\`typescript
// ANTES:
const articles = await prisma.article.findMany()

// DESPUÉS:
const items = await prisma.tuModelo.findMany()
\`\`\`

---

## Personalizaciones Opcionales

### 1. Placeholder del Editor

**Archivo**: \`components/ClassicEditor.tsx\`
**Línea**: ~245

\`\`\`typescript
Placeholder.configure({ 
  placeholder: "Escribe tu contenido aquí..." 
}),
\`\`\`

### 2. Nombre de la Galería (localStorage key)

**Archivo**: \`components/ClassicEditor.tsx\`
**Líneas**: ~262, ~272

\`\`\`typescript
// ANTES:
localStorage.getItem('divisachile-gallery')
localStorage.setItem('divisachile-gallery', ...)

// DESPUÉS:
localStorage.getItem('tumarca-gallery')
localStorage.setItem('tumarca-gallery', ...)
\`\`\`

### 3. Límite de Palabras (Indicador de Calidad)

**Archivo**: \`app/admin/articles/new/page.tsx\`
**Líneas**: ~293-297

\`\`\`typescript
// Ajusta los umbrales:
words < 600 ? 'text-red-500' :       // Muy corto
words < 1000 ? 'text-yellow-500' :   // Aceptable
'text-green-600'                     // Excelente
\`\`\`

### 4. Tiempo de Auto-save

**Archivo**: \`app/admin/articles/new/page.tsx\`
**Línea**: ~112

\`\`\`typescript
// ANTES (2 segundos):
}, 2000);

// Cambiar a 5 segundos:
}, 5000);
\`\`\`

---

## Checklist de Personalización

- [ ] Colores hex reemplazados (buscar \`#064E38\`, \`#F59E0B\`, \`#C8FF00\`)
- [ ] Clases Tailwind actualizadas (\`green-500\`, \`yellow-500\`)
- [ ] Logo/Nombre en header cambiado
- [ ] Permalink actualizado (tudominio.com)
- [ ] Categoría por defecto ajustada
- [ ] Autor por defecto personalizado
- [ ] Opciones de categorías actualizadas
- [ ] Credenciales admin configuradas
- [ ] Variables de entorno creadas
- [ ] NEXTAUTH_SECRET generado
- [ ] Placeholder del editor cambiado (opcional)
- [ ] Auto-save timing ajustado (opcional)

---

## Comando Todo-en-Uno (Bash/Linux/Mac)

Reemplaza los valores y ejecuta:

\`\`\`bash
#!/bin/bash
# Personalización automática del boilerplate

# Colores
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/#064E38/#1E40AF/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/#F59E0B/#3B82F6/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/#C8FF00/#1E40AF/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/green-/blue-/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/yellow-/blue-/g' {} +

# Branding
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/AlmaMedia/TuMarca/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/Alma/Tu/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/Media/Marca/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/almamedia\\.cl/tudominio.com/g' {} +
find . -type f \\( -name "*.tsx" -o -name "*.ts" \\) -exec sed -i 's/divisachile/tumarca/g' {} +

echo "✅ Personalización completada"
\`\`\`

---

**Tiempo estimado**: 10-15 minutos
**Archivos afectados**: ~10-15 archivos
