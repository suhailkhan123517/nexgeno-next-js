import Image from "next/image";
import "./hire.css";
import Button from "@/components/Button/Button";
import Client from "@/components/client/Client";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Counter from "@/components/Counter/Counter";
import Stories from "@/components/Stories/Stories";
import Connect from "@/components/Connect/Connect";
import Process from "@/components/Process/Process";
import Technology from "@/components/Technology/Technology";
import Industries from "@/components/Industries/Industries";
import Hire from "@/components/Hire/Hire";
import Engage from "@/components/Engage/Engage";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import { hireAboutS } from "@/utils/data";
import Faq2 from "@/components/Faq2/Faq2";
import Services from "@/components/Services/Services";
import News from "@/components/News/News";

export const metadata = {
  title: "Nexgeno | Hire Developer",
  description: "Nexgeno Technology Private Limited Company Hire Developer",
};

export default function Hiredeveloper() {
  return (
    <>
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
            <Image src="/images/php_t.webp" alt="Methodology" fill={true} />
          </div>
        </div>
      </div>
      <div className="mb-20">
        <Client />
      </div>
      <Stories />
      <Hire />
      <Engage />
      <Stories />
      <Process />
      {hireAboutS.map((item) => (
        <WhoWeAre key={item.id} title={item.title} desc={item.desc} />
      ))}
      <Counter />
      <Faq2 />
      <Services />
      <News />
      <WhyChoose />
      <Technology />
      <Industries />
      <Connect />
    </>
  );
}
