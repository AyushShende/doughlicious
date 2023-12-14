import { cookies } from 'next/headers';
import { unstable_noStore as noStore } from 'next/cache';

import prisma from '@/lib/db';
import { getUser } from '../getUser';

export const fetchCartItems = async () => {
  try {
    const user = await getUser();
    let cartId;
    if (user) {
      const cart = await prisma.cart.findFirst({
        where: { userId: user.id },
      });
      cartId = cart?.id;
    } else {
      cartId = cookies().get('anonymousCartId')?.value;
    }

    if (!cartId) {
      return null;
    }

    const cartItems = await prisma.cartItem.findMany({
      where: { cartId },
      include: {
        pizza: {
          select: { title: true, price: true, image: true, description: true },
        },
      },
    });

    if (cartItems.length < 1) {
      return null;
    }

    return cartItems;
  } catch (error) {
    console.log(error);
    throw new Error('Database Error: Failed to fetch cart items');
  }
};
