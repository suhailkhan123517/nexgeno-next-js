"use client";
import { Link } from "react-scroll";

const ScrollLink = ({ toValue, offSetValue, title }) => {
  return (
    <>
      <Link
        to={toValue}
        spy={true}
        smooth={true}
        offset={offSetValue}
        duration={500}
        className="btn cursor-pointer"
      >
        {title}
      </Link>
    </>
  );
};

export default ScrollLink;
