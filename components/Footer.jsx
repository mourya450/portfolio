"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full py-6 text-center text-sm text-gray-600 dark:text-gray-400 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 sm:px-6">
        <p className="text-center">
          © {currentYear}{" "}
          <span className="font-semibold text-blue-500">Amitabh</span>. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/mourya450?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/amitabh-mourya-979158170"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:mouryamit450@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
