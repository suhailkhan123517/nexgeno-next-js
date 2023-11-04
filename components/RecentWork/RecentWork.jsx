"use client";
import { recentWork } from "@/utils/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const RecentWork = () => {
  return (
    <>
      <section className="md:mb-20 mb-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="heading">Our Recent Work</h2>
          </div>
          <div className="">
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.8,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2.3,
                  spaceBetween: 50,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {recentWork.map((item) => (
                <SwiperSlide key={item}>
                  <div className="relative h-52 md:h-96 ">
                    <Image
                      src={item.img}
                      alt="Project Image"
                      fill
                      className="object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentWork;
