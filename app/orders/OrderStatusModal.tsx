'use client';

import { useState } from 'react';
import { OrderStatus } from '@prisma/client';
import { FaCheckDouble } from 'react-icons/fa6';
import { GiCampCookingPot, GiNotebook } from 'react-icons/gi';
import { MdDeliveryDining } from 'react-icons/md';

import { cn } from '@/utils/cn';

export default function OrderStatusModal({
  orderId,
  orderStatus,
}: {
  orderId: string;
  orderStatus: OrderStatus;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {orderId}
      </div>

      {isOpen ? (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-4 rounded-md w-full max-w-md"
          >
            <div className="text-right">
              <button
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="mt-4 space-y-6">
              <div
                className={cn('flex gap-3 items-center text-lg font-bold', {
                  'text-orange-400': orderStatus === 'Placed',
                  'text-gray-400': orderStatus !== 'Placed',
                })}
              >
                <GiNotebook size={26} />
                <span>Order Placed</span>
              </div>
              <div
                className={cn('flex gap-3 items-center text-lg font-bold', {
                  'text-orange-400': orderStatus === 'Preparing',
                  'text-gray-400':
                    orderStatus === 'OutForDelivery' ||
                    orderStatus === 'Completed',
                })}
              >
                <GiCampCookingPot size={26} />
                <span>Preparing</span>
              </div>
              <div
                className={cn('flex gap-3 items-center text-lg font-bold', {
                  'text-orange-400': orderStatus === 'OutForDelivery',
                  'text-gray-400': orderStatus === 'Completed',
                })}
              >
                <MdDeliveryDining size={26} />
                <span>Out for Delivery</span>
              </div>
              <div
                className={cn('flex gap-3 items-center text-lg font-bold', {
                  'text-orange-400': orderStatus === 'Completed',
                })}
              >
                <FaCheckDouble size={26} />
                <span>Delivered</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
