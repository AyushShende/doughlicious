import { Metadata } from 'next';

import { getOrders } from '@/queries/order';
import EmptyOrder from './EmptyOrder';
import OrderTable from './OrderTable';

export const metadata: Metadata = {
  title: 'Orders',
};

export default async function MyOrdersPage() {
  const orders = await getOrders();

  if (!orders.length) {
    return <EmptyOrder />;
  }

  return (
    <section className="padding-y padding-x min-h-screen overflow-auto max-container">
      <h2 className="mb-4 text-2xl font-bold">All Orders</h2>
      <OrderTable orders={orders} />
    </section>
  );
}
