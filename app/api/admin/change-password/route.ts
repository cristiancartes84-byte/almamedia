import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { currentPassword, newPassword, newEmail, newName } = await req.json();

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });

  const validPassword = await bcrypt.compare(currentPassword, user.password);
  if (!validPassword) {
    return NextResponse.json({ error: "Contraseña actual incorrecta" }, { status: 400 });
  }

  const updates: { email?: string; name?: string; password?: string } = {};
  if (newEmail && newEmail !== user.email) updates.email = newEmail;
  if (newName && newName !== user.name) updates.name = newName;
  if (newPassword && newPassword.length >= 8) {
    updates.password = await bcrypt.hash(newPassword, 10);
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "Sin cambios" }, { status: 400 });
  }

  await prisma.user.update({ where: { id: user.id }, data: updates });
  return NextResponse.json({ ok: true });
}
