// types/education.ts (or wherever you keep types)
export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  details?: string;
}

export interface EducationData {
  icon: string;
  title: string;
  description: string;
  items: EducationItem[];
}



export const education: EducationData = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "A progressive academic background in computer science and electronics, with strong foundations in software development, digital systems, and analytical thinking. Demonstrated consistent academic performance with hands-on technical experience throughout diploma and undergraduate studies.",
  items: [
    {
      institution: "Pranveer Singh Institute of Technology, Kanpur",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2023 – Expected Graduation: 2026",
    //   grade: "75.8%",
      details:
        "Currently pursuing a B.Tech degree with a focus on data structures, algorithms, and software development. Engaged in lab work and academic projects in AI and web technologies.",
    },
    {
      institution: "Government Polytechnic Mirzapur",
      degree: "Diploma in Electronics Engineering",
      duration: "2018 – 2021",
    //   grade: "83.4%",
      details:
        "Completed a diploma with strong performance in electronics, circuit design, and embedded systems. Gained practical experience in troubleshooting and instrumentation.",
    },
    {
      institution:
        "Prabhu Narayan Government Inter College, Ram Nagar, Varanasi",
      degree: "High School (Class X)",
      duration: "2016 – 2017",
    //   grade: "76.6%",
      details:
        "Completed high school education with a focus on science and mathematics. Developed analytical and foundational technical skills.",
    },
  ],
};
