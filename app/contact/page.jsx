import React from "react";
import "./contact.css";
import Link from "next/link";
import Button from "@/components/Button/Button";

export default function page() {
  return (
    <>
      <div className="contact my-16">
        <div className="container m-auto">
          <div className="grid grid-cols-3 gap-0">
            <div className="col-span-2 p-10 text-white">
              <h1 className="text-6xl mt-10 leading-snug font-bold">
                Together, Let&apos;s Make A Difference.
              </h1>
              <div className="flex items-start gap-5 bg-black rounded-md p-10 my-5">
                <div className="iconBox">
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-2xl font-semibold">
                    Speak with a strategist:
                  </p>
                  <Link className="text-3xl font-bold" href="#">
                    +91 90044 66166 / +91 9773375525
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative">
              <form className="bg-white rounded-md shadow-lg w-full mt-10 p-10 flex flex-col gap-10 absolute ">
                <div class="form_field flex flex-col gap-2">
                  <label
                    for="name"
                    className="inline-block text-lg font-semibold mb-0"
                  >
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input type="text" name="name" id="name" required="" />
                </div>
                <div class="form_field flex flex-col gap-2">
                  <label
                    className="inline-block text-lg font-semibold mb-0"
                    for="email"
                  >
                    Your Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="email"
                    required=""
                  />
                </div>
                <div class="form_field flex flex-col gap-2">
                  <label
                    className="inline-block text-lg font-semibold mb-0"
                    for="mobile"
                  >
                    Mobile No <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="mobile"
                    required=""
                  />
                </div>
                <div class="form_field flex flex-col gap-2">
                  <label
                    className="inline-block text-lg font-semibold mb-0"
                    for="company"
                  >
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    required=""
                  />
                </div>
                <div class="form_field flex flex-col gap-2">
                  <label
                    className="inline-block text-lg font-semibold mb-0"
                    for="message"
                  >
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea name="" id="message" rows="4"></textarea>
                </div>
                <button className="button no-underline relative border-none text-lg font-medium text-white py-2 px-6 rounded-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="location pr-5">
        <div className="container m-auto">
          <div className="grid grid-cols-3 gap-0">
            <div className="col-span-2">
              <div className="location_box rounded-md mb-4 overflow-hidden p-10 flex flex-col gap-5 leading-9 text-xl">
                <h1 className="text-4xl font-bold">Registered Office </h1>
                <p>
                  <b>Address:</b> Shop no 2, Mohd Hussain Compound, Near
                  Maharashtra Weight Bridge, L.B.S. Marg, Kurla(W), Mumbai –
                  400070.
                </p>
                <p>
                  <b>Mobile No:</b> +91 90290 75525
                </p>
                <p>
                  <b>Email:</b> info@nexgeno.in{" "}
                </p>
              </div>
              <div className="location_box rounded-md mb-4 overflow-hidden p-10 flex flex-col gap-5 leading-9 text-xl">
                <h1 className="text-4xl font-bold">Development office</h1>
                <p>
                  <b>Address:</b> Unit No. F-50, First Floor kohinoor City Mall
                  Opp Holly Cross School, Kurla (West) Mumbai, Maharashtra -
                  400070.
                </p>
                <p>
                  <b>Mobile No:</b> +91 90044 66166
                </p>
                <p>
                  <b>Email:</b> sales@nexgeno.in
                </p>
              </div>
              <div className="location_box rounded-md mb-4 overflow-hidden p-10 flex flex-col gap-5 leading-9 text-xl">
                <h1 className="text-4xl font-bold">UK</h1>
                <p>
                  <b>Address:</b> Goodmayes Road, Ilford,Essex.
                </p>
                <p>
                  <b>Mobile No:</b> +44 2036371107
                </p>
                <p>
                  <b>Email:</b> uk@nexgeno.in
                </p>
              </div>
              <div className="location_box rounded-md mb-4 overflow-hidden p-10 flex flex-col gap-5 leading-9 text-xl">
                <h1 className="text-4xl font-bold">South Africa</h1>
                <p>
                  <b>Address:</b> Archary Road Clairwood Durban Kwazulu Natal,
                  South Africa.
                </p>
                <p>
                  <b>Mobile No:</b> +27 031 465 4604
                </p>
                <p>
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
