import { unstable_noStore as noStore } from 'next/cache';
import { cache } from 'react';

import prisma from '@/lib/db';
import { Pizza } from '@prisma/client';

export const getPizzas = (): Promise<Pizza[]> => {
  try {
    return prisma.pizza.findMany();
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch pizzas');
  }
};

export const getPizza = (pizzaId: string) => {
  try {
    return prisma.pizza.findUnique({
      where: { id: pizzaId },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch pizza');
  }
};
