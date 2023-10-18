"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "@/app/lib/useSectionInView";
export default function About() {
  const { ref } = useSectionInView({
    activeSectionName: "About",
    thresHold: 0.9,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      className="mb-28 max-w-[45rem] text-center 
    sm:mb-40 leading-8 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I was fortunate that school subjects came easily to me, although I never
        took pride in it since it was a natural gift.{" "}
        <span className="italic">
          I chose mathematics and thoroughly enjoyed exploring various
          mathematical concepts.{" "}
        </span>
        After completing my Master's Degree, I decided to apply my knowledge.
        This decision led me to develop a keen interest in artificial
        intelligence and its potential applications. My journey into the world
        of <span className="font-semibold"> machine learning </span>
        helped me discover web development. This discovery ignited a passion
        within me that I had never experienced before, and I became genuinely
        excited about pursuing it further and applying machine learning.
        <span className="font-semibold">
          {" "}
          I realized that I could make a tangible impact on people's lives by
          contributing to significant projects.{" "}
        </span>
        I dedicated my life to this pursuit, and now, I cannot go a day without
        it.
      </p>
    </motion.section>
  );
}
