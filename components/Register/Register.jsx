"use client";
import baseUrl from "@/utils/baseUrl";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import { useRouter } from "next/navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !role) {
      toast.error("All Field Required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password Should be 6 character");
      return;
    }

    try {
      setLoading(true);

      const userExists = await fetch(`${baseUrl}/api/userExists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await userExists.json();

      if (user) {
        toast.error("User already Exists");
        return;
      }

      const res = await fetch(`${baseUrl}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (res.ok) {
        toast.success("User Registered Successfully");
        router.push("/dashboard/admin");
      } else {
        toast.error("User registration failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <section className="w-full h-screen grid place-items-center bg-[#fffbfd]">
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
                  Register
                </h1>
                <p className="text-lg text-gray-600">continue to Nexgeno</p>
              </div>
              <div className="w-full">
                <label
                  htmlFor="authorization"
                  className="font-semibold text-lg text-black tracking-wide"
                >
                  Authorization
                </label>
                <select
                  id="authorization"
                  className=" w-full rounded-md border border-black outline-indigo-600  py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>Select</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1 mt-5">
                <label className="text-black font-medium">Username</label>
                <input
                  type="Name"
                  className="border border-gray-300 py-2 px-4 rounded-md"
                  name="email"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <label className="text-black font-medium">Email Address</label>
                <input
                  type="email"
                  className="border border-gray-300 py-2 px-4 rounded-md"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1 mt-4">
                <label className="text-black font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border border-gray-300 py-2 px-4 rounded-md w-full"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {showPassword ? (
                    <>
                      <AiFillEyeInvisible
                        className="absolute top-[8px]   right-3 text-3xl text-gray-700 cursor-pointer"
                        onClick={showPasswordToggle}
                      />
                    </>
                  ) : (
                    <>
                      <AiFillEye
                        className="absolute top-[8px]  right-3 text-3xl text-gray-700 cursor-pointer"
                        onClick={showPasswordToggle}
                      />
                    </>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="bg-gray-800 hover:bg-black w-full mt-7 p-2 flex items-center justify-center gap-3 rounded-md text-white transition duration-300"
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

export default Register;
