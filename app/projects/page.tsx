"use client";
import { motion } from "framer-motion";
import React from "react";
import { Briefcase } from "lucide-react";

export default function Projects() {
  const experiences = [
    {
      company: "Nityo Infotech Pvt. Ltd.",
      role: "Software Engineer (React Developer)",
      duration: "Sep 2024 – Present | Remote / India",
      client: "Client: NatWest Group",
      description:
        "Currently working as a React Developer for NatWest Group, building modular Microfrontend (MFE) banking dashboards and reusable UI libraries. Responsible for performance optimization, accessibility, and maintainable front-end architecture.",
      tech: [
        "React",
        "TypeScript",
        "JavaScript",
        "Microfrontend",
        "Context API",
        "Material UI",
        "Jest",
      ],
    },
    {
      company: "Intellect Resource Pvt. Ltd.",
      role: "Software Engineer (React Developer)",
      duration: "May 2024 – Aug 2024 | Delhi, UPSC",
      client: "Client: UPSC",
      description:
        "Delivered scalable frontend solutions for the UPSC online management system. Designed data-driven forms and dashboards using React and Next.js, with Node.js APIs and MongoDB integration.",
      tech: ["Next.js", "React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    },
    {
      company: "Okoders Pvt. Ltd.",
      role: "Software Engineer (React / React Native)",
      duration: "Mar 2023 – Feb 2024 | Gurugram, Haryana",
      projects: [
        "GoLive Mobile App",
        "Crypto Screener App",
        "Govt. of India IPR Project",
      ],
      description:
        "Contributed to multiple client and internal projects. Designed cross-platform applications, improved performance, and implemented state management solutions with Redux Toolkit.",
      tech: [
        "React",
        "React Native",
        "Redux Toolkit",
        "Material UI",
        "NativeBase",
        "REST API",
        "HTML",
        "CSS",
      ],
    },
    {
      company: "Staple Logic Pvt. Ltd.",
      role: "React Native / ReactJS Developer",
      duration: "Oct 2021 – Mar 2023 | Mohali, Punjab",
      projects: [
        "Mashreq Bank Mortgage",
        "247 Accessibility",
        "IMC App",
        "HSVP Golf Club App",
      ],
      description:
        "Developed hybrid mobile apps with optimized component rendering and smooth UI interactions. Collaborated with backend engineers and QA teams to deliver high-quality applications on tight deadlines.",
      tech: [
        "React",
        "React Native",
        "Redux Toolkit",
        "Material UI",
        "NativeBase",
        "REST API",
        "CSS",
        "HTML",
      ],
    },
    {
      company: "TekkiWeb Solutions Pvt. Ltd.",
      role: "React Native / ReactJS Developer",
      duration: "May 2021 – Oct 2021 | Ludhiana, Punjab",
      projects: [
        "EatFundu",
        "3D Drawing Project",
        "Social Media App",
        "Car Selling Platform",
      ],
      description:
        "Worked on multiple client-facing React and React Native projects, focusing on UI precision, responsive layouts, and API integration. Contributed to component reusability and scalability improvements.",
      tech: [
        "React",
        "React Native",
        "Redux",
        "Material UI",
        "Ant Design",
        "NativeBase",
        "REST API",
        "HTML",
        "CSS",
      ],
    },
    {
      company: "Helpful Innovative Solutions",
      role: "ReactJS Developer",
      duration: "Aug 2020 – May 2021 | Mohali, Punjab",
      projects: [
        "Digital Signage System",
        "Visitor Management System",
        "Virtual Expo Platform",
      ],
      description:
        "Began my professional journey as a React Developer, transforming static web layouts into interactive Single Page Applications (SPAs). Learned the foundations of reusable component design, API communication, and responsive development.",
      tech: [
        "React",
        "Redux",
        "Material UI",
        "Bootstrap",
        "REST API",
        "HTML",
        "CSS",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-24 sm:py-32 bg-gradient-to-b from-purple-50 via-blue-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* 🌊 Top Curvy Divider */}
      <div className="absolute top-0 left-0 right-0 text-blue-50 dark:text-gray-900">
        <svg
          viewBox="0 0 1440 120"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,32L80,53.3C160,75,320,117,480,117.3C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96V0H0Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        {/* 🧠 Intro Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Professional Journey
            </span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Over the past <strong>5+ years</strong>, I’ve evolved from crafting
            simple React components to engineering enterprise-scale web and
            mobile applications.  
            <br className="hidden sm:block" />
            Throughout this journey, I’ve contributed to multiple{" "}
            <strong>government, fintech, and startup projects</strong>, building
            modular architectures, reusable design systems, and performance-driven user interfaces.
          </p>
        </motion.div>

        {/* 🧱 Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="group bg-white/60 dark:bg-gray-800/50 backdrop-blur-xl p-8 rounded-3xl shadow-md border border-white/20 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {exp.company}
                </h3>
                <Briefcase className="text-blue-500" size={22} />
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                {exp.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.duration}
              </p>
              {exp.client && (
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong>{exp.client}</strong>
                </p>
              )}
              {exp.projects && (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-3 text-base">
                  {exp.projects.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🌊 Bottom Curvy Divider */}
      <div className="absolute bottom-0 left-0 right-0 text-purple-100 dark:text-gray-900">
        <svg
          viewBox="0 0 1440 160"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,117.3C1120,139,1280,181,1360,197.3L1440,213V0H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
