import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Whatsapp() {
  return (
    <>
      <div className="whatsapp z-50 fixed bottom-0 left-0">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=919773375525&amp;text=Hi,%20I%20am%20contacting%20you%20through%20your%20website%20https://nexgeno.in/"
        >
          <div className="relative w-[50px] h-[50px]">
            <Image
              src="/images/w-icon.png"
              fill={true}
              alt="whatsapp"
              sizes="50px"
              className="object-contain"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
