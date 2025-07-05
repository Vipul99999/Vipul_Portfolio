"use client";

import dynamic from "next/dynamic";

// Dynamically import CountUp to reduce initial bundle
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});

const stats = [
  { num: 1, text: "Years of experience" },
  { num: 4, text: "Projects completed" },
  { num: 9, text: "Technologies mastered" },
  { num: 50, text: "Code commits" },
];

export default function Stats() {
  return (
    <section className="pt-2 pb-4  xl:pt-0 xl:pb-0">
      <div className="container  mx-auto mt-12">
        <div className="flex flex-wrap gap-6 max-w-[80vw] ms-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={1}
                delay={0}
                className="text-4xl xl:text-6xl font-extralight"
              />
              <p
                className={`${
                  item.text.length < 15
                    ? "max-w-[100px]"
                    : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
