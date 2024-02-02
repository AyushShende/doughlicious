'use client';

import { useEffect, useState } from 'react';

import { OrderWithAddress } from '@/actions/types';
import OrderStatusModal from './OrderStatusModal';
import { supabaseClient } from '@/lib/supabase';

export default function OrderTable({ orders }: { orders: OrderWithAddress[] }) {
  const [isClient, setIsClient] = useState(false);
  const [orderList, setOrderList] = useState(orders);

  useEffect(() => {
    const orderStatusChangeChannel = supabaseClient
      .channel('order_status_changed')
      .on('broadcast', { event: 'status_update' }, ({ payload }) => {
        setOrderList((prevOrders) =>
          prevOrders.map((order) =>
            order.id === payload.updatedOrder.id
              ? { ...order, orderStatus: payload.updatedOrder.orderStatus }
              : order
          )
        );
      })
      .subscribe();

    return () => {
      supabaseClient.removeChannel(orderStatusChangeChannel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabaseClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <table className="min-w-full border-separate border-spacing-3">
      <thead>
        <tr className="text-left">
          <th className="">Orders</th>
          <th>Time</th>
          <th className="">Address</th>
          <th className="">Amount</th>
        </tr>
      </thead>
      <tbody>
        {orderList?.map((order) => (
          <tr key={order.id} className="bg-gray-100">
            <td className="px-2 py-1 sm:py-3">
              <OrderStatusModal
                orderStatus={order.orderStatus}
                orderId={order.id}
              />
            </td>
            <td className="px-2 py-1 sm:py-3">
              {order.updatedAt.toLocaleTimeString()}{' '}
              {order.updatedAt.toLocaleDateString()}
            </td>
            <td className="px-2 py-1 sm:py-3">
              {order.address.street} {order.address.city}
            </td>
            <td className="px-2 py-1 sm:py-3">₹{order.totalValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
