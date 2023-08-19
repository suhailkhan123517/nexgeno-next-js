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
          <div className="flex pb-8 justify-between sm:items-center items-start sm:flex-row flex-col">
            <div className="max-md:hidden">
              <Button
                url="/inquiry"
                title="Get a Free Quote Now"
                button="button"
              />
            </div>

            <Button url="/portfolios" title="View More" button="button" />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="img_hover mb-5 relative sm:pr-20">
              <Link href="#">
                <div className="relative w-full xl:h-[380px] lg:h-[300px] h-[250px]">
                  <Image
                    src="/images/lawtendo.jpg"
                    alt="lawdento"
                    fill={true}
                  />
                </div>
                <div className="absolute xl:top-32 lg:top-20 top-10 sm:right-10 -right-3">
                  <div className="relative w-[100px] lg:h-[200px] h-[190px] mob_img">
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
            <div className="img_hover mb-5 relative sm:pr-20">
              <Link href="#">
                <div className="relative w-full xl:h-[380px] lg:h-[300px] h-[250px]">
                  <Image
                    src="/images/lawtendo.jpg"
                    alt="lawdento"
                    fill={true}
                  />
                </div>
                <div className="absolute xl:top-32 lg:top-20 top-10 sm:right-10 -right-3">
                  <div className="relative w-[100px] lg:h-[200px] h-[190px] mob_img">
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
            <div className="img_hover mb-5 relative sm:pr-20">
              <Link href="#">
                <div className="relative w-full xl:h-[380px] lg:h-[300px] h-[250px]">
                  <Image
                    src="/images/lawtendo.jpg"
                    alt="lawdento"
                    fill={true}
                  />
                </div>
                <div className="absolute xl:top-32 lg:top-20 top-10 sm:right-10 -right-3">
                  <div className="relative w-[100px] lg:h-[200px] h-[190px] mob_img">
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
            <div className="img_hover mb-5 relative sm:pr-20">
              <Link href="#">
                <div className="relative w-full xl:h-[380px] lg:h-[300px] h-[250px]">
                  <Image
                    src="/images/lawtendo.jpg"
                    alt="lawdento"
                    fill={true}
                  />
                </div>
                <div className="absolute xl:top-32 lg:top-20 top-10 sm:right-10 -right-3">
                  <div className="relative w-[100px] lg:h-[200px] h-[190px] mob_img">
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
