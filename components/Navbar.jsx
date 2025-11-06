"use client";
import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/skills", label: "Skills" },
    { href: "/profile", label: "Profile" },
    { href: "/projects", label: "Projects" },
    { href: "/timeline", label: "Timeline" },
    { href: "/contact", label: "Contact" },
  ];

  // prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-6 sm:px-10 md:px-16 lg:px-24 
                 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/20 dark:border-gray-700/30 
                 fixed top-0 left-0 w-full z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* ✅ Brand */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
        <Link
          href="/"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="text-blue-600">Amitabh</span>.dev
        </Link>
      </h1>

      {/* ✅ Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-300 font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors ${
              isActive(link.href)
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 
                     bg-white/70 dark:bg-gray-800/60 shadow-sm backdrop-blur-md transition-all duration-300 
                     hover:scale-105 hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500"
        >
          <span className="text-xl">{theme === "light" ? "🌙" : "☀️"}</span>
        </button>
      </div>

      {/* ✅ Mobile Controls */}
      <div className="flex md:hidden items-center gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 
                     bg-white/70 dark:bg-gray-800/60 shadow-sm backdrop-blur-md transition-all duration-300 
                     hover:scale-105 hover:border-blue-400 dark:hover:border-blue-500"
        >
          <span className="text-lg">{theme === "light" ? "🌙" : "☀️"}</span>
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ✅ Floating Compact Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Floating Drawer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%]
                         w-[60%] sm:w-[50%] md:w-[40%] 
                         bg-white/85 dark:bg-gray-900/90 backdrop-blur-2xl rounded-2xl
                         shadow-2xl border border-gray-200/40 dark:border-gray-700/40 
                         text-gray-900 dark:text-gray-200 z-50 
                         flex flex-col items-center justify-center 
                         p-8 gap-6 text-lg font-semibold text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="absolute top-3 right-3 text-gray-800 dark:text-gray-300 hover:text-blue-500"
              >
                <X size={26} />
              </button>

              {/* Centered Menu Items */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors ${
                      isActive(link.href)
                        ? "text-blue-600 dark:text-blue-400"
                        : "hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
