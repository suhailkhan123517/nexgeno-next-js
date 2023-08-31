import Image from "next/image";
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
        <div key={item.id} className="case_inner text-white">
          <div className="container  py-10 m-auto">
            <h1 className="md:text-5xl text-3xl font-normal text-center">
              {item.title}
            </h1>
            <div className="grid py-6 md:grid-cols-4 grid-cols-2 md:gap-4 gap-5">
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
              <div className="relative w-full xl:h-[500px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[200px]">
                <Image src={item.img} alt={item.title} fill={true} />
              </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 md:pt-10 pt-3">
              <div>
                <div>
                  <h1 className="md:text-4xl text-2xl font-semibold">
                    Introduction
                  </h1>
                  <p className="pb-5 desc">{item.Introduction}</p>
                </div>
                <div>
                  <h1 className="md:text-4xl text-2xl font-semibold">
                    Challenge
                  </h1>
                  <p className="pb-5 desc">{item.Challenge}</p>
                </div>
              </div>
              <div className="col-span-2 pl-20 md:mt-0 mt-7 ">
                <div className="relative max-md:hidden  w-full h-[350px] ">
                  <Image src={item.img2} alt="Abayadesigner" fill={true} />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 md:py-10">
              <div className="col-span-2 md:pr-20">
                <div className="relative w-full md:h-[350px] h-[200px]">
                  <Image src={item.img3} alt="Abayadesigner" fill={true} />
                </div>
              </div>
              <div>
                <div>
                  <h1 className="md:text-4xl text-2xl font-semibold md:mt-0 mt-3">
                    Results
                  </h1>
                  <p className="pb-5 desc">{item.Results}</p>
                </div>
                <div>
                  <h1 className="md:text-4xl text-2xl font-semibold">
                    Solution
                  </h1>
                  <p className="pb-5 desc">{item.Solution}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative mt-10 md:mt-0 w-full xl:h-[500px] lg:h-[450px] md:h-[350px] sm:h-[300px] h-[200px] ">
                <Image src={item.img4} alt="abayadesigner" fill={true} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
