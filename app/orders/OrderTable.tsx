'use client';

import { useEffect, useState } from 'react';

import { OrderWithAddress } from '@/lib/types';
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
    <table className="min-w-full border-collapse border border-gray-300">
      <thead className="bg-gray-200">
        <tr className="text-left">
          <th className="px-4 py-2">Orders</th>
          <th className="px-4 py-2">Time</th>
          <th className="px-4 py-2">Address</th>
          <th className="px-4 py-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        {orderList?.map((order) => (
          <tr
            key={order.id}
            className="hover:bg-gray-50 transition duration-300"
          >
            <td className="px-4 py-2">
              <OrderStatusModal
                orderStatus={order.orderStatus}
                orderId={order.id}
              />
            </td>
            <td className="px-4 py-2">
              {order.updatedAt.toLocaleTimeString()}{' '}
              {order.updatedAt.toLocaleDateString()}
            </td>
            <td className="px-4 py-2">
              {order.address.street} {order.address.city}
            </td>
            <td className="px-4 py-2">₹{order.totalValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
