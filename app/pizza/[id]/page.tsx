import Button from '@/components/button';
import Image from 'next/image';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default async function PizzaPage() {
  return (
    <section className="padding-x padding-y max-container grid gap-4 md:grid-cols-2 md:gap-10">
      <Image
        className="justify-self-center object-cover"
        src="/pizza3.png"
        width={500}
        height={500}
        alt="pizza"
        priority
      />

      <div className="w-full py-4">
        <h1 className="sec-heading">{'Margherita'}</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          necessitatibus ab molestias minus odio nesciunt doloribus cupiditate
          numquam deleniti at aperiam obcaecati tempora commodi, recusandae quam
          quo. Enim, itaque at!
        </p>

        <select className="mb-4 rounded bg-slate-100 px-2 py-2 outline-none">
          <option value="SMALL">small</option>
          <option value="MEDIUM">medium</option>
          <option value="LARGE">large</option>
        </select>

        <div className="mb-4 flex w-fit border-2 border-slate-400">
          <button className="flex-center h-6 w-6 disabled:cursor-not-allowed">
            <FaMinus />
          </button>
          <span className="flex-center h-6 w-8 border-x-2 border-slate-400">
            {4}
          </span>
          <button className="flex-center h-6 w-6">
            <FaPlus />
          </button>
        </div>
        <p className="mb-8 text-3xl font-bold">$40</p>
        <Button className="rounded-lg">Add to Cart</Button>
      </div>
    </section>
  );
}
