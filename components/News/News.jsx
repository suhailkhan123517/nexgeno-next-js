import Image from "next/image";
import Link from "next/link";
import "./news.css";

export default function News() {
  return (
    <>
      <h2 className="text-center  text-pink-600 pt-10"># INSIGHT & NEWS </h2>
      <h1 className="text-center md:text-[30px]  text-xl font-semibold text-blue-950 pt-5 pb-9">
        Stay ahead of technology paradigm shift
      </h1>
      <div className="news text-[#444] md:py-20 py-10">
        <div className="container m-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="relative w-full lg:h-[520px] sm:h-[900px] h-[440px]">
              <Image
                src="/images/blog.jpg"
                fill={true}
                alt="Nexgeno Blog Image"
                className="image"
              />
            </div>
            <div className="content col-span-2 grid sm:grid-cols-2 grid-cols-1 gap-4">
              <div className="bg-white rounded-md p-6 flex flex-col gap-[10px] z-10">
                <p className="btn_title rounded-sm text-white inline-block text-[13px] font-semibold py-1 px-4 w-max">
                  Career
                </p>
                <h1 className="text-[20px] leading-[32px]">
                  Join Our Team and Build Your Career in Tech
                </h1>
                <p className="text-gray-700 line-clamp-2 leading-[28px] text-[15px]">
                  Discover exciting career opportunities in tech with our
                  dynamic team...
                </p>
                <Link
                  href="/inquiry"
                  className="readLink font-semibold text-[#937dc1]"
                >
                  Read More
                </Link>
              </div>
              <div className="bg-white rounded-md p-6 flex flex-col gap-[10px] z-10">
                <p className="btn_title rounded-sm text-white inline-block text-[13px] font-semibold py-1 px-4 w-max">
                  Solution
                </p>
                <h1 className="text-[20px] leading-[32px]">
                  Cloud-Based Solutions for Modern Businesses
                </h1>
                <p className="text-gray-700 line-clamp-2 leading-[28px] text-[15px]">
                  Revolutionize your business with our cloud-based solutions...
                </p>
                <Link
                  href="/solution"
                  className=" readLink font-semibold text-[#937dc1]"
                >
                  Read More
                </Link>
              </div>
              <div className="bg-white rounded-md p-6 flex flex-col gap-[10px] z-10">
                <p className="btn_title rounded-sm text-white inline-block text-[13px] font-semibold py-1 px-4 w-max">
                  Hire Developers
                </p>
                <h1 className="text-[20px] leading-[32px]">
                  Build Your Dream Team with Our Expert Developers
                </h1>
                <p className="text-gray-700 line-clamp-2 leading-[28px] text-[15px]">
                  Get access to a range of skilled developers, including web,
                  mobile...
                </p>
                <Link
                  href="/hiredeveloper"
                  className="font-semibold text-[#937dc1] readLink"
                >
                  Read More
                </Link>
              </div>
              <div className="bg-white rounded-md p-6 flex flex-col gap-[10px] z-10">
                <p className="btn_title rounded-sm text-white inline-block text-[13px] font-semibold py-1 px-4 w-max">
                  Blog
                </p>
                <h1 className="text-[20px] leading-[32px]">
                  Stay Ahead of the Curve with Our Tech Blog
                </h1>
                <p className="text-gray-700 line-clamp-2 leading-[28px] text-[15px]">
                  Our tech blog offers the latest insights, trends, and best
                  practices in the industry...
                </p>
                <Link
                  href="/blog"
                  className="font-semibold text-[#937dc1] readLink"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
