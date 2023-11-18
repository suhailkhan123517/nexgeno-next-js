import Sidebar from "@/components/Sidebar/Sidebar";
import { AuthProvider } from "../Providers";
import "../globals.css";
import { ToasterProvider } from "@/providers/toast-providers";
import TopBar from "@/components/TopBar/TopBar";

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
          <div className="flex bg-[#f8f9fa]">
            <div className="sidebar p-5 min-h-screen ">
              <Sidebar />
            </div>
            <div className="content p-5">
              <TopBar />
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
