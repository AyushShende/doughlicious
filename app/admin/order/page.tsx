import { getPaidOrders } from '@/actions/queries/order';

import Table from './Table';

export default async function AdminOrderPage() {
  let orders = await getPaidOrders();

  return (
    <section className="padding-y padding-x min-h-screen max-container">
      <h2 className="mb-4 text-2xl font-bold">All Orders</h2>

      <Table initialOrders={orders} />
    </section>
  );
}
