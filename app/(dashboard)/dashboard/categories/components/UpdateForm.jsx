"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

const UpdateForm = ({ id, category }) => {
  const [newCategory, setNewCategory] = useState(category);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(`/api/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newCategory }),
      });

      if (res.ok) {
        toast.success("Category Successfully Update");
        router.push("/dashboard/categories");
        router.refresh();
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
        <form
          onSubmit={handleSubmit}
          className="max-w-md flex flex-col gap-5 mt-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              className="py-3 px-3 rounded-lg text-base border-[2px] border-black"
              placeholder="Enter Here..."
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-4 bg-black text-white rounded-lg w-max"
          >
            {loading ? <LuLoader2 className="animate-spin" /> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateForm;
