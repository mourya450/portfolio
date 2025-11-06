"use client";
import { motion } from "framer-motion";
import React from "react";

export default function PersonalProfile() {
  return (
    <section
      id="profile"
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

      {/* 🧠 Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 md:px-16">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Personal{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
            Profile
          </span>
        </motion.h2>

        {/* 👤 Info Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Column */}
          <div className="flex flex-col gap-6 text-lg">
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                Full Name
              </h3>
              <p className="text-gray-700 dark:text-gray-300">Amitabh Mourya</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                Date of Birth
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                February 21,1997
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                Age
              </h3>
              <p className="text-gray-700 dark:text-gray-300">28 years</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                Location
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ludhiana , Punjab , India
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                Languages
              </h3>
              <p className="text-gray-700 dark:text-gray-300">English, Hindi ,Punjabi</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                Strengths
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Logical Thinking, Attention to Detail, UI/UX Understanding,
                Team Collaboration, and a Passion for Continuous Learning.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 text-lg">
            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                Education
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Bachelor of Technology (B.Tech) in Information Technology & Engineering
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Punjab Technical University (PTU)
                </span>
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Higher Secondary (12th) – Science Stream  
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Govt. Sen Sec School (Jwahar Nagar ,Ludhiana)
                </span>
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                High School (10th)  
                <br />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  A.V.M Sen Sec School (Ludhiana)
                </span>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                Professional Experience
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Frontend Developer</strong> with over{" "}
                <strong>5+ years</strong> of experience building scalable and
                performance-driven web applications using modern React, JavaScript frameworks.
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 text-base">
                <li>
                  <strong>NatWest Group:</strong> Developed modular microfrontend
                  apps using React, Redux Toolkit, TypeScript, and MUI. Improved
                  page load performance by 30% through code splitting.
                </li>
                <li>
                  <strong>GoLive:</strong> Built responsive dashboards with
                  Next.js, Tailwind CSS, and role-based routing. Led UI/UX alignment with design teams.
                </li>
                <li>
                  <strong>UPSC & IPR Projects:</strong> Delivered accessible,
                  responsive, and API-integrated frontends with strong focus on
                  performance and usability.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                Hobbies & Interests
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Playing Cricket 🏏, Traveling 🌍, Exploring new tech tools, and
                learning about UI performance & design trends.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                Career Vision
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                To evolve into a <strong>Frontend Architect</strong> — designing scalable
                microfrontend systems, mentoring developers, and delivering
                engaging web experiences with exceptional UI precision.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🌊 Bottom Curvy Divider */}
      <div className="absolute bottom-0 left-0 right-0 text-blue-100 dark:text-gray-900">
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
