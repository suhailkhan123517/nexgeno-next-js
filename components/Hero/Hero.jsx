import React from "react";
import "./hero.css";
import Button from "../Button/Button";
export default function Hero() {
  return (
    <>
      <div className="container text-center m-auto h-screen flex justify-center items-center flex-col">
        <h1 className="leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold ">
          <span className="first_text">Innovative web</span>{" "}
          <span className="second_text"> solutions for </span>
          <span className="third_text">modern businesses</span>
        </h1>
        <h2 className="text-2xl font-medium py-6">
          Connecting businesses to the digital world
        </h2>
        <Button url="#" title="Get Started " button="button" />
      </div>
    </>
  );
}
