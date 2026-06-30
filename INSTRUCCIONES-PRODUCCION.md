# 🚀 Instrucciones para Activar Landing Pages en Producción

## ✅ Lo que YA está hecho (local):
- ✅ Código subido a GitHub (master y main)
- ✅ Schema de Prisma actualizado
- ✅ API REST completa
- ✅ Admin panel completo
- ✅ Editor con Alma SEO
- ✅ Renderizado dinámico con ISR
- ✅ Script de migración listo

## 🔧 Pasos para Ejecutar en Producción

### **Opción 1: Desde Coolify Web (RECOMENDADO)**

1. **Acceder a Coolify:**
   - URL: http://167.233.42.85:8000
   - Login: cristiancartes84@gmail.com
   - Password: #Cz$b55XpGDq3@i5Wyr

2. **Redeploy del proyecto:**
   - Buscar proyecto "almamedia"
   - Click en **"Redeploy"**
   - Esperar 3-5 minutos

3. **Ejecutar comandos (en terminal del contenedor):**
   
   Coolify debería tener una opción "Terminal" o "Console". Ejecuta:
   
   ```bash
   # 1. Aplicar migración de base de datos
   npx prisma migrate deploy
   
   # 2. Generar Prisma Client
   npx prisma generate
   
   # 3. Migrar páginas estáticas a BD
   node scripts/migrate-static-pages.js
   ```

4. **Reiniciar la aplicación:**
   - En Coolify, click "Restart"
   - Esperar 1-2 minutos

### **Opción 2: Desde SSH (Alternativa)**

Si tienes acceso SSH:

```bash
# 1. Conectar al servidor
ssh raiz@167.233.42.85

# 2. Ir al directorio del proyecto
cd /ruta/del/proyecto/almamedia-nextjs

# 3. Pull del código actualizado
git pull origin main

# 4. Instalar dependencias (si es necesario)
npm install

# 5. Aplicar migración
npx prisma migrate deploy

# 6. Generar Prisma Client
npx prisma generate

# 7. Migrar páginas estáticas
node scripts/migrate-static-pages.js

# 8. Reiniciar aplicación
pm2 restart almamedia
# O si usa otro proceso manager, reiniciar según corresponda
```

## ✅ Verificación

Después de ejecutar, verifica:

### 1. **Base de Datos:**
```bash
# Conectar a PostgreSQL y verificar
psql $DATABASE_URL -c "SELECT slug, title FROM \"LandingPage\";"
```

Deberías ver:
```
           slug            |                  title                   
---------------------------+------------------------------------------
 diseno-web-concepcion     | Diseño Web en Concepción - Sitios que Venden
 diseno-web-talcahuano     | Diseño Web en Talcahuano - Negocios del Puerto
 diseno-web-los-angeles    | Diseño Web en Los Ángeles - Capital Provincial
 diseno-web-san-pedro-paz  | Diseño Web en San Pedro de la Paz - Negocios Residenciales
```

### 2. **Admin Panel:**
- Ir a: https://almamedia.cl/admin/login
- Login: admin@almamedia.cl
- Password: AlmaMedia2026!
- Ir a: https://almamedia.cl/admin/pages
- **Deberías ver 4 páginas** listadas

### 3. **Frontend:**
Verificar que las páginas cargan:
- https://almamedia.cl/diseno-web-concepcion ✅
- https://almamedia.cl/diseno-web-talcahuano ✅
- https://almamedia.cl/diseno-web-los-angeles ✅
- https://almamedia.cl/diseno-web-san-pedro-paz ✅

## 🎨 Cómo Usar Después de Activar

### Editar Páginas Existentes:
1. Login en `/admin/login`
2. Ir a `/admin/pages`
3. Click "Editar" en cualquier página
4. Modificar Hero, Content, Pricing, SEO
5. "Guardar Cambios"
6. Los cambios aparecen en máximo 1 hora (ISR)

### Crear Nueva Página:
1. `/admin/pages` → "+ Nueva Página"
2. Llenar todos los campos
3. "Publicar Página"
4. Listo! Se crea la URL: `almamedia.cl/tu-slug`

## ⚠️ Troubleshooting

### Error: "Environment variable not found: DATABASE_URL"
- Verificar que `.env` existe en producción
- Verificar que Coolify tiene las variables de entorno configuradas

### Error: "PrismaClientInitializationError"
- Ejecutar: `npx prisma generate`
- Reiniciar la aplicación

### Las páginas no aparecen:
- Verificar que el script de migración se ejecutó correctamente
- Ver logs: `node scripts/migrate-static-pages.js`
- Verificar en BD: `SELECT * FROM "LandingPage";`

### ISR no actualiza:
- Esperar 1 hora (3600 segundos)
- O forzar rebuild: Redeploy en Coolify

## 📞 Ayuda

Si algo falla:
1. Revisar logs de Coolify
2. Verificar conexión a base de datos
3. Verificar que Prisma Client está generado
4. Contactar soporte

---

## 🎉 Resultado Final

Después de ejecutar estos pasos:
- ✅ 4 landing pages funcionando
- ✅ Editables desde admin
- ✅ SEO optimizado con Alma SEO
- ✅ Crear nuevas páginas sin código
- ✅ Performance mantenido (ISR)

**¡Sistema 100% operativo!** 🚀
