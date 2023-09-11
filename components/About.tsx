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
        I was living my life without knowing exactly what meaning to give to it
        and what it is that I really wanted to do. I was fortunate that school
        subjects came easily to me, though there was nothing to be proud of
        since it was a gift, and I didn't have to exert much effort to excel in
        my exams.{" "}
        <span className="italic">
          I chose mathematics, and I used to enjoy playing with mathematical
          concepts
        </span>
        . After obtaining my bachelor's degree in mathematics, I began teaching
        at the college level. After two years, I decided to pursue a master's
        degree, and <span className="font-semibold">fortunately</span>, I
        received a scholarship to support my studies. While{" "}
        <span className="font-semibold">mathematics</span> remained intriguing
        and manageable, I still didn't have a clear vision of how it would
        impact my life. Following the completion of my master's degree, I
        continued teaching mathematics, but I also developed an interest in
        artificial intelligence and its potential applications in the field of
        medicine. I was drawn to the idea of making a meaningful contribution to
        my country and the world. My journey into the world of{" "}
        <span className="font-semibold">artificial intelligence</span> has been
        captivating and remains so to this day. During this journey, I
        encountered a need for data, which led me to explore web development.
        This discovery ignited a passion within me that I had never experienced
        before, and I became genuinely excited about pursuing it further. With
        web development,{" "}
        <span className="font-semibold">
          I realized that I could make a tangible impact on the world,
          contributing to significant projects
        </span>
        . I dedicated my life to this pursuit, and now, I cannot go a day
        without it.
      </p>
    </motion.section>
  );
}
