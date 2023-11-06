import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="padding-y padding-x max-container">
      {/* Header */}
      <div className="mb-6 md:mb-8 text-center">
        <h4 className="sub-heading">testimonials</h4>
        <h2 className="sec-heading py-1 md:text-4xl">What our customers say</h2>
      </div>
      {/* Cards */}
      <div className="flex flex-col gap-12 md:flex-row">
        <div>
          <Image
            className="w-16 rounded-full"
            src="/user1.jpg"
            width={50}
            height={50}
            alt="user 1"
          />
          <p className="my-2">
            Lorem ipsum dolorsaa, sibbsst ametnn consectetur adipisicing elit.
            Delectus, ipsam ducimus
          </p>
          <p className="text-sm font-light text-gray-500">- Lisa Brown</p>
        </div>
        <div>
          <Image
            className="w-16 rounded-full"
            src="/user1.jpg"
            width={50}
            height={50}
            alt="user 1"
          />
          <p className="my-2">
            Lorem ipsum dolorsaa, sibbsst ametnn consectetur adipisicing elit.
            Delectus, ipsam ducimus
          </p>
          <p className="text-sm font-light text-gray-500">- Lisa Brown</p>
        </div>
        <div>
          <Image
            className="w-16 rounded-full"
            src="/user1.jpg"
            width={50}
            height={50}
            alt="user 1"
          />
          <p className="my-2">
            Lorem ipsum dolorsaa, sibbsst ametnn consectetur adipisicing elit.
            Delectus, ipsam ducimus
          </p>
          <p className="text-sm font-light text-gray-500">- Lisa Brown</p>
        </div>
      </div>
    </section>
  );
}
