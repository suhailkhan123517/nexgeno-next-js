import { recentWork } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const RecentWork = () => {
  return (
    <>
      <section className="mb-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="heading">Our Recent Work</h2>
            {/* <Link
              href="/portfolio"
              className="outline_btn flex items-center gap-2"
            >
              See All
              <BsArrowRightShort className="text-xl" />
            </Link> */}
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {recentWork.map((item) => (
              <>
                <div
                  key={item.id}
                  style={{
                    background: `url(${item.img})`,
                    backgroundSize: "cover",
                  }}
                  className="h-52 md:h-96 rounded-xl shadow-lg"
                ></div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentWork;
