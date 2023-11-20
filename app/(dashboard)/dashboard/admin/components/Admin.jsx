"use client";
import Search from "@/components/Search/Search";
import baseUrl from "@/utils/baseUrl";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";

const Admin = () => {
  const { data: session } = useSession();
  if (!session) redirect("/sign-in");
  if (session?.user?.role === "user") redirect("/dashboard");

  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/register`);

        if (!res.ok) {
          throw new Error("Failed to fetch User");
        }

        const users = await res.json();
        setData(users);
      } catch (error) {
        console.log("Error loading User :", error);
      }
    };
    getUser();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure ?");
    if (confirmed) {
      const res = await fetch(`/api/register?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        const user = await res.json();
        const { publicId } = user;
        await deleteImage(publicId);
        toast.success("User Deleted");
        window.location.reload();
      }
    }
  };

  const deleteImage = async (publicId) => {
    const res = await fetch(`/api/removeImage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId }),
    });
  };

  const filteredUsers = data
    ? data.user.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="bg-white shadow-lg p-5 rounded-lg mt-5">
        <div className="flex items-center justify-between">
          <Search setQuery={setQuery} placeholder="Search for a User..." />
          <Link
            className="py-2 px-4 bg-blue-600 rounded-lg text-white flex items-center gap-1"
            href="/dashboard/register"
          >
            <IoMdAddCircle />
            New User
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <td className="p-3">Name</td>
              <td className="p-3">Email</td>
              <td className="p-3">Title</td>
              <td className="p-3">Role</td>
              <td className="p-3">Status</td>
              <td className="p-3">Tools</td>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <>
                <tr key={item._id} className="border-t">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10">
                        <Image
                          src={item.imageUrl || "/noavatar.png"}
                          alt={item.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>

                      {item.name}
                    </div>
                  </td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.role}</td>
                  <td className="p-3">
                    <span className="bg-lime-500 text-white py-1 px-2 rounded-lg">
                      Active
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <Link
                        className="bg-lime-500 text-white py-2 px-3 rounded-lg"
                        href={`/dashboard/profile/${item._id}`}
                      >
                        <MdEditSquare />
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-red-600 text-white py-2 px-3   rounded-lg"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          {Array.from({
            length: Math.ceil(filteredUsers.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300"
              } rounded`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;
