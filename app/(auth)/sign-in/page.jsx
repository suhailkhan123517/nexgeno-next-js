import Login from "@/components/Login/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
    <>
      <Login />
    </>
  );
};

export default page;
