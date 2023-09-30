import Image from "next/image";
import Link from "next/link";
import "./case.css";
import { caseStudy } from "@/utils/data";

export const metadata = {
  title: "Nexgeno | Case Study",
  description:
    "Exploring Success Stories: Discover how Nexgeno has empowered businesses through tailored solutions. Dive into our compelling case studies showcasing innovation, problem-solving, and tangible results across industries.",
};

export default function CaseStudy() {
  return (
    <>
      <div className="caseStudy text-white sm:pt-14 pt-7">
        <div className="container m-auto ">
          <h1 className="text-center text-4xl font-normal">Work</h1>
          <div className="grid md:grid-cols-2 grid-cols-1 sm:py-14 py-7  gap-5">
            {caseStudy.map((item) => (
              <div key={item.id} className="caseBox ">
                <Link href={item.url}>
                  <p className="">UX DESIGN</p>
                  <h1 className="pb-2 text-2xl font-normal">{item.title}</h1>
                  <div className="relative w-[100%] h-[190px]  md:h-[250px]">
                    <Image src={item.img} alt={item.title} fill={true} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
