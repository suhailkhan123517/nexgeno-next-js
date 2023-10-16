"use client";

import { Link } from "react-scroll";

const WhoWeAre = ({
  title,
  desc,
  shortDesc1,
  shortDesc2,
  shortDesc3,
  shortDesc4,
}) => {
  return (
    <>
      <section className="mb-24">
        <div className="container mx-auto py-10 lg:px-14 sm:px-5 px-3">
          <div className="border border-gray-200 hover:border-pink-500 sm:py-8  py-3 lg:px-20 sm:px-10 px-4 rounded-3xl hover:border-gradient-to-r from-pink-500 to-purple-600">
            <p className="text-pink-600 text-lg font-medium">Who We Are</p>

            <h1 className="heading py-4 "> {title} </h1>

            <p className="desc my-5">{desc}</p>
            <p className="desc my-5">{shortDesc1}</p>
            <p className="desc my-5">{shortDesc2}</p>
            <p className="desc my-5">{shortDesc3}</p>
            <p className="desc my-5">{shortDesc4}</p>
            <div className="flex sm:flex-row flex-col my-5 pt-5 sm:gap-9 gap-3">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn cursor-pointer"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
