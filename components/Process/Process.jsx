import Image from "next/image";
import React from "react";
import "./Process.css";

export default function Process() {
  return (
    <>
      <div className="container m-auto py-10 text-center">
        <h1 className="text-3xl font-semibold  py-5 ">Process&apos;s</h1>
        <p className="">
          At Nexgeno, we believe that this custom web application development
          process allows us to deliver high-quality, user-friendly web solutions
          that meet our client&apos;s unique needs.
        </p>
        <div className="imgLine mt-10 relative">
          <Image
            src="/images/procces_line.png"
            alt="process line"
            width={1000}
            height={300}
          />
        </div>
        <div className="grid grid-cols-4 gap-4 process">
          <div className="relative mt-56">
            <div className="imgConPro w-36 h-36 grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <Image src="/images/plan.png" alt="plan" width={80} height={80} />
            </div>
            <h1 className="absolute top-0 right-20 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              01
            </h1>
            <h1 className="text-xl font-semibold">Discovery and Planning</h1>
            <p>We begin every web application development project with a</p>
          </div>
          <div className="relative mt-28">
            <div className="imgConPro w-36 h-36 grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <Image
                src="/images/prototype.png"
                alt="plan"
                width={80}
                height={80}
              />
            </div>
            <h1 className="absolute top-0 right-20 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              02
            </h1>
            <h1 className="text-xl font-semibold">Design and Prototyping</h1>
            <p>Once we have a clear understanding of your</p>
          </div>
          <div className="relative mt-16">
            <div className="imgConPro w-36 h-36 grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <Image src="/images/rent.png" alt="plan" width={80} height={80} />
            </div>
            <h1 className="absolute top-0 right-20 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              03
            </h1>
            <h1 className="text-xl font-semibold">Development and Testing</h1>
            <p>Once the design and prototype have been approved, we move on</p>
          </div>
          <div className="relative">
            <div className="imgConPro w-36 h-36 grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <Image
                src="/images/satisfaction.png"
                alt="plan"
                width={80}
                height={80}
              />
            </div>
            <h1 className="absolute top-0 right-20 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              04
            </h1>
            <h1 className="text-xl font-semibold">Iteration & Improvement</h1>
            <p>
              Finally, we believe that a web application is never truly
              finished.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
