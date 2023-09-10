"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import useSectionInView from "@/app/lib/useSectionInView";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { ref } = useSectionInView({
    activeSectionName: "Contact",
    thresHold: 0.9,
  });
  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700  -mt-6 dark:text-white/80">
        Please contact me directely at{" "}
        <a className="underline" href="mailto:essoh.alou@gmail.com">
          essoh.alou@gmail.com
        </a>{" "}
        or through this form:
      </p>
      <ContactForm />
    </motion.section>
  );
}
