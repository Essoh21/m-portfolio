"use client";
import React from "react";
import { motion } from "framer-motion";
export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 50 }}
      transition={{ delay: 0.125 }}
      className="bg-gray-200 my-24 h-16 w-1 dark:bg-opacity-20 rounded-full 
  hidden sm:block"
    ></motion.div>
  );
}
