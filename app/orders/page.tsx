import { getOrders } from '@/actions/queries/order';
import EmptyOrder from './EmptyOrder';

export const metadata = {
  title: 'My Orders - Doughlicious',
};

export default async function MyOrdersPage() {
  const orders = await getOrders();

  if (!orders.length) {
    return <EmptyOrder />;
  }

  return (
    <section className="padding-y padding-x min-h-screen max-container">
      <h2 className="mb-4 text-2xl font-bold">All Orders</h2>
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="">Orders</th>
            <th>Time</th>
            <th className="hidden sm:block">Address</th>
            <th className="">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order.id} className="bg-gray-100">
              <td className="px-2 py-1 sm:py-3">{order.id.slice(0, 6)}...</td>
              <td className="px-2 py-1 sm:py-3">
                {order.updatedAt.toLocaleTimeString()}{' '}
                {order.updatedAt.toLocaleDateString()}
              </td>
              <td className="hidden px-2 py-1 sm:py-3 sm:block">
                {order.address.street}
                {order.address.city}
              </td>
              <td className="px-2 py-1 sm:py-3">₹{order.totalValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
