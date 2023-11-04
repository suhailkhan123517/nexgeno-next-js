"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-scroll";
import ScrollTrigger from "react-scroll-trigger";

const CounterNew = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <section className="md:mb-20 mb-10">
          <div className="container mx-auto">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-10 py-10 ">
              <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd]    p-8   hover:shadow-xl">
                <h1 className="text-4xl font-bold">
                  {counterOn && (
                    <CountUp start={0} end={4000} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h4 className="text-[#050748] lg:text-[25px] sm:text-[20px] text-[18px] leading-[32px] sm:leading-[43px] font-semibold">
                  Project Delivered
                </h4>
              </div>
              <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd]    p-8   hover:shadow-xl">
                <h1 className="text-4xl font-bold">
                  {counterOn && (
                    <CountUp start={0} end={11} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h4 className="text-[#050748] lg:text-[25px] sm:text-[20px] text-[18px] leading-[32px] sm:leading-[43px] font-semibold">
                  Years Of Experience
                </h4>
              </div>
              <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd]    p-8   hover:shadow-xl">
                <h1 className="text-4xl font-bold">
                  {counterOn && (
                    <CountUp start={0} end={3000} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <h4 className="text-[#050748] lg:text-[25px] sm:text-[20px] text-[18px] leading-[32px] sm:leading-[43px] font-semibold">
                  Happy Client
                </h4>
              </div>
              <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd]    py-4 px-4    hover:shadow-xl text-center">
                <h3 className="text-[#050748] lg:text-[25px] sm:text-[20px] text-[18px] leading-[32px] sm:leading-[43px] font-semibold text-center mb-6">
                  Want to Start Project
                </h3>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="btn cursor-pointer"
                >
                  Get Cost Estimation for Free
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>
    </>
  );
};

export default CounterNew;
