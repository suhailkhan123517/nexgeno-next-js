import Button from "@/components/Button/Button";
import Image from "next/image";

export const metadata = {
  title: "Nexgeno | Thank You",
  description: "Nexgeno Technology Private Limited Company Thank You",
};

const ThankYou = () => {
  return (
    <>
      <div className="thankyou">
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-screen">
            <div className="text-[#444] flex items-center justify-center flex-col text-center sm:gap-5 gap-2 w-[500px]">
              <div className="relative w-[80px] h-[80px]">
                <Image
                  src="/images/thankyou.png"
                  fill={true}
                  alt="Thankyou Logo"
                />
              </div>
              <h1 className="sm:text-[40px] text-[25px] font-medium">
                Thanks for Submitting
              </h1>
              <h2 className="sm:text-xl text-lg font-medium">
                Your message has been sent!
              </h2>
              <p className="text-[14px] sm:leading-[28px] sm:mb-0 mb-5">
                Thank you for submitting the form. Your request has been
                received and we will get back to you as soon as possible. We
                appreciate your interest in our services.
              </p>
              <Button url="/" title="Go To Home" button="button" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
