"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Get stored scroll position from sessionStorage
    const scrollPositions = sessionStorage.getItem("scrollPositions");
    const positions = scrollPositions ? JSON.parse(scrollPositions) : {};

    // If returning to a previously visited page, restore scroll position
    if (positions[pathname] !== undefined) {
      window.scrollTo(0, positions[pathname]);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  useEffect(() => {
    // Save scroll position on every scroll
    const handleScroll = () => {
      const scrollPositions = sessionStorage.getItem("scrollPositions");
      const positions = scrollPositions ? JSON.parse(scrollPositions) : {};
      positions[pathname] = window.scrollY;
      sessionStorage.setItem("scrollPositions", JSON.stringify(positions));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}
