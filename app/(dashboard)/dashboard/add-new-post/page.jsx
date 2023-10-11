"use client";
import BlogWrite from "@/components/BlogWrite/BlogWrite";
import React, { useEffect, useState } from "react";

const BlogWritePage = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch(
          "https://nexgeno-next-js.vercel.app/api/categories"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch Categories");
        }

        const result = await res.json();
        setCategories(result);
      } catch (error) {
        console.log("Error loading Categories :", error);
      }
    };
    getCategories();
  }, []);

  return (
    <>
      <BlogWrite categories={categories} />
    </>
  );
};

export default BlogWritePage;
