import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact py-12 mt-28">
        <div className="container m-auto">
          <div className="grid grid-cols-2 gap-8">
            <div className="content text-white flex flex-col gap-10 px-16">
              <div className="flex content_row items-start gap-5">
                <div className="iconContact">
                  <i className="fa fa-map mt-2" aria-hidden="true"></i>
                </div>
                <div className="content_container">
                  <h1 className="text-2xl font-semibold">Location:</h1>
                  <p className="py-3">
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
                  <h1 className="text-2xl font-semibold">Email:</h1>
                  <Link className="py-3" href="#">
                    sales@nexgeno.in
                  </Link>
                </div>
              </div>
              <div className="flex  items-start gap-5">
                <div className="iconContact">
                  <i className="fa fa-phone mt-2" aria-hidden="true"></i>
                </div>
                <div className="content_container">
                  <h1 className="text-2xl font-semibold">Call:</h1>
                  <p className="py-3">
                    <Link href="#">+91 90044 66166</Link> /{" "}
                    <Link href="#"> +91 9773375525</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="formContainer">
              <form className="bg-white flex flex-col gap-10 py-8 w-9/12 px-12 rounded-xl">
                <h1 className="text-center text-4xl font-semibold text-blue-950">
                  Get in Touch
                </h1>
                <input type="text" placeholder="Your Name *" />
                <input type="email" placeholder="Your Email *" />
                <input type="number" placeholder="Mobile No *" />
                <input type="text" placeholder="Company Name*" />
                <textarea rows="3" placeholder="Message*"></textarea>

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
