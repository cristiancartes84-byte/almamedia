#!/bin/bash
# Copiar estructura de DivisaChile a AlmaMedia
cp /c/Users/crist/divisachile-nextjs/app/admin/articles/new/page.tsx app/admin/pages/new/page.tsx

# Reemplazar textos
sed -i 's/articles/landing-pages/g' app/admin/pages/new/page.tsx
sed -i 's/RankMathSidebar/AlmaSEO/g' app/admin/pages/new/page.tsx  
sed -i 's/Divisa/Alma/g' app/admin/pages/new/page.tsx
sed -i 's/Chile/Media/g' app/admin/pages/new/page.tsx
sed -i 's/#064E38/#C8FF00/g' app/admin/pages/new/page.tsx
sed -i 's/#F59E0B/#0a0a0a/g' app/admin/pages/new/page.tsx
sed -i 's/divisachile/almamedia/g' app/admin/pages/new/page.tsx
sed -i 's/green/yellow/g' app/admin/pages/new/page.tsx

echo "✅ Archivo copiado y adaptado"
