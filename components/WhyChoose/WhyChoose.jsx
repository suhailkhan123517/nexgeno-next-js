import Image from "next/image";
import React from "react";
import "./whyChoose.css";

export default function WhyChoose() {
  return (
    <>
      <div className="whyChoose my-10 sm:py-14">
        <div className="container m-auto">
          <h1 className="text-center heading pb-3 ">
            Why Choose Nexgeno For Web Application Development Services?
          </h1>
          <p className="text-center pb-5 desc">
            Choosing the right custom web application development company to
            partner with is critical to the success of your business. With so
            many options available, it can be difficult to know which company to
            trust with your web application development needs.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 place-items-center gap-8 py-10 mx-auto sm:px-10 px-5">
            <div className="text-center">
              <div className="iconContainer w-32 h-32 rounded-full mx-auto leading grid place-items-center">
                <Image
                  src="/images/experience.png"
                  alt="experience"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="py-4 text-[18px] font-semibold text-gray-800 ">
                Expertise and Experience
              </h1>
              <p className="desc line-clamp-2">
                With over 11 years of experience in web application development,
                our team of skilled developers has the expertise to deliver
                cutting-edge web solutions to businesses of all sizes and
                industries. We use the latest technologies and best practices to
                ensure that our solutions are innovative, intuitive, and secure.
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
              <h1 className="py-4 text-[18px] font-semibold text-gray-800 ">
                Customized Solutions
              </h1>
              <p className="desc line-clamp-2">
                At Nexgeno, we understand that every business has unique needs.
                That&apos;s why we take the time to understand your business and
                develop customized web solutions that are tailored to your
                specific requirements. Our agile development methodology ensures
                that we can quickly iterate on our solutions to ensure that they
                meet your needs and exceed your expectations.
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
              <h1 className="py-4 text-[18px] font-semibold text-gray-800 ">
                Quality and Attention to Detail
              </h1>
              <p className="desc line-clamp-2">
                We believe that quality should never be compromised. That&apos;s
                why we pay meticulous attention to detail throughout the web
                application development process to ensure that our solutions are
                of the highest quality. We follow industry-standard security
                protocols to ensure that your web application is always
                protected against cyber threats.
              </p>
            </div>
          </div>
          <div className="flex justify-center md:flex-row flex-col items-center sm:gap-0 gap-4 sm:px-28 ">
            <div className="text-center flex-[33%]  px-8">
              <div className="iconContainer w-32 h-32 rounded-full mx-auto leading grid place-items-center">
                <Image
                  src="/images/communication.png"
                  alt="experience"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="py-4 text-[18px] font-semibold text-gray-800 ">
                Communication and Collaboration
              </h1>
              <p className="desc line-clamp-2">
                We believe that communication and collaboration are key to the
                success of any project. That&apos;s why we work closely with our
                clients to ensure that we are always on the same page. We
                provide regular updates and feedback throughout the development
                process to ensure that our solutions meet your needs.
              </p>
            </div>
            <div className="text-center flex-[33%]  px-8">
              <div className="iconContainer w-32 h-32 rounded-full mx-auto leading grid place-items-center">
                <Image
                  src="/images/satisfaction.png"
                  alt="experience"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="py-4 text-[18px] font-semibold text-gray-800 ">
                Customer Satisfaction
              </h1>
              <p className="desc line-clamp-2">
                At Nexgeno, we are committed to our client&apos;s success. We
                believe that our success is tied to yours, which is why we
                always go above and beyond to ensure that our clients are
                satisfied with our services. We take pride in our work and are
                dedicated to providing exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
