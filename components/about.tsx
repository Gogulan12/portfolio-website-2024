"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p> */}
      <p className="mb-3">
        After getting my degree in{" "}
        <span className="font-medium">Accounting</span>, I followed my love for
        programming. I joined a coding bootcamp and learned{" "}
        <span className="font-medium">Front End web development</span>. The part
        I <span className="underline">enjoy</span> most is solving problems.
        It's a great feeling when I finally figure out a solution. I work with{" "}
        <span className="font-medium">React, Next.js, Node.js, and AWS</span>.
        I'm also familiar with Python and Django. I'm always eager to learn new
        things. Right now, I'm on the lookout for a full-time software developer
        position.
      </p>
      <p>
        In addition to my technical expertise, I bring a collaborative and
        adaptable mindset to every project. I thrive in environments that
        encourage continuous learning and innovation. My goal is not only to
        contribute to the success of a team but also to foster a positive and
        collaborative work culture. I am confident that my combination of
        technical skills and a proactive approach makes me a valuable addition
        to any software development team.
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
