import { technology } from "@/utils/data";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./tech.css";
import Button from "@/components/Button/Button";

export default function Technology() {
  return (
    <>
      <div className="container m-auto py-20">
        <h1 className="text-center text-4xl text-gray-700 font-medium py-5">
          Technology
        </h1>
        <div className="grid grid-cols-3 place-items-center gap-5 ">
          {technology.map((item) => (
            <div
              className="flex rounded-xl my-3  shadow-xl p-5 flex-col gap-5 "
              key={item.id}
            >
              <Link href={item.url}>
                <div className="imgContainer">
                  <Image src={item.img} alt={item.title} fill={true} />
                </div>
                <h1 className="text-2xl font-semibold py-5">{item.title}</h1>
                <p className="line-clamp-3 leading-8">{item.desc}</p>
              </Link>
              <div className="py-5">
                <Button url={item.url} title="Learn More" button="button" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
