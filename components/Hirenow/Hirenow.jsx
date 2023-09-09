const Hirenow = () => {
  return (
    <>
      <div className="container mx-auto  py-14 my-10">
        <div className="grid grid-cols-2 border border-cyan-300 rounded-3xl shadow-lg">
          <div className="bg-gradient-to-r from-sky-400 to-cyan-300 p-10 rounded-l-3xl hover:bg-gradient-to-r hover:from-cyan-300 hover:to-sky-400">
            <p className="text-white text-2xl font-extralight mb-3">
              Get Started Within
            </p>
            <div className="flex items-end">
              <h2 className="text-8xl font-bold text-white">2 Business </h2>
              <span className="text-white font-medium text-3xl">Days</span>
            </div>
          </div>
          <div className=" p-10 rounded-r-3xl bg-[#fffbfd]">
            <p className="text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
              Hire Now
            </p>
            <form className="border my-4 py-2 px-3 rounded-full flex items-center justify-between relative border-cyan-300">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="w-full py-3 px-3 outline-none border-none bg-transparent"
              />
              <button className=" absolute top-[6px] rounded-full right-1 text-lg text-white  font-semibold py-3 px-5 bg-gradient-to-r from-sky-400 to-cyan-300 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-sky-400">
                ENQUIRE NOW
              </button>
            </form>
            <p>We will never spam you!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hirenow;
