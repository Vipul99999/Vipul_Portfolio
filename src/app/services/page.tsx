"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import  {services}  from "@/utils/resume_data/servises/servicesData";

 

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
                    className="w-[70px] h-[70px] rounded-full bg-gradient-to-r from-purple-400 via-green-400 
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
    bg-gradient-to-r from-green-800 via-blue-800 to-red-600 
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
