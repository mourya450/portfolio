"use client";
import { motion } from "framer-motion";
import React from "react";
import { Calendar, Briefcase } from "lucide-react";

export default function Timeline() {
  const journey = [
    {
      year: "2025 - Present",
      company: "Nityo Infotech Pvt. Ltd.",
      role: "Software Engineer (React Developer)",
      description:
        "Working with NatWest Group to build modular Microfrontend-based banking applications using React, TypeScript, and MUI. Focused on scalability, accessibility, and reusability of UI components.",
    },
    {
      year: "2024",
      company: "Intellect Resource Pvt. Ltd.",
      role: "Software Engineer (React Developer)",
      description:
        "Delivered scalable front-end for UPSC data management system. Developed custom modules, secure API integrations, and automated form workflows using React and Next.js.",
    },
    {
      year: "2023 - 2024",
      company: "Okoders Pvt. Ltd.",
      role: "Software Engineer (React / React Native)",
      description:
        "Built and deployed cross-platform applications including GoLive and Crypto Screener. Developed responsive UIs, animations, and integrated real-time APIs.",
    },
    {
      year: "2021 - 2023",
      company: "Staple Logic Pvt. Ltd.",
      role: "React Native / ReactJS Developer",
      description:
        "Developed React and React Native apps for clients like Mashreq Bank and 247 Accessibility. Improved app performance, optimized rendering, and implemented reusable components.",
    },
    {
      year: "2021",
      company: "TekkiWeb Solutions Pvt. Ltd.",
      role: "React Native / ReactJS Developer",
      description:
        "Worked on multi-domain web apps including social, 3D, and car selling platforms using React JS and React Native. Focused on modular architecture and consistent UI patterns.",
    },
    {
      year: "2020 - 2021",
      company: "Helpful Innovative Solutions",
      role: "ReactJS Developer",
      description:
        "Started my career as a React Developer, transitioning from static websites to modern SPAs. Built reusable front-end modules and learned API integration, testing, and deployment pipelines.",
    },
  ];

  return (
    <section
      id="timeline"
      className="relative w-full py-24 sm:py-32 bg-gradient-to-b from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-800 overflow-hidden"
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

      {/* 🧭 Header */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
          Career Timeline
        </span>
      </motion.h2>

      {/* 🕓 Timeline */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-8 space-y-12">
          {journey.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Circle Indicator */}
              <span className="absolute -left-[30px] top-1 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full shadow-md"></span>

              <div className="flex items-center gap-2 mb-2">
                <Calendar className="text-blue-600 dark:text-blue-400" size={18} />
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {item.year}
                </p>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {item.role}
              </h3>
              <p className="text-gray-800 dark:text-gray-300 text-lg font-medium">
                {item.company}
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
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
