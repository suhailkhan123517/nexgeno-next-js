import React from "react";
import Button from "../Button/Button";
import "./connect.css";

export default function Connect() {
  return (
    <>
      <div className="connect py-10  text-white">
        <div className="container m-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="col-span-2 lg:p-10">
              <h1 className="md:text-3xl text-2xl font-semibold py-5 md:leading-10 leading-8  ">
                Are you ready to take your business to the next level with a
                custom web application?
              </h1>
              <p className="py-3 leading-8 text-md">
                Contact us today to schedule a consultation with our expert
                team. We will work with you to understand your unique business
                needs and develop a solution that meets your specific
                requirements. Do not wait - let us help you drive growth and
                success for your business with our high-performance, intuitive,
                and secure web applications. Contact us now to get started!
              </p>
            </div>
            <div className="grid md:place-items-center max-w-max">
              <Button url="#" title="Get Connect" bgblack="bg-black" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
