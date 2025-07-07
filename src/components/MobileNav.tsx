"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="block lg:hidden"> {/* ✅ Show only on small screens */}
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        <SheetContent side="left" className="flex flex-col w-full sm:w-[300px]">
          {/* Logo */}
          <div className="mt-20 mb-16 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Vipul <span className="text-accent">.</span>
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col justify-center items-center gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`text-xl capitalize hover:text-accent transition-all ${
                  pathname === link.path
                    ? "text-accent border-b-2 border-accent"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
