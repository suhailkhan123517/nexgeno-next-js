"use client";
import "./filterPortfolio.css";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import {
  PortfolioList,
  filterIndustries,
  filterServices,
  filterTechnology,
} from "@/utils/data";

export const metadata = {
  title: "Nexgeno | Portfolios",
  description: "Nexgeno Technology Private Limited Company Portfolios",
};

export default function FilterPortfolio() {
  const [selectedServices, setSelectedServices] = useState(""); // Selected Services
  const [selectedIndustries, setSelectedIndustries] = useState(""); // Selected Services
  const [selectedTechnology, setSelectedTechnology] = useState(""); // Selected Services
  const [search, setSearch] = useState("");

  const filteredData = PortfolioList.filter((item) => {
    const servicesFilter =
      selectedServices === "" || item.services.includes(selectedServices);
    const industriesFilter =
      selectedIndustries === "" || item.industries.includes(selectedIndustries);
    const technologyFilter =
      selectedTechnology === "" || item.technology.includes(selectedTechnology);

    const searchFilter =
      search === "" || item.title.toLowerCase().includes(search.toLowerCase());

    return (
      servicesFilter && industriesFilter && technologyFilter && searchFilter
    );
  });

  return (
    <>
      <div className="portfolios text-white  py-10">
        <div className="container m-auto">
          <h1 className="text-center md:text-4xl text-2xl font-medium  md:pb-3">
            Nexgeno Portfolios
          </h1>

          <div className="flex lg:justify-between max-lg:flex-col  lg:items-center items-start gap-5 md:my-12 my-6">
            <div className="flex justify-start items-center relative gap-2 ">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none rounded-md"
              />

              <AiOutlineSearch className="text-gray-800 text-xl absolute top-2 right-2" />
            </div>
            <div className="flex items-center md:justify-center max-md:flex-col gap-3">
              <div className="services">
                <select
                  value={selectedServices}
                  onChange={(e) => setSelectedServices(e.target.value)}
                  className="border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none rounded-md"
                >
                  <option value="">Services</option>
                  {filterServices.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="industries">
                <select
                  value={selectedIndustries}
                  onChange={(e) => setSelectedIndustries(e.target.value)}
                  className="border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none rounded-md"
                >
                  <option value="">Industries</option>
                  {filterIndustries.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="technology">
                <select
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}
                  className="border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none rounded-md"
                >
                  <option value="">Technology</option>
                  {filterTechnology.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
            {filteredData.map((item) => (
              <div
                className="img_hover_port mb-5 relative md:pr-20 pr-5"
                key={item.id}
              >
                <Link href="#">
                  <div className="relative w-full h-52">
                    <Image src={item.deskIMG} alt={item.title} fill={true} />
                  </div>
                  <div className="absolute top-10 md:right-10 -right-2">
                    <div className="mob_img_port relative w-20 h-40">
                      <Image
                        src={item.mobImg}
                        alt={item.title}
                        fill={true}
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <h1 className="text-2xl heading_underline inline-block mb-2 relative font-medium pt-4">
                    {item.title}
                  </h1>
                  <p>{item.desc}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
