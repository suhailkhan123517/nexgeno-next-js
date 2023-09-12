"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChevronDoubleRight } from "react-icons/hi";
export default function Pathname() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <>
      <div className="container mx-auto mt-16 pt-2 pb-0">
        <nav className="bg-transparent pl-0">
          <ul className="flex items-center gap-3">
            {pathname === "/" ? (
              ""
            ) : (
              <li>
                <Link href="/" className="hover:underline text-blue-700">
                  Home
                </Link>
              </li>
            )}

            {pathSegments.map((segment, index) => {
              const rname = segment.replace(/\..*/g, "$'");
              const newName = rname.replace(/-/g, " ");
              const capitals =
                newName.charAt(0).toUpperCase() + newName.slice(1);
              const isLast = index === pathSegments.length - 1;
              return isLast ? (
                <>
                  <li>
                    {" "}
                    <HiChevronDoubleRight />
                  </li>

                  <li key={index} className="cursor-pointer">
                    {capitals}{" "}
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <HiChevronDoubleRight />
                  </li>
                  <li key={capitals}>
                    <Link
                      href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                      className="hover:underline text-blue-700"
                    >
                      {capitals}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
