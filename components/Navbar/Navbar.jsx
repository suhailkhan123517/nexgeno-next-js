import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./navbar.css";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b " id="headers">
        <div className="container  mx-auto">
          <div className="flex items-center  justify-between">
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
            <div className="flex items-center gap-10">
              <ul>
                <li className="text-xl font-semibold">+91 90044 66166 </li>
              </ul>
              <Link href="/contact" className="btn">
                Get Quick Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
