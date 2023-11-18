"use client";
import Image from "next/image";
import Search from "../../../../../components/Search/Search";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`/api/register`);

        if (!res.ok) {
          throw new Error("Failed to fetch User");
        }

        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log("Error Loading Users", error);
      }
    };
    getUsers();
  }, []);

  const filteredUsers = users
    ? users.user.filter((item) =>
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
        <Search setQuery={setQuery} placeholder="Search for a user..." />
        <table className="w-full">
          <thead>
            <tr>
              <td className="p-3">Name</td>
              <td className="p-3">Email</td>
              <td className="p-3">Title</td>
              <td className="p-3">Status</td>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <>
                <tr key={item._id} className="border-t">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.imageUrl || "/noavatar.png"}
                        alt=""
                        width={40}
                        height={40}
                        className="object-cover rounded-full"
                      />
                      {item.name}
                    </div>
                  </td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">
                    <span className="bg-lime-500 text-white py-1 px-2 rounded-lg">
                      Active
                    </span>
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

export default Users;
