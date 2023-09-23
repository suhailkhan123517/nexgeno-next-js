import {
  appDevelopment,
  backDevelopment,
  cloudMarketingSolution,
  frontDevelopment,
  hireAboutS,
  servicesIndustries,
} from "@/utils/data";
import Image from "next/image";
import "./servicePage.css";
import Button from "@/components/Button/Button";
import Stories from "@/components/Stories/Stories";
import Technology from "@/components/Technology/Technology";
import Testimonial from "@/components/Testimonial/Testimonial";
import Engage from "@/components/Engage/Engage";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import Faq2 from "@/components/Faq2/Faq2";
import News from "@/components/News/News";
import Connect from "@/components/Connect/Connect";
import Counter from "@/components/Counter/Counter";
import Link from "next/link";
import { BsArrowRightShort, BsFillCloudCheckFill } from "react-icons/bs";
import Client from "@/components/client/Client";

export const metadata = {
  title: "Nexgeno | Services",
  description: "Nexgeno Technology Private Limited Company Services",
};

export default function Services() {
  return (
    <>
      <div className="container m-auto ">
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-5  pb-14 pt-5 place-items-center">
          <div className="flex order-last lg:order-first flex-col md:gap-6 gap-4 mt-10  lg:mt-0 lg:pr-10">
            <h1 className="sm:text-[41px] sm:leading-[62px] text-[27px] leading-[40px] font-semibold text-blue-950">
              Our Services
            </h1>
            <p className="sm:text-[18px] text-[16px] sm:leading-[34px] leading-[30px] text-gray-700 line-clamp-4 mb-2">
              Create your digital products with our end-to-end product design
              and development services catering to your ever-evolving needs.
            </p>
            <div className="flex">
              <Button url="/inquiry" title="Get In Touch" button="button" />
            </div>
          </div>
          <Image src="/images/web_s.png" alt="web" width={500} height={500} />
        </div>
      </div>
      <div className="mb-20">
        <Client />
      </div>
      <Stories />

      <section className="mt-24 mb-12">
        <div className="container mx-auto">
          <h2 className="heading text-center mb-10"> Web Development </h2>

          <div className="border-[1px] bg-[#fffbfd] py-12 px-12 rounded-2xl">
            <div className="flex items-center justify-between">
              <h3 className="small_heading">Front-End Developer</h3>
              <div className="flex gap-5">
                <Link
                  href="/hire-developer"
                  className="group border border-gray-600  px-5 py-2  flex  rounded-lg hover:bg-gradient-to-r from-[#3d9ec5] to-[#cf67be] hover:text-white hover:border-transparent font-medium duration-200 transition"
                >
                  Read More
                  <BsArrowRightShort className="text-2xl group-hover:translate-x-2 duration-200 transition font-extrabold" />
                </Link>
                <Button
                  button="button"
                  url="/hire-developer"
                  title="Hire Web Development"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-16">
              {frontDevelopment.map((item) => (
                <div
                  key={item.id}
                  className="border-[1px] bg-white p-5 rounded-lg  hover:border-pink-500 hover:shadow-lg transition-all duration-200"
                >
                  <div className="relative w-[80px] h-[80px] mb-5">
                    <Image src={item.img} alt={item.title} fill={true} />
                  </div>
                  <h4 className="text-xl font-semibold text-[#050748]">
                    {item.title}
                  </h4>
                  <h4 className="text-xl font-semibold text-[#050748]">
                    Development
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="my-12">
        <div className="container mx-auto">
          <div className="border-[1px] bg-[#fffbfd] py-12 px-12 rounded-2xl">
            <div className="flex items-center justify-between">
              <h3 className="small_heading">Back-End Development</h3>
              <div className="flex gap-5">
                <Link
                  href="/hire-developer"
                  className="group border border-gray-600  px-5 py-2  flex  rounded-lg hover:bg-gradient-to-r from-[#3d9ec5] to-[#cf67be] hover:text-white hover:border-transparent font-medium duration-200 transition"
                >
                  Read More
                  <BsArrowRightShort className="text-2xl group-hover:translate-x-2 duration-200 transition font-extrabold" />
                </Link>
                <Button
                  button="button"
                  url="/hire-developer"
                  title="Hire Web Development"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-16">
              {backDevelopment.map((item) => (
                <div
                  key={item.id}
                  className="border-[1px] bg-white p-5 rounded-lg  hover:border-pink-500 hover:shadow-lg transition-all duration-200"
                >
                  <div className="relative w-[80px] h-[80px] mb-5">
                    <Image src={item.img} alt={item.title} fill={true} />
                  </div>
                  <h4 className="text-xl font-semibold text-[#050748]">
                    {item.title}
                  </h4>
                  <h4 className="text-xl font-semibold text-[#050748]">
                    Development
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="my-12">
        <div className="container mx-auto">
          <div className="border-[1px] bg-[#fffbfd] py-12 px-12 rounded-2xl">
            <div className="flex items-center justify-between">
              <h3 className="small_heading">Mobile App Development</h3>
              <div className="flex gap-5">
                <Link
                  href="/hire-developer"
                  className="group border border-gray-600  px-5 py-2  flex  rounded-lg hover:bg-gradient-to-r from-[#3d9ec5] to-[#cf67be] hover:text-white hover:border-transparent font-medium duration-200 transition"
                >
                  Read More
                  <BsArrowRightShort className="text-2xl group-hover:translate-x-2 duration-200 transition font-extrabold" />
                </Link>
                <Button
                  button="button"
                  url="/hire-developer"
                  title="Hire Web Development"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-16">
              {appDevelopment.map((item) => (
                <div
                  key={item.id}
                  className="border-[1px] bg-white p-5 rounded-lg  hover:border-pink-500 hover:shadow-lg transition-all duration-200"
                >
                  <div className="relative w-[80px] h-[80px] mb-5">
                    <Image src={item.img} alt={item.title} fill={true} />
                  </div>
                  <h4 className="text-xl font-semibold text-[#050748]">
                    {item.title}
                  </h4>
                  <h4 className="text-xl font-semibold text-[#050748]">
                    Development
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto mb-10">
          <div className="py-16 border border-pink-500 bg-[#fffbfd] rounded-lg flex flex-col gap-5 items-center justify-center">
            <h2 className="heading text-center">
              Looking for any Full Stack Developers to work dedicatedly on your
              projects?
            </h2>
            <div className="flex">
              <Button
                button="button"
                title="Hire Full Stack Developer"
                url="/contact"
              ></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 mb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-10">
            {cloudMarketingSolution.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 bg-[#fffbfd] hover:border-pink-600 p-7 rounded-xl transition-all duration-200 hover:shadow-xl"
              >
                <h3 className="heading">{item.title}</h3>
                <ul className="mt-8 flex flex-col gap-6">
                  {item.points.map((item) => (
                    <li
                      key={item.title}
                      className="group flex items-center gap-3 "
                    >
                      <span className="w-10 h-10 border  border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                        <BsFillCloudCheckFill className="text-lg" />
                      </span>
                      <span className="text-lg  duration-200 group-hover:text-black transition-all ">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 mb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-10">
            {servicesIndustries.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 bg-[#fffbfd] hover:border-pink-600 p-7 rounded-xl transition-all duration-200 hover:shadow-xl"
              >
                <h3 className="heading">{item.title}</h3>
                <ul className="mt-8 flex flex-col gap-6">
                  {item.points.map((item) => (
                    <li
                      key={item.title}
                      className="group flex items-center gap-3 "
                    >
                      <span className="w-10 h-10 border border-gray-200 transition-all duration-200 group-hover:bg-pink-600 group-hover:text-white  rounded-full flex items-center justify-center ">
                        <BsFillCloudCheckFill className="text-lg" />
                      </span>
                      <span className="text-lg  duration-200">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto mb-10">
          <div className="py-16 border border-pink-500 bg-[#fffbfd]  rounded-lg flex flex-col gap-5 items-center justify-center">
            <h2 className="heading text-center">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-center text-lg">
              Let us know your project idea and Get free consultation to turn it
              into an amazing digital product.
            </p>
            <div className="flex">
              <Button
                button="button"
                title="Talk To Expert"
                url="/contact"
              ></Button>
            </div>
          </div>
        </div>
      </section>
      <Engage />
      {hireAboutS.map((item) => (
        <WhoWeAre key={item.id} title={item.title} desc={item.desc} />
      ))}
      <Counter />
      <Faq2 />
      <News />
      <Connect />
    </>
  );
}
