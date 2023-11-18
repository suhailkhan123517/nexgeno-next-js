"use client";
import baseUrl from "@/utils/baseUrl";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useRouter } from "next/navigation";

const EditUserForm = ({ id, name, title, role }) => {
  const [newUsername, setNewUsername] = useState(name);
  const [newTitle, setNewTitle] = useState(title);
  const [newRole, setNewRole] = useState(role);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`${baseUrl}/api/register/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newUsername,
          newTitle,
          newRole,
        }),
      });

      if (res.ok) {
        toast.success("User Successfully Update");
        router.refresh();
        router.push("/dashboard/admin");
      } else {
        toast.error("Internal Error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="w-full grid place-items-center">
        <div className="w-full max-w-lg relative">
          <div className="bg-white py-8 px-10 shadow-2xl  rounded-3xl">
            <Image
              src="/images/logo.webp"
              alt="logo"
              width={200}
              height={100}
              className="object-contain"
            />
            <div className="grid grid-cols-2 gap-5 mt-4">
              <div>
                <h1 className="font-satoshi font-semibold text-xl text-black tracking-wide">
                  User Update
                </h1>
                <p className="text-lg text-gray-600">continue to Nexgeno</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 mt-5">
                <label className="text-black font-medium">Username</label>
                <input
                  type="text"
                  className="border border-gray-300 py-2 px-4 rounded-md"
                  placeholder="example: Sunder Pichai"
                  onChange={(e) => setNewUsername(e.target.value)}
                  value={newUsername}
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <label className="text-black font-medium">Title</label>
                <input
                  type="text"
                  className="border border-gray-300 py-2 px-4 rounded-md"
                  placeholder="example: CEO of Google"
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newTitle}
                />
              </div>
              <div className="mt-5">
                <label className="text-black font-medium">Role</label>
                <select
                  id="authorization"
                  className=" w-full rounded-md border border-black outline-indigo-600  py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
                  onChange={(e) => setNewRole(e.target.value)}
                  value={newRole}
                >
                  <option>Select</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-gray-800 hover:bg-black w-full mt-8 p-2 flex items-center justify-center gap-3 rounded-md text-white transition duration-300"
              >
                {loading ? (
                  <>
                    <ImSpinner9 className="animate-spin text-2xl" />
                    Continue...
                  </>
                ) : (
                  "Continue"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditUserForm;
