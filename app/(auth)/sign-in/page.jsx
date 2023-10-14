import Login from "@/components/Login/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { handler } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(handler);
  if (session) redirect("/dashboard");
  return (
    <>
      <Login />
    </>
  );
};

export default page;
