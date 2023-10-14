import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const TestimonialClient = () => {
  return (
    <>
      <section className="mb-24 py-14 bg-[#fffbfd]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="heading">Our Recent Work</h2>
            <Link
              href="/portfolio"
              className="outline_btn flex items-center gap-2"
            >
              See All
              <BsArrowRightShort className="text-xl" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl">
              <div className="flex items-center gap-5">
                <Image
                  src="/code.webp"
                  alt="client image"
                  priority
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Client Name</h3>
                  <p>Country</p>
                </div>
              </div>
              <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, fuga? Molestias sapiente obcaecati maiores provident
                dignissimos, ex atque mollitia accusantium amet deserunt fuga
                nisi dolorem esse blanditiis ducimus iste dolores delectus
                corrupti ad fugit vero autem. Facere possimus laborum
                accusantium.
              </div>
            </div>
            <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl">
              <div className="flex items-center gap-5">
                <Image
                  src="/code.webp"
                  alt="client image"
                  priority
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Client Name</h3>
                  <p>Country</p>
                </div>
              </div>
              <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, fuga? Molestias sapiente obcaecati maiores provident
                dignissimos, ex atque mollitia accusantium amet deserunt fuga
                nisi dolorem esse blanditiis ducimus iste dolores delectus
                corrupti ad fugit vero autem. Facere possimus laborum
                accusantium.
              </div>
            </div>
            <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl">
              <div className="flex items-center gap-5">
                <Image
                  src="/code.webp"
                  alt="client image"
                  priority
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Client Name</h3>
                  <p>Country</p>
                </div>
              </div>
              <div className="mt-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, fuga? Molestias sapiente obcaecati maiores provident
                dignissimos, ex atque mollitia accusantium amet deserunt fuga
                nisi dolorem esse blanditiis ducimus iste dolores delectus
                corrupti ad fugit vero autem. Facere possimus laborum
                accusantium.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialClient;
