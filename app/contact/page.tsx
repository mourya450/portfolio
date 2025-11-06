"use client";
import { motion } from "framer-motion";
import React from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-gradient-to-b from-purple-50 via-blue-50 to-white dark:from-gray-900 dark:via-blue-950 dark:to-gray-800 overflow-hidden"
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

      {/* 💬 Header */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center mb-12 px-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Let’s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
            Connect
          </span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          I’m always open to new opportunities, collaborations, or tech discussions.
          Whether it’s about frontend architecture, design systems, or a new project idea — 
          feel free to reach out. Let’s build something amazing together ✨.
        </p>
      </motion.div>

      {/* 📬 Contact Options */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Email */}
        <a
          href="mailto:mouryamit450@gmail.com"
          className="flex items-center gap-3 px-8 py-4 bg-white/70 dark:bg-gray-800/50 rounded-2xl shadow-md border border-white/20 dark:border-gray-700 hover:shadow-lg transition-transform hover:-translate-y-1"
        >
          <Mail className="text-blue-600 dark:text-blue-400" size={24} />
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            mouryamit450@gmail.com
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/amitabh-mourya-979158170"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-white/70 dark:bg-gray-800/50 rounded-2xl shadow-md border border-white/20 dark:border-gray-700 hover:shadow-lg transition-transform hover:-translate-y-1"
        >
          <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            linkedin.com/in/amitabh-mourya-979158170
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/mourya450?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-white/70 dark:bg-gray-800/50 rounded-2xl shadow-md border border-white/20 dark:border-gray-700 hover:shadow-lg transition-transform hover:-translate-y-1"
        >
          <Github className="text-blue-600 dark:text-blue-400" size={24} />
          <span className="text-gray-800 dark:text-gray-200 font-medium">
            https://github.com/mourya450?tab=repositories
          </span>
        </a>
      </motion.div>

      {/* ☎️ Optional Phone */}
      <motion.div
        className="relative z-10 text-center mt-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-3 text-gray-800 dark:text-gray-300 text-lg font-medium bg-white/60 dark:bg-gray-800/40 px-6 py-3 rounded-full border border-white/20 dark:border-gray-700 shadow-sm">
          <Phone className="text-blue-600 dark:text-blue-400" size={22} />
          +91 9530804570
        </div>
      </motion.div>

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
