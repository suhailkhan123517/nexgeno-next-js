import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

const BlogAdmin = () => {
  return (
    <>
      <Link
        href="/dashboard/blog-write"
        className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md"
      >
        Add Blogs
      </Link>
      <div className="flex items-start justify-between gap-4 mt-10 border-[1px] py-1 pl-1 pr-4 rounded-lg">
        <div className="relative w-[350px] h-[200px]  rounded-lg">
          <Image
            src="/blog_banner.webp"
            fill={true}
            alt="blog Banner"
            className="rounded-lg"
          />
        </div>
        <div className="">
          <h2 className="text-xl font-semibold text-black">
            How To Hire Mobile App Developers: A Detailed Guide for 2023
          </h2>
          <h6 className="mt-5">Written By:</h6>
          <h3 className="text-xl font-semibold text-black">Tamir sir</h3>
          <div className="flex justify-end mt-12 gap-3">
            <Link
              href="/dashboard/blog-edit/123"
              className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md"
            >
              <FaEdit />
            </Link>
            <button className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white hover:bg-black/70 rounded-md">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAdmin;
