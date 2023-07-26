import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import MobileNav from "@/components/MobileNav/MobileNav";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Nexgeno PVT LTD",
  description: "Nexgeno PVT LTD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
