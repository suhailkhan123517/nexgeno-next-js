"use client";
import Link from "next/link";
import Search from "../../../../../components/Search/Search";
import { IoMdAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { FaEye, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Posts = () => {
  const { data: session } = useSession();
  if (!session) redirect("/sign-in");
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(
          `/api/user-post?authorId=${session?.user?._id}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Posts");
        }

        const posts = await res.json();
        setData(posts);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, [session?.user?._id]);

  const deleteImage = async (publicId) => {
    const res = await fetch(`/api/removeImage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ publicId }),
    });
  };

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure ?");
    if (confirmed) {
      const res = await fetch(`/api/post?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        const post = await res.json();
        const { publicId } = post;
        console.log(publicId);
        await deleteImage(publicId);
        toast.success("Post Deleted");
        window.location.reload();
      }
    }
  };

  const filteredPosts = data
    ? data.posts.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.categoryId.category
            .toLowerCase()
            .includes(query.toLowerCase()) ||
          item.createdAt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="bg-white shadow-lg p-5 rounded-lg mt-5">
        <div className="flex items-center justify-between">
          <Search setQuery={setQuery} placeholder="Search for a user..." />
          <Link
            className="py-2 px-4 bg-blue-600 rounded-lg text-white flex items-center gap-1"
            href="/dashboard/post/add"
          >
            <IoMdAddCircle />
            New Post
          </Link>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <td className="p-3">Title</td>
              <td className="p-3">Author</td>
              <td className="p-3">Category</td>
              <td className="p-3">Date</td>
              <td className="p-3">Tools</td>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <>
                <tr key={item._id} className="border-t">
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="relative h-10 w-10">
                        <Image
                          src={item.authorId.imageUrl || "/noavatar.png"}
                          fill={true}
                          alt="Author image"
                          className="object-cover rounded-full"
                        />
                      </div>

                      {item.authorId.name}
                    </div>
                  </td>
                  <td>{item.categoryId.category}</td>
                  <td className="p-3">
                    {" "}
                    {item.createdAt.toString().split("T")[0]}
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <Link
                        className="bg-blue-500 text-white py-2 px-3 rounded-lg"
                        href={`/blog/${item._id}`}
                      >
                        <FaEye />
                      </Link>
                      <Link
                        className="bg-lime-500 text-white py-2 px-3 rounded-lg"
                        href={`/dashboard/post/${item._id}`}
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
            length: Math.ceil(filteredPosts.length / itemsPerPage),
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

export default Posts;
