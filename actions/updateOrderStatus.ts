'use server';

import { OrderStatus } from '@prisma/client';
import { revalidatePath } from 'next/cache';

import prisma from '@/lib/db';
import { supabaseClient } from '@/lib/supabase';

type UpdateOrderStatusProps = {
  orderStatus: OrderStatus;
  orderId: string;
};

export async function updateOrderStatus({
  orderStatus,
  orderId,
}: UpdateOrderStatusProps) {
  try {
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: { orderStatus },
    });

    // Realtime status update
    if (updatedOrder) {
      const orderStatusChangeChannel = supabaseClient.channel(
        'order_status_changed'
      );

      orderStatusChangeChannel.send({
        type: 'broadcast',
        event: 'status_update',
        payload: { updatedOrder },
      });

      supabaseClient.removeChannel(orderStatusChangeChannel);
    }
  } catch (error) {
    console.log(error);
    throw new Error('Error Updating Order Status');
  }

  revalidatePath('/orders');
  revalidatePath('/admin/order');
}
