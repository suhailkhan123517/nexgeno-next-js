"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  return (
    <>
      <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-[#fffbfd] border-b  px-6 py-3">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.webp"
            alt="logo"
            priority
            width={200}
            height={50}
          />
        </Link>
        <div className="flex items-center gap-5">
          <div>Search bar</div>
          <button
            onClick={() => signOut({ callbackUrl: "/sign-in" })}
            className="px-4 py-1 bg-black border border-black text-white rounded-full hover:bg-transparent transition-all duration-150 hover:text-black"
          >
            logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
