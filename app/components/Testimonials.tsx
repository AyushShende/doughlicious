import Image from 'next/image';
import user1 from '@/public/user1.jpg';
import user2 from '@/public/user2.jpg';

const Testimonials = () => {
  return (
    <section className="px-4 py-8 md:py-10 md:px-20">
      {/* Header */}
      <div className="mb-10">
        <p className="uppercase font-semibold mb-2 text-primary-400">
          testimonials
        </p>
        <h3 className="capitalize text-4xl mb-2 font-bold text-gray-800">
          What our customers say
        </h3>
      </div>
      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-4">
        <div>
          <Image className="w-16 rounded-full mb-2" src={user1} alt="user 1" />
          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            ipsam ducimus voluptatem ea nobis consequatur illo laboriosam.
          </p>
          <p className="text-gray-500 text-sm">- Lisa Brown</p>
        </div>
        <div>
          <Image className="w-16 rounded-full mb-2" src={user2} alt="user 2" />
          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            ipsam ducimus voluptatem ea nobis consequatur illo laboriosam.
          </p>
          <p className="text-gray-500 text-sm">- Randy Orton</p>
        </div>
        <div>
          <Image className="w-16 rounded-full mb-2" src={user2} alt="user 2" />
          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            ipsam ducimus voluptatem ea nobis consequatur illo laboriosam.
          </p>
          <p className="text-gray-500 text-sm">- Randy Orton</p>
        </div>
        <div>
          <Image className="w-16 rounded-full mb-2" src={user2} alt="user 2" />
          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus,
            ipsam ducimus voluptatem ea nobis consequatur illo laboriosam.
          </p>
          <p className="text-gray-500 text-sm">- Randy Orton</p>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
