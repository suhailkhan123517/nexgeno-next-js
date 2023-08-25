"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";

import { testimonialReview } from "@/utils/data";
import "./testimonial.css";
import Link from "next/link";
import Button from "../Button/Button";

export default function Testimonial() {
  return (
    <>
      <div className="container m-auto sm:py-14 py-10">
        <h2 className="text-center text-pink-600 pb-3"># OUR TESTIMONIAL</h2>
        <h1 className="text-center sm:text-3xl  text-xl font-semibold text-blue-950 ">
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
          {testimonialReview.map((item) => {
            const { id, name, desc } = item;
            const avtar = name.charAt(0);
            return (
              <SwiperSlide className="cardContainer" key={id}>
                <div className="py-8">
                  <div className="card p-5 rounded-xl shadow-xl">
                    <div className="head flex flex-row justify-between items-center pb-2">
                      <div className="flex flex-row gap-2">
                        <div className="flex  md:items-center gap-2 md:flex-row flex-col">
                          <div className="w-8 h-8 rounded-full avtar  text-white flex justify-center items-center">
                            <p className="text-2xl font-semibold ">{avtar}</p>
                          </div>
                          <h1 className=" font-medium text-[15px] pb-2 mt-1">
                            {name}
                          </h1>
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
                      <p className="scroll-smooth no-scrollbar overflow-y-auto h-32 text-[14px] ">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="grid place-items-center sm:pt-2">
          <Button url="/testimonial" title="View More" button="button" />
        </div>
      </div>
    </>
  );
}
