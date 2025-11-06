"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [enableAnimatePresence, setEnableAnimatePresence] = useState(false);

  useEffect(() => {
    // enable AnimatePresence after initial hydration
    setEnableAnimatePresence(true);
  }, []);

  const MotionWrapper = (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );

  if (!enableAnimatePresence) return MotionWrapper; // render once, no double
  return <AnimatePresence mode="wait">{MotionWrapper}</AnimatePresence>;
}
