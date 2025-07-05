"use client";
import { Fan } from "lucide-react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiVercel,
  SiC,
  SiCplusplus,
  SiFramer,
  SiFirebase,
  SiGithubactions,
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";
//about data
import { IconType } from "react-icons";
type Skill = {
  icon: IconType; // component, not JSX.Element
  name: string;
};
type SkillGroup = {
  title: string;
  skills: Skill[];
};

export type SkillsType = {
  title: string;
  description: string;
  skillGroups: SkillGroup[];
};

const about = {
  title: "About me",
  description:
    "dolor,pudiandae atque natus amet sit placeat modi vero, rerum soluta cumque nesciunt libero maxime eveniet iste deleniti alias tempore? Corporis? sit amet consectetur adipisicing elit.",
  info: [
    { fieldName: "Name", fieldValue: "Vipul Kumar Patel" },
    { fieldName: "Phone", fieldValue: "(+91) 745 892 7442" },
    { fieldName: "Experience", fieldValue: "1+ years" },
    { fieldName: "Skype", fieldValue: "vipul.01" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "vipul20020308@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "dolor,pudiandae atque natus amet sit placeat modi vero, rerum soluta cumque nesciunt libero maxime eveniet iste deleniti alias tempore? Corporis? sit amet consectetur adipisicing elit.",
  items: [
    {
      company: "VVDN Technologies Private Ltd.",
      position: "Jr. Engineer",
      duration: "sept 2022 - oct 2023",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "dolor,pudiandae atque natus amet sit placeat modi vero, rerum soluta cumque nesciunt libero maxime eveniet iste deleniti alias tempore? Corporis? sit amet consectetur adipisicing elit.",
  items: [
    {
      institution: "PSIT Kanpur",
      degree: "Graduation",
      duration: "oct 2023 - Present",
    },
    {
      institution: "Govt. Polytechninc Mirzapur",
      degree: "Diploma",
      duration: " 2018 - 2021",
    },
    {
      institution: "PNGIC. RamNagar varanasi",
      degree: "High School(X)",
      duration: "2017",
    },
  ],
};
export const skills = {
  title: "My Skills",
  description:
    "I specialize in full-stack web development using the MERN stack and modern tools. I also focus on performance, accessibility, scalability, and clean code practices.",
  skillGroups: [
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiFramer />, name: "Framer Motion" },
        { icon: <FaFigma />, name: "Figma" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" },
      ],
    },
    {
      title: "State Management",
      skills: [{ icon: <SiRedux />, name: "Redux Toolkit" }],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiVercel />, name: "Vercel" },
        { icon: <SiGithubactions />, name: "CI/CD" },
      ],
    },
    {
      title: "Others",
      skills: [
        { icon: <SiC />, name: "C" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <MdSecurity />, name: "Auth / AuthZ" },
      ],
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container ms-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="
    flex flex-col gap-6
    fixed top-[80px] left-4 z-50 bg-[#1a1a1a] p-4 rounded-lg shadow-lg
    w-[calc(100%-2rem)] max-w-[300px]
    sm:left-6 sm:w-[280px]
    xl:static xl:bg-transparent xl:p-0 xl:shadow-none
    xl:w-full xl:max-w-[380px] xl:mx-0
  "
          >
            <TabsTrigger value="experience"> Experience</TabsTrigger>
            <TabsTrigger value="education"> Education</TabsTrigger>
            <TabsTrigger value="skills"> Skills</TabsTrigger>
            <TabsTrigger value="about"> About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}

            <TabsContent value="experience" className="w-full ">
              {/* experience */}
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 mb-2 rounded-xl 
                      flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mb-2">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 mb-2 rounded-xl 
                      flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>

                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full ">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="space-y-10 ">
                    {skills.skillGroups.map((group, index) => (
                      <li key={index}>
                        <h3 className="text-2xl font-semibold mb-4">
                          {group.title}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                          {group.skills.map((skill, idx) => (
                            <div
                              key={idx}
                              className="bg-zinc-800 p-4 rounded-xl flex flex-col items-center hover:shadow-md transition"
                            >
                              <div className="text-4xl text-accent mb-2">
                                {skill.icon}
                              </div>
                              <p className="text-sm text-white/80">
                                {skill.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
              

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4
                  "
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
