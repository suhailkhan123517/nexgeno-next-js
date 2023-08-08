"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";

import { testimonialReview } from "@/utils/data";
import "./testimonial.css";
import Link from "next/link";
import Image from "next/image";

export default function Testimonial() {
  return (
    <>
      <div className="container m-auto py-14">
        <h2 className="text-center text-pink-600 py-3"># OUR TESTIMONIAL</h2>
        <h1 className="text-center text-3xl font-semibold text-blue-950 ">
          Clients Happy with Our IT Solutions.
        </h1>
        <Swiper
          breakpoints={{
            640: {
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
          className="mySwiper my-5"
        >
          {testimonialReview.map((item) => {
            const { id, name, desc } = item;
            const avtar = name.charAt(0);
            return (
              <SwiperSlide className="cardContainer" key={id}>
                <div className="py-7">
                  <div className="card p-5 rounded-xl shadow-xl">
                    <div className="head flex flex-row justify-between items-center pb-2">
                      <div className="flex flex-row gap-2 ">
                        <div className="w-8 h-8 rounded-full avtar  text-white flex justify-center items-center">
                          <p className="text-2xl font-semibold ">{avtar}</p>
                        </div>
                      </div>
                      <div className="star_rating text-yellow-500 flex flex-row gap-1 items-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                    </div>
                    <div className="center">
                      <h1 className="text-lg font-medium pb-2">{name}</h1>
                      <p className="scroll-smooth no-scrollbar overflow-y-auto h-32">
                        {desc}
                      </p>
                    </div>
                    <div className="bottom mt-3 ">
                      <Link href="#" className="text-blue-600">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
