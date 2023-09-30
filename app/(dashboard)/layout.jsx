import Sidebar from "@/components/Sidebar/Sidebar";
import { AuthProvider } from "../Providers";
import "../globals.css";
import { ToasterProvider } from "@/providers/toast-providers";

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
          <div className="flex items-start">
            <Sidebar />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
