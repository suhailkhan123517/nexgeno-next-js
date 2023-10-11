"use client";
import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const removeCategory = async () => {
    const confirmed = confirm("Are you sure ?");
    if (confirmed) {
      const res = await fetch(
        `https://nexgeno-next-js.vercel.app/api/categories?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        toast.success("Category Deleted");
        router.refresh();
      }
    }
  };
  return (
    <>
      <button
        onClick={removeCategory}
        className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white hover:bg-black/70 rounded-md"
      >
        <FaTrash />
      </button>
    </>
  );
};

export default DeleteButton;
