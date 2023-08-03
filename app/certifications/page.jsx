import Image from "next/image";
import React from "react";
import "./certificate.css";

export default function Certificate() {
  return (
    <>
      <div className="certificate">
        <Image
          src="/images/about_bg.jpg"
          alt="Certificate background images Nexgeno"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="container mt-10 grid place-items-center m-auto">
        <h1 className="text-3xl text-blue-950 font-semibold  py-5">
          Certificate
        </h1>
        <div className="imgCertificate">
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
