"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-[90vh]">
      {/* 🌈 Background Gradient Layer */}
      <div className="absolute inset-0 -z-10">
        {/* Large moving gradient */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, 80, -80, 0],
            rotate: [0, 30, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        />

        {/* Second softer gradient blob */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-20 blur-2xl rounded-full"
          animate={{
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 💎 Hero Content Card */}
      <motion.div
        className="relative z-10 p-10 sm:p-16 rounded-3xl backdrop-blur-md bg-white/40 dark:bg-gray-800/40 shadow-2xl max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🧑‍💻 Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
            Amitabh
          </span>
        </motion.h1>

        {/* 💬 Subtitle / About */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I’m a <strong>Frontend Developer</strong> who loves turning creative ideas into elegant,
          interactive, and high-performing web experiences. I specialize in{" "}
          <span className="text-blue-500 font-medium">React</span>,{" "}
          <span className="text-purple-500 font-medium">Next.js</span>, and modern UI architecture.
          I’m driven by clean design, strong UX principles, and smooth animations that feel alive.
        </motion.p>

        {/* 🚀 Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 font-medium"
          >
            View Projects
          </Link>
          <a
            href="/Amitabh_Mourya_Resume.pdf"
            download
            className="px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 font-medium"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* 🌊 Smooth Curvy Divider */}
      <div className="absolute bottom-0 left-0 right-0 text-blue-100 dark:text-gray-900">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,160C840,149,960,203,1080,229.3C1200,256,1320,256,1380,256L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
