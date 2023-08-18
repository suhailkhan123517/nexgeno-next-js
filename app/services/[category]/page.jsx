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

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

export default function Category({ params }) {
  const data = getData(params.category);
  const { faq1, ans1, faq2, ans2 } = data;
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="container m-auto lg:my-20 my-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 grid-5  py-10 place-items-center">
            <div className="flex order-last lg:order-first flex-col md:gap-10 gap-5 mt-10  lg:mt-0 lg:pr-20">
              <h1 className="md:text-4xl text-2xl leading-normal font-semibold text-blue-950">
                {item.title}
              </h1>
              <p className="md:text-xl text-lg leading-9 text-gray-700 line-clamp-4">
                {item.desc}
              </p>
              <div>
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
      <Counter />
      <Stories />
      <Industries />
      <Connect />
      <Process />
      {data.map((item) => (
        <Faq
          key={item.id}
          faq1={item.faq1}
          ans1={item.ans1}
          faq2={item.faq2}
          ans2={item.ans2}
        />
      ))}
    </>
  );
}
