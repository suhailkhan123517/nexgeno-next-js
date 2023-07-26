import Link from "next/link";
import React from "react";
import "./button.css";

export default function Button({ url, bgblack, title, button }) {
  return (
    <>
      <Link
        className={`${button} ${bgblack}  no-underline relative border-none text-lg font-medium text-white py-2 px-6 rounded-md`}
        href={url}
      >
        {title}
      </Link>
    </>
  );
}
