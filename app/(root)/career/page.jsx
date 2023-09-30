import Image from "next/image";

export const metadata = {
  title: "Nexgeno | Career",
  description:
    "Elevate Your Career in IT with Nexgeno  Discover Exciting Opportunities in Software Development and More. Join Our Innovative Team Today!",
};

const Career = () => {
  return (
    <>
      <div className="relative w-[100%] md:h-[150px] h-[160px]">
        <Image
          src="/images/about_bg.jpg"
          alt="about background images Nexgeno"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="career ">
        <div className="container  mx-auto">
          <h1 className="text-[32px] text-[#333] pt-10 font-bold text-center">
            Career
          </h1>

          <div className="my-10">
            <form className="p-10 shadow-xl rounded-lg">
              <div className="grid text-[#444] grid-cols-1    md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col mb-[33px]">
                  <label htmlFor="" className="text-[17px] font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b py-1 pl-2 border-[#ccc]"
                    placeholder="Enter your First Name"
                  />
                </div>
                <div className="flex flex-col mb-[33px]">
                  <label htmlFor="" className="text-[17px] font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b py-1 pl-2 border-[#ccc]"
                    placeholder="Enter your Last Name"
                  />
                </div>
                <div className="flex flex-col mb-[33px]">
                  <label htmlFor="" className="text-[17px] font-semibold">
                    What is your Email Address
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b py-1 pl-2 border-[#ccc]"
                    placeholder="Enter your Email eg: example@gmail.com"
                  />
                </div>
                <div className="flex flex-col mb-[33px]">
                  <label htmlFor="" className="text-[17px] font-semibold">
                    What is your Mobile No?*
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b py-1 pl-2 border-[#ccc]"
                    placeholder="Enter your mobile Number"
                  />
                </div>
                <div className="flex flex-col mb-[33px]">
                  <label htmlFor="" className="text-[17px] font-semibold">
                    Select position that interests you
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b py-1 pl-2 border-[#ccc]"
                    placeholder="Select Position"
                  />
                </div>
                <div className="flex flex-col mb-[33px]">
                  <label htmlFor="" className="text-[17px] font-semibold">
                    What is your total experience?
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b py-1 pl-2 border-[#ccc]"
                    placeholder="Select expricence band"
                  />
                </div>
                <div className="flex flex-col mb-[33px]">
                  <label htmlFor="" className="text-[17px] font-semibold">
                    What is your current CTC (In Lacs)?
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b py-1 pl-2 border-[#ccc]"
                    placeholder="Enter your current CTC"
                  />
                </div>
                <div className="flex flex-col mb-[33px]">
                  <label htmlFor="" className="text-[17px] font-semibold">
                    What is your expected CTC (In Lacs)?
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b py-1 pl-2 border-[#ccc]"
                    placeholder="Enter your expacted CTC "
                  />
                </div>
                <div className="flex flex-col mb-[33px]">
                  <label htmlFor="" className="text-[17px] font-semibold">
                    Are you serving notice period?
                  </label>
                  <input
                    type="text"
                    className="outline-none border-b py-1 pl-2 border-[#ccc]"
                    placeholder="Select Position"
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="button no-underline relative border-none text-lg font-medium text-white py-2 px-6 rounded-md">
                  {" "}
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
