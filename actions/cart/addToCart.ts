'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '@/lib/db';
import { ActionState, AddToCartParams, CartWithItems } from '../types';
import { getCart } from './getCart';
import { createCart } from './createCart';

export async function addToCart(
  { quantity, pizzaSize, pizzaId }: AddToCartParams,
  formState: ActionState
): Promise<ActionState> {
  const cart: CartWithItems | null = (await getCart()) ?? (await createCart());

  if (!cart) {
    return {
      errors: {
        _actionError: ['Error: could not retrieve cart'],
      },
    };
  }

  const isPizzaAlreadyInCart = cart.cartItems.find(
    (item) => item.pizzaId === pizzaId && item.size === pizzaSize
  );

  try {
    if (isPizzaAlreadyInCart) {
      // Update CartItem quantity
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          cartItems: {
            update: {
              where: { id: isPizzaAlreadyInCart.id },
              data: {
                quantity: isPizzaAlreadyInCart.quantity + quantity,
              },
            },
          },
        },
      });
    } else {
      // Create CartItem
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          cartItems: {
            create: {
              pizzaId,
              quantity,
              size: pizzaSize,
            },
          },
        },
        include: { cartItems: true },
      });
    }
  } catch (error) {
    console.log(error);
    return {
      errors: {
        _actionError: ['Database Error: Failed to update cart'],
      },
    };
  }

  revalidatePath('/cart');
  redirect('/cart');
}
