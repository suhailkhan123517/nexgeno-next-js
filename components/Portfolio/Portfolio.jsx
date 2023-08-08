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
          <h1 className="text-center pb-12 text-3xl font-semibold">
            Improve & Enhance the Tech Projects
          </h1>
          <Swiper
            slidesPerView={3.2}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper my-5"
          >
            {portfolioSlider.map((item) => (
              <SwiperSlide key={item.id}>
                <Link href="#">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={200}
                  />
                  <h1 className="text-2xl font-medium pt-4">{item.title}</h1>
                  <p>{item.desc}</p>
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
