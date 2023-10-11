"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useRouter } from "next/navigation";
import { BiLeftArrowAlt } from "react-icons/bi";

const EditCategories = ({ id, category, description }) => {
  const [newCategory, setNewCategory] = useState(category);
  const [newDescription, setNewDescription] = useState(description);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        `https://nexgeno-next-js.vercel.app/api/categories/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newCategory, newDescription }),
        }
      );

      if (res.ok) {
        toast.success("Categories Updated Successfully");
        router.refresh();
        router.push("/dashboard/catagories");
      } else {
        toast.error("Failed to update a Categories");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start w-full gap-4">
            <label className="text-lg font-medium"> Update Catagories </label>
            <input
              type="text"
              placeholder="Enter Here"
              className="border border-black w-full p-3 rounded-md  outline-indigo-600"
              onChange={(e) => setNewCategory(e.target.value)}
              value={newCategory}
            />
          </div>
          <div className="mt-10 flex flex-col items-start w-full gap-4">
            <label className="text-lg font-medium">
              {" "}
              Update Short Description{" "}
            </label>
            <textarea
              name=""
              id=""
              rows="5"
              placeholder="Enter Here"
              className="border border-black w-full p-3 rounded-md  outline-indigo-600"
              onChange={(e) => setNewDescription(e.target.value)}
              value={newDescription}
            ></textarea>
          </div>{" "}
          <div className="flex items-center justify-between mt-10 mb-24">
            <Link
              href={"/dashboard/catagories"}
              className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md flex items-center gap-1"
            >
              <BiLeftArrowAlt />
              Back
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md"
            >
              {loading ? <ImSpinner9 className="animate-spin" /> : "Update"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditCategories;
