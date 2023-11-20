"use client";
import { MdSupervisedUserCircle } from "react-icons/md";
import React, { useEffect, useState } from "react";
import AllPosts from "./AllPost";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState(null);
  const [allPost, setAllPost] = useState(null);
  const [myPost, setMyPost] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(`/api/register`);

        if (!res.ok) {
          throw new Error("Failed to fetch User");
        }

        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.log("Error Loading Users", error);
      }
    };
    getUsers();

    const getPosts = async () => {
      try {
        const res = await fetch("/api/post");

        if (!res.ok) {
          throw new Error("Failed to fetch Posts");
        }

        const posts = await res.json();
        setAllPost(posts);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();

    const getMyPost = async () => {
      try {
        const res = await fetch(
          `/api/user-post?authorId=${session?.user?._id}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch My Post");
        }

        const post = await res.json();
        setMyPost(post);
      } catch (error) {
        console.log(error);
      }
    };

    getMyPost();
    const getCategories = async () => {
      try {
        const res = await fetch(`/api/categories`);

        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }

        const categories = await res.json();
        setCategories(categories);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, [session?.user?._id]);

  return (
    <>
      <div className="mt-5">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-between">
            <div className="bg-white p-5 rounded-lg flex justify-between items-center gap-5 cursor-pointer shadow-lg w-full">
              <div className="flex flex-col gap-2">
                <span className="">Total User</span>
                <span className="text-2xl font-medium">
                  {users && users.user.length}
                </span>
              </div>
              <div className="w-14 h-14 rounded-md grid place-items-center bg-gradient-to-tr from-[#ec068b] to-[#8e22bf]">
                <MdSupervisedUserCircle size={30} className="text-white" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg flex justify-between items-center gap-5 cursor-pointer shadow-lg w-full">
              <div className="flex flex-col gap-2">
                <span className="">Total Post</span>
                <span className="text-2xl font-medium">
                  {allPost && allPost.posts.length}
                </span>
              </div>
              <div className="w-14 h-14 rounded-md grid place-items-center bg-gradient-to-tr from-[#ec068b] to-[#8e22bf]">
                <MdSupervisedUserCircle size={30} className="text-white" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg flex justify-between items-center gap-5 cursor-pointer shadow-lg w-full">
              <div className="flex flex-col gap-2">
                <span className="">My Post</span>
                <span className="text-2xl font-medium">
                  {myPost && myPost.posts.length}
                </span>
              </div>
              <div className="w-14 h-14 rounded-md grid place-items-center bg-gradient-to-tr from-[#ec068b] to-[#8e22bf]">
                <MdSupervisedUserCircle size={30} className="text-white" />
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg flex justify-between items-center gap-5 cursor-pointer shadow-lg w-full">
              <div className="flex flex-col gap-2">
                <span className="">Total Categories</span>
                <span className="text-2xl font-medium">
                  {categories && categories.categories.length}
                </span>
              </div>
              <div className="w-14 h-14 rounded-md grid place-items-center bg-gradient-to-tr from-[#ec068b] to-[#8e22bf]">
                <MdSupervisedUserCircle size={30} className="text-white" />
              </div>
            </div>
          </div>
          <AllPosts allPost={allPost} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
