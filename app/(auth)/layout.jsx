import { AuthProvider } from "../Providers";
import "../globals.css";
import { ToasterProvider } from "@/providers/toast-providers";

export const metadata = {
  title: "Nexgeno | Authentication",
  description:
    "Offshore Software Development & IT Consulting Company in mumbai india",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToasterProvider />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
