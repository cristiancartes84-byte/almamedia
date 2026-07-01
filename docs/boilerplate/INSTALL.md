# 📖 Guía de Instalación - Sistema Admin

## Prerequisitos

- Node.js 18+ instalado
- Next.js 14.2+ 
- Base de datos (SQLite / PostgreSQL / MySQL)

## Instalación Paso a Paso

### 1️⃣ Copiar Archivos al Proyecto

\`\`\`bash
# Desde la carpeta BOILERPLATE-ADMIN-SYSTEM
cp -r components/* tu-proyecto/components/
cp -r app/admin/* tu-proyecto/app/admin/
cp -r lib/* tu-proyecto/lib/
cp -r api/* tu-proyecto/app/api/
cp prisma/schema.prisma tu-proyecto/prisma/
\`\`\`

### 2️⃣ Instalar Dependencias

\`\`\`bash
cd tu-proyecto
npm install next-auth @prisma/client @tiptap/react @tiptap/starter-kit @tiptap/extension-image @tiptap/extension-link @tiptap/extension-placeholder @tiptap/extension-text-align @tiptap/extension-underline bcryptjs

npm install -D prisma @types/bcryptjs
\`\`\`

### 3️⃣ Configurar Variables de Entorno

Crea/edita \`.env.local\`:

\`\`\`env
# Base de datos (elige una)
DATABASE_URL="file:./prisma/tu-db.db" # SQLite (desarrollo)
# DATABASE_URL="postgresql://user:password@localhost:5432/tu_db" # PostgreSQL (producción)

# NextAuth
NEXTAUTH_SECRET="tu-secret-super-seguro-aqui-cambiar-en-produccion"
NEXTAUTH_URL="http://localhost:3000" # Cambiar en producción
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
\`\`\`

### 4️⃣ Configurar Base de Datos

\`\`\`bash
# Generar cliente Prisma
npx prisma generate

# Crear migración inicial
npx prisma migrate dev --name init

# Ver la DB en navegador (opcional)
npx prisma studio
\`\`\`

### 5️⃣ Personalizar Branding

#### A. Colores

Buscar y reemplazar en **TODOS los archivos copiados**:

| DivisaChile/AlmaMedia | Tu Proyecto |
|-----------------------|-------------|
| `#064E38` | Tu color primario hex |
| `#F59E0B` | Tu color secundario hex |
| `#C8FF00` | Tu color de acento hex |
| `green-500` | `tu-color-500` |
| `yellow-500` | `tu-color-500` |

**Comando rápido (Linux/Mac):**
\`\`\`bash
# Ejemplo: Cambiar a color azul
find components app lib -type f -exec sed -i 's/#064E38/#1E40AF/g' {} +
find components app lib -type f -exec sed -i 's/green-500/blue-500/g' {} +
\`\`\`

#### B. Textos y Branding

En \`app/admin/articles/new/page.tsx\`:

**Línea ~68-69 (Logo/Header):**
\`\`\`typescript
<span className="text-xl font-bold" style={{ color: '#C8FF00' }}>Tu</span>
<span className="text-xl font-bold" style={{ color: '#0a0a0a' }}>Marca</span>
\`\`\`

**Línea ~24 (Categoría por defecto):**
\`\`\`typescript
category: 'Tu Categoría Default',
\`\`\`

**Línea ~29 (Autor por defecto):**
\`\`\`typescript
author: 'Equipo TuMarca',
\`\`\`

**Línea ~409-414 (Opciones de categorías):**
\`\`\`typescript
<option value="Categoría 1">Categoría 1</option>
<option value="Categoría 2">Categoría 2</option>
// ... tus categorías
\`\`\`

**Línea ~270 (Permalink):**
\`\`\`typescript
<span className="text-xs text-gray-400">tudominio.com/</span>
\`\`\`

#### C. Credenciales Admin

En \`lib/auth.ts\` línea ~15-17:

\`\`\`typescript
const ADMIN_EMAIL = 'admin@tudominio.com';
const ADMIN_PASSWORD = 'TuPasswordSeguro2026!';
\`\`\`

### 6️⃣ Ajustar Rutas de API

Si tu modelo se llama diferente a \`Article\`, ajusta:

**app/api/articles/route.ts:**
\`\`\`typescript
// Cambiar:
const articles = await prisma.article.findMany()

// Por:
const tuModelo = await prisma.tuModelo.findMany()
\`\`\`

### 7️⃣ Configurar NextAuth

Crea \`app/api/auth/[...nextauth]/route.ts\`:

\`\`\`typescript
import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
\`\`\`

### 8️⃣ Verificar Layout Admin

Crea \`app/admin/layout.tsx\` (si no existe):

\`\`\`typescript
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/admin/login');
  }

  return <>{children}</>;
}
\`\`\`

### 9️⃣ Crear Página de Login

Crea \`app/admin/login/page.tsx\`:

\`\`\`typescript
'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('Credenciales incorrectas');
    } else {
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-white">Iniciar Sesión</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}
\`\`\`

### 🔟 Probar la Instalación

\`\`\`bash
npm run dev
\`\`\`

Visita:
1. **Login**: http://localhost:3000/admin/login
2. **Dashboard**: http://localhost:3000/admin/dashboard
3. **Crear artículo**: http://localhost:3000/admin/articles/new

## ✅ Checklist de Verificación

- [ ] Dependencias instaladas (\`npm install\`)
- [ ] Variables de entorno configuradas (\`.env.local\`)
- [ ] Base de datos migrada (\`npx prisma migrate dev\`)
- [ ] Colores personalizados (buscar/reemplazar hex)
- [ ] Branding actualizado (logo, nombre)
- [ ] Categorías ajustadas
- [ ] Credenciales admin configuradas
- [ ] Login funciona
- [ ] Editor se renderiza correctamente
- [ ] Auto-save funciona
- [ ] Alma SEO muestra puntaje
- [ ] Preview modal funciona
- [ ] Publicar/Guardar funciona

## 🐛 Troubleshooting

### Error: "Cannot find module '@/components/ClassicEditor'"

**Solución**: Verifica que hayas copiado \`ClassicEditor.tsx\` a \`components/\`.

### Error: "PrismaClient is not configured"

**Solución**: 
\`\`\`bash
npx prisma generate
\`\`\`

### Error: "NEXTAUTH_SECRET is required"

**Solución**: Agrega \`NEXTAUTH_SECRET\` a \`.env.local\`.

### Editor no muestra texto negro

**Solución**: Verifica que \`ClassicEditor.tsx\` línea ~252 tenga:
\`\`\`typescript
class: "... text-gray-900 prose-p:text-gray-900 ..."
\`\`\`

### Galería de imágenes vacía después de refresh

**Solución**: La galería usa \`localStorage\`. Para persistencia, cambia a guardar en base de datos (modelo \`MediaGallery\`).

## 🎯 Próximos Pasos

1. **Crear Dashboard**: Copia \`app/admin/dashboard/page.tsx\` de AlmaMedia
2. **Listado de Artículos**: Copia \`app/admin/articles/page.tsx\`
3. **Editar Artículo**: Copia \`app/admin/articles/[id]/edit/page.tsx\`
4. **API Routes**: Copia toda la carpeta \`app/api/articles/\`

## 📞 Soporte

¿Problemas durante la instalación? Revisa:
1. Consola de errores del navegador (F12)
2. Terminal donde corre \`npm run dev\`
3. Logs de Prisma (\`npx prisma studio\`)

---

**Tiempo estimado de instalación**: 15-30 minutos
**Nivel de dificultad**: Intermedio
