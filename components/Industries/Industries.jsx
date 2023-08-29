import { industriesIcons } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

export default function Industries() {
  return (
    <>
      <div className="container m-auto sm:py-14 py-10">
        <h2 className="text-center redHeading"># INDUSTRIES</h2>
        <h1 className="text-center heading  py-3">
          Serving Our Clients Across Diverse Industries
        </h1>
        <div className="industries  grid sm:grid-cols-6 grid-cols-4 place-items-center sm:gap-6 gap-2 sm:py-7 py-3">
          {industriesIcons.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="flex flex-col sm:gap-3 gap-1 py-3 items-center"
            >
              <div className="relative lg:w-[50px] lg:h-[50px] w-[50px] h-[46px] ">
                <Image
                  className="hover:scale-125 ease-in-out duration-300 object-contain"
                  src={item.img}
                  alt={item.title}
                  fill={true}
                />
              </div>

              <p className="text-center font-medium lg:text-sm text-[11px]">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
        <div className="grid place-items-center sm:pt-5">
          <Button url="/industries" title="View More" button="button" />
        </div>
      </div>
    </>
  );
}
