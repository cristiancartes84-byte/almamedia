import { PrismaClient } from "@prisma/client";

const g = globalThis as unknown as { prisma: PrismaClient; prismaKeepalive: boolean };

export const prisma = g.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") g.prisma = prisma;

// Keep the DB connection warm in production.
// Without this, after ~5 min of inactivity the TCP connection silently
// drops and the first request has to re-establish it (cold-start delay).
if (process.env.NODE_ENV === "production" && !g.prismaKeepalive) {
  g.prismaKeepalive = true;
  setInterval(async () => {
    try { await prisma.$queryRaw`SELECT 1`; } catch { /* ignore */ }
  }, 4 * 60 * 1000); // every 4 minutes
}
