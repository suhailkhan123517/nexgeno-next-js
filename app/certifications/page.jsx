import Image from "next/image";
import React from "react";
import "./certificate.css";

export default function Certificate() {
  return (
    <>
      <div className="relative w-[100%] h-[160px] md:h-[250px]">
        <Image
          src="/images/about_bg.jpg"
          alt="Certificate background images Nexgeno"
          fill={true}
        />
      </div>
      <div className="container  sm:mt-10 grid place-items-center m-auto">
        <h1 className="sm:text-3xl text-xl text-blue-950 font-semibold  py-5">
          Certificate
        </h1>
        <div className="relative w-[100%] sm:w-[90%] xl:h-[700px] lg:h-[600px] md:h-[500px] sm:h-[400px] h-[200px]">
          <Image
            src="/images/certificate.png"
            alt="nexgeno certificate"
            fill={true}
          />
        </div>
      </div>
    </>
  );
}
