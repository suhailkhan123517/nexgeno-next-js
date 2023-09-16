"use client";
import { GiSandsOfTime } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { MdLock } from "react-icons/md";
import Button from "../Button/Button";
import { useState } from "react";

const boxes = [
  {
    id: 1,
    icon: "GiSandsOfTime",
    title: "Time and Materials",
  },
  {
    id: 2,
    icon: "SlCalender",
    title: "Monthly Hiring",
  },
  {
    id: 3,
    icon: "MdLock",
    title: "Fixed Cost",
  },
];

const Engage = () => {
  return (
    <>
      <section className="engage mt-14 py-14 bg-[#fffbfd]">
        <div className="container mx-auto">
          <h3 className="heading text-center"> How We Engage </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5 my-10 py-10 ">
            {boxes.map((item) => (
              <div
                key={item.id}
                className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-white    p-8   hover:shadow-xl"
              >
                {item.icon === "GiSandsOfTime" && (
                  <GiSandsOfTime className="text-6xl font-bold mb-4 text-[#050748]" />
                )}
                {item.icon === "SlCalender" && (
                  <SlCalender className="text-6xl font-bold mb-4 text-[#050748]" />
                )}
                {item.icon === "MdLock" && (
                  <MdLock className="text-6xl font-bold mb-4 text-[#050748]" />
                )}
                <h4 className="heading">
                  {item.title} <br /> Contract
                </h4>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button title="Enquire Now" url="/contact" button="button" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Engage;
