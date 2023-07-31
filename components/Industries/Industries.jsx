import { industriesIcons } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";

export default function Industries() {
  return (
    <>
      <div className="container m-auto py-10">
        <h2 className="text-center text-pink-600 py-3"># INDUSTRIES</h2>
        <h1 className="text-center text-3xl font-semibold text-blue-950 pb-7">
          Serving Our Clients Across Diverse Industries
        </h1>
        <div className="industries  grid grid-cols-6 place-items-center gap-6 py-7">
          {industriesIcons.map((item) => (
            <Link
              key={item.id}
              href="#"
              className="flex flex-col gap-3 items-center my-3"
            >
              <Image
                className="hover:scale-125 ease-in-out duration-300"
                src={item.img}
                alt={item.title}
                width={60}
                height={60}
              />
              <p>{item.title}</p>
            </Link>
          ))}
        </div>
        <div className="grid place-items-center pt-5">
          <Button url="#" title="View More" button="button" />
        </div>
      </div>
    </>
  );
}
