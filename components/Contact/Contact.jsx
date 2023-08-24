import Link from "next/link";
import Button from "../Button/Button";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact py-12  md:mt-36 mt-0">
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
              <form className="bg-white flex flex-col gap-10 py-8 w-full lg:px-12 px-6 rounded-xl">
                <h1 className="text-center lg:text-4xl text-2xl font-semibold text-blue-950">
                  Get in Touch
                </h1>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="text-[14px]"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="text-[14px]"
                />
                <input
                  type="number"
                  placeholder="Mobile No *"
                  className="text-[14px]"
                />
                <input
                  type="text"
                  placeholder="Company Name*"
                  className="text-[14px]"
                />
                <textarea
                  rows="3"
                  placeholder="Message*"
                  className="text-[14px]"
                ></textarea>

                <div className="grid place-items-center pt-5">
                  <Button url="#" title="Send Message" button="button" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
