import React from "react";
import UpdateForm from "@/app/(dashboard)/dashboard/post/components/UpdateForm";
import baseUrl from "@/utils/baseUrl";

const getPost = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/post/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to a fetch post");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const UpdatePost = async ({ params }) => {
  const { id } = params;
  const { post } = await getPost(id);

  return (
    <>
      <UpdateForm id={id} post={post} />
    </>
  );
};

export default UpdatePost;
