import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const CategoryPost = ({ post }) => {
  return (
    <>
      <section className="my-14">
        <div className="container mx-auto ">
          <div className="flex gap-10 relative h-auto">
            <div className="">
              <h2 className="heading border-b pb-3 mb-6">All Category</h2>

              {post &&
                post.posts.map((item) => (
                  <>
                    <Link
                      key={item._id}
                      href={`/blog/${item._id}`}
                      className="mt-6"
                    >
                      <div className="flex gap-5 justify-between mb-4 ">
                        <div className="">
                          <h2 className="text-2xl font-semibold text-black mb-3">
                            {item.title}
                          </h2>
                          <p className="desc mb-3">{item.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                              {item.authorId.name}
                            </span>
                            <span className="text-gray-300">in</span>
                            <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                              {item.categoryId.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                            <span>
                              {item.createdAt.toString().split("T")[0]}
                            </span>
                            <span>.</span>
                            <span>17 min read</span>
                            <AiFillStar />
                          </div>
                        </div>
                        <div className="">
                          <div className="relative w-[350px] h-[220px]">
                            <Image
                              src={`${item.imageUrl}`}
                              fill={true}
                              alt="Blog post"
                              className="rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPost;
