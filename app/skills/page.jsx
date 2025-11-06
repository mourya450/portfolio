"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-blue-950 dark:to-gray-800"
    >
      {/* 🌊 Top Curvy Divider */}
      <div className="absolute top-0 left-0 right-0 text-blue-50 dark:text-gray-900">
        <svg
          viewBox="0 0 1440 160"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,64L60,74.7C120,85,240,107,360,117.3C480,128,600,128,720,117.3C840,107,960,85,1080,85.3C1200,85,1320,107,1380,117.3L1440,128V0H0Z"
          ></path>
        </svg>
      </div>

      {/* 🧠 Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20 px-6 sm:px-10 md:px-16">
        {/* 👤 Profile Image */}
        <motion.div
          className="flex justify-center md:justify-start md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/Amit.jpeg"
              alt="Amitabh Mourya"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* ✍️ Text Section */}
        <motion.div
          className="flex flex-col gap-6 md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            A bit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">About Me And My Tech Skill</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I’m <span className="font-semibold text-blue-600">Amitabh Mourya</span>, a{" "}
            <strong>Frontend Developer</strong> with over 5+ years of experience
            crafting performant, responsive, and maintainable interfaces.
            I thrive in fast-paced environments, building scalable web apps using
            modern frontend technologies and microfrontend architectures.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My core expertise includes <strong>React </strong>, <strong>Next.js </strong>,<strong>React Native </strong>,
            <strong>TypeScript</strong>, and <strong>Redux Toolkit</strong>, with
            experience in integrating <strong>Module Federation</strong> and
            <strong> Microfrontend</strong> architectures. I’m also skilled in UI systems like{" "}
            <strong>Material UI</strong>, <strong>Ant Design</strong>,{" "}
            <strong>Tailwind CSS</strong>, and animations using <strong>Framer Motion</strong>.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I value clean architecture, maintainable code, and testing practices with{" "}
            <strong>Jest</strong> and <strong>React Testing Library</strong>. I enjoy collaborating
            across teams to deliver high-quality, user-centric solutions powered by modern web tech.
          </p>
        </motion.div>
      </div>

      {/* 💡 Horizontal Skill Cloud */}
      <motion.div
        className="relative z-10 mt-16 max-w-7xl mx-auto text-center px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Core Technologies & Tools
        </h3>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 text-sm sm:text-base">
          {[
            "JavaScript (ES6+)",
            "TypeScript",
            "React.js",
            "Next.js 14",
            "React Native",
            "Redux Toolkit",
            "React Query",
            "Microfrontend Architecture",
            "Module Federation",
            "React Fiber",
            "Jest",
            "React Testing Library",
            "Material UI",
            "Ant Design",
            "Tailwind CSS",
            "Bootstrap",
            "Framer Motion",
            "CSS3 / SCSS",
            "HTML5",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Git / GitHub",
            "Jira / Agile",
          ].map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 text-blue-800 dark:text-blue-200 rounded-full font-medium shadow-sm transition-transform cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* 🌊 Bottom Curvy Divider */}
      <div className="absolute bottom-0 left-0 right-0 text-blue-100 dark:text-gray-900">
        <svg
          viewBox="0 0 1440 160"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,64L60,69.3C120,75,240,85,360,85.3C480,85,600,75,720,90.7C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
