"use client";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import DeleteBlog from "../DeleteBlog/DeleteBlog";
import { useEffect, useState } from "react";
import baseUrl from "@/utils/baseUrl";

const BlogAdmin = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/blog`);

        if (!res.ok) {
          throw new Error("Failed to fetch Blogs");
        }

        const result = await res.json();
        setBlogs(result);
      } catch (error) {
        console.log("Error loading Blogs :", error);
      }
    };
    getBlogs();
  }, []);

  return (
    <>
      <div>
        <table className="w-full  border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 p-2 ">Title</th>
              <th className="border border-slate-300 p-2">Catagories</th>
              <th className="border border-slate-300 p-2">Date</th>
              <th className="border border-slate-300 p-2">Tools</th>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.blogs.map((item) => (
                <tr key={item._id} className="">
                  <td className="border border-slate-300 p-2 ">
                    <h1 className="text-xl font-semibold">{item.title}</h1>
                  </td>
                  <td className="border border-slate-300 p-2">
                    {item.catagoriesData}
                  </td>
                  <td className="border border-slate-300 p-2">
                    {item.blogDate}
                  </td>
                  <td className="border border-slate-300 p-2">
                    <div className="flex justify-center gap-3">
                      <Link
                        href={`/dashboard/edit-post/${item._id}`}
                        className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md"
                      >
                        <FaEdit />
                      </Link>
                      <DeleteBlog id={item._id} />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BlogAdmin;
