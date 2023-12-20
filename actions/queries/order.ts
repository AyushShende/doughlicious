import prisma from '@/lib/db';
import { unstable_noStore as noStore } from 'next/cache';
import { getUser } from '../getUser';

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
    });
  } catch (error) {
    console.log(error);
    throw new Error('Database Error: Failed to fetch orders');
  }
}
