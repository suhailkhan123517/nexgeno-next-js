import Image from "next/image";
import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="aboutUs">
        <Image
          src="/images/about_bg.jpg"
          alt="about background images Nexgeno"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="container m-auto my-16">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-blue-950 mb-5">
              About Agency
            </h1>
            <p className="pb-7 leading-7 text-gray-700">
              At Nexgeno Technology Pvt Ltd, we are dedicated to providing
              professional web designing and development services to businesses
              of all sizes. Founded in 2022, our company has quickly established
              itself as a leading provider of web solutions.
            </p>
            <p className="pb-7 leading-7 text-gray-700">
              Our team of experienced designers and developers are dedicated to
              creating visually appealing and user-friendly websites that are
              tailored to your specific needs and goals. We understand that
              every business is unique, and that why we take a personalized
              approach to every project.
            </p>
          </div>
          <div className="flex-1 ">
            <div className="aboutImage">
              <Image
                src="/images/about_us.jpg"
                alt="Nexgeno About Us Image"
                fill={true}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <p className="py-2 leading-7 text-gray-700">
            Our web designing services include website design and development,
            responsive design, e-commerce solutions, content management systems,
            search engine optimization, and website maintenance and support. We
            use the latest technologies and trends in web designing to create
            websites that are not only visually pleasing but also provide a
            great user experience.
          </p>
          <p className="py-2 leading-7 text-gray-700">
            In addition to web designing, we also specialize in web development
            services. Our developers are experts in creating custom web
            applications that are tailored to your business needs. We use the
            latest technologies and frameworks to ensure that your website is
            fast, secure, and easy to use.
          </p>
          <p className="py-2 leading-7 text-gray-700">
            We are committed to delivering your project on time and within
            budget. Our team will work closely with you to understand your
            specific needs and goals, and provide you with a timeline for the
            project. We offer flexible pricing options that can fit any budget.
          </p>
          <p className="py-2 leading-7 text-gray-700">
            At Nexgeno Technology Pvt Ltd, we are dedicated to providing the
            best service possible. We are committed to providing excellent
            customer service and support, and we are always available to answer
            any questions you may have.
          </p>
          <p className="py-2 leading-7 text-gray-700">
            If you are ready to take your business to the next level with a
            professional website, please do not hesitate to contact us. We would
            be more than happy to discuss your project and provide you with a
            free quote.
          </p>
        </div>
      </div>
    </>
  );
}
