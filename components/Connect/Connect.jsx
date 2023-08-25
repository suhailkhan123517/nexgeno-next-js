import React from "react";
import Button from "../Button/Button";
import "./connect.css";

export default function Connect() {
  return (
    <>
      <div className="connect sm:py-14 py-10  text-white">
        <div className="container m-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="col-span-2 ">
              <h1 className="lg:text-[28px] text-[19px] mb-2  font-bold md:leading-[44px] leading-8  ">
                Are you ready to take your business to the next level with a
                custom web application?
              </h1>
              <p className="py-3 text-[16px] leading-[28px]">
                Contact us today to schedule a consultation with our expert
                team. We will work with you to understand your unique business
                needs and develop a solution that meets your specific
                requirements. Do not wait - let us help you drive growth and
                success for your business with our high-performance, intuitive,
                and secure web applications. Contact us now to get started!
              </p>
            </div>
            <div className="flex items-center md:justify-end justify-start">
              <Button url="#" title="Get Connect" bgblack="bg-black" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
