"use client";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const goToBtn = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      {isVisible && (
        <div
          onClick={goToBtn}
          className="w-12 h-12 rounded-full grid place-items-center shadow-2xl border-[2px] border-pink-600 fixed bottom-28 md:right-[45px] right-10 cursor-pointer z-30"
        >
          <BsArrowUp className="text-xl font-bold text-pink-600" />
        </div>
      )}
    </>
  );
};

export default GoToTop;
