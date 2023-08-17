"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "./portfolio.css";
import { portfolioSlider } from "@/utils/data";
import Button from "../Button/Button";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio py-4 text-white">
        <div className="container m-auto my-12">
          <h2 className="text-center pb-5"> # RECENTLY COMPLETED WORK </h2>
          <h1 className="text-center lg:pb-12 md:pb-8 pb-4 md:text-3xl sm:text-2xl text-xl font-semibold">
            Improve & Enhance the Tech Projects
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
                slidesPerView: 2.9,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 30,
              },
            }}
            slidesPerView={2.3}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper my-5"
          >
            {portfolioSlider.map((item) => (
              <SwiperSlide key={item.id}>
                <Link href="#">
                  <div className="relative w-[100%] h-[200px]">
                    <Image src={item.img} alt={item.title} fill={true} />
                  </div>

                  <h1 className="lg:text-2xl  text-lg font-medium lg:pt-4 pt-2">
                    {item.title}
                  </h1>
                  <p className="text-[12px]">{item.desc}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="grid place-items-center pt-5">
            <Button url="#" title="View More" button="button" />
          </div>
        </div>
      </div>
    </>
  );
}
