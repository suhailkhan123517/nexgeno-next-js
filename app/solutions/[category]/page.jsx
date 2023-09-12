import Button from "@/components/Button/Button";
import Connect from "@/components/Connect/Connect";
import Counter from "@/components/Counter/Counter";
import Faq from "@/components/Faq/Faq";
import Industries from "@/components/Industries/Industries";
import Process from "@/components/Process/Process";
import Stories from "@/components/Stories/Stories";
import Technology from "@/components/Technology/Technology";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Client from "@/components/client/Client";
import Image from "next/image";
import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";
import Seo from "@/components/Seo/Seo";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

export default function Category({ params }) {
  const data = getData(params.category);
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="container m-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 grid-5  py-10 place-items-center">
            <div className="flex order-last lg:order-first flex-col md:gap-10 gap-5 mt-10  lg:mt-0 lg:pr-10">
              <h1 className="sm:text-[41px] sm:leading-[62px] text-[27px] leading-[40px] font-semibold text-blue-950">
                {item.title}
              </h1>
              <p className="sm:text-[18px] text-[16px] sm:leading-[34px] leading-[30px] text-gray-700 line-clamp-4 mb-2">
                {item.desc}
              </p>
              <div className="flex">
                <Button url="/inquiry" title="Get In Touch" button="button" />
              </div>
            </div>
            <Image src={item.img} alt="web" width={500} height={500} />
          </div>
        </div>
      ))}

      <Client />
      <WhyChoose />
      <Technology />

      {data.map((item) => (
        <div
          key={item.id}
          className="container mx-auto py-10 lg:px-14 sm:px-5 px-3"
        >
          <div className="border border-gray-200 sm:py-8  py-3 lg:px-20 sm:px-10 px-4 rounded-3xl hover:border-gradient-to-r from-pink-500 to-purple-600">
            <h1 className="heading py-4 ">{item.title}</h1>

            <p className="desc my-5">{item.desc}</p>
            <p className="desc my-5">{item.shortDesc1}</p>
            <p className="desc my-5">{item.shortDesc2}</p>
            <p className="desc my-5">{item.shortDesc3}</p>
            <p className="desc my-5">{item.shortDesc4}</p>
            <div className="flex sm:flex-row flex-col my-5 py-5 sm:gap-9 gap-3">
              <Button
                url="/inquiry"
                title="Get In Touch"
                button="button"
                className="max-w-max"
              />
            </div>
          </div>
        </div>
      ))}

      <Counter />
      <Stories />
      <Seo />
      <Industries />
      <Connect />
      <Process />
    </>
  );
}
