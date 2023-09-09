import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Togo",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "graduate Odin foundations and  full stack javaScript",
    location: "Online",
    description:
      "I graduated after 2 years of studying. I work on more than 50 production Projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },
  {
    title: "Mathematics teacher",
    location: "Togo",
    description: "I teached mathematics in High school",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2014 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Ach-club",
    description: ` A public full-stack web app for Achievers to share their wins. Users must Signup,
       verify their emails and authenticate themselves using their pseudo and password. Authenticated users 
       can update their profiles or view posts but only members can  post. Only admin can view all users data 
       and delete a post or a user if necessary.
      `,
    tags: [
      "Nodejs",
      "express",
      "MongoDB",
      "vanilla css and js",
      "PassportJs",
      "jest",
      "postman",
      "pug",
    ],
    imageUrl: "/images/ach-club.png",
    liveLink: "https://ach-club.onrender.com/",
  },
  {
    title: "ach-club-v",
    description: `This is an advance version of Ach-club. Users can use credentials or their
       existing google account for authentication. Authenticated users can post or comment
        a post or like a post or chat with other users in a post comments. Only the admin can 
        view users Data and delete a post, a comment, a like or a user if necessary`,
    tags: [
      "express",
      "mongoDB",
      "websocket",
      "React",
      "TypeScript",
      "Nextjs",
      "Tailwindcss",
      "NextAuth",
    ],
    imageUrl: "/images/achDashboard.png",
    liveLink: "https://ach-club-v.onrender.com/",
  },
  {
    title: "find hiddens",
    description: ` A public mind game web app. Users must find hidden images on a given image 
      `,
    tags: [
      "React",
      "firebase",
      "vanilla css and js",
      "Styled component",
      "vite",
      "vitest",
    ],
    imageUrl: "/images/findHiddens.png",
    liveLink: "https://find-hiddens.web.app/",
  },

  {
    title: "todo-list",
    description: ` A public todo list web app.
      `,
    tags: ["vanilla java script", "html and css"],
    imageUrl: "/images/todo.png",
    liveLink: "https://essoh21.github.io/ToDoList/",
  },
  {
    title: "Etch A Sketch",
    description: ` A public drawing web app for kids.
      `,
    tags: ["vanilla java script", "html and css"],
    imageUrl: "/images/etchA.png",
    liveLink: "https://essoh21.github.io/ToDoList/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Jest",
  "Vitest",
  "MongoDB",
  "Express",
  "SQL",
  "Python",
  "Pandas",
  "Tensorflow",
  "Figma",
  "Framer Motion",
] as const;
