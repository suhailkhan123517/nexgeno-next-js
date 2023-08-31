import Image from "next/image";
import React from "react";
import "./stories.css";
import Link from "next/link";

export default function Stories() {
  return (
    <>
      <div className="stories bg-black text-white sm:py-14 py-10">
        <div className="container m-auto">
          <h1 className="text-center text-3xl font-semibold pb-5">
            Success Stories
          </h1>
          <div className="grid md:grid-cols-3 place-items-center grid-cols-1 sm:gap-5">
            <div className="hover_img py-5 relative">
              <Link href="#">
                <Image
                  src="/images/lawtendo.webp"
                  alt="lowtendo"
                  width={350}
                  height={300}
                  className="deskImg"
                />
                {/* <Image
                  src="/images/lawtendo_mob.jpg"
                  alt="lowtendo"
                  width={90}
                  height={172}
                  className="mobImg absolute top-8 right-4  rounded-md"
                /> */}
              </Link>

              <h1 className="text-2xl heading_underline inline-block mb-4 relative font-medium pt-4">
                Lawtendo
              </h1>
              <p>Website / Web Development</p>
            </div>
            <div className="hover_img py-5 relative">
              <Link href="#">
                <Image
                  src="/images/geci2.webp"
                  alt="lowtendo"
                  width={350}
                  height={300}
                  className="deskImg"
                />
                {/* <Image
                  src="/images/gcie_mob.jpg"
                  alt="GECI"
                  width={90}
                  height={172}
                  className="mobImg absolute top-8 right-4  rounded-md"
                /> */}
              </Link>

              <h1 className="text-2xl heading_underline inline-block mb-4 relative font-medium pt-4">
                Gecindia
              </h1>
              <p>Website / Web Development</p>
            </div>
            <div className="hover_img py-5 relative">
              <Link href="#">
                <Image
                  src="/images/octa.webp"
                  alt="lowtendo"
                  width={350}
                  height={300}
                  className="deskImg"
                />
                {/* <Image
                  src="/images/octa_mob.jpg"
                  alt="lowtendo"
                  width={90}
                  height={172}
                  className="mobImg absolute top-8 right-4  rounded-md"
                /> */}
              </Link>

              <h1 className="text-2xl heading_underline inline-block mb-4 relative font-medium pt-4">
                Octa Networks
              </h1>
              <p>Website / Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
