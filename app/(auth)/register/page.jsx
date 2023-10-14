"use client";
import Register from "@/components/Register/Register";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const RegisterPage = () => {
  const { data: session } = useSession();
  if (session?.user?.role === "user") redirect("/dashboard");
  return (
    <>
      <Register />
    </>
  );
};

export default RegisterPage;
