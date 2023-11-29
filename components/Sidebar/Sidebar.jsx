"use client";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "../MenuLink/MenuLink";
import { signOut, useSession } from "next-auth/react";
import { BiSolidCategory } from "react-icons/bi";
import { BsFillPostcardFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  const pathname = usePathname();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user?id=${session?.user?._id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch a user");
        }

        const user = await res.json();

        setData(user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [session?.user?._id]);

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard size={30} />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle size={30} />,
        },
        {
          title: "My  Posts",
          path: "/dashboard/post",
          icon: <BsFillPostcardFill size={30} />,
        },
        {
          title: "Categories",
          path: "/dashboard/categories",
          icon: <BiSolidCategory size={30} />,
        },
        {
          title: "Profile",
          path: `/dashboard/profile/${session?.user?._id}`,
          icon: <MdOutlineSettings size={30} />,
        },
      ],
    },
  ];

  return (
    <>
      <div className="sticky top-10">
        <div className="flex items-center gap-5 mb-5">
          {data &&
            data.user.map((item) => (
              <>
                <div className="relative h-14 w-14">
                  <Image
                    className="rounded-full object-cover"
                    src={item.imageUrl || "/noavatar.png"}
                    alt={item.name}
                    fill={true}
                    key={item._id}
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs">{item.title}</span>
                </div>
              </>
            ))}
        </div>
        <ul className="list-none">
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className="font-bold text-xs my-2">{cat.title}</span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))}

          {session?.user?.role === "admin" && (
            <>
              <li>
                <span className="font-bold text-xs my-2">Admin</span>
                <Link
                  href="/dashboard/admin"
                  className={`p-5 flex items-center gap-5 my-1 rounded-lg hover:bg-white  ${
                    pathname === "/dashboard/admin" &&
                    "bg-white text-[#17c1e8] font-semibold shadow-lg"
                  } `}
                >
                  <FaUser />
                  User Management
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
