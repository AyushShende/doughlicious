'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { PaidOrder } from '@/lib/types';
import TableRow from './TableRow';
import { supabaseClient } from '@/lib/supabase';
import { OrderStatus } from '@prisma/client';

export default function Table({
  initialOrders,
}: {
  initialOrders: PaidOrder[];
}) {
  const [orders, setOrders] = useState<PaidOrder[]>(initialOrders);

  useEffect(() => {
    const orderPlacedChannel = supabaseClient
      .channel('order_placed')
      .on('broadcast', { event: 'new_order' }, (payload) => {
        const newOrder = payload.payload.newOrder;
        setOrders((prevOrders) => [...prevOrders, newOrder]);
        toast.success('new order placed');
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(orderPlacedChannel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabaseClient]);

  useEffect(() => {
    const orderStatusChangeChannel = supabaseClient
      .channel('order_status_changed')
      .on('broadcast', { event: 'status_update' }, ({ payload }) => {
        setOrders((prevOrders) =>
          payload.updatedOrder.orderStatus === OrderStatus.Completed
            ? prevOrders.filter((order) => order.id !== payload.updatedOrder.id)
            : prevOrders
        );
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(orderStatusChangeChannel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabaseClient]);

  if (!orders.length) {
    return <p>No Pending Orders!</p>;
  }

  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead className="bg-gray-200">
        <tr className="text-left">
          <th className="px-4 py-2">Order</th>
          <th className="px-4 py-2">Customer</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Address</th>
          <th className="px-4 py-2">Placed At</th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order) => (
          <TableRow key={order.id} order={order} />
        ))}
      </tbody>
    </table>
  );
}
