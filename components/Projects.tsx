"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/app/lib/data";
import Project from "./Project";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./Header";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    const isInViewAndLastClikOlderThanOneSecond =
      inView && Date.now() - timeOfLastClick > 1000;
    if (isInViewAndLastClikOlderThanOneSecond) {
      setActiveSection("Projects");
    }
  }, [inView, timeOfLastClick]);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
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
