"use client";
import "@/components/Faq/faq.css";
import { faq } from "@/utils/data";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
const Faq2 = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  return (
    <>
      <div className="md:my-20 my-10">
        <div className="container m-auto md:py-10 sm:pt-10 md:pt-0">
          <h1 className="text-center text-blue-950 md:text-3xl text-xl font-bold">
            Frequently Asked Questions
          </h1>
          <div className="grid place-items-center mt-10">
            <div className="max-w-6xl">
              {faq.map((data, index) => {
                return (
                  <AccordionItem
                    key={index}
                    open={index === open}
                    title={data.question}
                    desc={data.answer}
                    toggle={() => toggle(index)}
                  />
                );
              })}
            </div>

            {/* <ul className="accordion w-full">
              {faq.map((item) => (
                <li key={item.id} className="w-full p-3 mb-3">
                  <input type="radio" name="accordion" id={item.id} />
                  <label htmlFor={item.id}> {item.question} </label>
                  <div className="content">
                    <p>{item.answer}</p>
                  </div>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq2;
