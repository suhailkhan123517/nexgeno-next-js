import Image from "next/image";
import React from "react";

const getBlogById = async (id) => {
  try {
    const res = await fetch(
      window.location.origin.includes("localhost")
        ? `http://localhost:3000/api/blog/${id}`
        : `${window.location.origin}/api/blog/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Blog");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export async function generateMetadata({ params }) {
  const blogs = await getBlogById(params.id);
  return {
    title: blogs.seoTitle,
    description: blogs.metaDescription,
  };
}

const BlogDetails = async ({ params }) => {
  const { blogs } = await getBlogById(params.id);
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-5 flex flex-col gap-6">
              <h5 className="text-pink-600 text-xl font-medium">
                {blogs.catagoriesData}
              </h5>
              <h2 className="font-semibold text-4xl leading-snug text-black">
                {blogs.title}
              </h2>
              <p className="desc">{blogs.description}</p>
              <div>
                <h3>
                  Written By{" "}
                  <span className=" font-semibold">{blogs.writer}</span>
                </h3>
                <p>{blogs.blogDate}</p>
              </div>
            </div>
            <div>
              <div className="relative w-full h-[350px] rounded-lg">
                <Image
                  src={`/${blogs.image}`}
                  fill={true}
                  alt="blog Banner"
                  className="rounded-lg hover:-translate-y-2 transition-all duration-200"
                />
              </div>
            </div>
          </div>
          <div className="my-20">
            <div dangerouslySetInnerHTML={{ __html: blogs.textEditor }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
