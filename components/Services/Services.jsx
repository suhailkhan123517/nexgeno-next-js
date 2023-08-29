import Image from "next/image";
import "./services.css";
import Button from "../Button/Button";
import { servicesCard } from "@/utils/data";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Services() {
  return (
    <>
      <div className="service  sm:py-14 py-10  text-center relative">
        <div className="container m-auto ">
          <h2 className="font-normal  text-white  lg:text-[16px] md:text-[14px] text-[12px] mb-4">
            # SERVICES WE ARE PROVIDED
          </h2>
          <h1 className="lg:text-[30px] text-white sm:text-[25px] text-[20px]   sm:leading-0 leading-[30px]  font-semibold mb-[30px] ">
            Our Design Development Services
          </h1>

          <div className="grid  sm:grid-cols-2  grid-cols-1  lg:grid-cols-4 mb-10 gap-4">
            {servicesCard.map((item) => (
              <div
                key={item.id}
                className="card flex justify-between py-[25px] px-[10px] items-center shadow-lg bg-white text-[#444] text-center flex-col  gap-4 rounded-xl"
              >
                <div className="relative h-[80px] w-[80px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    className="object-contain"
                    fill={true}
                  />
                </div>

                <h1 className="font-semibold text-[18px] leading-[25px] ">
                  {item.title}
                </h1>
                <p className="line-clamp-4 desc">{item.desc}...</p>
                <Link href={item.url} className="link_learn ">
                  <span className="flex items-center font-normal gap-3 text-[#333]">
                    Learn More <AiOutlineArrowRight />
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Button title="View All Services" url="/services" button="button" />
          </div>
        </div>
      </div>
    </>
  );
}
