
import { ReactElement } from "react";
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




// Types for skills
type Skill = {
  icon: ReactElement; // JSX element, like <FaHtml5 />
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

type PageExports = {
  default?: Function;
  skills?: SkillsType;
  // other keys...
};


// About data
export const about = {
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

export const experience = {
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

export const education = {
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
      duration: "2018 - 2021",
    },
    {
      institution: "PNGIC. RamNagar varanasi",
      degree: "High School(X)",
      duration: "2017",
    },
  ],
};

export const skills: SkillsType = {
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
        { icon: <SiTailwindcss />, name: "Tailwind.CSS" },
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
