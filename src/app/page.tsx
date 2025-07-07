"use client";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import HeroText from "@/components/HeroText";
import React from "react";
import ResumeButton from "@/components/image_View/ResumeButton";

export default function Home() {
  

  return (
    <div className="pt-12 pb-12">
      {" "}
      {/* Use padding instead of fixed height */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <HeroText />
            <div className="flex flex-col  xl:flex-row items-center gap-8">
              <ResumeButton/>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6 mt-10"
                  iconStyles="w-9 h-9 border-accent rounded-full flex 
                    justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
}
