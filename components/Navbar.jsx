"use client";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { href: "skills", label: "Skills" },
    { href: "profile", label: "Profile" },
    { href: "projects", label: "Projects" },
    { href: "timeline", label: "Timeline" },    
    { href: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-8 sm:px-12 md:px-16 lg:px-24 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/20 dark:border-gray-700/30"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
         <a
            href={"/"}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          ><span className="text-blue-600">Amitabh</span>.dev</a>
      </h1>

      <div className="flex items-center gap-6 sm:gap-8 text-gray-700 dark:text-gray-300 font-medium">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {link.label}
          </a>
        ))}
       <button
  onClick={toggleTheme}
  className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500"
  aria-label="Toggle theme"
>
  <span className="text-xl transition-transform duration-500">
    {theme === "light" ? "🌙" : "☀️"}
  </span>
</button>

      </div>
    </motion.nav>
  );
};

export default Navbar;
