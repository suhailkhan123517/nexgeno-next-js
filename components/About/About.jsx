import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

export default function About() {
  return (
    <>
      <div className="container m-auto pb-10 leading-relaxed">
        <div className="grid grid-cols-2">
          <Image
            src="/images/about.jpeg"
            width={600}
            height={600}
            alt="Nexgeno Image"
          />
          <div>
            <p className="text-red-600">WE ARE NEXGENO TECHNOLOGY</p>
            <h1 className="font-medium text-3xl py-5 text-blue-950">
              Offshore Software Development & IT Consulting Company
            </h1>
            <p className=" text-gray-700">
              At Nexgeno Technology Pvt Ltd, we are dedicated to providing
              professional web designing and development services to businesses
              of all sizes. Founded in 2022, our company has quickly established
              itself as a leading provider of web solutions.
            </p>
            <p className="py-6 text-gray-700">
              NexGeno Technology: Empowering Innovation, Building Solutions.
              Transform your business with our web and mobile application
              development, digital transformation, and cloud solutions, all
              backed by our 11 years of experience in the industry. Our
              innovative ideas and consulting expertise, combined with our
              commitment to empowering developers, make us the partner you need
              to succeed
            </p>
            <Button url="#" title="Read More" button="button" />
          </div>
        </div>
      </div>
    </>
  );
}
