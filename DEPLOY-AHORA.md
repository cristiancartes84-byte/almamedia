# 🚀 DEPLOY A PRODUCCIÓN - PASO A PASO

## ✅ Pre-requisitos Completados
- ✅ Código pusheado a GitHub (8 commits nuevos)
- ✅ Cambios incluidos:
  - ✅ 6 páginas pilares creadas
  - ✅ Navegación actualizada
  - ✅ Botones Visual/HTML en editor
  - ✅ Auto-save mejorado con debugging
  - ✅ Documentación completa
  - ✅ Fix branding DivisaChile → AlmaMedia

---

## 📋 OPCIÓN 1: Deploy desde Coolify (RECOMENDADO)

### Paso 1: Acceder a Coolify

1. Abre tu navegador
2. Ve a: **http://167.233.42.85:8000**
3. Login:
   - **Email**: cristiancartes84@gmail.com
   - **Password**: #Cz$b55XpGDq3@i5Wyr

### Paso 2: Redeploy del Proyecto

1. Busca el proyecto **"almamedia"** en el dashboard
2. Click en el proyecto
3. Click en botón **"Redeploy"** o **"Deploy"**
4. Espera 3-5 minutos mientras:
   - Descarga código de GitHub
   - Instala dependencias
   - Hace build de Next.js
   - Reinicia contenedor

### Paso 3: Ejecutar Migraciones (IMPORTANTE)

Una vez que el deploy termine:

1. En Coolify, busca opción **"Terminal"** o **"Console"** o **"Execute Command"**
2. Ejecuta estos comandos **uno por uno**:

```bash
# Generar Prisma Client
npx prisma generate

# Aplicar migraciones a la base de datos
npx prisma migrate deploy
```

### Paso 4: Verificar

1. Ve a: **https://almamedia.cl**
2. Verifica que carga correctamente
3. Ve a: **https://almamedia.cl/admin/login**
   - Email: admin@almamedia.cl
   - Password: AlmaMedia2026!
4. Prueba crear un artículo nuevo
5. Verifica que el auto-save funciona

### Paso 5: Verificar Páginas Pilares

Verifica que estas páginas carguen:
- https://almamedia.cl/diseno-web
- https://almamedia.cl/seo-posicionamiento
- https://almamedia.cl/seo-local
- https://almamedia.cl/fotografia-producto
- https://almamedia.cl/video-producto
- https://almamedia.cl/packs-completos

---

## 📋 OPCIÓN 2: Deploy Manual vía SSH

Si Coolify no funciona o prefieres control total:

### Paso 1: Conectar al Servidor

```bash
ssh raiz@167.233.42.85
```

### Paso 2: Ir al Proyecto

```bash
# Buscar dónde está el proyecto
cd /var/www/almamedia-nextjs
# O
cd /app/almamedia-nextjs
# O usa: find / -name "almamedia-nextjs" 2>/dev/null
```

### Paso 3: Actualizar Código

```bash
# Ver branch actual
git branch

# Pull del código
git pull origin master
```

### Paso 4: Instalar Dependencias

```bash
npm install
```

### Paso 5: Aplicar Migraciones

```bash
# Generar Prisma Client
npx prisma generate

# Aplicar migraciones
npx prisma migrate deploy
```

### Paso 6: Build y Reinicio

```bash
# Build de producción
npm run build

# Reiniciar (depende de cómo esté configurado)
pm2 restart almamedia
# O
docker restart almamedia
# O
systemctl restart almamedia
```

---

## 🔍 Verificación Post-Deploy

### 1. Verificar Base de Datos

```bash
# Conectar a PostgreSQL
psql $DATABASE_URL -c "SELECT slug, title FROM \"Page\" LIMIT 10;"
```

Deberías ver las 6 páginas pilares.

### 2. Verificar Logs

En Coolify o SSH:
```bash
# Ver logs en tiempo real
docker logs -f almamedia
# O
pm2 logs almamedia
```

Busca errores o warnings.

### 3. Verificar Admin Panel

1. https://almamedia.cl/admin/login
2. Login correcto
3. Dashboard carga
4. Crear nuevo artículo
5. Esperar 2 segundos
6. Verificar que aparece "Borrador guardado a las HH:MM"

### 4. Verificar Frontend

- Homepage: https://almamedia.cl ✅
- Página pilar 1: https://almamedia.cl/diseno-web ✅
- Blog: https://almamedia.cl/blog ✅

---

## ⚠️ Problemas Comunes

### Error: "Prisma Client not generated"

**Solución**:
```bash
npx prisma generate
npm run build
# Reiniciar app
```

### Error: "Environment variable not found"

**Solución**:
1. Verificar que existe archivo `.env` en producción
2. En Coolify: Settings → Environment Variables
3. Verificar que están todas las variables:
   - DATABASE_URL
   - NEXTAUTH_SECRET
   - NEXTAUTH_URL
   - NEXT_PUBLIC_BASE_URL

### Auto-save no funciona en producción

**Diagnóstico**:
1. Abre DevTools en producción
2. Ve a Console
3. Busca los logs con iconos (👀, 🔄, ✅)
4. Si no aparecen: el build no incluyó los cambios
5. **Solución**: Hacer hard refresh (Ctrl+Shift+R)

### Páginas pilares dan 404

**Solución**:
```bash
# Verificar que existen en BD
psql $DATABASE_URL -c "SELECT slug FROM \"Page\";"

# Si no existen, ejecutar script
node scripts/create-pillar-pages.js
```

---

## 📊 Checklist Post-Deploy

- [ ] Homepage carga correctamente
- [ ] Admin login funciona
- [ ] Dashboard muestra estadísticas
- [ ] Crear artículo nuevo funciona
- [ ] Auto-save funciona (ver "Borrador guardado")
- [ ] Editor Visual/HTML funciona
- [ ] Alma SEO sidebar aparece
- [ ] Las 6 páginas pilares cargan
- [ ] Navegación apunta a páginas pilares
- [ ] No hay branding "DivisaChile"
- [ ] Colores son amarillo (#C8FF00)

---

## 🎉 ¡Deploy Exitoso!

Si todos los checks pasan:
- ✅ Producción actualizada
- ✅ Auto-save funcionando
- ✅ 6 páginas pilares live
- ✅ Editor mejorado
- ✅ Documentación completa

**Sistema 100% operativo en producción** 🚀

---

## 📞 Soporte

Si algo falla:
1. Revisar logs de Coolify/servidor
2. Verificar variables de entorno
3. Verificar conexión a base de datos
4. Check status de servicios

**Credenciales Coolify**:
- URL: http://167.233.42.85:8000
- Email: cristiancartes84@gmail.com
- Password: #Cz$b55XpGDq3@i5Wyr

**Credenciales Admin AlmaMedia**:
- URL: https://almamedia.cl/admin/login
- Email: admin@almamedia.cl
- Password: AlmaMedia2026!

---

**Fecha deploy**: 2026-07-01  
**Commits nuevos**: 8 commits  
**Cambios principales**: Páginas pilares + Auto-save + Visual/HTML + Docs
