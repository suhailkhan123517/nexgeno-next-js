import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import "./portfolio.css";
import { PortfolioList } from "@/utils/data";

export const metadata = {
  title: "Nexgeno | Portfolio",
  description: "Nexgeno Technology Private Limited Company Portfolio",
};

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
            {PortfolioList.map((item) => (
              <div key={item.id} className="img_hover mb-5 relative sm:pr-20">
                <Link href="#">
                  <div className="relative w-full xl:h-[320px] lg:h-[250px] md:h-[181px] sm:h-[250px] h-[200px]">
                    <Image src={item.deskIMG} alt="lawdento" fill={true} />
                  </div>
                  <div className="absolute xl:top-24 lg:top-10 sm:top-16 top-8 lg:right-8 sm:right-12 -right-3">
                    <div className="relative lg:w-[100px] lg:h-[200px] md:w-[50px] md:h-[90px] sm:w-[90px] sm:h-[180px]  w-[70px] h-[140px]  mob_img">
                      <Image
                        src={item.mobImg}
                        alt="lawdento"
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
