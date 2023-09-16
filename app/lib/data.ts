import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaChalkboardTeacher } from "react-icons/fa";
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
    title: "graduate Odin foundations and  full stack javaScript curriculum",
    location: "The Odin Project",
    description:
      "I graduated after 2 years of studying. I work on more than 50 production Projects including REST APIs, CRUD applications and MERN stack applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },
  {
    title: "full-stack web development using php,  javascript, html and css",
    location: "W3Scools",
    description:
      "I mastered php fondamentals and some experience with  framework like Laravel and some basic knowledge on javascript jQuery library and Mys .",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2021",
  },
  {
    title: "Data science and Machine learning",
    location: "coursera and Kaggle",
    description:
      "I learned how to use machine learning models using python and how to train machine learning models using octave and mathLab .",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2020",
  },
  {
    title: "Mathematics teacher",
    location: "Togo and Benin",
    description: "I teached mathematics in High school",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2014 - 2023",
  },
  {
    title: "Master Degree of Fundamental Mathematics and Applications",
    location: "IMSP-Benin",
    description: "I Strenghtened my Mathematics background .",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2018",
  },
  {
    title: "License of Mathematics",
    location: " UK-Togo",
    description: "I strengthened my background in mathematics",
    icon: React.createElement(FaChalkboardTeacher),
    date: "2011 - 2014",
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
      "bcryptjs",
      "nodemailer",
      "compression",
      "express-rate-limit",
      "express-validator",
      "helmet",
      "passport-jwt",
      "express",
      "MongoDB",
      "Passport",
      "passport-local",
      "jest",
      "pug",
    ],
    imageUrl: "/images/ach-club.png",
    liveLink: "https://ach-club.onrender.com/",
  },
  {
    title: "Ach-club-v",
    description: `This is an advance version of Ach-club. Users can use credentials or their
       existing google account for authentication. Authenticated users can post or comment
        a post or like a post or chat with other users in a post comments. Only the admin can 
        view users Data and delete a post, a comment, a like or a user if necessary`,
    tags: [
      "Nodejs",
      "express",
      "mongoDB",
      "websocket",
      "React",
      "TypeScript",
      "Nextjs",
      "Tailwindcss",
      "NextAuth",
      "jest",
      "Postman",
    ],
    imageUrl: "/images/achDashboard.png",
    liveLink: "https://github.com/Essoh21/ach-club-v",
  },
  {
    title: "CV-creator",
    description: `A public app that make easy CV creation. User only 
    has to fill a form and download his CV at the end. `,
    tags: [
      "react ",
      "react-dom",
      "react-router-dom",
      "tailwindcss",
      "vite",
      "vitest",
      "prop-types",
    ],
    imageUrl: "/images/cvProject.png",
    liveLink: "https://essoh21.github.io/cv-project/",
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
    title: "Todo-list",
    description: ` A public todo list web app.  Users can organize their 
    projects and tasks to do. They can also mark a task completed , delete
    or update a task or project. But the app  use only local storage
    so data is lost when user change a browser. I made this app in order 
    to apply my javascript and css skills.
      `,
    tags: ["vanilla java script", "html and css", "figma"],
    imageUrl: "/images/todo.png",
    liveLink: "https://essoh21.github.io/ToDoList/",
  },
  {
    title: "Etch A Sketch",
    description: ` A public drawing web app for kids. Users must chose a 
     specific color or a random color, resize their grid on will and draw
    what ever they want.
      `,
    tags: ["vanilla java script", "html and css"],
    imageUrl: "/images/etchA.png",
    liveLink: "https://essoh21.github.io/Etch-A-Sketch/",
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
  "Redis",
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
