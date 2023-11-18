"use client";
import React from "react";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import baseUrl from "@/utils/baseUrl";

const DeleteUser = ({ id }) => {
  const deleteImage = async (publicId) => {
    const newPublicId = publicId;
    const res = await fetch(`${baseUrl}/api/removeImage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPublicId }),
    });
  };

  const removeBlog = async () => {
    const confirmed = confirm("Are you sure ?");
    if (confirmed) {
      const res = await fetch(`${baseUrl}/api/register?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        const user = await res.json();
        const { publicId } = user;
        await deleteImage(publicId);
        window.location.reload();
        toast.success("User Deleted");
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

export default DeleteUser;
