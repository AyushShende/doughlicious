import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="padding-y padding-x max-container">
      {/* Header */}
      <div className="mb-8 text-center">
        <h4 className="sub-heading">Testimonials</h4>
        <h2 className="sec-heading py-1">What our customers say</h2>
      </div>

      {/* Cards */}
      <div className="grid gap-12 md:grid-cols-3">
        <div className="text-center">
          <Image
            className="w-16 h-16 rounded-full mx-auto mb-4"
            src="/user1.jpg"
            width={50}
            height={50}
            alt="user 1"
          />
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            ipsam ducimus.
          </p>
          <p className="text-sm font-light text-gray-500">- Lisa Brown</p>
        </div>

        <div className="text-center">
          <Image
            className="w-16 h-16 rounded-full mx-auto mb-4"
            src="/user2.jpg"
            width={50}
            height={50}
            alt="user 1"
          />
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            ipsam ducimus.
          </p>
          <p className="text-sm font-light text-gray-500">- Tony Stark</p>
        </div>

        <div className="text-center">
          <Image
            className="w-16 h-16 rounded-full mx-auto mb-4"
            src="/user1.jpg"
            width={50}
            height={50}
            alt="user 1"
          />
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus,
            ipsam ducimus.
          </p>
          <p className="text-sm font-light text-gray-500">- Hermione Granger</p>
        </div>
      </div>
    </section>
  );
}
