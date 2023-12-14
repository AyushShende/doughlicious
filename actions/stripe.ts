'use server';
import type { Stripe } from 'stripe';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

import { ActionState } from './types';
import { stripe } from '@/lib/stripe';
import prisma from '@/lib/db';
import { getUser } from './getUser';

export async function createCheckoutSession(): Promise<ActionState> {
  const user = await getUser();

  if (!user) {
    redirect('/api/auth/signin');
  }

  const cart = await prisma.cart.findFirst({
    where: { userId: user.id },
    include: {
      cartItems: { select: { pizza: true, quantity: true, size: true } },
    },
  });

  if (!cart) {
    return {
      errors: {
        _actionError: ['Database Error: Failed to retrieve cart and its items'],
      },
    };
  }

  const line_items = cart?.cartItems.map((item) => ({
    price_data: {
      currency: 'inr',
      product_data: {
        name: item.pizza.title,
        metadata: {
          size: item.size,
        },
      },
      unit_amount: item.pizza.price * 100,
    },
    quantity: item.quantity,
  }));

  let checkoutSession: Stripe.Checkout.Session;
  try {
    checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      success_url: `${headers().get('origin')}/orders`,
      cancel_url: `${headers().get('origin')}/cart`,
      currency: 'inr',
      metadata: {
        cartId: cart.id,
        userId: user.id,
      },
      customer_email: user?.email ?? '',
    });
  } catch (error) {
    console.log(error);

    return {
      errors: {
        _actionError: [
          'Stripe Error: Could not create stripe checkout session',
        ],
      },
    };
  }

  redirect(checkoutSession.url as string);
}
