import { allServices } from "@/utils/data";
import Image from "next/image";
import "./servicePage.css";
import Link from "next/link";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Nexgeno | Services",
  description: "Nexgeno Technology Private Limited Company Services",
};

export default function Services() {
  return (
    <>
      <div className="container m-auto py-20">
        <h1 className="text-center heading py-5">Services</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-5">
          {allServices.map((item) => (
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
                <p className="line-clamp-3 desc">{item.des}</p>
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
