"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="px-5 pt-5 bg-red-100 min-h-screen">
        <div className="mb-2 ">
          <Image
            src="/images/logo.webp"
            alt="logo"
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="mt-10 bg-gray-100 flex items-center flex-col py-4">
          <Link href="/dashboard" className="bg-white  max-w-[200px]">
            Dashboard
          </Link>
          <Link href="/dashboard">Blog</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
