"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import baseUrl from "@/utils/baseUrl";

const BlogPage = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/blog`);

        if (!res.ok) {
          throw new Error("Failed to fetch Blogs");
        }

        const result = await res.json();
        console.log(result);
        if (typeof result !== "undefined") {
          setBlogs(result);
        }
      } catch (error) {
        console.log("Error loading Blogs :", error);
      }
    };
    getBlogs();
  }, []);
  console.log(blogs);

  const lastBlog = blogs && blogs.blogs[blogs.blogs.length - 1];
  console.log(lastBlog);
  const lastFourObjects = blogs ? blogs.blogs.slice(-5) : [];
  const remainingObjects = blogs
    ? lastFourObjects.slice(0, lastFourObjects.length - 1)
    : [];
  const reversedCatagoriesBlog = blogs ? [...remainingObjects].reverse() : [];
  const reversedBlogs = blogs ? [...blogs.blogs].reverse() : [];
  return (
    <>
      <section>
        <div className="container mx-auto mt-5 mb-20">
          <div className="grid grid-cols-2 gap-10 ">
            <div>
              {lastBlog ? (
                <Link href={`/blog/${lastBlog._id}`}>
                  <div className="relative w-full h-[350px] rounded-lg">
                    <Image
                      src={`/${lastBlog.image}`}
                      fill={true}
                      alt="blog Banner"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-5 ">
                    <h2 className="text-xl font-semibold text-black">
                      {lastBlog.title}
                    </h2>
                    <p className="desc mt-3">{lastBlog.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        {lastBlog.writer}
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        {lastBlog.catagoriesData}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>{lastBlog.blogDate}</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                </Link>
              ) : (
                <>
                  <div className="w-full bg-gray-300 animate-pulse h-[350px]"></div>
                </>
              )}
            </div>
            <div>
              {reversedCatagoriesBlog.map((item) => (
                <>
                  <Link href={`/blog/${item._id}`}>
                    <div
                      key={item._id}
                      className="flex items-center gap-5 mb-4"
                    >
                      <Image
                        src={`/${item.image}`}
                        width={200}
                        height={200}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                      <div>
                        <h2 className="text-xl font-semibold text-black">
                          {item.title}
                        </h2>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                            {item.writer}
                          </span>
                          <span className="text-gray-300">in</span>
                          <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                            {item.catagoriesData}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                          <span>{item.blogDate}</span>
                          <span>.</span>
                          <span>17 min read</span>
                          <AiFillStar />
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

      <section className="mb-20 ">
        <div className="container mx-auto ">
          <div className="flex gap-10 relative h-auto">
            <div className="">
              <h2 className="heading border-b pb-3 mb-6">All Posts</h2>

              {reversedBlogs.map((item) => (
                <>
                  <Link
                    key={item._id}
                    href={`/blog/${item._id}`}
                    className="mt-6"
                  >
                    <div className="flex gap-5 mb-4 ">
                      <div className="flex-auto">
                        <h2 className="text-2xl font-semibold text-black mb-3">
                          {item.title}
                        </h2>
                        <p className="desc mb-3">{item.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                            {item.writer}
                          </span>
                          <span className="text-gray-300">in</span>
                          <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                            {item.catagoriesData}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                          <span>{item.blogDate}</span>
                          <span>.</span>
                          <span>17 min read</span>
                          <AiFillStar />
                        </div>
                      </div>
                      <div className="flex-auto">
                        <div className="relative w-[350px] h-[220px]">
                          <Image
                            src={`/${item.image}`}
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

export default BlogPage;
