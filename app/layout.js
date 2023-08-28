import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import MobileNav from "@/components/MobileNav/MobileNav";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";
import { ToasterProvider } from "@/providers/toast-providers";
import Nav from "@/components/Nav/Nav";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Offshore Software Development & IT Consulting Company in mumbai india",
  description:
    "Offshore Software Development & IT Consulting Company in mumbai india",
};

export default function RootLayout({ children }) {
  function canonicalTag() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "LocalBusiness",
      "name": "Offshore Software Development & IT Consulting Company in mumbai india",
      "image": [
        "https://nexgeno.in/images/nexgeno_logo.png",
        "https://nexgeno.in/images/favicon.jpg",
        "https://nexgeno.in/images/about.jpeg"
       ],
      "description": "Offshore Software Development & IT Consulting Company in mumbai india",
      "url": "https://nexgeno.in/",
      "telephone": "90044 66166",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit No. F-50, First Floor kohinoor City Mall Opp Holly Cross School, Kurla (West) Mumbai, Maharashtra - 400070.",
        "addressLocality": "Mumbai",
        "postalCode": "400070",
        "addressCountry": "India"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },

      "sameAs": [
        "https://instagram.com/nexgenotechnology?igshid=MzRlODBiNWFlZA==",
        "https://www.linkedin.com/company/nexgenotechnologyprivatelimited/",
        "https://www.facebook.com/nexgenotechnology/"
      ]
    }
  `,
    };
  }
  return (
    <html lang="en">
      <head>
        {/* <!-- Open Graph meta tags --> */}
        <meta
          property="og:title"
          content="Offshore Software Development & IT Consulting Company in mumbai india"
        />
        <meta
          property="og:description"
          content="Offshore Software Development & IT Consulting Company in mumbai india"
        />
        <meta
          property="og:image"
          content="http://localhost:3000/images/logo.png"
        />
        <meta property="og:url" content="https://nexgeno.in/" />
        <meta property="og:type" content="website" />
        {/* <!-- Twitter Card meta tags --> */}
        <meta
          name="twitter:card"
          content="At Nexgeno Technology Pvt Ltd, we are dedicated to providing professional web designing and development services."
        />
        <meta
          name="twitter:title"
          content="Offshore Software Development &amp; IT Consulting Company in mumbai india"
        />
        <meta
          name="twitter:description"
          content="At Nexgeno Technology Pvt Ltd, we are dedicated to providing professional web designing and development services."
        />
        <meta name="twitter:image" content="https://example.com/im" />
        {/* <!-- Canonical tag --> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={canonicalTag()}
          key="nexgeno-jsonld"
        />

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=G-THRP956B8F`}
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={poppins.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=G-THRP956B8F`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ToasterProvider />
        <Navbar />
        {/* <Nav /> */}
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
