"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const ResumeButton: React.FC = () => {
  const resumeSrc = "/assets/vipul_Resume/Vipul_Resume.pdf";

  return (
    <div className="flex justify-center mt-10">
      <Button
        variant="outline"
        size="md"
        className="uppercase flex bg-green-100 items-center gap-2"
        onClick={() => window.open(resumeSrc, "_blank")}
      >
        View CV
      </Button>
    </div>
  );
};

export default ResumeButton;
