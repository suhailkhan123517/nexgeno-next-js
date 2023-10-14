"use client";
import Admin from "@/components/Admin/Admin";
import React from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const AdminPage = () => {
  const { data: session } = useSession();
  if (session?.user?.role === "user") redirect("/dashboard");
  return (
    <>
      <Admin />
    </>
  );
};

export default AdminPage;
