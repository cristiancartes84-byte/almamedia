# 📚 Documentación AlmaMedia

## 🚀 Inicio Rápido

Si eres nuevo en el proyecto:

1. **Lee primero**: [ARCHITECTURE.md](./ARCHITECTURE.md) - Descripción general del sistema
2. **Setup local**: [boilerplate/QUICK-START.md](./boilerplate/QUICK-START.md)
3. **Credenciales**: `../CREDENCIALES-ADMIN.md` (en raíz del proyecto)

## 📖 Documentación Disponible

### En la raíz del proyecto (`../`)
- **CREDENCIALES-ADMIN.md** - Usuario y contraseña del admin
- **INSTRUCCIONES-PRODUCCION.md** - Deploy a producción con Docker
- **LANDING-PAGES-SISTEMA.md** - Sistema de páginas landing
- **README.md** - Descripción general del proyecto

### En esta carpeta (`docs/`)
- **ARCHITECTURE.md** ⭐ - Arquitectura completa del sistema
- **boilerplate/** - Sistema base reutilizable

## 🎯 Según tu Necesidad

### Quiero entender el proyecto
→ Lee [ARCHITECTURE.md](./ARCHITECTURE.md)

### Necesito instalar localmente
→ Lee [boilerplate/QUICK-START.md](./boilerplate/QUICK-START.md)

### Quiero personalizar colores/branding
→ Lee [boilerplate/CUSTOMIZATION.md](./boilerplate/CUSTOMIZATION.md)

### Necesito hacer deploy a producción
→ Lee `../INSTRUCCIONES-PRODUCCION.md`

### Necesito acceso al admin
→ Lee `../CREDENCIALES-ADMIN.md`

### Quiero entender las páginas landing
→ Lee `../LANDING-PAGES-SISTEMA.md`

### Quiero reutilizar el sistema en otro proyecto
→ Copia el boilerplate: `/c/Users/crist/Desktop/BOILERPLATE-ADMIN-SYSTEM/`

## 🏗️ Sistema Base (Boilerplate)

AlmaMedia está construido sobre un **boilerplate completo** que puedes reutilizar en cualquier proyecto.

Documentación del boilerplate:
- [START-HERE.md](./boilerplate/START-HERE.md) - Punto de entrada
- [QUICK-START.md](./boilerplate/QUICK-START.md) - Instalación rápida (5 min)
- [INSTALL.md](./boilerplate/INSTALL.md) - Instalación paso a paso
- [CUSTOMIZATION.md](./boilerplate/CUSTOMIZATION.md) - Personalizar
- [SCREENSHOTS.md](./boilerplate/SCREENSHOTS.md) - Funcionalidades
- [INDEX.md](./boilerplate/INDEX.md) - Índice completo
- [README.md](./boilerplate/README.md) - Overview

## 🔑 Acceso Rápido

### URLs Importantes
- **Frontend**: http://localhost:3000
- **Admin**: http://localhost:3000/admin/login
- **Dashboard**: http://localhost:3000/admin/dashboard
- **Artículos**: http://localhost:3000/admin/articles
- **Páginas**: http://localhost:3000/admin/pages

### Credenciales por Defecto
Ver: `../CREDENCIALES-ADMIN.md`

## 📂 Estructura de Archivos

```
almamedia-nextjs/
├── app/                    # Next.js App Router
├── components/             # Componentes React
├── lib/                    # Utilidades
├── prisma/                 # Base de datos
├── public/                 # Archivos estáticos
├── docs/                   # ← Estás aquí
│   ├── README.md          # Este archivo
│   ├── ARCHITECTURE.md    # Arquitectura
│   └── boilerplate/       # Sistema base
└── [archivos raíz]        # Configuración
```

## 🛠️ Comandos Comunes

```bash
# Desarrollo
npm run dev

# Build
npm run build
npm start

# Prisma
npx prisma studio
npx prisma migrate dev

# Docker
docker build -t almamedia .
docker run -p 3000:3000 almamedia
```

## 🔄 Ciclo de Desarrollo

1. **Desarrollo local**: `npm run dev`
2. **Crear contenido**: Login → Admin
3. **Preview**: Ver en frontend
4. **Commit**: Git commit + push
5. **Deploy**: Docker build + push

## 📦 Tecnologías Clave

- **Framework**: Next.js 14.2+
- **DB**: PostgreSQL / SQLite
- **ORM**: Prisma
- **Auth**: NextAuth.js
- **Editor**: TipTap
- **Styles**: Tailwind CSS
- **Deploy**: Docker

## 🆘 Troubleshooting

### No puedo hacer login
→ Verifica credenciales en `../CREDENCIALES-ADMIN.md`

### Texto invisible en el editor
→ Verifica que ClassicEditor.tsx tenga `text-gray-900`

### Error de Prisma
→ Ejecuta `npx prisma generate`

### Error al build
→ Verifica `.env.local` con todas las variables

## 📞 Soporte

Para problemas con:
- **El proyecto AlmaMedia**: Contacta al equipo
- **El boilerplate base**: Ver docs en `boilerplate/`
- **Next.js**: https://nextjs.org/docs
- **Prisma**: https://www.prisma.io/docs

## 🎯 Siguiente Paso

**Lee**: [ARCHITECTURE.md](./ARCHITECTURE.md) para entender el sistema completo.

---

**Proyecto**: AlmaMedia  
**Versión**: 1.0.0  
**Última actualización**: 2026-07-01  
**Stack**: Next.js + Prisma + TipTap
