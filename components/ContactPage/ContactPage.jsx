"use client";
import { useState } from "react";
import "./ContactPage.css";
import Link from "next/link";

export default function ContactPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="contact sm:py-14 py-8">
        <div className="container m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="col-span-3 lg:pr-10 text-white">
              <h1 className="md:text-[60px] md:leading-[85px] sm:text-5xl text-3xl mt-10 leading-snug font-bold">
                Together, Let&apos;s Make A Difference.
              </h1>
              <div className="flex items-start gap-5 bg-black rounded-md p-5 my-5">
                <div className="iconBox">
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                </div>
                <div className="flex flex-col sm:gap-5 gap-1">
                  <p className="text-xl sm:text-[19px] font-semibold">
                    Speak with a strategist:
                  </p>
                  <Link
                    className="text-sm leading-[42px] md:text-[32px] font-bold"
                    href="#"
                  >
                    +91 90044 66166 / +91 9773375525
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-md shadow-lg w-full sm:my-10 my-5 py-8 px-5  flex flex-col gap-4 sm:gap-10 lg:absolute "
              >
                <div className="form_field flex flex-col  sm:gap-2">
                  <label htmlFor="name" className="inline-block  mb-0">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                    className="py-2 text-[13px]"
                  />
                </div>
                <div className="form_field flex flex-col gap-2">
                  <label className="inline-block  mb-0" htmlFor="email">
                    Your Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="py-2 text-[13px]"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form_field flex flex-col gap-2">
                  <label className="inline-block  mb-0" htmlFor="mobile">
                    Mobile No <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="mobile"
                    required
                    className="py-2 text-[13px]"
                    value={data.number}
                    onChange={handleChange}
                  />
                </div>
                <div className="form_field flex flex-col gap-2">
                  <label className="inline-block  mb-0" htmlFor="company">
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="name"
                    required
                    className="py-2 text-[13px]"
                    value={data.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form_field flex flex-col gap-2">
                  <label className="inline-block  mb-0" htmlFor="message">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    id="message"
                    rows="4"
                  ></textarea>
                </div>
                <button className="button no-underline relative border-none text-lg font-medium text-white py-2 px-6 rounded-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="location sm:py-14 py-8 sm:pr-5">
        <div className="container m-auto">
          <div className="grid text-[#444] grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="col-span-3">
              <div className="location_box rounded-md mb-4 overflow-hidden sm:p-8 p-3 flex flex-col  gap-1">
                <h1 className="sm:text-[32px] text-[25px] font-extrabold">
                  Registered Office
                </h1>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Address:</b> Shop no 2, Mohd Hussain Compound, Near
                  Maharashtra Weight Bridge, L.B.S. Marg, Kurla(W), Mumbai –
                  400070.
                </p>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Mobile No:</b> +91 90290 75525
                </p>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Email:</b> info@nexgeno.in{" "}
                </p>
              </div>
              <div className="location_box rounded-md mb-4 overflow-hidden sm:p-8 p-3 flex flex-col  gap-1">
                <h1 className="sm:text-[32px] text-[25px] font-extrabold">
                  Development office
                </h1>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Address:</b> Unit No. F-50, First Floor kohinoor City Mall
                  Opp Holly Cross School, Kurla (West) Mumbai, Maharashtra -
                  400070.
                </p>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Mobile No:</b> +91 90044 66166
                </p>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Email:</b> sales@nexgeno.in
                </p>
              </div>
              <div className="location_box rounded-md mb-4 overflow-hidden sm:p-8 p-3 flex flex-col  gap-1">
                <h1 className="sm:text-[32px] text-[25px] font-extrabold">
                  UK
                </h1>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Address:</b> Goodmayes Road, Ilford,Essex.
                </p>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Mobile No:</b> +44 2036371107
                </p>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Email:</b> uk@nexgeno.in
                </p>
              </div>
              <div className="location_box rounded-md mb-4 overflow-hidden sm:p-8 p-3 flex flex-col  gap-1">
                <h1 className="sm:text-[32px] text-[25px] font-extrabold">
                  South Africa
                </h1>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Address:</b> Archary Road Clairwood Durban Kwazulu Natal,
                  South Africa.
                </p>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Mobile No:</b> +27 031 465 4604
                </p>
                <p className="sm:text-[18px] text-[15px] sm:leading-[32px] leading-[25px]">
                  <b>Email:</b> sa@nexgeno.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
