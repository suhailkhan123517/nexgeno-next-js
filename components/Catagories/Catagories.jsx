import Link from "next/link";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import DeleteButton from "../DeleteButton/DeleteButton";

const getCategories = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Categories");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading Categories :", error);
  }
};

const Categories = async () => {
  const { categories } = await getCategories();

  return (
    <>
      <table className="w-full  border-collapse border border-slate-400 mt-10">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2">Catagories</th>
            <th className="border border-slate-300 p-2 ">Description</th>
            <th className="border border-slate-300 p-2">Date</th>
            <th className="border border-slate-300 p-2">Tools</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item) => (
            <tr key={item._id} className="group ">
              <td className="border border-slate-300 p-2 ">
                <h1 className="text-xl font-semibold">{item.category}</h1>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
              </td>
              <td className="border border-slate-300 p-2">
                {item.description}
              </td>
              <td className="border border-slate-300 p-2">
                {item.categoryDate}
              </td>
              <td className="border border-slate-300 p-2">
                <div className="flex justify-center gap-3  ">
                  <Link
                    href={`/dashboard/edit-categories/${item._id}`}
                    className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-400 rounded-md"
                  >
                    <FaEdit />
                  </Link>
                  <DeleteButton id={item._id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Categories;
