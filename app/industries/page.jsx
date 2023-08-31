import Image from "next/image";
import Link from "next/link";
import { industries } from "@/utils/data";
import Button from "@/components/Button/Button";
import "./industries.css";

export const metadata = {
  title: "Nexgeno | Industries",
  description: "Nexgeno Technology Private Limited Company Industries",
};

export default function Industries() {
  return (
    <>
      <div className="container m-auto ">
        <h1 className="text-center text-4xl text-gray-700 font-medium py-5">
          Industries
        </h1>
        <div className="grid grid-cols-3 place-items-center gap-5 ">
          {industries.map((item) => (
            <div
              className="flex rounded-xl my-3  shadow-xl p-5 flex-col gap-5"
              key={item.id}
            >
              <Link href={item.url}>
                <div className="relative w-[100%] xl:h-[250px] h-[180px]">
                  <Image src={item.img} alt={item.title} fill={true} />
                </div>
                <h1 className="xl:text-2xl text-xl font-semibold py-5">
                  {item.title}
                </h1>
                <p className="line-clamp-3 desc">{item.des}</p>
              </Link>
              <div className="py-5 flex">
                <Button url={item.url} title="Learn More" button="button" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
