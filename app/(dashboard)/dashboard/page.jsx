import Dashboard from "@/app/(dashboard)/dashboard/components/Dashboard";
import { handler } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await getServerSession(handler);
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
