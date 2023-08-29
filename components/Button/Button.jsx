import Link from "next/link";
import "./button.css";
import { BsArrowRightShort } from "react-icons/bs";

export default function Button({ url, bgblack, title, button }) {
  return (
    <>
      <Link
        className={`${button} ${bgblack} group  no-underline relative border-none text-lg font-medium text-white py-2 px-6 rounded-md`}
        href={url}
      >
        <span className="flex items-center">
          {title}{" "}
          <BsArrowRightShort className="text-2xl group-hover:translate-x-2 duration-300 transition font-extrabold" />
        </span>
      </Link>
    </>
  );
}
