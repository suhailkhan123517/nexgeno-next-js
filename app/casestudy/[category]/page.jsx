import Image from "next/image";
import React from "react";
import "../case.css";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

export default function Category({ params }) {
  const data = getData(params.category);
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="case_inner text-white my-16">
          <div className="container flex flex-col gap-10 py-10 m-auto">
            <h1 className="text-5xl font-normal text-center">{item.title}</h1>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-blue-600 pb-2">LINK</p>
                <p>{item.link}</p>
              </div>
              <div>
                <p className="text-blue-600 pb-2">TIMELINE</p>
                <p>{item.timeline}</p>
              </div>
              <div>
                <p className="text-blue-600 pb-2">SOFT</p>
                <p>{item.soft}</p>
              </div>
              <div>
                <p className="text-blue-600 pb-2"> CATEGORY</p>
                <p>{item.category}</p>
              </div>
            </div>
            <div>
              <div className="img_first_case">
                <Image src={item.img} alt="Abaya Designer" fill={true} />
              </div>
            </div>

            <div className="grid grid-cols-3 py-10">
              <div>
                <div>
                  <h1 className="text-4xl font-semibold">Introduction</h1>
                  <p className="py-5">{item.Introduction}</p>
                </div>
                <div>
                  <h1 className="text-4xl font-semibold">Challenge</h1>
                  <p className="py-5">{item.Challenge}</p>
                </div>
              </div>
              <div className="col-span-2 pl-20 ">
                <div className="img_second_case ">
                  <Image src={item.img2} alt="Abayadesigner" fill={true} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 py-10">
              <div className="col-span-2 pr-20">
                <div className="img_second_case">
                  <Image src={item.img3} alt="Abayadesigner" fill={true} />
                </div>
              </div>
              <div>
                <div>
                  <h1 className="text-4xl font-semibold">Results</h1>
                  <p className="py-5">{item.Results}</p>
                </div>
                <div>
                  <h1 className="text-4xl font-semibold">Solution</h1>
                  <p className="py-5">{item.Solution}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="img_first_case">
                <Image src={item.img3} alt="abayadesigner" fill={true} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
