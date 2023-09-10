"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/app/lib/data";
import useSectionInView from "@/app/lib/useSectionInView";
import { motion } from "framer-motion";

const fadeInAnmationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({
    activeSectionName: "Skills",
    thresHold: 0.9,
  });
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul
        className="
      flex flex-wrap justify-center gap-2 text-lg text-gray-800
      "
      >
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnmationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="
          bg-white dark:bg-white/10 dark:text-white/80 border border-black/[0.1] rounded-xl px-5 py-3
          "
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
