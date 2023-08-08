import React from "react";
import "./hero.css";
import Button from "../Button/Button";
export default function Hero() {
  return (
    <>
      <div className="container   text-center m-auto md:h-screen h-96 flex justify-center items-center flex-col">
        <h1 className="leading-tight sm:text-4xl md:text-7xl  font-bold ">
          Innovative web solutions for modern businesses
        </h1>
        <h2 className="text-2xl font-medium py-6">
          Connecting businesses to the digital world
        </h2>
        <Button url="/contact" title="Get Started " button="button" />
      </div>
    </>
  );
}
