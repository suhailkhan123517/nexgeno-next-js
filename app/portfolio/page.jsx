import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio_p bg-black text-white mt-16">
        <div className="container m-auto py-10">
          <div className="flex pb-8 justify-between items-center flex-row">
            <Button url="#" title="Get a Free Quote Now" button="button" />
            <Button url="#" title="View More" button="button" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="img_hover mb-5 relative pr-20">
              <Link href="#">
                <div className="desk_img">
                  <Image
                    src="/images/lawtendo.jpg"
                    alt="lawdento"
                    fill={true}
                  />
                </div>
                <div className="absolute top-32 right-10">
                  <div className="mob_img">
                    <Image
                      src="/images/lawtendo_mob.jpg"
                      alt="lawdento"
                      fill={true}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <h1 className="text-2xl heading_underline inline-block mb-2 relative font-medium pt-4">
                  Lawtendo
                </h1>
                <p>Portlal / CodeIgniter</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
