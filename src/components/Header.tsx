"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import { MobileNav } from "./MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="py-4 xl:py-6 flex text-green-100">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <motion.h1
            className="text-4xl font-semibold bg-gradient-to-r from-pink-800 via-purple-600 to-green-500 bg-clip-text text-transparent cursor-pointer"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Vipul <span className="text-accent">.</span>
          </motion.h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex  items-center gap-8">
          <Nav />
          {/* Hire me button */}
          <Link href="/contact">
<Button className="text-base">Hire me</Button>

          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;
