"use client";
import React from "react";
import { Collapse } from "react-collapse";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <>
      <div className="border-b">
        <div
          className="py-5 md:px-10 px-5 flex justify-between items-center cursor-pointer "
          onClick={toggle}
        >
          <p className="text-xl font-semibold">{title}</p>
          <div>
            {open ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </>
            )}
          </div>
        </div>
        <Collapse isOpened={open}>
          <div className="px-12 pb-7">{desc}</div>
        </Collapse>
      </div>
    </>
  );
};

export default AccordionItem;
