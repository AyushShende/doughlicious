import Image from 'next/image';

import { getPizzas } from '@/queries/pizza';
import DeletePizzaBtn from './DeletePizzaBtn';
import AddNewPizzaBtn from './AddNewPizzaBtn';

export default async function AdminManagePizzaPage() {
  const pizzas = await getPizzas();

  return (
    <section className="container min-h-screen mx-auto padding-y">
      <div className="max-w-screen-lg mx-auto bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Manage Pizzas</h2>

        {pizzas.length ? (
          <table className="w-full mb-8">
            <thead>
              <tr className="text-left">
                <th></th>
                <th className="py-2">Title</th>
                <th className="py-2">Price</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {pizzas.map((pizza) => (
                <tr key={pizza.id}>
                  <td className="py-2">
                    <Image
                      src={pizza.image}
                      width={40}
                      height={40}
                      alt="pizza image"
                      className="rounded-full"
                    />
                  </td>
                  <td className="py-2">{pizza.title}</td>
                  <td className="py-2">₹{pizza.price}</td>
                  <td className="flex items-center py-2">
                    <DeletePizzaBtn pizzaId={pizza.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-lg font-semibold mb-8">No Pizzas to display</p>
        )}

        <AddNewPizzaBtn />
      </div>
    </section>
  );
}
