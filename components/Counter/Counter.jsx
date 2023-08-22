"use client";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./counter.css";

export default function Counter() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="container m-auto sm:my-24 my-10">
          <h1 className="lg:text-3xl sm:text-3xl text-xl sm:my-14 my-5 font-semibold text-blue-950 text-center">
            Our Agency in Numbers
          </h1>
          <div className="grid counter md:grid-cols-4 grid-cols-2 gap-4 place-items-center">
            <div>
              <h1>
                {counterOn && (
                  <CountUp start={0} end={4000} duration={2} delay={0} />
                )}
                +
              </h1>
              <h2>Project Delivers</h2>
            </div>
            <div>
              <h1>
                {counterOn && (
                  <CountUp start={0} end={3000} duration={2} delay={0} />
                )}
                +
              </h1>
              <h2>Happy Clients</h2>
            </div>
            <div>
              <h1>
                {counterOn && (
                  <CountUp start={0} end={11} duration={2} delay={0} />
                )}
                +
              </h1>
              <h2>Years of Experience</h2>
            </div>
            <div>
              <h1>
                {counterOn && (
                  <CountUp start={0} end={45} duration={2} delay={0} />
                )}
                +
              </h1>
              <h2>Dedicated Employees</h2>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
