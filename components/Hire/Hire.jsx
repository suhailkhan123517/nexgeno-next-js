import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hire = () => {
  return (
    <>
      <section className="my-14">
        <div className="container mx-auto">
          <h2 className="heading text-center ">
            Hire Dedicated Developers As Per Your Evolving Project Needs
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  place-items-start xl:gap-10 gap-3 my-14">
            <div className="border hover:shadow-xl transition duration-200 rounded-2xl   flex items-center flex-col">
              <div className=" bg-[#fffbfd] border-b w-full py-5 rounded-t-2xl flex justify-center items-center">
                <div className="w-24 h-24 rounded-ful  relative">
                  <Image
                    src="/website-codes.webp"
                    alt="Hire Developer Icon"
                    fill={true}
                  />
                </div>
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-black mb-2 px-2">
                  Hire Web Developers
                </h3>
                <p className="desc mb-4 px-2">
                  Looking for skilled to join at Nexgeno Technology! We are a
                  growing software development
                </p>

                <ul>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      PHP Developer
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      CodeIgniter Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      Laravel Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      ExpressJS Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="border hover:shadow-xl transition duration-200 rounded-2xl   flex items-center flex-col">
              <div className=" bg-[#fffbfd] border-b w-full py-5 rounded-t-2xl flex justify-center items-center">
                <div className="w-24 h-24 rounded-ful  relative">
                  <Image
                    src="/mobile-coding.webp"
                    alt="Hire Developer Icon"
                    fill={true}
                  />
                </div>
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-black mb-2 px-2">
                  Hire Mobile Developers
                </h3>
                <p className="desc mb-4 px-2">
                  Looking for skilled to join at Nexgeno Technology! We are a
                  growing software development
                </p>

                <ul>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      IOS Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      Android Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      Flutter Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      React Native Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="border hover:shadow-xl transition duration-200 rounded-2xl   flex items-center flex-col">
              <div className=" bg-[#fffbfd] border-b w-full py-5 rounded-t-2xl flex justify-center items-center">
                <div className="w-24 h-24 rounded-ful  relative">
                  <Image src="/ux.webp" alt="Hire Developer Icon" fill={true} />
                </div>
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-black mb-2 px-2">
                  UX / UI Developer
                </h3>
                <p className="desc mb-4 px-2">
                  Looking for skilled to join at Nexgeno Technology! We are a
                  growing software development
                </p>

                <ul>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      Next Js Developer
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      React Js Developer
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      Angular Developer
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      Vue Js Developer
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="border hover:shadow-xl transition duration-200 rounded-2xl   flex items-center flex-col">
              <div className=" bg-[#fffbfd] border-b w-full py-5 rounded-t-2xl flex justify-center items-center">
                <div className="w-24 h-24 rounded-ful  relative">
                  <Image
                    src="/development.webp"
                    alt="Hire Developer Icon"
                    fill={true}
                  />
                </div>
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-black mb-2 px-2">
                  Hire Open Source Developers
                </h3>
                <p className="desc mb-4 px-2">
                  Looking for skilled to join at Nexgeno Technology! We are a
                  growing software development
                </p>

                <ul>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      WordPress Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      Shopify Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      Magento Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      OpenCart Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="border hover:shadow-xl transition duration-200 rounded-2xl   flex items-center flex-col">
              <div className=" bg-[#fffbfd] border-b w-full py-5 rounded-t-2xl flex justify-center items-center">
                <div className="w-24 h-24 rounded-ful  relative">
                  <Image
                    src="/code.webp"
                    alt="Hire Developer Icon"
                    fill={true}
                  />
                </div>
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-semibold text-black mb-2 px-2">
                  Hire Cross-Platform Developers
                </h3>
                <p className="desc mb-4 px-2">
                  Looking for skilled to join at Nexgeno Technology! We are a
                  growing software development
                </p>

                <ul>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      Ionic Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                  <li className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black">
                    <Link
                      href="#"
                      className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline"
                    >
                      PWA Developers
                    </Link>
                    <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hire;
