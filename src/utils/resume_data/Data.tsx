
import { ReactElement } from "react";
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
  SiNextdotjs ,
  SiTypescript,
  SiDocker ,
  SiMongodb,
  SiReact ,
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

import { FaBriefcase, FaGraduationCap, FaTools, FaUser } from "react-icons/fa"; // example icons

interface Tab {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const tabData: Tab[] = [
  { value: "experience", label: "Experience", icon: <FaBriefcase /> },
  { value: "education", label: "Education", icon: <FaGraduationCap /> },
  { value: "skills", label: "Skills", icon: <FaTools /> },
  // { value: "certifications", label: "Certifications", icon: <FaCertificate /> }, // example, import if used
  // { value: "achievements", label: "Achievements", icon: <FaTrophy /> }, // example, import if used
  { value: "about", label: "About me", icon: <FaUser /> },
];

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
  "I’m a passionate developer with a strong interest in building clean and efficient web applications. Skilled in modern tools and committed to continuous learning.",

  info: [
    { fieldName: "Name", fieldValue: "Vipul Kumar Patel" },
    { fieldName: "Phone", fieldValue: "(+91) 745 892 7442" },
    { fieldName: "Experience", fieldValue: "1+ years" },
    // { fieldName: "Skype", fieldValue: "vipul.01" },//"Skype" is the name of the field, and "vipul.01" is the information associated with it.
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "vipul20020308@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Looking For", fieldValue: "Job, Internship Opportunities" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

export type AboutField = {
  fieldName: string;
  fieldValue: string;
};

export type AboutSection = {
  title: string;
  description: string;
  info: AboutField[];
};

// export const about: AboutSection = {
  // title: "About Me",
  // description:
  //   "I’m a passionate Full Stack Developer with a strong foundation in modern web technologies and a growing curiosity in Artificial Intelligence. With over a year of hands-on experience building scalable web applications, I specialize in creating robust backend services and dynamic user interfaces using technologies like React, Node.js, and MongoDB. Currently, I'm expanding my skill set into machine learning and AI, exploring tools like Python, TensorFlow, and OpenCV to build intelligent, data-driven applications.",
  // info: [
  //   { fieldName: "Name", fieldValue: "Vipul Kumar Patel" },
  //   { fieldName: "Role", fieldValue: "Full Stack Developer" },
  //   { fieldName: "Experience", fieldValue: "1+ years" },
  //   { fieldName: "Phone", fieldValue: "(+91) 745 892 7442" },
  //   { fieldName: "Email", fieldValue: "vipul20020308@gmail.com" },
  //   { fieldName: "GitHub", fieldValue: "github.com/vipul-code" },
  //   { fieldName: "LinkedIn", fieldValue: "linkedin.com/in/vipul" },
//     { fieldName: "Specialization", fieldValue: "MERN Stack, REST APIs, UI/UX" },
//     { fieldName: "Learning Focus", fieldValue: "AI, ML, Deep Learning" },
//     { fieldName: "Location", fieldValue: "Lucknow, India" },
//     { fieldName: "Freelance", fieldValue: "Available" },
// { fieldName: "Looking For", fieldValue: "Job, Internship Opportunities" },

//     { fieldName: "Languages", fieldValue: "English, Hindi" },
//   ],
// };


export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    `Completed documentation and assessed the quality of production instruments. Inspected assembly procedures for
compliance with quality standards and led a quality team to resolve issues. Reported quality concerns to senior
management and collaborated on effective solutions while overseeing the production line to ensure operational
efficiency and maintain quality control.`,
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
        { icon: <SiPostgresql />, name: "PostgreSql" },
        // { icon: <SiPython />, name: "Python" },
        // { icon: <SiDjango />, name: "Django" },
      ],
    },
    {
      title: "State Management",
      skills: [{ icon: <SiReact   />, name: "Zustand" }],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiVercel />, name: "Vercel" },
        { icon: <SiDocker  />, name: "Docker" },
        { icon: <SiGithubactions />, name: "CI/CD" }
      ],
    },
    {
      title: "Others",
      skills: [
        { icon: <SiC />, name: "C" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <MdSecurity />, name: "Auth2" },
      ],
    },
  ],
};
