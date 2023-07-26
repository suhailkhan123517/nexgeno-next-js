import { clientLogo } from "@/utils/data";
import Image from "next/image";
import React from "react";

export default function Client() {
  return (
    <>
      <div className="container m-auto mt-10">
        <div className="grid grid-cols-6 place-items-center">
          {clientLogo.map((item) => (
            <Image
              key={item.id}
              src={item.img}
              alt={item.alt}
              width={150}
              height={150}
            />
          ))}
        </div>
      </div>
    </>
  );
}
