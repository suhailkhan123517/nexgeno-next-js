"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import DeleteButton from "../DeleteButton/DeleteButton";

const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          window.location.origin.includes("localhost")
            ? `http://localhost:3000/api/categories`
            : `${window.location.origin}/api/categories`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Categories");
        }

        const result = await res.json();
        setCategories(result);
      } catch (error) {
        console.log("Error loading Categories :", error);
      }
    };
    getCategories();
  }, []);

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
          {categories &&
            categories.categories.map((item) => (
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
