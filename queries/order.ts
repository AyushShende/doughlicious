import { unstable_noStore as noStore } from 'next/cache';

import prisma from '@/lib/db';
import { getUser } from './getUser';

export async function getOrders() {
  noStore();
  try {
    const user = await getUser();

    if (!user) {
      throw new Error('You must be authenticated');
    }

    const orders = await prisma.order.findMany({
      where: { userId: user.id },
    });

    if (!orders.length) {
      return [];
    }

    return prisma.order.findMany({
      where: { userId: user.id },
      include: {
        address: {
          select: { street: true, city: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Database Error: Failed to fetch orders');
  }
}

export async function getPaidOrders() {
  noStore();
  try {
    const orders = await prisma.order.findMany({
      where: { NOT: { orderStatus: 'Completed' } },
      include: {
        user: { select: { name: true } },
        address: {
          select: { street: true, city: true },
        },
        orderItems: {
          select: { quantity: true, pizza: { select: { title: true } } },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    if (!orders.length) {
      return [];
    }

    return orders;
  } catch (error) {
    console.log(error);
    throw new Error('Database Error: Failed to fetch orders');
  }
}

export async function getSinglePaidOrder(orderId: string) {
  try {
    return prisma.order.findUnique({
      where: {
        id: orderId,
      },
      include: {
        user: { select: { name: true } },
        address: {
          select: { street: true, city: true },
        },
        orderItems: {
          select: { quantity: true, pizza: { select: { title: true } } },
        },
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Database Error: Failed to fetch order');
  }
}
