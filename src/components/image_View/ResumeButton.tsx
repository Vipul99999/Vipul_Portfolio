"use client";

import React, { useState } from "react";
import ImageViewer from "@/components/image_View/ImageViewer"; // adjust path as needed
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const ResumeButton = () => {
  const [showViewer, setShowViewer] = useState(false);

  return (
    <div>
      <Button
        variant="outline"
        size="lg"
        onClick={() => setShowViewer(true)}
        className="uppercase flex bg-green-100 items-center mt-10 gap-2"
      >
        <span>View CV</span>
      </Button>

      <AnimatePresence>
        {showViewer && (
          <motion.div
            key="resume-viewer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ImageViewer
              src="/assets/vipul_Resume/Vipul_Resume_Second.pdf"
              alt="Vipul Resume"
              onClose={() => setShowViewer(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeButton;
