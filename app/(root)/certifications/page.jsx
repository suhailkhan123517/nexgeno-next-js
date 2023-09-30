import Image from "next/image";

export const metadata = {
  title: "Nexgeno | Certificate",
  description: "Nexgeno Technology Private Limited Company Certificate",
};

export default function Certificate() {
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
      <div className="container  sm:mt-10 grid place-items-center m-auto">
        <h1 className="sm:text-3xl text-xl text-blue-950 font-semibold  py-5">
          Certificate
        </h1>
        <div className="relative md:w-[641px] md:h-[452px] sm:w-[400px] sm:h-[282px] w-[300px] h-[180px]">
          <Image
            src="/images/certificate.png"
            alt="nexgeno certificate"
            fill={true}
          />
        </div>
      </div>
    </>
  );
}
