"use client";
import React from "react";
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
        <div className="container m-auto my-24">
          <h1 className="text-4xl my-14 font-bold text-blue-950 text-center">
            Our Agency in Numbers
          </h1>
          <div className="grid counter grid-cols-4 gap-4 place-items-center">
            <div>
              <h1>
                {counterOn && (
                  <CountUp start={0} end={4000} duration={2} delay={0} />
                )}
                +
              </h1>
              <h2>Total Project Complete</h2>
            </div>
            <div>
              <h1>
                {counterOn && (
                  <CountUp start={0} end={1000} duration={2} delay={0} />
                )}
                +
              </h1>
              <h2>Active Client</h2>
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
                  <CountUp start={0} end={120} duration={2} delay={0} />
                )}
                +
              </h1>
              <h2>Clients Testimonial</h2>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
