"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch(`/api/post`);

        if (!res.ok) {
          throw new Error("Failed to fetch Posts");
        }

        const result = await res.json();
        if (typeof result !== "undefined") {
          setBlogs(result);
        }
      } catch (error) {
        console.log("Error loading Blogs :", error);
      }
    };
    getBlogs();
  }, []);

  const firstPost = blogs && blogs.posts[0];
  const firstFourPost = blogs ? blogs.posts.slice(0, 5) : [];
  const remainingPosts = firstFourPost.length > 1 ? firstFourPost.slice(1) : [];
  const remainingObjects = blogs ? blogs.posts.slice(5) : [];
  return (
    <>
      <section>
        <div className="container mx-auto mt-5 mb-20">
          <div className="grid grid-cols-2 gap-10 ">
            <div>
              {firstPost ? (
                <>
                  <Link href={`/blog/${firstPost._id}`}>
                    <div className="relative w-full h-[350px] rounded-lg">
                      <Image
                        src={`${firstPost.imageUrl}`}
                        fill={true}
                        alt="blog Banner"
                        className="rounded-lg"
                      />
                    </div>
                    <div className="mt-5 ">
                      <h2 className="text-xl font-semibold text-black">
                        {firstPost.title}
                      </h2>
                      <p className="desc mt-3">{firstPost.description}</p>
                    </div>
                  </Link>
                  <div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        {firstPost.authorId.name}
                      </span>
                      <span className="text-gray-300">in</span>
                      <Link
                        href={`/blog/category/${firstPost.categoryId._id}`}
                        className="text-pink-600 hover:text-gray-600 transition-all duration-200"
                      >
                        {firstPost.categoryId.category}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>
                        {firstPost.createdAt.toString().split("T")[0]}
                      </span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full bg-gray-300 animate-pulse h-[350px]"></div>
                </>
              )}
            </div>
            <div>
              {remainingPosts.map((item) => (
                <>
                  <div key={item._id} className="grid grid-cols-3 gap-5 mb-3">
                    <Link className="" href={`/blog/${item._id}`}>
                      <div className="relative h-[130px] w-[200px]">
                        <Image
                          src={`${item.imageUrl}`}
                          fill={true}
                          alt="Blog post"
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </Link>
                    <div className="col-span-2 ">
                      <Link href={`/blog/${item._id}`}>
                        <h2 className="text-xl font-semibold text-black">
                          {item.title}
                        </h2>
                      </Link>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                          {item.authorId.name}
                        </span>
                        <span className="text-gray-300">in</span>

                        <Link
                          href={`/blog/category/${item.categoryId._id}`}
                          className="text-pink-600 hover:text-gray-600 transition-all duration-200"
                        >
                          {item.categoryId.category}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                        <span>{item.createdAt.toString().split("T")[0]}</span>
                        <span>.</span>
                        <span>17 min read</span>
                        <AiFillStar />
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 ">
        <div className="container mx-auto ">
          <div className="flex gap-10 relative h-auto">
            <div className="">
              <h2 className="heading border-b pb-3 mb-6">All Posts</h2>

              {remainingObjects.map((item) => (
                <>
                  <div className="flex gap-5 mb-4 ">
                    <div className="flex-auto">
                      <Link
                        key={item._id}
                        href={`/blog/${item._id}`}
                        className="mt-6"
                      >
                        <h2 className="text-2xl font-semibold text-black mb-3">
                          {item.title}
                        </h2>
                        <p className="desc mb-3">{item.description}</p>
                      </Link>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                          {item.authorId.name}
                        </span>
                        <span className="text-gray-300">in</span>
                        <Link
                          href={`/blog/category/${item.categoryId._id}`}
                          className="text-pink-600 hover:text-gray-600 transition-all duration-200"
                        >
                          {item.categoryId.category}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                        <span>{item.createdAt.toString().split("T")[0]}</span>
                        <span>.</span>
                        <span>17 min read</span>
                        <AiFillStar />
                      </div>
                    </div>
                    <div className="flex-auto">
                      <Link href={`/blog/${item._id}`}>
                        <div className="relative w-[350px] h-[220px]">
                          <Image
                            src={`${item.imageUrl}`}
                            fill={true}
                            alt="Blog post"
                            className="rounded-lg object-cover"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="sticky top-16 h-screen">
              <div className="">
                <h2 className="heading border-b pb-3 ">Popular Posts</h2>
                <div className="flex mt-6 gap-2 mb-5">
                  <div className="text-4xl text-gray-200 font-semibold">01</div>
                  <div className="flex gap-5 mb-4 ">
                    <div className="flex-auto">
                      <h2 className="text-lg font-semibold text-black mb-2">
                        How Much Does it Cost to Make a Social Media App Like
                        Instagram
                      </h2>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                          Beantsingh Duggal
                        </span>
                        <span className="text-gray-300">in</span>
                        <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                          Mobile
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6 gap-2 mb-5">
                  <div className="text-4xl text-gray-200 font-semibold">02</div>
                  <div className="flex gap-5 mb-4 ">
                    <div className="flex-auto">
                      <h2 className="text-lg font-semibold text-black mb-2">
                        How Much Does it Cost to Make a Social Media App Like
                        Instagram
                      </h2>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                          Beantsingh Duggal
                        </span>
                        <span className="text-gray-300">in</span>
                        <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                          Mobile
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6 gap-2 mb-5">
                  <div className="text-4xl text-gray-200 font-semibold">03</div>
                  <div className="flex gap-5 mb-4 ">
                    <div className="flex-auto">
                      <h2 className="text-lg font-semibold text-black mb-2">
                        How Much Does it Cost to Make a Social Media App Like
                        Instagram
                      </h2>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                          Beantsingh Duggal
                        </span>
                        <span className="text-gray-300">in</span>
                        <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                          Mobile
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6 gap-2 mb-5">
                  <div className="text-4xl text-gray-200 font-semibold">04</div>
                  <div className="flex gap-5 mb-4 ">
                    <div className="flex-auto">
                      <h2 className="text-lg font-semibold text-black mb-2">
                        How Much Does it Cost to Make a Social Media App Like
                        Instagram
                      </h2>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                          Beantsingh Duggal
                        </span>
                        <span className="text-gray-300">in</span>
                        <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                          Mobile
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6 gap-2 mb-5">
                  <div className="text-4xl text-gray-200 font-semibold">05</div>
                  <div className="flex gap-5 mb-4 ">
                    <div className="flex-auto">
                      <h2 className="text-lg font-semibold text-black mb-2">
                        How Much Does it Cost to Make a Social Media App Like
                        Instagram
                      </h2>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                          Beantsingh Duggal
                        </span>
                        <span className="text-gray-300">in</span>
                        <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                          Mobile
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
