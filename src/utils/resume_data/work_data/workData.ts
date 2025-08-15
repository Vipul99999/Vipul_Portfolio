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

export const projects: Project[] = [
  {
    id: "project-1",
    num: "01",
    category: "frontend",
    title: "Portfolio",
    description:
      "Built with Next.js, this responsive portfolio showcases my skills, projects, and experience. It features smooth navigation, optimized performance, and modern UI design using React components and Tailwind CSS. Deployed for fast access and SEO-ready.",
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
    description:
      "Created a system using Deep learning for real-time face recognition and automatic attendance logging.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Python" },
      { name: "OpenCv" },
      { name: "MongoDb" },
    ],
    image: "./assets/work/Face_Recognition_UI.png",
    live: "",
    github:
      "https://github.com/Vipul99999/Face-Detection-Attendance-System.git",
  },
  {
    id: "project-3",
    num: "03",
    category: "fullstack",
    title: "ToDoList App",
    description:
      "A modern and responsive frontend sample project built with React.js, TypeScript, and Tailwind CSS. It features smooth animations using Framer Motion and connects to a MongoDB backend, making it a solid full-stack example for learning or prototyping.",
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
