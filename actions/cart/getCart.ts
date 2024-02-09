import { cookies } from 'next/headers';

import { getUser } from '@/queries/getUser';
import { CartWithItems } from '@/lib/types';
import prisma from '@/lib/db';

export async function getCart(): Promise<CartWithItems | null> {
  const user = await getUser();

  let cart: CartWithItems | null;
  try {
    if (user) {
      cart = await prisma.cart.findFirst({
        where: { userId: user.id },
        include: { cartItems: true },
      });
    } else {
      const anonymousCartId = cookies().get('anonymousCartId')?.value;
      if (!anonymousCartId) {
        return null;
      }

      cart = await prisma.cart.findUnique({
        where: { id: anonymousCartId },
        include: { cartItems: true },
      });
    }
    return cart;
  } catch (error) {
    console.log(error);
    return null;
  }
}
