import baseUrl from "@/utils/baseUrl";
import React from "react";
import CategoryPost from "../components/CategoryPost";

const getPostCategoryById = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/category-post?categoryId=${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Category Post");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const CategoryPage = async ({ params }) => {
  const { id } = params;
  const posts = await getPostCategoryById(id);
  return (
    <>
      <CategoryPost post={posts} />
    </>
  );
};

export default CategoryPage;
