import prisma from '@/lib/db';
import { unstable_noStore as noStore } from 'next/cache';

export async function getPizzas() {
  noStore();
  try {
    return await prisma.pizza.findMany();
  } catch (error) {
    throw new Error('Failed to fetch pizzas');
  }
}

export async function getPizza(pizzaId: string) {
  noStore();
  try {
    return await prisma.pizza.findFirst({
      where: { id: pizzaId },
    });
  } catch (error) {
    throw new Error('Failed to fetch pizza');
  }
}

export async function getCartSize() {
  noStore();
  try {
    const data = await prisma.orderItem.groupBy({
      by: 'orderId',
      _sum: { quantity: true },
    });

    return data[0]._sum.quantity;
  } catch (error) {
    return 0;
  }
}

export async function getOpenOrder() {
  noStore();
  try {
    return await prisma.order.findFirst({
      where: { orderStatus: 'pending' },
      select: {
        orderItems: {
          select: { id: true, pizza: true, size: true, quantity: true },
        },
        id: true,
      },
    });
  } catch (error) {
    throw new Error('Failed to fetch open orders');
  }
}
