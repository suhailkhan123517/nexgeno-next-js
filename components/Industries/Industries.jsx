import { industriesIcons } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

export default function Industries() {
  return (
    <>
      <div className="container m-auto py-10">
        <h2 className="text-center text-pink-600 py-3 text-[16px]">
          # INDUSTRIES
        </h2>
        <h1 className="text-center lg:text-[30px] md:text-[25px] text-[20px] leading-[30px] font-semibold text-blue-950 pb-3">
          Serving Our Clients Across Diverse Industries
        </h1>
        <div className="industries  grid sm:grid-cols-6 grid-cols-4 place-items-center gap-6 sm:py-7 py-3">
          {industriesIcons.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="flex flex-col sm:gap-3 py-3 items-center"
            >
              <div className="relative lg:w-[50px] lg:h-[50px] w-[50px] h-[46px] ">
                <Image
                  className="hover:scale-125 ease-in-out duration-300"
                  src={item.img}
                  alt={item.title}
                  fill={true}
                />
              </div>

              <p className="text-center font-medium lg:text-sm text-[9px]">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <div className="grid place-items-center pt-5">
          <Button url="/industries" title="View More" button="button" />
        </div>
      </div>
    </>
  );
}
