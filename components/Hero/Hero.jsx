"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-scroll";
import { useRouter } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";

export default function Hero() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Nexgeno Enquire Now Form");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !number || !email) {
      toast.error("All field required");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, number, email, subject }),
      });

      if (res.ok) {
        toast.success("Thanks For Send Message");
        router.refresh();
        router.push("/thankyou");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="hero_section xl:py-20 py-5  mb-16 h-full">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 grid-cols-1 ">
            <div className="col-span-3">
              <h1 className="hero_heading mb-2">Innovative web solutions</h1>
              <h1 className="black_heading lg:mt-0 md:mt-5 mt-3">
                for modern businesses
              </h1>
              <p className="md:text-2xl font-medium  mt-2 md:mt-5">
                Connecting businesses to the digital world
              </p>
              <p className="md:mt-5 mt-2 md:pr-28">
                Are you ready to transform your online presence and captivate
                your audience with stunning, user-friendly websites? At Nexgeno
                Technology, we are your digital partners dedicated to delivering
                innovative and customized website design solutions that can
                elevate your business to new heights.
              </p>

              <div className="flex flex-row gap-5 md:mt-10 mt-5">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="btn cursor-pointer"
                >
                  Contact
                </Link>
                <a href="tel:9760989370" className="outline_btn">
                  Call Us Now
                </a>
              </div>
            </div>
            <div className="col-span-2 xl:px-10">
              <form
                onSubmit={handleSubmit}
                className="shadow-2xl flex flex-col xl:px-14 md:px-10 px-5 xl:py-20 md:py-14 py-8 gap-7 rounded-lg  bg-white lg:mt-0 mt-10"
              >
                <p className="md:text-3xl text-2xl font-semibold leading-tight">
                  {" "}
                  Get a Free Enquire Now
                </p>
                <input
                  type="text"
                  className="border-b py-2 px-3 focus:border-b-blue-600    text-base outline-none"
                  placeholder="Contact Person Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  className="border-b py-2 px-3  focus:border-b-blue-600  text-base outline-none"
                  placeholder="Mobile / Phone No"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  type="text"
                  className="border-b py-2 px-3  focus:border-b-blue-600  text-base outline-none"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn flex items-center justify-center"
                >
                  {loading ? <ImSpinner9 className="animate-spin" /> : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
