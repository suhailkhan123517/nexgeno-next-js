import Image from "next/image";
import "./hire.css";
import Link from "next/link";
import { hireDeveloper } from "@/utils/data";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Nexgeno | Hire Developer",
  description: "Nexgeno Technology Private Limited Company Hire Developer",
};

export default function Hiredeveloper() {
  return (
    <>
      <div className="container m-auto py-20">
        <h1 className="text-center text-4xl text-gray-700 font-medium py-5">
          Hire Developer
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-5">
          {hireDeveloper.map((item) => (
            <div
              className="flex rounded-xl my-3  shadow-xl p-5 flex-col gap-5 "
              key={item.id}
            >
              <Link href={item.url}>
                <div className="relative w-[100%] xl:h-[250px] h-[180px]">
                  <Image src={item.img} alt={item.title} fill={true} />
                </div>
                <h1 className="xl:text-2xl text-xl font-semibold py-5">
                  {item.title}
                </h1>
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
