import baseUrl from "@/utils/baseUrl";
import Image from "next/image";
import React from "react";
import BlogId from "../components/BlogId";

const getBlogById = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/post/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export async function generateMetadata({ params }) {
  const { post } = await getBlogById(params.id);
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

const BlogDetails = async ({ params }) => {
  const { post } = await getBlogById(params.id);
  return (
    <>
      <BlogId post={post} />
    </>
  );
};

export default BlogDetails;
