import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const page = () => {
  return (
    <>
      <section>
        <div className="container mx-auto mt-5 mb-20">
          <div className="grid grid-cols-2 gap-10 ">
            <div>
              <Link href="/blog/123">
                <div className="relative w-full h-[350px] rounded-lg">
                  <Image
                    src="/blog_banner.webp"
                    fill={true}
                    alt="blog Banner"
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-5 ">
                  <h2 className="text-xl font-semibold text-black">
                    How To Hire Mobile App Developers: A Detailed Guide for 2023
                  </h2>
                  <p className="desc mt-3">
                    In the world that debates about whether AI will replace the
                    human workforce, the extensive adoption and use of...
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                      Beantsingh Duggal
                    </span>
                    <span className="text-gray-300">in</span>
                    <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                      Mobile
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                    <span>Sep 18</span>
                    <span>.</span>
                    <span>17 min read</span>
                    <AiFillStar />
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <div className="flex items-center gap-5 mb-4">
                <Image
                  src="/small_blog_post_1.webp"
                  width={200}
                  height={200}
                  alt="Blog post"
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-black">
                    How To Hire Mobile App Developers: A Detailed Guide for 2023
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
                  <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                    <span>Sep 18</span>
                    <span>.</span>
                    <span>17 min read</span>
                    <AiFillStar />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-4">
                <Image
                  src="/small_blog_post_2.webp"
                  width={200}
                  height={200}
                  alt="Blog post"
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-black">
                    How To Hire Mobile App Developers: A Detailed Guide for 2023
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
                  <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                    <span>Sep 18</span>
                    <span>.</span>
                    <span>17 min read</span>
                    <AiFillStar />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-4">
                <Image
                  src="/small_blog_post_3.webp"
                  width={200}
                  height={200}
                  alt="Blog post"
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-black">
                    How To Hire Mobile App Developers: A Detailed Guide for 2023
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
                  <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                    <span>Sep 18</span>
                    <span>.</span>
                    <span>17 min read</span>
                    <AiFillStar />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-4">
                <Image
                  src="/small_blog_post.webp"
                  width={200}
                  height={200}
                  alt="Blog post"
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-black">
                    How To Hire Mobile App Developers: A Detailed Guide for 2023
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
                  <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                    <span>Sep 18</span>
                    <span>.</span>
                    <span>17 min read</span>
                    <AiFillStar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 ">
        <div className="container mx-auto ">
          <div className="flex gap-10 relative h-auto">
            <div className="">
              <h2 className="heading border-b pb-3">All Posts</h2>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_1.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_2.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_3.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_4.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_1.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_2.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_3.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_4.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_1.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_2.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_3.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex gap-5 mb-4 ">
                  <div className="flex-auto">
                    <h2 className="text-2xl font-semibold text-black mb-3">
                      How To Hire Mobile App Developers: A Detailed Guide for
                      2023
                    </h2>
                    <p className="desc mb-3">
                      In the current digitally-driven landscape, restaurants and
                      food startups are undergoing a paradigm shift. Gone are
                      the days when...
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600 hover:text-pink-600 transition-all duration-200 ">
                        Beantsingh Duggal
                      </span>
                      <span className="text-gray-300">in</span>
                      <span className="text-pink-600 hover:text-gray-600 transition-all duration-200">
                        Mobile
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
                      <span>Sep 18</span>
                      <span>.</span>
                      <span>17 min read</span>
                      <AiFillStar />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="relative w-[350px] h-[220px]">
                      <Image
                        src="/all_post_4.webp"
                        fill={true}
                        alt="Blog post"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
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

export default page;
