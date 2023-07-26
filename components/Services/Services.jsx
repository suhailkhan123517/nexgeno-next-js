import Image from "next/image";
import React from "react";
import "./services.css";
import Button from "../Button/Button";
import { servicesCard } from "@/utils/data";

export default function Services() {
  return (
    <>
      <div className="service py-10 text-center relative   rounded-2xl">
        <div className="container m-auto ">
          <h2 className="font-medium  text-xl mt-6 text-red-500">
            {" "}
            # SERVICES WE ARE PROVIDED{" "}
          </h2>
          <h1 className="font-bold text-4xl mt-5 pb-10">
            Our Design Development Services
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4    mb-10 gap-4">
            {servicesCard.map((item) => (
              <div
                key={item.id}
                className="card flex justify-between p-8 items-center text-center flex-col  gap-4 rounded-xl border divide-white"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                />
                <h1 className="font-semibold text-xl">{item.title}</h1>
                <p>{item.desc}...</p>
                <Button
                  title="Learn More"
                  url="#"
                  bgblack="bg-black"
                  hover=""
                />
              </div>
            ))}
          </div>
          <Button title="View All Services" url="#" bgblack="bg-black" />
          {/* <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div className="blur_2" style={{ background: "#72eba8" }}></div> */}
        </div>
      </div>
    </>
  );
}
