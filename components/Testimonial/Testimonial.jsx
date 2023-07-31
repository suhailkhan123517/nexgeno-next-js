"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { testimonialReview } from "@/utils/data";

export default function Testimonial() {
  return (
    <>
      <div className="container m-auto py-14">
        <h2 className="text-center text-pink-600 py-3"># OUR TESTIMONIAL</h2>
        <h1 className="text-center text-3xl font-semibold text-blue-950 ">
          Clients Happy with Our IT Solutions.
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialReview.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="itemsSlider text-center p-24">
                <p>{item.des}</p>
                <h1 className="text-2xl py-5 font-semibold">{item.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
