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
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Job Search Website",
    description:
      "Find your next career opportunity with ease by browsing through mulitiple job listings on my user-friendly job search site.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: jobi,
  },
  {
    title: "Recipes For Dinner",
    description:
      "App provides you with a wealth of delicious and creative recipes based on you dietary restrictions for your next dinner party.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: dinner,
  },
  {
    title: "Meme Generator",
    description:
      "A fun and easy-to-use meme generator app designed using the Giphy API to search and save all you favourite memes.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: meme,
  },
  {
    title: "Planning Your Day",
    description:
      "A simple and efficient to-do list app that helps you stay organized and is able to quickly add, edit, and complete tasks.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: dayplanner,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
