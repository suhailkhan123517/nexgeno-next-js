"use client";
import React from "react";
import { Link } from "react-scroll";

const CallToAction = ({ title, buttonTitle, desc }) => {
  return (
    <>
      <section className="md:mb-20 -scroll-mb-10">
        <div className="container mx-auto">
          <div className="md:py-16 py-8 border border-pink-500 bg-[#fffbfd]  px-6 rounded-lg flex flex-col gap-5 items-center justify-center">
            <h2 className="heading text-center">{title}</h2>
            <p className="text-center text-lg">{desc}</p>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn cursor-pointer"
            >
              {buttonTitle}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
