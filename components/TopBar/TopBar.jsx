"use client";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import {
  MdLogout,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const TopBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="p-5 rounded-lg bg-white shadow-lg flex items-center justify-between">
        <div className="font-bold capitalize text-2xl">
          {pathname.split("/").pop()}
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5 bg-gray-100 p-2 rounded-lg">
            <MdSearch />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none"
            />
          </div>
          <div className="flex gap-5">
            <MdPublic
              onClick={() => router.push("/blog")}
              className="cursor-pointer"
              size={20}
            />
            <MdOutlineChat size={20} />

            <button onClick={() => signOut({ callbackUrl: "/sign-in" })}>
              <MdLogout size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
