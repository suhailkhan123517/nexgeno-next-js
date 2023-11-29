"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import Popup from "../Popup/Popup";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 ${
          isVisible && "bg-[#fffbfd]"
        }`}
        id="headers"
      >
        <div className="container  mx-auto">
          <div className="flex items-center  justify-between">
            <Link href="/">
              <div className="relative w-[200px] h-[50px]">
                <Image
                  src="/logo.webp"
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
              <button onClick={() => setIsOpen(!isOpen)} className="btn">
                Get Quick Quote
              </button>
            </div>
          </div>
        </div>
        <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </>
  );
}
