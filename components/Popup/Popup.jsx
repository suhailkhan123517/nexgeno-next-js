"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { GrFormClose } from "react-icons/gr";

const Popup = ({ setIsOpen, isOpen }) => {
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          onClose={setIsOpen}
          className="fixed inset-0 overflow-y-auto p-4 mt-10 z-50"
        >
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
          </Transition.Child>
          <Transition.Child
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative mx-auto max-w-xl py-10 rounded-xl bg-white shadow-2xl ring-1 ring-black/5">
              <GrFormClose
                className="text-4xl absolute top-2 right-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
              <p className="pb-5 text-center text-2xl font-semibold  text-pink-600">
                Get Quick Quote
              </p>

              <form className="flex items-center flex-col gap-5  max-w-md  mx-auto py-5 border border-pink-600 rounded-xl p-5">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="border-b w-full py-2 px-3 text-lg outline-none focus:border-pink-600"
                />
                <input
                  type="text"
                  placeholder="Your Email *"
                  className="border-b w-full py-2 px-3 text-lg outline-none focus:border-pink-600"
                />
                <input
                  type="text"
                  placeholder="Your Mobile No. *"
                  className="border-b w-full py-2 px-3 text-lg outline-none focus:border-pink-600"
                />
                <div className="flex flex-col gap-2 w-full ">
                  <label htmlFor="service">Interested Service</label>
                  <select
                    id="service"
                    className="border-b w-full py-2 px-3 text-lg outline-none focus:border-pink-600"
                  >
                    <option value="">Select Service</option>
                    <option value="">Website Design & Web Development</option>
                    <option value="">Product Prototyping</option>
                    <option value="">E-Commerce Website</option>
                    <option value="">Mobile App Development</option>
                    <option value="">UX / UI Design</option>
                    <option value="">Speed Optimization</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 w-full ">
                  <label htmlFor="budget">Project Budget</label>
                  <select
                    className="border-b w-full py-2 px-3 text-lg outline-none focus:border-pink-600"
                    id="budget"
                  >
                    <option value="Below 10k">Below 10k</option>
                    <option value="$10k - $25K">$10k - $25K</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k - $200k">$100k - $200k</option>
                    <option selected value="$200k - $500k">
                      $200k - $500k
                    </option>
                    <option value="$500k Above">$500k Above</option>
                  </select>
                </div>
                <textarea
                  className="border-b w-full py-2 px-3 text-lg outline-none focus:border-pink-600"
                  name=" "
                  rows="4"
                  placeholder="Message"
                ></textarea>
                <button className="btn">Send Message</button>
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Popup;
