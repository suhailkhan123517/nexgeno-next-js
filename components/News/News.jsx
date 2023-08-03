import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./news.css";

export default function News() {
  return (
    <>
      <h2 className="text-center text-pink-600 pt-10"># INSIGHT & NEWS </h2>
      <h1 className="text-center text-3xl font-semibold text-blue-950 pt-5 pb-9">
        Stay ahead of technology paradigm shift
      </h1>
      <div className="news py-20">
        <div className="container m-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="imgContainer">
              <Image
                src="/images/blog.jpg"
                fill={true}
                alt="Nexgeno Blog Image"
                className="image"
              />
            </div>
            <div className="content col-span-2 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-md p-6 flex flex-col gap-4">
                <p className="btn_title rounded-sm text-white inline-block text-sm font-semibold py-1 px-4 w-max">
                  Career
                </p>
                <h1 className="text-xl">
                  Join Our Innovative Team and Build Your Career in Tech
                </h1>
                <p className="text-gray-700">
                  Discover exciting career opportunities in tech with our
                  dynamic team...
                </p>
                <Link
                  href="/inquiry"
                  className="readLink font-semibold text-pink-400"
                >
                  Read More
                </Link>
              </div>
              <div className="bg-white rounded-md p-6 flex flex-col gap-4">
                <p className="btn_title rounded-sm text-white inline-block text-sm font-semibold py-1 px-4 w-max">
                  Solution
                </p>
                <h1 className="text-xl">
                  Cloud-Based Solutions for Modern Businesses
                </h1>
                <p className="text-gray-700">
                  Revolutionize your business with our cloud-based solutions...
                </p>
                <Link
                  href="/solution"
                  className=" readLink font-semibold text-pink-400"
                >
                  Read More
                </Link>
              </div>
              <div className="bg-white rounded-md p-6 flex flex-col gap-4">
                <p className="btn_title rounded-sm text-white inline-block text-sm font-semibold py-1 px-4 w-max">
                  Hire Developers
                </p>
                <h1 className="text-xl">
                  Build Your Dream Team with Our Expert Developers
                </h1>
                <p className="text-gray-700">
                  Get access to a range of skilled developers, including web,
                  mobile...
                </p>
                <Link
                  href="/hiredeveloper"
                  className="font-semibold text-pink-400 readLink"
                >
                  Read More
                </Link>
              </div>
              <div className="bg-white rounded-md p-6 flex flex-col gap-4">
                <p className="btn_title rounded-sm text-white inline-block text-sm font-semibold py-1 px-4 w-max">
                  Blog
                </p>
                <h1 className="text-xl">
                  Stay Ahead of the Curve with Our Tech Blog
                </h1>
                <p className="text-gray-700">
                  Our tech blog offers the latest insights, trends, and best
                  practices in the industry...
                </p>
                <Link
                  href="/blog"
                  className="font-semibold text-pink-400 readLink"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
