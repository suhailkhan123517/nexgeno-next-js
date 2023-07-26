"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <div className="container m-auto my-12">
        <h2> # RECENTLY COMPLETED WORK </h2>
        <h1>Improve & Enhance the Tech Projects</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link href="#">
              <Image
                src="/images/lawtendo.jpg"
                alt=""
                width={400}
                height={300}
              />
              <h1>Hello</h1>
              <p>Desc</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
              <Image
                src="/images/lawtendo.jpg"
                alt=""
                width={400}
                height={300}
              />
              <h1>Hello</h1>
              <p>Desc</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
              <Image
                src="/images/lawtendo.jpg"
                alt=""
                width={400}
                height={300}
              />
              <h1>Hello</h1>
              <p>Desc</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
              <Image
                src="/images/lawtendo.jpg"
                alt=""
                width={400}
                height={300}
              />
              <h1>Hello</h1>
              <p>Desc</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
              <Image
                src="/images/lawtendo.jpg"
                alt=""
                width={400}
                height={300}
              />
              <h1>Hello</h1>
              <p>Desc</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
              <Image
                src="/images/lawtendo.jpg"
                alt=""
                width={400}
                height={300}
              />
              <h1>Hello</h1>
              <p>Desc</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
              <Image
                src="/images/lawtendo.jpg"
                alt=""
                width={400}
                height={300}
              />
              <h1>Hello</h1>
              <p>Desc</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
              <Image
                src="/images/lawtendo.jpg"
                alt=""
                width={400}
                height={300}
              />
              <h1>Hello</h1>
              <p>Desc</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="#">
              <Image
                src="/images/lawtendo.jpg"
                alt=""
                width={400}
                height={300}
              />
              <h1>Hello</h1>
              <p>Desc</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
