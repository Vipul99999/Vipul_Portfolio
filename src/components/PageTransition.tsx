"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    // Turn off the transition after animation
    const timeout = setTimeout(() => setIsTransitioning(false), 1000); // match duration
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={pathname}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed top-0 left-0 w-screen h-screen bg-primary z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Actual page content */}
      <div className={`${isTransitioning ? 'invisible' : 'visible'}`}>
        {children}
      </div>
    </>
  );
};
