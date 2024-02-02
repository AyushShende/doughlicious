'use client';

import { useEffect, useState } from 'react';

import { PaidOrder } from '@/actions/types';
import UpdateOrderStatus from './UpdateOrderStatus';

export default function TableRow({ order }: { order: PaidOrder }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const createdAtDate = new Date(order.createdAt);

  return (
    <tr key={order.id} className="bg-gray-100">
      <td className="px-2 py-1 sm:py-3">
        {order.id}
        {order.orderItems.map((item) => (
          <div key={item.pizza.title}>
            {item.pizza.title} - {item.quantity} pcs
          </div>
        ))}
      </td>
      <td className="px-2 py-1 sm:py-3">{order.user.name}</td>
      <td className="px-2 py-1 sm:py-3">
        <UpdateOrderStatus orderId={order.id} orderStatus={order.orderStatus} />
      </td>
      <td className="px-2 py-1 sm:py-3">
        {order.address.street} {order.address.city}
      </td>
      <td className="px-2 py-1 sm:py-3">
        {createdAtDate && createdAtDate.toLocaleTimeString()}
      </td>
    </tr>
  );
}
