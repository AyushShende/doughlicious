import type { Stripe } from 'stripe';
import { NextResponse } from 'next/server';

import { stripe } from '@/lib/stripe';
import prisma from '@/lib/db';

export async function POST(req: Request) {
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      await (await req.blob()).text(),
      req.headers.get('stripe-signature') as string,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    // On error, log and return the error message.
    if (err! instanceof Error) console.log(err);
    console.log(`❌ Error message: ${errorMessage}`);
    return NextResponse.json(
      { message: `Webhook Error: ${errorMessage}` },
      { status: 400 }
    );
  }

  if (event.type === 'checkout.session.completed') {
    try {
      const session = event.data.object as Stripe.Checkout.Session;
      const cartId = session.metadata?.cartId;
      const userId = session.metadata?.userId;
      const addressId = session.metadata?.addressId;

      if (!cartId || !userId || !addressId) {
        return NextResponse.json(
          { message: 'missing fields in metadata' },
          {
            status: 400,
          }
        );
      }

      const order = await prisma.order.create({
        data: {
          totalValue: session.amount_total ? session.amount_total / 100 : 0,
          orderStatus: 'paid',
          userId,
          addressId,
        },
      });

      const cartItems = await prisma.cartItem.findMany({
        where: { cartId },
        include: { pizza: { select: { price: true } } },
      });

      for (const cartItem of cartItems) {
        await prisma.orderItem.create({
          data: {
            price: cartItem.pizza.price,
            quantity: cartItem.quantity,
            size: cartItem.size,
            pizzaId: cartItem.pizzaId,
            orderId: order.id,
          },
        });
      }

      await prisma.cart.delete({
        where: { id: cartId },
      });

      return NextResponse.json(
        { message: 'Order created successfully' },
        {
          status: 200,
        }
      );
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: 'Webhook handler failed' },
        { status: 500 }
      );
    }
  }
  return NextResponse.json({ message: 'Received' }, { status: 200 });
}
