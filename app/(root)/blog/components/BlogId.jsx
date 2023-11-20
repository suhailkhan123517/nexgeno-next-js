import Image from "next/image";
import React from "react";

const BlogId = ({ post }) => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-5 flex flex-col gap-6">
              <h5 className="text-pink-600 text-xl font-medium">
                {post.categoryId.category}
              </h5>
              <h2 className="font-semibold text-4xl leading-snug text-black">
                {post.title}
              </h2>
              <p className="desc">{post.description}</p>
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    src={post.authorId.imageUrl || "/noavatar.png"}
                    alt="Profile Image"
                    width={90}
                    height={90}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3>
                    Written By:
                    <span className=" font-semibold">
                      {" "}
                      {post.authorId.name}
                    </span>
                  </h3>
                  <p className="font-semibold text-pink-600">
                    {post.authorId.title}
                  </p>
                  <p>{post.createdAt.toString().split("T")[0]}</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative w-full h-[350px] rounded-lg">
                <Image
                  src={`${post.imageUrl}`}
                  fill={true}
                  alt="blog Banner"
                  className="rounded-lg hover:-translate-y-2 transition-all duration-200"
                />
              </div>
            </div>
          </div>
          <div className="my-20">
            <div dangerouslySetInnerHTML={{ __html: post.textEditor }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogId;
