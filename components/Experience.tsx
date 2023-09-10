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

export default function Experience() {
  const { ref } = useSectionInView({
    activeSectionName: "Experience",
    thresHold: 0.6,
  });
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 ">
      <SectionHeading>My Experience And Education</SectionHeading>
      <VerticalTimeline lineColor="#e5e7eb">
        {experiencesData.map((data, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={data.date}
              icon={data.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3>{data.title}</h3>
              <p>{data.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {data.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
