"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import ResponsiveImageFrame from "@/components/ResponsiveImageFrame";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { projects,Project } from "@/utils/resume_data/work_data/workData";



const Work = () => {
  const [project, setProject] = useState<Project>(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT SIDE */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2
                className="
                      text-4xl             
                      font-extrabold        
                      text-white
                      capitalize
                      group-hover:text-accent
                      transition-colors     
                      duration-500
                      mb-2                  
                      tracking-wide         
                      drop-shadow-md        
                    "
              >
                {project.category} project
              </h2>

              <h3
                className="
                        text-3xl              
                        font-extrabold
                        text-green-500
                        capitalize
                        group-hover:text-accent
                        transition-colors
                        duration-500
                        leading-tight         
                        tracking-wide
                        drop-shadow-lg        
                      "
              >
                {project.title}
              </h3>

              <p className="text-white/90">{project.description}</p>

              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <li key={index} className="text-accent  text-lg">
                    {tech.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && !project.repoPrivate && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Swiper */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj) => (
                <SwiperSlide key={proj.id} className="w-full">
                  <div className="relative flex justify-center items-center bg-green-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-gray/10 z-10"></div>
                    <div className="relative w-full z-20">
                      <ResponsiveImageFrame src={proj.image} alt={proj.title} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
            containerStyles="
            absolute z-20 
            top-1/2 left-0 right-0 
            flex justify-between px-4 
            -translate-y-1/2
            xl:top-auto xl:bottom-4 xl:right-4 xl:left-auto xl:translate-y-0 
            xl:flex-row xl:justify-center xl:items-center xl:space-x-2 xl:w-[200px]
          "

            btnStyles="
              bg-accent hover:bg-accent-hover 
              text-primary text-[22px] 
              w-[44px] h-[44px] 
              flex justify-center items-center 
              transition-all rounded-full shadow-md
            "
  iconsStyles="w-5 h-5"
/>



            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
