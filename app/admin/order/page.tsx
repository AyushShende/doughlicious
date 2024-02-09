import { getPaidOrders } from '@/queries/order';
import Table from './Table';

export default async function AdminOrderPage() {
  let orders = await getPaidOrders();

  return (
    <section className="padding-y padding-x min-h-screen max-container overflow-auto">
      <h2 className="mb-6 text-2xl font-bold">All Orders</h2>

      <Table initialOrders={orders} />
    </section>
  );
}
