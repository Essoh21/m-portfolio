"use client";
import { projectsData } from "@/app/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
type ProjectProps = (typeof projectsData)[number];
function Project({
  title,
  description,
  liveLink,
  imageUrl,
  tags,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
    >
      <section
        className=" flex flex-col sm:block bg-gray-100 max-w-full box-border md:max-w-[42rem] 
        border  group-even:pl-4 rounded-lg
    border-black/5 overflow-hidden sm:pr-8 relative sm:h-[32rem]
     hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20
     dark:text-white"
      >
        <div
          className=" pb-7 px-5 sm:pl-10 pr-2 pt-10 sm:max-w-[55%] 
       h-full flex flex-col sm:group-even:ml-[18rem] "
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap  mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="
          bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          quality={100}
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
          className=" sm:absolute top-8 -right-50 md:-right-40 w-[28.25rem] rounded-t-lg 
        group-even:right-[initial] group-odd:left-[24rem] sm:group-even:-left-40  shadow-2xl
        group-hover:-translate-x-3 group-hover:translate-y-3 
        group-hover:-rotate-2 transition group-hover:scale-110
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 "
        />
        <div className=" sm:absolute group-even:left-12 bottom-16 flex flex-row gap-8  mt-8 group-odd:right-12">
          <a
            href={liveLink}
            className="underline  flex flex-row gap-1 items-center 
            justify-center text-blue-500 font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBoxArrowUpRight /> Live Preview
          </a>
        </div>
      </section>
    </motion.div>
  );
}

export default Project;
