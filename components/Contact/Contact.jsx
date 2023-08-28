"use client";
import Link from "next/link";
import "./contact.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);

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
      <div className="contact sm:py-14 py-10 md:mt-36 mt-0">
        <div className="container m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <div className="content text-white flex flex-col gap-10 md:pr-16 pr-5">
              <div className="flex content_row items-start gap-5">
                <div className="iconContact">
                  <i className="fa fa-map mt-2" aria-hidden="true"></i>
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
                  <i className="fa fa-envelope mt-2" aria-hidden="true"></i>
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
                  <i className="fa fa-phone mt-2" aria-hidden="true"></i>
                </div>
                <div className="content_container">
                  <h1 className="sm:text-2xl text-xl font-semibold">Call:</h1>
                  <p className="py-3 sm:text-base  text-sm">
                    <Link href="#">+91 90044 66166</Link> /{" "}
                    <Link href="#"> +91 9773375525</Link>
                  </p>
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
      </div>
    </>
  );
}
