import Link from "next/link";
export default function Hero() {
  return (
    <>
      <section className="mt-5 mb-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <div className="col-span-3 mt-5">
              <h1 className="hero_heading">Innovative web solutions</h1>
              <h1 className="black_heading">for modern businesses</h1>
              <p className="text-2xl font-medium mt-5">
                Connecting businesses to the digital world
              </p>

              <div className="flex flex-row gap-5 mt-10">
                <Link href="/contact" className="btn">
                  Contact Us
                </Link>
                <Link href="/contact" className="outline_btn">
                  Call Us Now
                </Link>
              </div>
            </div>
            <div>
              <form className="border-[1px] border-pink-600 flex flex-col px-6 py-10 gap-7 rounded-lg mt-5">
                <p className="text-xl font-semibold text-center">Enquire Now</p>
                <input
                  type="text"
                  className="border-[1px] py-2 px-3  rounded-md  text-sm outline-none"
                  placeholder="Contact Person Name"
                />
                <input
                  type="text"
                  className="border border-gray-300 py-2 px-3  rounded-md  text-sm outline-none"
                  placeholder="Mobile / Phone No"
                />
                <input
                  type="text"
                  className="border border-gray-300 py-2 px-3  rounded-md  text-sm outline-none"
                  placeholder="Email Address"
                />
                <button className="btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
