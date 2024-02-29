import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import jobi from "@/public/jobposter.jpg";
import dinner from "@/public/dinner.jpg";
import meme from "@/public/cat.jpg";
import dayplanner from "@/public/todo.jpg";
import hundred from "@/public/coding.jpg";
import programmanagement from "@public/projectmanagement.jpg";

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
    title: "Graduated bootcamp",
    location: "Toronto, ON",
    description:
      " I graduated from Juno College of Technology's Immersive Bootcamp Program and have gained experience developing appealing and user-friendly web and mobile-based applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Toronto, ON",
    description:
      "I worked as a front-end developer at TeamBonders.Inc. Created mulitiple websites including their camp program and promotional app.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Toronto, ON",
    description:
      "I have grown as a front end developer and gain knowledge in other developement technologies. My stack includes React, Next.js, TypeScript, Tailwind, React and more. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Job Search Website",
    description:
      "Find your next career opportunity with ease by browsing through mulitiple job listings on my user-friendly job search site.",
    tags: ["React", "Firebase", "HTML/CSS", "Figma", "JavaScript"],
    imageUrl: jobi,
    livesite: "https://jobipersonalproject.netlify.app/",
    github: "https://github.com/Gogulan12/Jobi2.0",
  },
  {
    title: "Recipes For Dinner",
    description:
      "App provides you with a wealth of delicious and creative recipes based on you dietary restrictions for your next dinner party.",
    tags: ["React", "HTML/CSS", "JavaScript", "API Integration", "Firebase"],
    imageUrl: dinner,
    livesite: "https://love-in-a-time-of-allergies.netlify.app/",
    github: "https://github.com/LoveInATimeOfAllergies/loveInATimeOfAllergies",
  },
  {
    title: "Project Management Site",
    description:
      "Effortlessly coordinate tasks, track progress, and collaborate with your team in real-time.",
    tags: [
      "React",
      "HTML/CSS",
      "state Management",
      "User Authentication",
      "Firebase",
      "FireStore",
    ],
    imageUrl: programmanagement,
    livesite: "https://projectmanagementsitegr.netlify.app",
    github: "https://github.com/Gogulan12/ProjectManagementSite",
  },
  {
    title: "Meme Generator",
    description:
      "A fun and easy-to-use meme generator app designed using the Giphy API to search and save all you favourite memes.",
    tags: ["React", "HTML/CSS", "JavaScript", "API Integration"],
    imageUrl: meme,
    livesite: "https://fanciful-pasca-29d869.netlify.app/",
    github: "https://github.com/Gogulan12/Gogulan-Ravichandran-Project-Three",
  },
  {
    title: "100 Days of Code",
    description:
      "Successfully executed 100 daily projects employing a wide range of front-end tools and languages, including modern technologies.",
    tags: [
      "React",
      "Next.js",
      "SQL",
      "Tailwind",
      "Framer",
      "ThreeJs",
      "SCSS",
      "GSAP",
    ],
    imageUrl: hundred,
    livesite: "https://github.com/Gogulan12/100DaysOfCodePersonalProjects",
    github: "https://github.com/Gogulan12/100DaysOfCodePersonalProjects",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Firebase",
  "React",
  "Next.js",
  "Node.js",
  "Git & GitHub",
  "Tailwind",
  "Version Control",
  "Responsive Design",
  "Project Scope Management",
  "RESTful APIs",
  "AWS",
  "Paired Programming",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
