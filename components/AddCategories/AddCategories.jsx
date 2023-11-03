"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useRouter } from "next/navigation";
import baseUrl from "@/utils/baseUrl";

const AddCategories = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [categoryDate, setCategoryDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const currentMonthName = months[month];
    const dateStr = `${day} ${currentMonthName} ${year}`;

    setCategoryDate(dateStr);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || !description) {
      toast.error("category and description are required.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${baseUrl}/api/categories`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ category, description, categoryDate }),
      });

      if (res.ok) {
        toast.success("Categories Create Successfully");
        router.refresh();
        router.push("/dashboard/catagories");
      } else {
        toast.error("Failed to create a Categories");
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
            <label className="text-lg font-medium"> Add Catagories </label>
            <input
              type="text"
              placeholder="Enter Here"
              className="border border-black w-full p-3 rounded-md  outline-indigo-600"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            />
          </div>
          <div className="mt-10 flex flex-col items-start w-full gap-4">
            <label className="text-lg font-medium"> Short Description </label>
            <textarea
              name=""
              id=""
              rows="5"
              placeholder="Enter Here"
              className="border border-black w-full p-3 rounded-md  outline-indigo-600"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>{" "}
          <div className="flex items-center justify-between mt-10 mb-24">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md"
            >
              {loading ? <ImSpinner9 className="animate-spin" /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCategories;
