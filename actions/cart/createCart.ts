import { cookies } from 'next/headers';
import { Cart } from '@prisma/client';

import { getUser } from '@/queries/getUser';
import { CartWithItems } from '@/lib/types';
import prisma from '@/lib/db';

export async function createCart(): Promise<CartWithItems | null> {
  const user = await getUser();

  let newCart: Cart;
  try {
    if (user) {
      newCart = await prisma.cart.create({
        data: {
          userId: user.id,
        },
      });
    } else {
      newCart = await prisma.cart.create({ data: {} });
      cookies().set('anonymousCartId', newCart?.id);
    }
    return { ...newCart, cartItems: [] };
  } catch (error) {
    console.log(error);
    return null;
  }
}
