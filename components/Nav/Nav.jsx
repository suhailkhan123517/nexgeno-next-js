import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-30 border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="">
              <Link href="/">
                <div className="relative w-[200px] h-[50px]">
                  <Image
                    src="/images/logo.png"
                    alt="Nexgeno Logo"
                    fill={true}
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            <div>
              <ul className="flex items-center gap-3">
                <li className="group/item cursor-pointer  py-3">
                  <span className="flex gap-2 items-center  border rounded-3xl py-1 px-3 border-transparent group-hover/item:border-gray-300">
                    Services
                    <BiChevronDown className="group-hover/item:rotate-180 transition duration-300" />
                  </span>
                  <div className="absolute bg-[#fffbfd] mt-3 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible hover:visible transition duration-500 w-full left-1/2 -translate-x-1/2 border py-8">
                    <div className="container mx-auto">
                      <Link href="/" className="">
                        <h1 className="group/edit text-2xl font-semibold border border-transparent hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl mb-5 hover:bg-white">
                          <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-6 after:h-6 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                            Nexgeno Services
                            <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                          </span>
                        </h1>
                      </Link>
                      <Link href="/">
                        <h1 className="group/edit text-xl font-semibold border border-transparent hover:border-gray-200  w-max py-2 px-3 hover:text-black rounded-xl  hover:bg-white">
                          <span className="flex gap-2 items-center after:content-['']  after:border-[1px] after:w-5 after:h-5 after:rounded-full after:absolute after:top-[4px] after:border-transparent after:right-0 relative group-hover/edit:after:border-black">
                            Nexgeno Services
                            <BsArrowRight className="group-hover/edit:translate-x-3 relative transition duration-500 " />
                          </span>
                        </h1>
                      </Link>
                      <div className="grid grid-cols-4">
                        <ul>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                        </ul>
                        <ul>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                        </ul>
                        <ul>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                        </ul>
                        <ul>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                          <li>Home Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Button button="button" url="/contact" title="Let's Talk" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
