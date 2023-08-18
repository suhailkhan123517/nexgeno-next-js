import Image from "next/image";
import React from "react";
import "./whyChoose.css";

export default function WhyChoose() {
  return (
    <>
      <div className="whyChoose my-10 py-10">
        <div className="container m-auto">
          <h1 className="text-center md:text-3xl text-2xl font-semibold text-blue-950 py-5 ">
            Why Choose Nexgeno For Web Application Development Services?
          </h1>
          <p className="text-center pb-5 md:text-base  text-sm md:leading-8 leading-6 text-gray-700">
            Choosing the right custom web application development company to
            partner with is critical to the success of your business. With so
            many options available, it can be difficult to know which company to
            trust with your web application development needs.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-8 py-10 mx-auto px-10">
            <div className="text-center">
              <div className="iconContainer w-32 h-32 rounded-full mx-auto leading grid place-items-center">
                <Image
                  src="/images/experience.png"
                  alt="experience"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="py-4 xl:text-xl text-lg font-semibold text-gray-800 ">
                Expertise and Experience
              </h1>
              <p className="leading-8 text-gray-700 line-clamp-2">
                With over 11 years of experience in web application development,
                our team of
              </p>
            </div>
            <div className="text-center">
              <div className="iconContainer w-32 h-32 rounded-full mx-auto leading grid place-items-center">
                <Image
                  src="/images/custom.png"
                  alt="experience"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="py-4 xl:text-xl text-lg font-semibold text-gray-800 ">
                Customized Solutions
              </h1>
              <p className="leading-8 text-gray-700 line-clamp-2">
                At Nexgeno, we understand that every business has unique needs.
                That why we
              </p>
            </div>
            <div className="text-center">
              <div className="iconContainer w-32 h-32 rounded-full mx-auto leading grid place-items-center">
                <Image
                  src="/images/quality.png"
                  alt="experience"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="py-4 xl:text-xl text-lg font-semibold text-gray-800 ">
                Quality and Attention to Detail
              </h1>
              <p className="leading-8 text-gray-700 line-clamp-2">
                We believe that quality should never be compromised. That why we
                pay
              </p>
            </div>
          </div>
          <div className="flex justify-center md:flex-row flex-col items-center gap-8">
            <div className="text-center  px-10">
              <div className="iconContainer w-32 h-32 rounded-full mx-auto leading grid place-items-center">
                <Image
                  src="/images/communication.png"
                  alt="experience"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="py-4 xl:text-xl text-lg font-semibold text-gray-800 ">
                Communication and Collaboration
              </h1>
              <p className="leading-8 text-gray-700 line-clamp-2">
                We believe that communication and collaboration are key to the
                success of any
              </p>
            </div>
            <div className="text-center  px-10">
              <div className="iconContainer w-32 h-32 rounded-full mx-auto leading grid place-items-center">
                <Image
                  src="/images/satisfaction.png"
                  alt="experience"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="py-4 xl:text-xl text-lg font-semibold text-gray-800 ">
                Customer Satisfaction
              </h1>
              <p className="leading-8 text-gray-700 line-clamp-2">
                At Nexgeno, we are committed to our clients success. We believe
                that our
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
