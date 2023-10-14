import Link from "next/link";
import React from "react";

const CallToAction = ({ title, buttonTitle, desc }) => {
  return (
    <>
      <section className=" mb-20">
        <div className="container mx-auto">
          <div className="py-16 border border-pink-500 bg-[#fffbfd]  rounded-lg flex flex-col gap-5 items-center justify-center">
            <h2 className="heading text-center">{title}</h2>
            <p className="text-center text-lg">{desc}</p>
            <Link href="/contact" className="btn">
              {buttonTitle}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
