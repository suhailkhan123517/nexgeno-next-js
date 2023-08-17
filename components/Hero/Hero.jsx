import React from "react";
import "./hero.css";
import Button from "../Button/Button";
export default function Hero() {
  return (
    <>
      <div className="container text-center m-auto md:h-screen h-auto md:mt-0 mt-28 flex justify-center items-center flex-col">
        <h1 className="leading-tight lg:text-6xl xl:text-7xl md:text-5xl text-3xl  font-bold ">
          Innovative web solutions for modern businesses
        </h1>
        <h2 className="md:text-2xl text-xl font-medium py-6">
          Connecting businesses to the digital world
        </h2>
        <Button url="/contact" title="Get Started " button="button" />
      </div>
    </>
  );
}
