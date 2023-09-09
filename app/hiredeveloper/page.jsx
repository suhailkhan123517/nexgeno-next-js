import Image from "next/image";
import "./hire.css";
import Link from "next/link";
import { hireDeveloper } from "@/utils/data";
import Button from "@/components/Button/Button";
import Client from "@/components/client/Client";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Counter from "@/components/Counter/Counter";
import Stories from "@/components/Stories/Stories";
import Connect from "@/components/Connect/Connect";
import Process from "@/components/Process/Process";
import Technology from "@/components/Technology/Technology";
import Industries from "@/components/Industries/Industries";
import Hirenow from "@/components/Hirenow/Hirenow";

export const metadata = {
  title: "Nexgeno | Hire Developer",
  description: "Nexgeno Technology Private Limited Company Hire Developer",
};

export default function Hiredeveloper() {
  return (
    <>
      {/* <div className="container m-auto by-20">
        <h1 className="text-center heading py-5">Hire Developer</h1>
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
                <p className="line-clamp-3 desc">{item.desc}</p>
              </Link>
              <div className="py-5 flex">
                <Button url={item.url} title="Learn More" button="button" />
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="container m-auto ">
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-5  py-10 place-items-center">
          <div className="flex order-last lg:order-first flex-col md:gap-6 gap-4 mt-10  lg:mt-0 lg:pr-20">
            <h1 className="text-[41px] leading-[62px] font-semibold text-blue-950">
              Hire Developer Nexgeno
            </h1>
            <p className="text-[18px] leading-[34px] text-gray-700 line-clamp-4 mb-2">
              We are seeking a highly skilled and motivated Software Developer
              to join our dynamic team. As a Software Developer, you will be
              responsible for designing, coding, testing, and maintaining
              software solutions that meet our organizations needs. You should
              be proficient in programming languages, possess problem-solving
              skills, and have a strong passion for technology.
            </p>
            <div className="flex">
              <Button url="/inquiry" title="Get In Touch" button="button" />
            </div>
          </div>
          <div className="w-full h-[400px] relative">
            <Image src="/images/metho.jpg" alt="Methodology" fill={true} />
          </div>
        </div>
      </div>
      <Hirenow />
      <div className="mb-20">
        <Client />
      </div>
      <Stories />
      <WhyChoose />
      <Technology />
      <Counter />
      <Industries />
      <Connect />
      <Process />
    </>
  );
}
