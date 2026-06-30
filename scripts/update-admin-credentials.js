const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function updateAdminCredentials() {
  const newEmail = 'admin@almamedia.cl';
  const newPassword = 'AlmaMedia2026!';

  // Generar hash de la contraseña
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Buscar el usuario admin existente
  const existingAdmin = await prisma.user.findFirst({
    where: {
      OR: [
        { email: 'admin@divisachile.cl' },
        { email: 'admin@almamedia.cl' }
      ]
    }
  });

  if (existingAdmin) {
    // Actualizar credenciales
    await prisma.user.update({
      where: { id: existingAdmin.id },
      data: {
        email: newEmail,
        password: hashedPassword,
        name: 'Admin Alma Media'
      }
    });
    console.log('✅ Credenciales actualizadas correctamente');
  } else {
    // Crear nuevo usuario admin
    await prisma.user.create({
      data: {
        email: newEmail,
        password: hashedPassword,
        name: 'Admin Alma Media'
      }
    });
    console.log('✅ Usuario admin creado correctamente');
  }

  console.log('\n📧 Email: admin@almamedia.cl');
  console.log('🔑 Contraseña: AlmaMedia2026!');
  console.log('\n⚠️  IMPORTANTE: Cambia esta contraseña después del primer login\n');

  await prisma.$disconnect();
}

updateAdminCredentials()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  });
