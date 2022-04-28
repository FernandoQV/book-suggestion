import { PrismaClient } from '@prisma/client'
let prismaAdmin:PrismaClient
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}
if (process.env.NODE_ENV === 'production') {
  prismaAdmin = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prismaAdmin = global.prisma;
}

export default prismaAdmin;
/* export const prismaAdmin =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prismaAdmin */