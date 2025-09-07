import { PrismaClient } from '@prisma/client';

// This pattern prevents multiple instances of Prisma Client from being created in development
// due to Next.js's hot-reloading feature.

// Add prisma to the NodeJS global type
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
