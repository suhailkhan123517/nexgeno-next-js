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
      <section className="mt-5 mb-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 grid-cols-1">
            <div className="col-span-3 lg:mt-14">
              <h1 className="hero_heading">Innovative web solutions</h1>
              <h1 className="black_heading lg:mt-0 md:mt-5 mt-3">
                for modern businesses
              </h1>
              <p className="md:text-2xl font-medium md:mt-5 mt-3">
                Connecting businesses to the digital world
              </p>

              <div className="flex flex-row gap-5 md:mt-10 mt-5">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
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
            <div>
              <form
                onSubmit={handleSubmit}
                className="border-[1px] border-pink-600 flex flex-col px-6 py-10 gap-7 rounded-lg lg:mt-5 md:mt-16 mt-10"
              >
                <p className="text-xl font-semibold text-center">Enquire Now</p>
                <input
                  type="text"
                  className="border-[1px] py-2 px-3  rounded-md  text-sm outline-none"
                  placeholder="Contact Person Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  className="border border-gray-300 py-2 px-3  rounded-md  text-sm outline-none"
                  placeholder="Mobile / Phone No"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  type="text"
                  className="border border-gray-300 py-2 px-3  rounded-md  text-sm outline-none"
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
