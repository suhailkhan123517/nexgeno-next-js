"use client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import baseUrl from "@/utils/baseUrl";

const DeleteBlog = ({ id }) => {
  const removeBlog = async () => {
    const confirmed = confirm("Are you sure ?");
    if (confirmed) {
      const res = await fetch(`${baseUrl}/api/blog?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        window.location.reload();
        toast.success("Blog Deleted");
      }
    }
  };
  return (
    <>
      <button
        onClick={removeBlog}
        className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white hover:bg-black/70 rounded-md"
      >
        <FaTrash />
      </button>
    </>
  );
};

export default DeleteBlog;
