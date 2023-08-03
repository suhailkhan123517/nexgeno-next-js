import { technologiesIcons } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./technology.css";
import Button from "../Button/Button";

export default function Technology() {
  return (
    <>
      <div className="technologyIcons">
        <div className="container m-auto py-12">
          <h2 className="text-pink-600 text-center"># IT TECHNOLOGY</h2>
          <h1 className="text-center text-blue-950 font-bold text-3xl py-4 mb-5">
            We Deliver Solution With Goal Of Trusting Relationships
          </h1>
          <div className="grid  grid-cols-10 place-items-center">
            {technologiesIcons.map((item) => (
              <div key={item.id} className="my-4">
                <Link href={item.url}>
                  <div className="imgIcon">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill={true}
                      className="images_tech"
                    />
                  </div>
                  <p className="text-center py-3 text-sm">{item.title}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="grid place-items-center mt-7">
            <Button url="/technology" title="View More" button="button" />
          </div>
        </div>
      </div>
    </>
  );
}
