import Image from 'next/image';

import { getPizza } from '@/lib/data';
import PizzaOptions from '@/app/pizza/[id]/PizzaOptions';

export default async function PizzaPage({
  params,
}: {
  params: { id: string };
}) {
  const pizza = await getPizza(params.id);

  return (
    <section className="padding-x padding-y max-container min-h-screen grid gap-4 md:grid-cols-2 md:gap-10">
      <Image
        className="justify-self-center object-cover"
        src="/pizza3.png"
        width={500}
        height={500}
        alt="pizza"
        priority
      />

      <div className="w-full py-4">
        <h1 className="sec-heading">{pizza?.title}</h1>
        <p className="mb-6">{pizza?.description}</p>
        <p className="mb-6 text-3xl font-bold">₹{pizza?.price}</p>

        <PizzaOptions />
      </div>
    </section>
  );
}
