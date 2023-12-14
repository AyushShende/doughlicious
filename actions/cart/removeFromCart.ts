'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '@/lib/db';
import { ActionState } from '../types';

export async function removeFromCart(
  cartItemId: string,
  formState: ActionState
): Promise<ActionState> {
  try {
    await prisma.cartItem.delete({
      where: { id: cartItemId },
    });
  } catch (error) {
    console.log(error);
    return {
      errors: {
        _actionError: ['Database Error: Failed to delete item'],
      },
    };
  }

  revalidatePath('/cart');
  redirect('/cart');
}
