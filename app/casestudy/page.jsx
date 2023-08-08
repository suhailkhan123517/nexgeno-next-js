import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./case.css";
import { caseStudy } from "@/utils/data";

export default function CaseStudy() {
  return (
    <>
      <div className="caseStudy text-white my-16">
        <div className="container py-10 m-auto ">
          <h1 className="text-center text-4xl font-normal">Work</h1>
          <div className="grid place-items-center grid-cols-2 py-10 gap-5">
            {caseStudy.map((item) => (
              <div key={item.id} className="caseBox mb-5">
                <Link href={item.url}>
                  <p className="">UX DESIGN</p>
                  <h1 className="pb-2 text-2xl font-normal">{item.title}</h1>
                  <div className="caseImg">
                    <Image
                      src={item.img}
                      alt="abaya Designer Website"
                      fill={true}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
