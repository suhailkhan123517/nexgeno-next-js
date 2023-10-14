"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";
import { BsFillCloudCheckFill } from "react-icons/bs";

const DigitalSolutions = () => {
  return (
    <>
      <section className="mb-24 ml-10">
        <h1 className="text-center heading mb-10">
          Clients Happy with Our IT Solutions.
        </h1>
        <Swiper
          breakpoints={{
            230: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            420: {
              slidesPerView: 2.3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper sm:my-5"
        >
          <SwiperSlide className="cardContainer">
            <div className="border border-gray-200 bg-[#fffbfd] hover:border-pink-600 p-7 rounded-xl transition-all duration-200 hover:shadow-xl">
              <h3 className="heading"> Health Care </h3>
              <ul className="mt-8 flex flex-col gap-6">
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cardContainer">
            <div className="border border-gray-200 bg-[#fffbfd] hover:border-pink-600 p-7 rounded-xl transition-all duration-200 hover:shadow-xl">
              <h3 className="heading"> Health Care </h3>
              <ul className="mt-8 flex flex-col gap-6">
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cardContainer">
            <div className="border border-gray-200 bg-[#fffbfd] hover:border-pink-600 p-7 rounded-xl transition-all duration-200 hover:shadow-xl">
              <h3 className="heading"> Health Care </h3>
              <ul className="mt-8 flex flex-col gap-6">
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cardContainer">
            <div className="border border-gray-200 bg-[#fffbfd] hover:border-pink-600 p-7 rounded-xl transition-all duration-200 hover:shadow-xl">
              <h3 className="heading"> Health Care </h3>
              <ul className="mt-8 flex flex-col gap-6">
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cardContainer">
            <div className="border border-gray-200 bg-[#fffbfd] hover:border-pink-600 p-7 rounded-xl transition-all duration-200 hover:shadow-xl">
              <h3 className="heading"> Health Care </h3>
              <ul className="mt-8 flex flex-col gap-6">
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
                <li className="group flex items-center gap-3 ">
                  <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                    <BsFillCloudCheckFill className="text-lg" />
                  </span>
                  <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                    list One 1
                  </span>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default DigitalSolutions;
