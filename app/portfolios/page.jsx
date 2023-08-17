"use client";
import React from "react";
import "./portfolios.css";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import {
  filterIndustries,
  filterServices,
  filterTechnology,
} from "@/utils/data";

export default function Portfolios() {
  return (
    <>
      <div className="portfolios text-white mt-16 py-10">
        <div className="container m-auto">
          <h1 className="text-center text-4xl font-medium  pb-3">
            Nexgeno Portfolios
          </h1>
          <div className="grid grid-cols-4 gap-3 ">
            <div className="">
              <div className="border-[1px] border-red-50 w-64 rounded-lg flex justify-between items-center py-2 px-4">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="bg-transparent placeholder-white outline-none"
                />
                <AiOutlineSearch />
              </div>
            </div>
            <div className="">
              <div className="flex flex-col text-center gap-2">
                <label htmlFor="service">Services</label>
                <select
                  id="service"
                  className="text-black py-2 px-3 rounded-lg"
                >
                  <option value="">All</option>
                  {filterServices.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col text-center gap-2">
                <label htmlFor="service">Industries</label>
                <select
                  id="service"
                  className="text-black py-2 px-3 rounded-lg"
                >
                  <option value="">All</option>
                  {filterIndustries.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col text-center gap-2">
                <label htmlFor="service">Technology</label>
                <select
                  id="service"
                  className="text-black py-2 px-3 rounded-lg"
                >
                  <option value="">All</option>
                  {filterTechnology.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="img_hover_port mb-5 relative pr-20">
              <Link href="#">
                <div className="relative w-full h-52">
                  <Image
                    src="/images/lawtendo.jpg"
                    alt="lawdento"
                    fill={true}
                  />
                </div>
                <div className="absolute top-10 right-10">
                  <div className="mob_img_port relative w-20 h-40">
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
            <div className="img_hover_port mb-5 relative pr-20">
              <Link href="#">
                <div className="relative w-full h-52">
                  <Image
                    src="/images/lawtendo.jpg"
                    alt="lawdento"
                    fill={true}
                  />
                </div>
                <div className="absolute top-10 right-10">
                  <div className="mob_img_port relative w-20 h-40">
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
            <div className="img_hover_port mb-5 relative pr-20">
              <Link href="#">
                <div className="relative w-full h-52">
                  <Image
                    src="/images/lawtendo.jpg"
                    alt="lawdento"
                    fill={true}
                  />
                </div>
                <div className="absolute top-10 right-10">
                  <div className="mob_img_port relative w-20 h-40">
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
