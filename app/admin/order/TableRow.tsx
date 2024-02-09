'use client';

import { useEffect, useState } from 'react';

import { PaidOrder } from '@/lib/types';
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
    <tr
      key={order.id}
      className="hover:bg-gray-50 bg-gray-100 transition duration-300"
    >
      <td className="px-4 py-2">
        {order.id}
        {order.orderItems.map((item) => (
          <div key={item.pizza.title}>
            {item.pizza.title} - {item.quantity} pcs
          </div>
        ))}
      </td>
      <td className="px-4 py-2">{order.user.name}</td>
      <td className="px-4 py-2">
        <UpdateOrderStatus orderId={order.id} orderStatus={order.orderStatus} />
      </td>
      <td className="px-4 py-2">
        {order.address.street} {order.address.city}
      </td>
      <td className="px-4 py-2">
        {createdAtDate && createdAtDate.toLocaleTimeString()}
      </td>
    </tr>
  );
}
