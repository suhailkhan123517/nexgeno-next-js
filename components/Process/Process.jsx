import Image from "next/image";
import React from "react";
import "./Process.css";

export default function Process() {
  return (
    <>
      <div className="container text-[#444] relative m-auto py-10 text-center ">
        <h1 className="text-3xl font-semibold  py-5 ">Process&apos;s</h1>
        <p className="">
          At Nexgeno, we believe that this custom web application development
          process allows us to deliver high-quality, user-friendly web solutions
          that meet our client&apos;s unique needs.
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mt-40 process">
          <div className="relative md:mt-56 mt-10">
            <div className="imgConPro w-36 h-36 grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <Image src="/images/plan.png" alt="plan" width={80} height={80} />
            </div>
            <h1 className="absolute xl:top-0 -top-3 xl:right-16 right-12 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              01
            </h1>
            <h1 className="text-[20px] font-medium mb-1">
              Discovery and Planning
            </h1>
            <p className="line-clamp-2 text-[15px] leading-28px">
              We begin every web application development project with a
            </p>
          </div>
          <div className="relative md:mt-0  mt-10">
            <h1 className="text-[20px] font-medium mb-1">
              Design and Prototyping
            </h1>
            <p className="line-clamp-2 text-[15px] leading-28px mb-8">
              Once we have a clear understanding of your
            </p>
            <div className="imgConPro w-36 h-36 grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <Image
                src="/images/prototype.png"
                alt="plan"
                width={80}
                height={80}
              />
            </div>
            <h1 className="absolute xl:top-24 -top-3 xl:right-20 right-12 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              02
            </h1>
          </div>
          <div className="relative md:mt-16 mt-10">
            <div className="imgConPro w-36 h-36 grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <Image src="/images/rent.png" alt="plan" width={80} height={80} />
            </div>
            <h1 className="absolute xl:top-0 -top-3 xl:right-20 right-12 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              03
            </h1>
            <h1 className="text-[20px] font-medium mb-1">
              Development and Testing
            </h1>
            <p className="line-clamp-2 text-[15px] leading-28px">
              Once the design and prototype have been approved, we move on
            </p>
          </div>
          <div className="relative -mt-28">
            <h1 className="text-[20px] font-medium mb-1">
              Iteration & Improvement
            </h1>
            <p className="line-clamp-2 text-[15px] leading-28px mb-4">
              Finally, we believe that a web application is never truly
              finished.
            </p>
            <div className="imgConPro  w-36 h-36 grid place-items-center mx-auto bg-white rounded-full relative z-1">
              <Image
                src="/images/satisfaction.png"
                alt="plan"
                width={80}
                height={80}
              />
            </div>
            <h1 className="absolute top-20 xl:right-20 right-12 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              04
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
