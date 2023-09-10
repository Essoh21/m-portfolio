"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/app/lib/data";
import Project from "./Project";
import useSectionInView from "@/app/lib/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView({
    activeSectionName: "Projects",
    thresHold: 0.2,
  });
  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 max-w-[98%] box-border"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
