"use client";
import Link from "next/link";
import { useState } from "react";
import "@/components/ContactPage/ContactPage.css";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  BsFillEnvelopeFill,
  BsFillMapFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMobile,
} from "react-icons/ai";

export default function Contact() {
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    companyName: "",
    message: "",
    subject: "Contact From Nexgeno",
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
    setIsSubmitting(true);

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
          companyName: "",
          message: "",
        });
        router.push("/thankyou");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* <div className="contact sm:py-14 py-10 md:mt-36 mt-0">
        <div className="container m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="content text-white flex flex-col gap-10 md:pr-16 pr-5">
              <div className="flex content_row items-start gap-5">
                <div className="iconContact">
                  <BsFillMapFill className="text-3xl mt-2" />
                </div>
                <div className="content_container">
                  <h1 className="sm:text-2xl text-xl font-semibold">
                    Location:
                  </h1>
                  <p className="py-3 sm:text-base  text-sm">
                    Unit No. F-50, First Floor kohinoor City Mall Opp Holly
                    Cross School, Kurla (West) Mumbai, Maharashtra - 400070.
                  </p>
                </div>
              </div>
              <div className="flex content_row items-start gap-5">
                <div className="iconContact">
                  <BsFillEnvelopeFill className="text-3xl mt-2" />
                </div>
                <div className="content_container">
                  <h1 className="sm:text-2xl text-xl font-semibold">Email:</h1>
                  <Link className="py-3 sm:text-base  text-sm" href="#">
                    sales@nexgeno.in
                  </Link>
                </div>
              </div>
              <div className="flex  items-start gap-5">
                <div className="iconContact">
                  <BsFillTelephoneFill className="text-3xl mt-2" />
                </div>
                <div className="content_container">
                  <h1 className="sm:text-2xl text-xl font-semibold">Call:</h1>
                  <p className="py-3 sm:text-base  text-sm">
                    <Link href="#">+91 90044 66166</Link> /{" "}
                    <Link href="#"> +91 9773375525</Link>
                  </p>
                  <div className="flex items-center gap-2">
                    <Link
                      href="https://in.linkedin.com/company/nexgenotechnologypvtltd"
                      target="_blank"
                    >
                      <AiFillLinkedin className="text-4xl hover:scale-125 transition duration-300 ease-in-out" />
                    </Link>
                    <Link
                      href="https://instagram.com/nexgenotechnology?igshid=MzRlODBiNWFlZA=="
                      target="_blank"
                    >
                      <AiFillInstagram className="text-4xl hover:scale-125 transition duration-300 ease-in-out" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/nexgenotechnology"
                      target="_blank"
                    >
                      <AiFillFacebook className="text-4xl hover:scale-125  transition duration-300 ease-in-out" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="formContainer xl:pl-20 lg:pl-15 ">
              <form
                className="bg-white flex flex-col gap-10 py-8 w-full lg:px-12 px-6 rounded-xl"
                onSubmit={handleSubmit}
              >
                <h1 className="text-center heading">Get in Touch</h1>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="text-[14px]"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  className="text-[14px]"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  placeholder="Mobile No *"
                  className="text-[14px]"
                  name="number"
                  value={data.number}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name*"
                  className="text-[14px]"
                  name="companyName"
                  value={data.companyName}
                  onChange={handleChange}
                  required
                />
                <textarea
                  rows="3"
                  placeholder="Message*"
                  className="text-[14px]"
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                ></textarea>

                <div className="grid place-items-center pt-5">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="button no-underline relative border-none text-lg font-medium text-white py-2 px-6 rounded-md"
                  >
                    {submitting ? `Sending...` : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="contact sm:py-10 py-8">
        <div className="container m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="col-span-3 lg:pr-10 text-white">
              <h1 className="md:text-[60px] md:leading-[85px] sm:text-5xl text-3xl mt-10 leading-snug font-bold">
                Together, Let&apos;s Make A Difference.
              </h1>
              <div className="flex items-start gap-3 bg-black rounded-md p-5 my-5">
                <div className="iconBox">
                  <AiFillMobile className="text-3xl" />
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
                className="bg-white rounded-md shadow-lg w-full sm:my-10 my-5 py-12 px-12  flex flex-col gap-4 sm:gap-10 lg:absolute "
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
                  {submitting ? "Sending..." : "Send Message"}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
