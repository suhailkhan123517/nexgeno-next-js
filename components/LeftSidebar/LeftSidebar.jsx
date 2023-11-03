"use client";
import { sidebarLinks } from "@/utils/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();

  const isAdmin = pathname === "/dashboard/admin";
  return (
    <>
      <section className="sticky left-0 top-0 z-20 flex h-screen  flex-col bg-[#fffbfd] justify-between overflow-auto   pb-5 pt-28 max-md:hidden">
        <div className="flex w-full flex-1 flex-col gap-6 px-6">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.url;

            return (
              <Link
                href={link.url}
                key={link.id}
                className={`px-4 py-2 transition-all duration-200 rounded-lg  hover:bg-white hover:shadow-xl ${
                  isActive && "bg-white shadow-xl"
                }`}
              >
                <p className="text-light-1 ">{link.label}</p>
              </Link>
            );
          })}

          {session?.user?.role === "admin" && (
            <>
              <Link
                href="/dashboard/admin"
                className={`px-4 py-2 transition-all duration-200 rounded-lg  hover:bg-white hover:shadow-xl ${
                  isAdmin && "bg-white shadow-xl"
                }`}
              >
                <p className="text-light-1 ">User Management</p>
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default LeftSidebar;
