"use client";
import "./inquiry.css";
import { inquiry } from "@/utils/data";
import Client from "@/components/client/Client";
import Testimonial from "@/components/Testimonial/Testimonial";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Nexgeno | Inquiry",
  description: "Nexgeno Technology Private Limited Company Inquiry",
};

export default function InquiryPage() {
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    services: "",
    projectBudget: "",
    message: "",
    subject: "Inquiry From Nexgeno",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Thanks For Send Message");
        setData({
          name: "",
          email: "",
          number: "",
          services: "",
          projectBudget: "",
          message: "",
        });

        router.push("/thankyou");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="inquiry ">
        <div className="container py-10 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 sm:px-10 py-5   gap-4">
            <div className="text-[#444]">
              <h1 className="text-center text-4xl font-medium py-5">
                Get in touch
              </h1>
              <p className="sm:pr-10 py-5 sm:text-2xl text-lg">
                Please fill in the form and our <br /> representative will get
                back to you.
              </p>
              {inquiry.map((item) => (
                <div key={item.id} className="data_inquiry py-2 sm:py-5">
                  <h1 className="text-xl sm:text-3xl py-3 font-medium">
                    {item.title}
                  </h1>
                  <p className="sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="lg:flex lg:justify-center md:pl-10 w-full mt-10 lg:mt-0">
              <form
                onSubmit={handleSubmit}
                className=" bg-white flex rounded-lg sm:p-10 w-full p-4 shadow-2xl flex-col  sm:gap-8 gap-4"
              >
                <input
                  className="py-2 border-b border-gray-300 outline-none text-[15px]"
                  type="text"
                  placeholder="Your Name*"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="py-2 border-b border-gray-300 outline-none text-[15px]"
                  type="email"
                  placeholder="Your Email*"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="py-2 border-b border-gray-300 outline-none text-[15px]"
                  type="number"
                  placeholder="Your Mobile*"
                  name="number"
                  value={data.number}
                  onChange={handleChange}
                  required
                />

                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="country"
                    className="text-gray-500 text-[15px]"
                  >
                    Interested Service
                  </label>
                  <div className="w-full">
                    <select
                      id="country"
                      name="services"
                      value={data.services}
                      onChange={handleChange}
                      required
                      autoComplete="country-name"
                      className="w-full border-b border-gray-300 p-2 outline-none text-[15px]"
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
                  <label
                    htmlFor="country"
                    className="text-gray-500 text-[15px]"
                  >
                    Project Budget
                  </label>
                  <div className="w-full">
                    <select
                      id="country"
                      name="projectBudget"
                      value={data.projectBudget}
                      onChange={handleChange}
                      required
                      autoComplete="country-name"
                      className="w-full  outline-none border-b border-gray-300 p-2 text-[15px]"
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
                  className="outline-none border-b border-gray-300 p-2 text-[15px]"
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                ></textarea>
                <div className="grid place-items-center">
                  <button
                    type="submit"
                    className="button no-underline relative border-none text-lg font-medium text-white py-2 px-6 rounded-md "
                  >
                    {submitting ? `Sending...` : "Send Message"}
                  </button>
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
