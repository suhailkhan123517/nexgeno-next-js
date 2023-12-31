"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
export default function Pathname() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <>
      <section className="container mx-auto md:mt-16 mt-14 pt-2 pb-0">
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
              return (
                <React.Fragment key={segment}>
                  {isLast ? (
                    <>
                      <li>
                        <HiChevronDoubleRight />
                      </li>

                      <li className="cursor-pointer">{capitals}</li>
                    </>
                  ) : (
                    <>
                      <li>
                        <HiChevronDoubleRight />
                      </li>
                      <li>
                        <Link
                          href={`/${pathSegments
                            .slice(0, index + 1)
                            .join("/")}`}
                          className="hover:underline text-blue-700"
                        >
                          {capitals}
                        </Link>
                      </li>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
}
