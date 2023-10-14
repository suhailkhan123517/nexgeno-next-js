import Dashboard from "@/components/Dashboard/Dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { handler } from "@/app/api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(handler);
  if (!session) redirect("/sign-in");
  return (
    <>
      <Dashboard />
    </>
  );
};

export default page;
