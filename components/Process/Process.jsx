import Image from "next/image";
import "./Process.css";

export default function Process() {
  return (
    <>
      <div className="container   relative m-auto sm:py-14 py-10 text-center ">
        <h1 className="heading  p4-5 ">Process&apos;s</h1>
        <p className="desc">
          At Nexgeno, we believe that this custom web application development
          process allows us to deliver high-quality, user-friendly web solutions
          that meet our client&apos;s unique needs.
        </p>
        <div className="grid md:grid-cols-4 text-[#444] grid-cols-1 gap-4 md:mt-40 mt-10 process">
          <div className="relative md:mt-56">
            <div className="imgConPro lg:w-36 lg:h-36 w-36 h-36 md:w-28 md:h-28 grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <div className="relative lg:w-[80px] lg:h-[80px]  w-[60px] h-[60px]">
                <Image src="/images/plan.png" alt="plan" fill={true} />
              </div>
              <h1 className="absolute md:hidden top-1 shadow-xl  -right-3 p-2 rounded-full w-12 h-12 bg-white text-2xl">
                01
              </h1>
            </div>
            <h1 className="absolute max-md:hidden xl:top-2 top-3 shadow-xl  xl:right-12 lg:right-5 right-0 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              01
            </h1>
            <h1 className="text-[20px] font-medium mb-1">
              Discovery and Planning
            </h1>
            <p className="line-clamp-2 desc">
              We begin every web application development project with a
            </p>
          </div>
          <div className="relative max-md:hidden lg:mt-0 mt-14 ">
            <h1 className="text-[20px] font-medium mb-1">
              Design and Prototyping
            </h1>
            <p className="line-clamp-2 desc mb-8">
              Once we have a clear understanding of your
            </p>
            <div className="imgConPro lg:w-36 lg:h-36 w-28 h-28 grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <div className="relative lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]">
                <Image src="/images/prototype.png" alt="plan" fill={true} />
              </div>
            </div>
            <h1 className="absolute xl:top-32 top-36 shadow-xl xl:right-12 lg:right-6 right-2 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              02
            </h1>
          </div>
          <div className="relative md:hidden lg:mt-0 mt-12 ">
            <div className="imgConPro w-36 h-36  grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <div className="relative lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]">
                <Image src="/images/prototype.png" alt="plan" fill={true} />
              </div>
              <h1 className="absolute top-0 shadow-xl  right-0 p-2 rounded-full w-12 h-12 bg-white text-2xl">
                02
              </h1>
            </div>

            <h1 className="text-[20px] font-medium mb-1">
              Design and Prototyping
            </h1>
            <p className="line-clamp-2 desc mb-8">
              Once we have a clear understanding of your
            </p>
          </div>
          <div className="relative lg:mt-16 md:mt-28 mt-0">
            <div className="imgConPro lg:w-36 lg:h-36 w-36 h-36 md:w-28 md:h-28 grid place-items-center mx-auto mb-5 bg-white rounded-full relative z-1">
              <div className="relative lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]">
                <Image src="/images/rent.png" alt="plan" fill={true} />
              </div>
              <h1 className="absolute md:hidden  shadow-xl top-0  right-1 p-2 rounded-full w-12 h-12 bg-white text-2xl">
                03
              </h1>
            </div>
            <h1 className="absolute max-md:hidden xl:top-8 shadow-xl top-3 xl:right-10 lg:right-5 right-1 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              03
            </h1>
            <h1 className="text-[20px] font-medium mb-1">
              Development and Testing
            </h1>
            <p className="line-clamp-2 desc">
              Once the design and prototype have been approved, we move on
            </p>
          </div>
          <div className="relative max-md:hidden lg:-mt-28 -mt-16">
            <h1 className="text-[20px] font-medium mb-1">
              Iteration & Improvement
            </h1>
            <p className="line-clamp-2 desc mb-4">
              Finally, we believe that a web application is never truly
              finished.
            </p>
            <div className="imgConPro  lg:w-36 lg:h-36 w-28 h-28 grid place-items-center mx-auto bg-white rounded-full relative z-1">
              <div className="relative lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]">
                <Image src="/images/satisfaction.png" alt="plan" fill={true} />
              </div>
            </div>
            <h1 className="absolute shadow-xl xl:top-24 top-36 xl:right-12 lg:right-4 right-0 p-2 rounded-full w-12 h-12 bg-white text-2xl">
              04
            </h1>
          </div>
          <div className="relative md:hidden mt-8">
            <div className="imgConPro  w-36 h-36 mb-4 grid place-items-center mx-auto bg-white rounded-full relative z-1">
              <div className="relative lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]">
                <Image src="/images/satisfaction.png" alt="plan" fill={true} />
              </div>
              <h1 className="absolute   shadow-xl top-0 right-0 p-2 rounded-full w-12 h-12 bg-white text-2xl">
                04
              </h1>
            </div>

            <h1 className="text-[20px] font-medium mb-1">
              Iteration & Improvement
            </h1>
            <p className="line-clamp-2 desc mb-4">
              Finally, we believe that a web application is never truly
              finished.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
