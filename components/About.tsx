"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { useActiveSectionContext } from "./Header";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    const isInViewAndLastClikOlderThanOneSecond =
      inView && Date.now() - timeOfLastClick > 1000;
    if (isInViewAndLastClikOlderThanOneSecond) {
      setActiveSection("About");
    }
  }, [inView, timeOfLastClick]);

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
        I enjoy being God in my computer and I have a strong foundation in
        mathematics. I believe that the intersection of logic, problem-solving,
        and creativity is where the magic of coding happens. From building
        responsive and user-friendly front-end interfaces using HTML, CSS, and
        JavaScript, to designing and implementing robust back-end systems with
        Node.js and databases like SQL and MongoDB, I thrive in full-stack
        development environments. I constantly strive to stay up-to-date with
        the latest industry trends and best practices. I'm ready to take on new
        challenges and contribute my expertise to create exceptional digital
        experiences. `
      </p>
    </motion.section>
  );
}
