'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { Size } from '@prisma/client';
import prisma from '@/lib/db';
import { getOpenOrder } from '@/lib/data';

type addToCartParams = {
  orderStatus: string;
  userId: string;
  quantity: number;
  pizzaSize: Size;
  pizzaId: string;
};

export async function addToCart({
  orderStatus,
  userId,
  quantity,
  pizzaSize,
  pizzaId,
}: addToCartParams) {
  const openOrder = await getOpenOrder();

  let orderId: string;
  if (openOrder) {
    orderId = openOrder.id;
  } else {
    const newOrder = await prisma.order.create({
      data: {
        orderStatus,
        userId,
      },
    });
    orderId = newOrder.id;
  }

  const isItemAlreadyInCart = await prisma.orderItem.findFirst({
    where: { orderId, pizzaId, size: pizzaSize },
  });

  // If item is already in cart update its quantity else create a new orderItem
  if (isItemAlreadyInCart) {
    await prisma.orderItem.update({
      where: { id: isItemAlreadyInCart.id },
      data: { quantity: isItemAlreadyInCart.quantity + quantity },
    });
  } else {
    await prisma.orderItem.create({
      data: {
        quantity,
        size: pizzaSize,
        pizzaId,
        orderId,
      },
    });
  }

  revalidatePath(`/cart`);
  redirect(`/cart`);
}
