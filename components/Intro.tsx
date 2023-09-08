"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./Header";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[45rem] 
     sm:mb-0 text-center scroll-mt-36
    "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <Image
              src="/images/mawaba.PNG"
              width={120}
              height={120}
              quality={95}
              priority={true}
              alt="Essoh"
              className="h-24 w-24 rounded-full object-cover
             border-white border-[0.35rem] shadow-xl  "
            />
            <span className=" absolute text-xl bottom-0 right-0">🌍</span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-md font-medium 
      !leading-[1.5] sm:text-lg"
      >
        <span className="font-bold"> Hello, I'm Essohanam.</span> I'm a{" "}
        <span className="font-bold">full-stack javascript developer</span> with
        03 years of experience. I enjoy solving problems using computers.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center justify-center
       gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contanct"
          className="group bg-gray-900 text-white px-7 py-3 flex 
           gap-2 rounded-full items-center outline-none focus:scale-110
           hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          {" "}
          Contact me here{" "}
          <BsArrowRight
            className="opacity-70 group-hover:translate-x-1
          transition"
          />
        </Link>
        <a
          className="group bg-white text-gray-900 px-7 py-3 flex 
           gap-2 rounded-full items-center outline-none focus:scale-110
           hover:scale-110  active:scale-105 transition cursor-pointer
           border border-black/10"
          href="/CV.pdf"
          download={true}
        >
          DownLoad CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1" />
        </a>
        <a
          className="bg-white text-[1.4rem] text-gray-700 p-4 flex 
           gap-2 rounded-full items-center focus:scale-110
           hover:scale-110  hover:text-gray-950 active:scale-105 transition cursor-pointer
           border border-black/10"
          href="#"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700  text-[1.4rem] p-4 flex 
           gap-2 rounded-full items-center focus:scale-110
           hover:scale-110 hover:text-gray-950  active:scale-105 transition cursor-pointer
           border border-black/10"
          href=""
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
