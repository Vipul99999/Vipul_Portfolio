import React from "react";
import { education } from "./Education_Data"; // Adjust path as needed
import { TabsContent } from  "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";// Replace with your actual ScrollArea import

export default function EducationTabContent() {
  return (
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
                className="bg-[#232329] h-[184px] py-6 px-10 mb-2 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2"
              >
                <span className="text-accent">{item.duration}</span>
                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                  {item.degree}
                </h3>

                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                  <p className="text-white/60">{item.institution}</p>
                </div>

                {item.grade && (
                  <p className="text-white/70 mt-1">Grade: {item.grade}</p>
                )}

                {item.details && (
                  <p className="text-white/50 mt-2 max-w-[260px] text-center lg:text-left">
                    {item.details}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    </TabsContent>
  );
}
