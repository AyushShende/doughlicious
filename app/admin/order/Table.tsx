'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { PaidOrder } from '@/actions/types';
import TableRow from './TableRow';
import { supabaseClient } from '@/lib/supabase';

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

  if (!orders.length) {
    return <p>No orders to display!</p>;
  }

  return (
    <table className="w-full border-separate border-spacing-3">
      <thead>
        <tr className="text-left">
          <th className="">Order</th>
          <th>Customer</th>
          <th>Status</th>
          <th className="">Address</th>
          <th>Placed At</th>
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
