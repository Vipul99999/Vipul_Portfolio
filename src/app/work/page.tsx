"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
// import type { Project } from "@/types/project";

// types/project.ts
export interface TechStackItem {
  name: string;
  icon?: React.ReactNode;
}

export interface Project {
  id: string;
  num: string;
  category: "frontend" | "backend" | "fullstack" | "mobile" | "design";
  title: string;
  description: string;
  stack: TechStackItem[];
  image: string;
  images?: string[];
  live: string;
  github: string;
  repoPrivate?: boolean;
  tags?: string[];
  featured?: boolean;
  date?: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    num: "01",
    category: "frontend",
    title: "Portfolio",
    description: "Built with Next.js, this responsive portfolio showcases my skills, projects, and experience. It features smooth navigation, optimized performance, and modern UI design using React components and Tailwind CSS. Deployed for fast access and SEO-ready.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer motion" },
    ],
    image: "./assets/work/Vipul_Portfolio.png",
    live: "",
    github: "https://github.com/Vipul99999/Vipul_Portfolio.git",
  },
  
  {
    id: "project-2",
    num: "02",
    category: "fullstack",
    title: "Face Detection Attendance System",
    description: "Created a system using Deep learning for real-time face recognition and automatic attendance logging.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Python" },
      { name: "OpenCv" },
      { name: "MongoDb" },
    ],
    image: "./assets/work/Face_Recognition_UI.png",
    live: "",
    github: "https://github.com/Vipul99999/Face-Detection-Attendance-System.git",
  },
  {
    id: "project-3",
    num: "03",
    category: "fullstack",
    title: "ToDoList App",
    description: "A modern and responsive frontend sample project built with React.js, TypeScript, and Tailwind CSS. It features smooth animations using Framer Motion and connects to a MongoDB backend, making it a solid full-stack example for learning or prototyping.",
    stack: [ 
      { name: "Tailwind.css" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Framer motion" },
      { name: "MongoDB" },
    ],
    image: "./assets/work/ToDoList_UI.png",
    live: "",
    github: "https://github.com/Vipul99999/ToDoList_App.git",
  },
];

const Work = () => {
  const [project, setProject] = useState<Project>(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT SIDE */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold text-transparent text-outline">{project.num}</div>
             <h2
  className="
    text-4xl              /* 42px approx */
    font-extrabold        /* bolder than font-bold */
    text-white
    capitalize
    group-hover:text-accent
    transition-colors     /* smoother and more specific transition */
    duration-500
    mb-2                  /* margin bottom for spacing */
    tracking-wide         /* letter spacing for better readability */
    drop-shadow-md        /* subtle shadow for text pop */
  "
>
  {project.category} project
</h2>

<h3
  className="
    text-3xl              /* 50px */
    font-extrabold
    text-green-500
    capitalize
    group-hover:text-accent
    transition-colors
    duration-500
    leading-tight         /* tighter line height for a crisp look */
    tracking-wide
    drop-shadow-lg        /* stronger shadow for emphasis */
  "
>
  {project.title}
</h3>

              <p className="text-white/90">{project.description}</p>

              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <li key={index} className="text-green-800  text-lg">
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
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={proj.id} className="w-full">
                  <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full z-20">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw" // optional but recommended for responsive images
                        priority={false} // set to true only for important above-the-fold images
                        quality={75} // optional, default is 75, can tweak based on quality/size tradeoff
                        />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
