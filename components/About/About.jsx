import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="container m-auto pb-10 leading-relaxed">
        <div className="grid grid-cols-2">
          <div className="aboutImg">
            <Image src="/images/about.jpeg" fill={true} alt="Nexgeno Image" />
          </div>

          <div>
            <p className="text-pink-600">WE ARE NEXGENO TECHNOLOGY</p>
            <h1 className="font-semibold leading-10 text-3xl py-5 text-blue-950">
              Offshore Software Development & IT Consulting Company
            </h1>
            <p className=" text-gray-700 leading-8">
              At Nexgeno Technology Pvt Ltd, we are dedicated to providing
              professional web designing and development services to businesses
              of all sizes. Founded in 2022, our company has quickly established
              itself as a leading provider of web solutions.
            </p>
            <p className="py-6 text-gray-700 leading-8">
              NexGeno Technology: Empowering Innovation, Building Solutions.
              Transform your business with our web and mobile application
              development, digital transformation, and cloud solutions, all
              backed by our 11 years of experience in the industry. Our
              innovative ideas and consulting expertise, combined with our
              commitment to empowering developers, make us the partner you need
              to succeed
            </p>
            <Button url="/about" title="Read More" button="button" />
          </div>
        </div>
      </div>
    </>
  );
}
