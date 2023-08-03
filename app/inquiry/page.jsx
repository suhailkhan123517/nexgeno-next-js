import React from "react";
import "./inquiry.css";
import { inquiry } from "@/utils/data";
import Button from "@/components/Button/Button";
import Client from "@/components/client/Client";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Inquiry() {
  return (
    <>
      <div className="inquiry my-16">
        <div className="container py-10 mx-auto">
          <div className="grid grid-cols-2 px-10 py-5   gap-4">
            <div>
              <h1 className="text-center text-4xl font-medium py-5">
                Get in touch
              </h1>
              <p className="pr-10 py-5 text-xl">
                Please fill in the form and our <br /> representative will get
                back to you.
              </p>
              {inquiry.map((item) => (
                <div key={item.id} className="data_inquiry py-5">
                  <h1 className="text-3xl py-3 font-semibold">{item.title}</h1>
                  <p className="text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full">
              <form className="flex rounded-lg p-10 shadow-2xl flex-col w-9/12 gap-8">
                <input
                  className="py-2 border-b-2 border-gray-300 outline-none"
                  type="text"
                  placeholder="Your Name*"
                />
                <input
                  className="py-2 border-b-2 border-gray-300 outline-none"
                  type="text"
                  placeholder="Your Email*"
                />
                <input
                  className="py-2 border-b-2 border-gray-300 outline-none"
                  type="text"
                  placeholder="Your Mobile*"
                />

                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="country" className="text-gray-500">
                    Interested Service
                  </label>
                  <div className="w-full">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="w-full border-b-2 border-gray-300 p-2 outline-none"
                    >
                      <option>Select Services</option>
                      <option>Custom Web Application development</option>
                      <option>Website Design & Development</option>
                      <option>Product Prototyping</option>
                      <option>Ecommerce Website</option>
                      <option>Mobile App Development</option>
                      <option>UI/UX Design & Development </option>
                      <option>Resources Requirement</option>
                      <option>Speed Optimization</option>
                      <option>Landing Page Design</option>
                      <option>Gsuit / Email Solution</option>
                      <option>SEO / SMO Digital Marketing</option>
                      <option>Design / Branding / Graphics</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="country" className="text-gray-500">
                    Project Budget
                  </label>
                  <div className="w-full">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="w-full  outline-none border-b-2 border-gray-300 p-2 "
                    >
                      <option>$200k - $500k</option>
                      <option>$500k Above</option>
                      <option>$100k - $200k</option>
                      <option>$50k - $100k</option>
                      <option>$25k - $50k</option>
                      <option>$10k - $25K</option>
                      <option>Below 10k</option>
                    </select>
                  </div>
                </div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="outline-none border-b-2 border-gray-300 p-2"
                ></textarea>
                <div className="grid place-items-center">
                  <Button url="#" title="Send Message" button="button" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Client />
      <Testimonial />
    </>
  );
}
