"use client";
import Search from "@/components/Search/Search";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";

const Categories = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("/api/categories");

        if (!res.ok) {
          throw new Error("Failed to fetch Categories");
        }

        const categories = await res.json();
        setData(categories);
      } catch (error) {
        console.log("Error loading Categories", error);
      }
    };

    getCategories();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure ?");
    if (confirmed) {
      const res = await fetch(`/api/categories?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Category Deleted");
        window.location.reload();
      }
    }
  };

  const filteredCategories = data
    ? data.categories.filter((item) =>
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategories.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <>
        <div className="bg-white shadow-lg p-5 rounded-lg mt-5">
          <div className="flex items-center justify-between">
            <Search
              setQuery={setQuery}
              placeholder="Search for a Categories..."
            />
            <Link
              className="py-2 px-4 bg-blue-600 rounded-lg text-white flex items-center gap-1"
              href="/dashboard/categories/add"
            >
              <IoMdAddCircle />
              New Category
            </Link>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <td className="p-3">Categories</td>
                <td className="p-3">Date</td>
                <td className="p-3">Tools</td>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <>
                  <tr key={item._id} className="border-t">
                    <td className="p-3">{item.category}</td>
                    <td className="p-3">
                      {item.createdAt.toString().split("T")[0]}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <Link
                          className="bg-lime-500 text-white py-2 px-3 rounded-lg"
                          href={`/dashboard/categories/${item._id}`}
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
              length: Math.ceil(filteredCategories.length / itemsPerPage),
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
    </>
  );
};

export default Categories;
