# 🔐 Credenciales de Administración - Alma Media

## Credenciales Actuales

**URL de acceso:** https://almamedia.cl/admin/login

```
📧 Email: admin@almamedia.cl
🔑 Contraseña: AlmaMedia2026!
```

## ⚠️ IMPORTANTE

**Debes cambiar estas credenciales después del primer login** por seguridad.

## 🔄 Actualizar Credenciales en Producción

Para actualizar las credenciales en el servidor de producción, sigue estos pasos:

### Opción 1: Desde SSH (Recomendado)

1. Conéctate al servidor:
```bash
ssh raiz@167.233.42.85
```

2. Ve al directorio del proyecto:
```bash
cd /ruta/del/proyecto/almamedia-nextjs
```

3. Ejecuta el script:
```bash
node scripts/update-admin-credentials.js
```

### Opción 2: Ejecutar localmente y sincronizar BD

Si tienes acceso a la base de datos de producción localmente:

```bash
# En tu máquina local
cd almamedia-nextjs
node scripts/update-admin-credentials.js
```

## 🎨 Diseño del Login

El login ahora usa el diseño dark de Alma Media:
- ✅ Fondo negro (#0a0a0a)
- ✅ Card dark (#1a1a1a)
- ✅ Logo solo texto: "Alma" (amarillo #C8FF00) + "Media" (blanco)
- ✅ Botón amarillo neón con hover effect
- ✅ Sin logo SVG de DivisaChile

## 📝 Notas

- Las credenciales se guardan en la base de datos PostgreSQL
- La contraseña está hasheada con bcrypt (10 rounds)
- El email es único en la base de datos
