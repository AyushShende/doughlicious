import { PrismaClient } from '@prisma/client';
import { PIZZAS } from './pizza.mock';
const prisma = new PrismaClient();

async function main() {
  await prisma.pizza.createMany({
    data: PIZZAS,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
