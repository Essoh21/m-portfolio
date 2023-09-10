"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/app/lib/data";
import useSectionInView from "@/app/lib/useSectionInView";
import { useThemeContext } from "./ThemeContextProvider";

export default function Experience() {
  const { ref } = useSectionInView({
    activeSectionName: "Experience",
    thresHold: 0.6,
  });
  const { theme } = useThemeContext();
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 ">
      <SectionHeading>My Experience And Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((data, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              date={data.date}
              icon={data.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className=" font-semibold capitalize">{data.title}</h3>
              <p>{data.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {data.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
