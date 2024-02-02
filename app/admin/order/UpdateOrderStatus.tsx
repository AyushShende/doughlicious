'use client';

import { OrderStatus } from '@prisma/client';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { updateOrderStatus } from '@/actions/updateOrderStatus';

export default function UpdateOrderStatus({
  orderStatus,
  orderId,
}: {
  orderStatus: OrderStatus;
  orderId: string;
}) {
  const [currentStatus, setCurrentStatus] = useState(orderStatus);

  return (
    <select
      onChange={async (e) => {
        const newStatus = e.target.value as OrderStatus;
        await updateOrderStatus({ orderStatus: newStatus, orderId });
        setCurrentStatus(newStatus);
        toast.success('Order Status Updated');
      }}
      defaultValue={currentStatus}
      className="p-2"
      name="orderStatus"
    >
      <option value="Placed">Placed</option>
      <option value="Preparing">Preparing</option>
      <option value="OutForDelivery">Out For Delivery</option>
      <option value="Completed">Completed</option>
    </select>
  );
}
