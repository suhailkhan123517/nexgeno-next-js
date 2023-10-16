import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const TestimonialClient = () => {
  return (
    <>
      <section className="mb-24 py-14 bg-[#fffbfd]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="heading">Our Testimonial</h2>
            {/* <Link
              href="/portfolio"
              className="outline_btn flex items-center gap-2"
            >
              See All
              <BsArrowRightShort className="text-xl" />
            </Link> */}
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
            <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <Image
                    src="/sonali.png"
                    alt="client image"
                    priority
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Sonali Vaidya</h3>
                    <p>India</p>
                  </div>
                </div>
                <div className="star_rating text-yellow-500 flex flex-row gap-1 items-center">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>

              <div className="mt-10">
                Great team! They are super flexible, responsive, and detailed.
                Nexgeno Technology helped us launch an entirely new website -
                their module system is amazing. As someone who is not an expert
                in managing a website I am glad I can rely on Nexgeno Technology
                to help me and give advice on best practices. Would highly
                recommend!
              </div>
            </div>
            <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <Image
                    src="/r.png"
                    alt="client image"
                    priority
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Rajesh Oberoi</h3>
                    <p>India</p>
                  </div>
                </div>
                <div className="star_rating text-yellow-500 flex flex-row gap-1 items-center">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>

              <div className="mt-10">
                Working with Nexgeno technology pvt ltd on my site was such a
                pleasure. Arif and his team always so friendly, professional,
                and happy to help me with any questions and concerns about my
                site. I would definitely recommend her to anyone looking for a
                professional web designer for their project.
              </div>
            </div>
            <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <Image
                    src="/omar.png"
                    alt="client image"
                    priority
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">Omar S</h3>
                    <p>India</p>
                  </div>
                </div>
                <div className="star_rating text-yellow-500 flex flex-row gap-1 items-center">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>

              <div className="mt-10">
                Best for App development company, we have something different
                type of requirements but they where able to understand and it
                was great to communicate from there team as per our time zone,
                we are located at South Africa Durban but pleasure working with
                them.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialClient;
