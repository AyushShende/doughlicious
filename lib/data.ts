import prisma from '@/lib/db';

export async function getPizzas() {
  try {
    return await prisma.pizza.findMany();
  } catch (error) {
    throw new Error('Failed to fetch pizzas');
  }
}

export async function getPizza(pizzaId: string) {
  try {
    return await prisma.pizza.findFirst({
      where: { id: pizzaId },
    });
  } catch (error) {
    throw new Error('Failed to fetch pizza');
  }
}

export async function getCartSize() {
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
  try {
    return await prisma.order.findFirst({
      where: { orderStatus: 'pending' },
    });
  } catch (error) {
    throw new Error('Failed to fetch open orders');
  }
}
