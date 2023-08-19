import Button from "@/components/Button/Button";
import Connect from "@/components/Connect/Connect";
import Counter from "@/components/Counter/Counter";
import Industries from "@/components/Industries/Industries";
import Process from "@/components/Process/Process";
import Stories from "@/components/Stories/Stories";
import Technology from "@/components/Technology/Technology";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Client from "@/components/client/Client";
import Image from "next/image";
import React from "react";
import "./meth.css";

export default function Methodology() {
  return (
    <>
      <div className="container m-auto lg:my-20 my-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-5  py-10 place-items-center">
          <div className="flex order-last lg:order-first flex-col md:gap-10 gap-5 mt-10  lg:mt-0 lg:pr-20">
            <h1 className="md:text-4xl text-2xl leading-normal font-semibold text-blue-950">
              Development Methodology
            </h1>
            <p className="md:text-xl text-lg leading-9 text-gray-700 line-clamp-4">
              Development Methodology is a structured approach to software
              development that involves a set of guidelines, principles, and
              processes that software development teams use to manage the
              software development life cycle (SDLC).
            </p>
            <div>
              <Button url="/inquiry" title="Get In Touch" button="button" />
            </div>
          </div>
          <div className="imgMeth">
            <Image src="/images/metho.jpg" alt="Methodology" fill={true} />
          </div>
        </div>
      </div>

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
