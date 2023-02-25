import Image from 'next/image';
import pizza2 from '@/public/pizza2.png';
import Link from 'next/link';
const page = () => {
  return (
    <div className="p-10 md:flex gap-16">
      <div className="flex-1 mb-4">
        <Image className="mx-auto" src={pizza2} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-gray-800 capitalize py-4 text-4xl md:text-6xl md:mb-4">
          Cheese Pizza
        </h2>
        <p className="md:mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          dignissimos id ducimus blanditiis accusamus commodi deleniti dolor.
          quam numquam harum.
        </p>
        <p className="font-bold text-primary-500 capitalize py-4 text-2xl md:text-4xl ">
          $15
        </p>
        <div className="mb-4">
          <p className="capitalize font-bold text-lg pb-1">Choose the size</p>
          <div className="flex items-center gap-2">
            <input className="form-checkbox h-5 w-5" type="checkbox" />
            <label htmlFor="">small</label>
          </div>
          <div className="flex items-center gap-2">
            <input className="form-checkbox h-5 w-5" type="checkbox" />
            <label htmlFor="">medium</label>
          </div>
          <div className="flex items-center gap-2">
            <input className="form-checkbox h-5 w-5" type="checkbox" />
            <label htmlFor="">large</label>
          </div>
        </div>
        <div className="mb-8">
          <p className="capitalize font-bold text-lg pb-1">Choose Extras</p>
          <div className="flex items-center gap-2">
            <input className="form-checkbox h-5 w-5" type="checkbox" />
            <label htmlFor="">extra cheese</label>
          </div>
          <div className="flex items-center gap-2">
            <input className="form-checkbox h-5 w-5" type="checkbox" />
            <label htmlFor="">extra toppings</label>
          </div>
          <div className="flex items-center gap-2">
            <input className="form-checkbox h-5 w-5" type="checkbox" />
            <label htmlFor="">chilly sauce</label>
          </div>
        </div>
        <input
          className="w-14 pl-2 border-2 border-primary-500 outline-none rounded mr-4"
          type="number"
        />
        <Link
          href="/pizza"
          className="bg-primary-300 font-bold text-lg rounded-full text-white py-3 px-6 transition-all ease-in-out duration-300 hover:bg-primary-400"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};
export default page;
