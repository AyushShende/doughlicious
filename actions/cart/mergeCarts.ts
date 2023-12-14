'use server';

import { cookies } from 'next/headers';

import prisma from '@/lib/db';

export async function mergeCart(userId: string) {
  const anonymousCartId = cookies().get('anonymousCartId')?.value;

  // If there's no anonymous cart or the user is not logged in, no need to merge carts.
  if (!anonymousCartId || !userId) {
    return;
  }

  try {
    const anonymousCart = await prisma.cart.findFirst({
      where: { id: anonymousCartId },
      select: { cartItems: true },
    });

    const userCart = await prisma.cart.findFirst({
      where: { userId },
      select: { id: true, cartItems: true },
    });

    if (!userCart) {
      // Create a new cart for the user and update cartId for anonymous cart items.
      const newCart = await prisma.cart.create({
        data: {
          userId,
        },
      });
      await prisma.cartItem.updateMany({
        where: { cartId: anonymousCartId },
        data: { cartId: newCart.id },
      });
    } else {
      // Merge logic for existing user cart and anonymous cart items.

      // Check if the anonymous cart Item already exists in the user cart
      for (const item of anonymousCart?.cartItems || []) {
        const existingItem = userCart.cartItems.find(
          (ci) => ci.pizzaId === item.pizzaId && ci.size === item.size
        );
        if (existingItem) {
          // If item exists update the quantity of the cartItem in user cart and delete the anonymous cart Item.
          await prisma.cartItem.update({
            where: { id: existingItem.id },
            data: { quantity: existingItem.quantity + item.quantity },
          });

          await prisma.cartItem.delete({
            where: { id: item.id },
          });
        } else {
          // If item does not exist update its cart Id
          await prisma.cartItem.updateMany({
            where: { cartId: anonymousCartId },
            data: { cartId: userCart.id },
          });
        }
      }
    }

    // Delete orphan cart and the cookie.
    await prisma.cart.delete({
      where: { id: anonymousCartId },
    });
    cookies().delete('anonymousCartId');
  } catch (error) {
    console.log(error);
  }
}
