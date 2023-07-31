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
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="container m-auto my-20">
          <div className="grid grid-cols-2 grid-5 py-10 place-items-center">
            <div className="flex flex-col gap-10 pr-20">
              <h1 className="text-4xl leading-normal font-semibold text-blue-950">
                {item.title}
              </h1>
              <p className="text-xl leading-9 text-gray-700 line-clamp-4">
                {item.desc}
              </p>
              <div>
                <Button url="#" title="Get In Touch" button="button" />
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
    </>
  );
}
