"use client";
import { useEffect, useState } from "react";

export default function HydrationWrapper({ children }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHydrated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!hydrated) return null;
  return children;
}
