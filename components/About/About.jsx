import Image from "next/image";
import Button from "../Button/Button";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="container m-auto text-[#444] sm:py-14  py-10 hero_bg">
        <div className="grid lg:grid-cols-2 lg:gap-0 grid-cols-1 gap-5">
          <div className="relative w-full  xl:h-[370px] lg:h-[305px] md:h-[475px] h-[220px] pr-6">
            <Image
              src="/images/about.jpeg"
              fill
              priority
              alt="Nexgeno Image"
              className="object-contain"
            />
          </div>
          <div>
            <p className="redHeading mb-[15px]">WE ARE NEXGENO TECHNOLOGY</p>
            <h1 className="heading mb-[20px]">
              Offshore Software Development & IT Consulting Company
            </h1>
            <p className="desc mb-[1rem]">
              At Nexgeno Technology Pvt Ltd, we are dedicated to providing
              professional web designing and development services to businesses
              of all sizes. Founded in 2022, our company has quickly established
              itself as a leading provider of web solutions.
            </p>
            <p className="desc mb-[1rem]">
              NexGeno Technology: Empowering Innovation, Building Solutions.
              Transform your business with our web and mobile application
              development, digital transformation, and cloud solutions, all
              backed by our 11 years of experience in the industry. Our
              innovative ideas and consulting expertise, combined with our
              commitment to empowering developers, make us the partner you need
              to succeed
            </p>
            <div className="w-full flex">
              <Button url="/about" title="Read More" button="button" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
