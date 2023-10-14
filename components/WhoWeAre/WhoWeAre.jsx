"use client";
import Link from "next/link";
import Button from "../Button/Button";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const WhoWeAre = ({
  title,
  desc,
  shortDesc1,
  shortDesc2,
  shortDesc3,
  shortDesc4,
}) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section className="mb-24">
          <div className="container mx-auto py-10 lg:px-14 sm:px-5 px-3">
            <div className="border border-gray-200 hover:border-pink-500 sm:py-8  py-3 lg:px-20 sm:px-10 px-4 rounded-3xl hover:border-gradient-to-r from-pink-500 to-purple-600">
              <p className="text-pink-600 text-lg font-medium">Who We Are</p>

              <h1 className="heading py-4 "> {title} </h1>

              <p className="desc my-5">{desc}</p>
              <p className="desc my-5">{shortDesc1}</p>
              <p className="desc my-5">{shortDesc2}</p>
              <p className="desc my-5">{shortDesc3}</p>
              <p className="desc my-5">{shortDesc4}</p>
              <div className="flex sm:flex-row flex-col my-5 pt-5 sm:gap-9 gap-3">
                <button className="btn">Get In Touch</button>
              </div>
              {/* <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5 py-8 ">
                <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd]    py-8 px-4   hover:shadow-xl">
                  <h1 className="text-4xl font-bold">
                    {counterOn && (
                      <CountUp start={0} end={4000} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="heading">Project Delivered</h4>
                </div>
                <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd]    py-8 px-4   hover:shadow-xl">
                  <h1 className="text-4xl font-bold">
                    {counterOn && (
                      <CountUp start={0} end={2500} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="heading">Happy Client</h4>
                </div>
                <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd]    py-8 px-4    hover:shadow-xl ">
                  <h1 className="text-4xl font-bold">
                    {counterOn && (
                      <CountUp start={0} end={2500} duration={2} delay={0} />
                    )}
                    +
                  </h1>
                  <h4 className="heading">Website Deliver</h4>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default WhoWeAre;
