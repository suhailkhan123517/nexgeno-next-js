import { clientLogo } from "@/utils/data";
import Image from "next/image";
import React from "react";

export default function Client() {
  return (
    <>
      <div className="container m-auto mb-12">
        <div className="grid md:grid-cols-6 md:gap-0  grid-cols-2  place-items-center">
          {clientLogo.map((item) => (
            <div
              key={item.id}
              className="relative lg:h-24 lg:w-36 md:h-14 md:w-20"
            >
              <Image src={item.img} alt={item.alt} fill={true} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
