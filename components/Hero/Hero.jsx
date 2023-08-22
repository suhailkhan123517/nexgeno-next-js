import Button from "../Button/Button";
export default function Hero() {
  return (
    <>
      <div className="container text-[#222] text-center m-auto md:h-screen h-auto md:mt-0 mt-36 flex justify-center items-center flex-col">
        <h1 className="lg:text-[70px] md:text-[44px] text-[30px]  font-bold lg:leading-[91px] md:leading-[52px] leading-[42px]   ">
          Innovative web solutions for modern businesses
        </h1>
        <h2 className="sm:text-[24px] text-[19px] leading-[33px] font-medium sm:p-[22px]  p-[5px] sm:mb-[28px] mb-[8px]">
          Connecting businesses to the digital world
        </h2>
        <Button url="/contact" title="Get Started " button="button" />
      </div>
    </>
  );
}
