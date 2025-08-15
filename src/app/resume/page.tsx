"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { skills, about, experience, education ,tabData } from "@/utils/resume_data/Data"

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
    z-50 bg-[#1a1a1a] p-4 rounded-lg shadow-lg
    w-[calc(100%-2rem)] max-w-[300px]
    sm:left-6 sm:w-[280px]
    xl:static xl:bg-transparent xl:p-0 xl:shadow-none
    xl:w-full xl:max-w-[380px] xl:mx-0
  "
          >
           {tabData.map((tab) => (
        <TabsTrigger
          key={tab.value}
          value={tab.value}
          className="flex items-center gap-2"
        >
          {tab.icon}
          <span>{tab.label}</span>
        </TabsTrigger>
      ))}
          </TabsList>

          <div
  className="
    min-h-[70vh] w-full 
    px-4 sm:px-6 md:px-8 lg:px-12 
    py-6 sm:py-8 md:py-10
    flex flex-col items-center justify-center
    overflow-hidden
  "
>
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

               <ScrollArea
  className="
    h-[300px] 
    sm:h-[350px] 
    md:h-[400px] 
    lg:h-[500px] 
    xl:h-[600px]
  "
>

                  <ul>
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 mb-2 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mb-2">
                <h3 className="text-4xl font-bold">{education.title}</h3>

               <ScrollArea
  className="
    h-[300px] 
    sm:h-[350px] 
    md:h-[400px] 
    lg:h-[500px] 
    xl:h-[600px]
  "
>

                  <ul>
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 mb-2 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mb-2">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">
                  {skills.description}
                </p>

              <ScrollArea
  className="
    h-[300px] 
    sm:h-[350px] 
    md:h-[400px] 
    lg:h-[500px] 
    xl:h-[600px]
  "
>

                  {skills.skillGroups.map((group, i) => (
                    <div key={i} className="mb-8 rounded-md bg-[#232329]">
                      <h4 className="text-2xl font-semibold pl-4 mb-4">
                        {group.title}
                      </h4>
                      <div className="flex flex-wrap gap-4 justify-center xl:justify-start">
                        {group.skills.map((skill, idx) => (
                          <TooltipProvider key={idx}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="ml-10 mb-5 p-2 rounded-lg border border-accent cursor-pointer hover:bg-accent hover:text-black transition">
                                  <div className="text-3xl mb-2 text-[#00f7ff]">
                                    {skill.icon}
                                  </div>
                                    {skill.name}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent
                                side="top"
                                className="bg-gray-600 text-white text-sm font-medium px-3 py-1.5 rounded-md shadow-lg border border-gray-700"
                              >
                                <span className="tracking-wide uppercase">
                                  {skill.name}
                                </span>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left mb-2">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="max-w-[600px] mx-auto xl:mx-0 grid grid-cols-2 gap-4 mt-4">
                  {about.info.map(({ fieldName, fieldValue }, i) => (
                    <li
                      key={i}
                      className="flex gap-2 justify-between border-b border-white/10 pb-1"
                    >
                      <strong>{fieldName}:</strong> <span>{fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
