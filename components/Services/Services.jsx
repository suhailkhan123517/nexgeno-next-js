import Image from "next/image";
import React from "react";
import "./services.css";
import Button from "../Button/Button";
import { servicesCard } from "@/utils/data";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <div className="service py-10 text-center relative   rounded-2xl">
        <div className="container m-auto ">
          <h2 className="font-normal  text-xl mt-6">
            # SERVICES WE ARE PROVIDED
          </h2>
          <h1 className="font-semibold text-4xl mt-5 pb-10">
            Our Design Development Services
          </h1>

          <div className="grid  grid-cols-2 lg:grid-cols-4 mb-10 gap-4">
            {servicesCard.map((item) => (
              <div
                key={item.id}
                className="card flex justify-between p-7 items-center shadow-lg bg-white text-black text-center flex-col  gap-4 rounded-xl"
              >
                <div className="servicesImg">
                  <Image src={item.icon} alt={item.title} fill={true} />
                </div>

                <h1 className="font-semibold text-xl">{item.title}</h1>
                <p>{item.desc}...</p>
                <Link href={item.url} className="link_learn font-bold">
                  Learn More
                  <span>
                    <i className="fa fa-arrow-right ml-2"></i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <Button title="View All Services" url="/services" button="button" />
        </div>
      </div>
    </>
  );
}
