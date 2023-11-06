export const metadata = {
  title: 'My Orders - Doughlicious',
};

export default async function MyOrdersPage() {
  return (
    <section className="padding-y padding-x min-h-screen max-container">
      <h2 className="mb-4 text-2xl font-bold">All Orders</h2>
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="w-1/4">Orders</th>
            <th className="">Address</th>
            <th>Time</th>
            <th className="hidden sm:block">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="truncate px-1 py-4">{'ajajajdjsj12345'}</td>
            <td className=" px-1 py-4 ">{'my street'}</td>
            <td className="px-1 py-4">{'24/11/2022'}</td>
            <td className="hidden px-1 py-4 sm:block">₹{'300'}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="truncate px-1 py-4">{'ajajajdjsj12345'}</td>
            <td className=" px-1 py-4 ">{'my street'}</td>
            <td className="px-1 py-4">{'24/11/2022'}</td>
            <td className="hidden px-1 py-4 sm:block">₹{'300'}</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="truncate px-1 py-4">{'ajajajdjsj12345'}</td>
            <td className=" px-1 py-4 ">{'my street'}</td>
            <td className="px-1 py-4">{'24/11/2022'}</td>
            <td className="hidden px-1 py-4 sm:block">₹{'300'}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
