import { experties } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Expertise = () => {
  return (
    <>
      <section className="mb-24">
        <div className="container mx-auto">
          <h2 className="heading text-center ">
            Unleash Digital Innovation <br /> with Our Technology
          </h2>
          <h1 className="gradient_heading">EXPERTISE</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  place-items-start xl:gap-10 gap-3 my-14">
            {experties.map((item) => (
              <div
                key={item.id}
                className="border-[1px] hover:border-pink-600 hover:shadow-xl transition duration-200 rounded-2xl   flex items-center flex-col"
              >
                <div className=" bg-[#fffbfd] border-b w-full py-5 px-5 rounded-2xl flex xl:flex-row flex-col gap-4 items-center">
                  <div className="w-28">
                    <div className="w-24 h-24 rounded-ful  relative">
                      <Image
                        src={item.img}
                        alt="Hire Developer Icon"
                        fill={true}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2 px-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="desc mb-4 px-2">{item.desc}</p>
                  </div>
                </div>

                {/* <div className="px-6 py-5">
                  {item.links.map((link) => (
                    <ul key={link.title}>
                      <li>
                        <Link
                          href={link.url}
                          className="mb-2 group border border-transparent hover:font-semibold px-2 py-1 rounded-md flex items-center justify-between hover:border-gray-200 hover:bg-gray-100 hover:text-black"
                        >
                          <span className="text-blue-900 group-hover:text-blue-600 xl:text-lg text-base font-semibold hover:underline">
                            {link.title}
                          </span>
                          <BsArrowRight className=" relative transition duration-300 group-hover:translate-x-1 -translate-x-2" />
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
