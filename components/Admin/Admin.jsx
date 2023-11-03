"use client";
import baseUrl from "@/utils/baseUrl";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/register`);

        if (!res.ok) {
          throw new Error("Failed to fetch User");
        }

        const result = await res.json();
        setUser(result);
      } catch (error) {
        console.log("Error loading User :", error);
      }
    };
    getUser();
  }, []);
  return (
    <>
      <section>
        <Link
          href="/dashboard/register"
          className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md"
        >
          Add User
        </Link>
        <table className="w-full  border-collapse border border-slate-400 mt-10">
          <thead>
            <tr>
              <th className="border border-slate-300 p-2">Username</th>
              <th className="border border-slate-300 p-2 ">Email Address</th>
              <th className="border border-slate-300 p-2">Access</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.user.map((item) => (
                <tr key={item._id} className="">
                  <td className="border border-slate-300 p-2 ">{item.name}</td>
                  <td className="border border-slate-300 p-2">{item.email}</td>
                  <td className="border border-slate-300 p-2">{item.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Admin;
