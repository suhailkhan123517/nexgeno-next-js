import React from "react";
import "./faq.css";

export default function Faq({ faq1, ans1, faq2, ans2 }) {
  return (
    <>
      <div className="container m-auto py-10">
        <h1 className="text-center text-blue-950 text-3xl font-bold">
          Frequently Asked Questions
        </h1>
        <div className="grid place-items-center py-10">
          <ul className="accordion w-9/12">
            <li className="w-full p-3 mb-3">
              <input type="radio" name="accordion" id="1" />
              <label htmlFor="1">{faq1}</label>
              <div className="content">
                <p>{ans1}</p>
              </div>
            </li>
            <li className="w-full p-3 mb-3">
              <input type="radio" name="accordion" id="2" />
              <label htmlFor="2">{faq2}</label>
              <div className="content">
                <p>{ans2}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
