import Sidebar from "@/components/Sidebar/Sidebar";
import { AuthProvider } from "../Providers";
import "../globals.css";
import { ToasterProvider } from "@/providers/toast-providers";
import TopBar from "@/components/TopBar/TopBar";
import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";

export const metadata = {
  title: "Nexgeno | Dashboard",
  description:
    "Offshore Software Development & IT Consulting Company in mumbai india",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToasterProvider />
          <TopBar />
          <main className="flex flex-row ">
            <LeftSidebar />
            <section className="flex min-h-screen flex-1 flex-col items-center  border-l px-6 pb-10 pt-28 max-md:pb-32 sm:px-5">
              <div className="w-full max-w-5xl">{children}</div>
            </section>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
