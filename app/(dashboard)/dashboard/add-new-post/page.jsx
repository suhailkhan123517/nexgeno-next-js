import React from "react";
import BlogWrite from "@/components/BlogWrite/BlogWrite";

const getCategories = async () => {
  try {
    const res = await fetch(
      "https://nexgeno-next-js.vercel.app/api/categories",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Categories");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading Categories :", error);
  }
};

const BlogWritePage = async () => {
  const { categories } = await getCategories();
  return (
    <>
      <BlogWrite categories={categories} />
    </>
  );
};

export default BlogWritePage;
