import { unstable_noStore as noStore } from 'next/cache';
import { Pizza } from '@prisma/client';

import prisma from '@/lib/db';

export const getPizzas = (): Promise<Pizza[]> => {
  noStore();
  try {
    return prisma.pizza.findMany();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch pizzas');
  }
};

export const getPizza = (pizzaId: string) => {
  noStore();
  try {
    return prisma.pizza.findUnique({
      where: { id: pizzaId },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch pizza');
  }
};
