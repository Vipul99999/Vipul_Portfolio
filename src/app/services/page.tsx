"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

 const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Skilled in building responsive, user-friendly websites using HTML, CSS, and JavaScript. Experienced in modern frameworks like React to create dynamic web applications.",
    href: "#",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Proficient in designing clean, intuitive interfaces that enhance user experience using tools like Figma and Adobe XD.",
    href: "#",
  },
  {
    num: "03",
    title: "Machine Learning",
    description:
      "Basic knowledge of machine learning concepts, algorithms, and frameworks like scikit-learn and TensorFlow. Able to build and train models to solve real-world problems.",
    href: "#",
  },
  {
  num: "04",
  title: "Artificial Intelligence",
  description:
    "Basic understanding of AI concepts including natural language processing and computer vision. Hands-on experience with Python libraries like OpenCV to explore AI applications.",
  href: "#",
},
{
  num: "05",
  title: "Backend Development",
  description:
    "Basic knowledge of backend technologies including Node.js , Django and Express.js. Familiar with RESTful,GraphQl API development, databases like MongoDB, and server-side logic implementation.",
  href: "#",
},
  {
    num: "06",
    title: "SEO",
    description:
      "Understanding of SEO best practices to optimize websites for better visibility and search engine rankings.",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <span
                    className="text-5xl font-extrabold text-outline text-transparent
                    group-hover:text-outline-hover transition-all duration-500"
                  >
                    {service.num}
                  </span>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-gradient-to-r from-purple-500 via-green-400 
                     to-blue-500  animate-gradientSlow bg-[length:200%_200%]
                    group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className="text-[42px] font-bold leading-none text-white
                  group-hover:text-accent transition-all duration-500"
                >
                  <span
  className="
    bg-gradient-to-r from-green-800 via-blue-800 to-gray-800 
    bg-clip-text text-transparent 
    animate-gradient 
    bg-[length:200%_200%]
  "
>{service.title}</span>
                </h2>
              </div>
              {/* description */}
              <p className="text-white/80">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
