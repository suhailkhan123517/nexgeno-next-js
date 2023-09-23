import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight, BsArrowRightShort } from "react-icons/bs";
import { ourWorksLinks, servicesLinks, solutionsLinks } from "@/utils/data";

const Nav = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b " id="headers">
        <div className="container  mx-auto">
          <div className="flex items-center  justify-between">
            <div className="flex items-center gap-10">
              <Link href="/">
                <div className="relative w-[200px] h-[50px]">
                  <Image
                    src="/images/logo.webp"
                    alt="Nexgeno Logo"
                    fill={true}
                    className="object-contain"
                  />
                </div>
              </Link>
              <div>
                <ul className="flex items-center gap-2">
                  <li className="group/item cursor-pointer  py-3">
                    <span className="flex gap-2 items-center  border rounded-3xl py-1 px-3 border-transparent group-hover/item:border-gray-300">
                      Services
                      <BiChevronDown className="group-hover/item:rotate-180 transition duration-300" />
                    </span>
                    <div className="absolute bg-[#fffbfd] mt-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible hover:visible transition duration-500 w-full left-1/2 -translate-x-1/2 border py-8 ">
                      <div className="container mx-auto">
                        <a href="/services" className="">
                          <h1 className="group/edit text-2xl font-semibold border border-transparent hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl mb-3 hover:bg-white">
                            <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-6 after:h-6 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                              Nexgeno Services
                              <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                            </span>
                          </h1>
                        </a>

                        <div className="grid grid-cols-4">
                          {servicesLinks.map((item) => (
                            <div className="pr-5" key={item.title}>
                              <div className="border-b mb-2">
                                <Link href="/" className="">
                                  <h1 className="group/edit text-xl font-semibold border border-transparent mb-3 hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl  hover:bg-white ">
                                    <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-5 after:h-5 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                                      {item.title}
                                      <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                                    </span>
                                  </h1>
                                </Link>
                              </div>
                              {item.links.map((link) => (
                                <ul key={link.title}>
                                  <li>
                                    <a
                                      href={link.url}
                                      className="text-base leading-8 border group/link hover:border-gray-200 hover:bg-white hover:text-black  px-3 py-[2px] border-transparent hover:font-semibold rounded-lg flex items-center justify-between"
                                    >
                                      <span>{link.title}</span>
                                      <BsArrowRight className="group-hover/link:translate-x-2 relative transition duration-300 opacity-0 group-hover/link:opacity-100" />
                                    </a>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="group/item cursor-pointer  py-3">
                    <span className="flex gap-2 items-center  border rounded-3xl py-1 px-3 border-transparent group-hover/item:border-gray-300">
                      Solutions
                      <BiChevronDown className="group-hover/item:rotate-180 transition duration-300" />
                    </span>
                    <div className="absolute bg-[#fffbfd] mt-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible hover:visible transition duration-500 w-full left-1/2 -translate-x-1/2 border py-8">
                      <div className="container mx-auto">
                        <Link href="/" className="">
                          <h1 className="group/edit text-2xl font-semibold border border-transparent hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl mb-3 hover:bg-white">
                            <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-6 after:h-6 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                              Nexgeno Solutions
                              <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                            </span>
                          </h1>
                        </Link>

                        <div className="grid grid-cols-4">
                          {solutionsLinks.map((item) => (
                            <div className="pr-5" key={item.title}>
                              <div className="border-b mb-2">
                                <Link href="/" className="">
                                  <h1 className="group/edit text-xl font-semibold border border-transparent mb-3 hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl  hover:bg-white ">
                                    <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-5 after:h-5 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                                      {item.title}
                                      <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                                    </span>
                                  </h1>
                                </Link>
                              </div>
                              {item.links.map((link) => (
                                <ul key={link.title}>
                                  <li>
                                    <a
                                      href={link.url}
                                      className="text-base leading-10 border group/link hover:border-gray-200 hover:bg-white hover:text-black  px-3 py-[2px] border-transparent hover:font-semibold rounded-lg flex items-center justify-between"
                                    >
                                      <span>{link.title}</span>
                                      <BsArrowRight className="group-hover/link:translate-x-2 relative transition duration-300 opacity-0 group-hover/link:opacity-100" />
                                    </a>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="group/item cursor-pointer  py-3">
                    <span className="flex gap-2 items-center  border rounded-3xl py-1 px-3 border-transparent group-hover/item:border-gray-300">
                      Our Works
                      <BiChevronDown className="group-hover/item:rotate-180 transition duration-300" />
                    </span>
                    <div className="absolute bg-[#fffbfd] mt-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible hover:visible transition duration-500 w-full left-1/2 -translate-x-1/2 border py-8">
                      <div className="container mx-auto">
                        <Link href="/" className="">
                          <h1 className="group/edit text-2xl font-semibold border border-transparent hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl mb-3 hover:bg-white">
                            <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-6 after:h-6 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                              Nexgeno Works
                              <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                            </span>
                          </h1>
                        </Link>

                        <div className="grid grid-cols-3">
                          <div className="pr-5">
                            <div className="border-b mb-2">
                              <a href="/testimonial" className="">
                                <h1 className="group/edit text-xl font-semibold border border-transparent mb-3 hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl  hover:bg-white ">
                                  <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-5 after:h-5 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                                    Testimonial
                                    <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                                  </span>
                                </h1>
                              </a>
                            </div>
                            <ul>
                              <li className="text-lg border group/link hover:border-gray-200 hover:bg-white hover:text-black  p-3 border-transparent hover:font-semibold rounded-lg flex items-center justify-between">
                                <a className="" href="/testimonial">
                                  <div className="relative w-[50px] h-[50px]">
                                    <Image
                                      src="/images/quote.webp"
                                      fill
                                      sizes="(min-width: 768px) 5vw"
                                      className="object-contain"
                                      alt="Nexgeno Testimonial "
                                    />
                                  </div>

                                  <p className="leading-normal pt-3 pr-5">
                                    It has been great working with Nexgeno over
                                    the years on our website and online
                                    marketing
                                  </p>
                                  <h3 className="text-xl font-bold pt-3">
                                    Anil Garg
                                  </h3>
                                </a>
                              </li>
                              <a href="/" className="">
                                <h1 className="group/edit mt-5 bg-gray-200 text-xl font-semibold border border-transparent hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl mb-3 hover:bg-white">
                                  <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-6 after:h-6 after:rounded-full after:absolute after:top-[2px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                                    View More
                                    <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                                  </span>
                                </h1>
                              </a>
                            </ul>
                          </div>
                          <div className="pr-5">
                            <div className="border-b mb-2">
                              <a href="/case-study" className="">
                                <h1 className="group/edit text-xl font-semibold border border-transparent mb-3 hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl  hover:bg-white ">
                                  <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-5 after:h-5 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                                    CaseStudy
                                    <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                                  </span>
                                </h1>
                              </a>
                            </div>
                            <ul>
                              <li className="hover:bg-white rounded-lg hover:shadow-lg">
                                <a href="/case-study">
                                  <div className="relative hover:scale-95 transition duration-300 ease-in-out h-[260px] w-[100%]">
                                    <Image
                                      src="/images/navcase.webp"
                                      fill={true}
                                      alt="Nexgeno CaseStudy"
                                      className="object-contain"
                                    />
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="pr-5">
                            <div className="border-b mb-2">
                              <a href="/portfolio" className="">
                                <h1 className="group/edit text-xl font-semibold border border-transparent mb-3 hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl  hover:bg-white ">
                                  <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-5 after:h-5 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                                    Portfolio
                                    <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                                  </span>
                                </h1>
                              </a>
                            </div>
                            <ul>
                              <li className="hover:bg-white rounded-lg hover:shadow-lg">
                                <a href="/portfolio">
                                  <div className="relative hover:scale-95 transition duration-300 ease-in-out h-[260px] w-[100%]">
                                    <Image
                                      src="/images/portfolio.webp"
                                      fill={true}
                                      alt="Nexgeno CaseStudy"
                                      className="object-contain"
                                    />
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="group/item cursor-pointer  py-3">
                    <span className="flex gap-2 items-center  border rounded-3xl py-1 px-3 border-transparent group-hover/item:border-gray-300">
                      Company
                      <BiChevronDown className="group-hover/item:rotate-180 transition duration-300" />
                    </span>
                    <div className="absolute bg-[#fffbfd] mt-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible hover:visible transition duration-500 w-full left-1/2 -translate-x-1/2 border py-8">
                      <div className="container mx-auto">
                        <a href="/" className="">
                          <h1 className="group/edit text-2xl font-semibold border border-transparent hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl mb-3 hover:bg-white">
                            <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-6 after:h-6 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                              Nexgeno Company
                              <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                            </span>
                          </h1>
                        </a>

                        <div className="grid grid-cols-4">
                          <div className="pr-5">
                            <div className="border-b mb-2">
                              <a href="/testimonial" className="">
                                <h1 className="group/edit text-xl font-semibold border border-transparent mb-3 hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl  hover:bg-white ">
                                  <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-5 after:h-5 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                                    Overview
                                    <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                                  </span>
                                </h1>
                              </a>
                            </div>
                            <ul>
                              <li>
                                <a
                                  href="/about"
                                  className="text-base hover:text-black leading-9 hover:bg-white border group/link hover:border-gray-200  px-3 py-[2px] border-transparent hover:font-semibold rounded-lg flex items-center justify-between"
                                >
                                  <span>About Us</span>
                                  <BsArrowRight className="group-hover/link:translate-x-2 relative transition duration-300 opacity-0 group-hover/link:opacity-100" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/methodology"
                                  className="text-base hover:text-black hover:bg-white leading-9 border group/link hover:border-gray-200  px-3 py-[2px] border-transparent hover:font-semibold rounded-lg flex items-center justify-between"
                                >
                                  <span>Development Methodology</span>
                                  <BsArrowRight className="group-hover/link:translate-x-2 relative transition duration-300 opacity-0 group-hover/link:opacity-100" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/certifications"
                                  className="text-base hover:text-black  hover:bg-white leading-9 border group/link hover:border-gray-200  px-3 py-[2px] border-transparent hover:font-semibold rounded-lg flex items-center justify-between"
                                >
                                  <span>Certifications</span>
                                  <BsArrowRight className="group-hover/link:translate-x-2 relative transition duration-300 opacity-0 group-hover/link:opacity-100" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/career"
                                  className="text-base hover:text-black hover:bg-white leading-9 border group/link hover:border-gray-200  px-3 py-[2px] border-transparent hover:font-semibold rounded-lg flex items-center justify-between"
                                >
                                  <span>Career</span>
                                  <BsArrowRight className="group-hover/link:translate-x-2  relative transition duration-300 opacity-0 group-hover/link:opacity-100" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/contact"
                                  className="text-base hover:text-black leading-9 hover:bg-white border group/link hover:border-gray-200  px-3 py-[2px] border-transparent hover:font-semibold rounded-lg flex items-center justify-between"
                                >
                                  <span>Contact Us</span>
                                  <BsArrowRight className="group-hover/link:translate-x-2 relative transition duration-300 opacity-0 group-hover/link:opacity-100" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="pr-5">
                            <div className="border-b mb-2">
                              <a href="/testimonial" className="">
                                <h1 className="group/edit text-xl font-semibold border border-transparent mb-3 hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl  hover:bg-white ">
                                  <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-5 after:h-5 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                                    Insights
                                    <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                                  </span>
                                </h1>
                              </a>
                            </div>
                            <ul>
                              <li>
                                <a
                                  href="/faq"
                                  className="text-base hover:text-black leading-9 border hover:bg-white group/link hover:border-gray-200  px-3 py-[2px] border-transparent hover:font-semibold rounded-lg flex items-center justify-between"
                                >
                                  <span>FAQs</span>
                                  <BsArrowRight className="group-hover/link:translate-x-2 relative transition duration-300 opacity-0 group-hover/link:opacity-100" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="pr-5 col-span-2">
                            <div className="border-b mb-2">
                              <a href="/certifications" className="">
                                <h1 className="group/edit text-xl font-semibold border border-transparent mb-3 hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl  hover:bg-white ">
                                  <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-5 after:h-5 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                                    Certificate
                                    <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                                  </span>
                                </h1>
                              </a>
                            </div>
                            <ul>
                              <li className="hover:bg-white rounded-lg hover:shadow-lg">
                                <a href="#">
                                  <div className="relative hover:scale-95 transition duration-300 ease-in-out h-[450px] w-[100%]">
                                    <Image
                                      src="/images/certificate.png"
                                      fill={true}
                                      alt="Nexgeno CaseStudy"
                                      className="object-contain"
                                    />
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Link
                href="/hire-developer"
                className="group border border-gray-600  px-5 py-2  flex  rounded-lg hover:bg-gradient-to-r from-[#3d9ec5] to-[#cf67be] hover:text-white hover:border-transparent font-medium duration-200 transition"
              >
                Hire Developer
                <BsArrowRightShort className="text-2xl group-hover:translate-x-2 duration-200 transition font-extrabold" />
              </Link>
              <Button button="button" url="/contact" title="Let's Talk" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
