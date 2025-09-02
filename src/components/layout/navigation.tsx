"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { Moon, Sun, Loader2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  // Reset navigation state when pathname changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Read persisted or system preference if first mount
    const stored = localStorage.getItem("theme");
    if (!stored) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    } else {
      setIsDark(stored === "dark");
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }, [isDark]);

  const handleNavigation = (href: string) => {
    if (pathname !== href) {
      setIsNavigating(true);
      router.push(href);
      // Reset after a short delay to prevent stuck state
      setTimeout(() => setIsNavigating(false), 500);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-bold text-xl cursor-pointer px-3 py-2 flex items-center"
              >
                DUYLANG
              </motion.div>
            </Link>
            <button
              onClick={() => handleNavigation("/")}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                pathname === "/"
                  ? "text-foreground font-medium bg-primary/10 border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              } ${isNavigating ? "opacity-50" : ""}`}
              disabled={isNavigating}
            >
              Home
              {isNavigating && pathname !== "/" && (
                <Loader2 className="h-3 w-3 animate-spin" />
              )}
            </button>
            <button
              onClick={() => handleNavigation("/projects")}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                pathname === "/projects"
                  ? "text-foreground font-medium bg-primary/10 border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              } ${isNavigating ? "opacity-50" : ""}`}
              disabled={isNavigating}
            >
              Projects
              {isNavigating && pathname !== "/projects" && (
                <Loader2 className="h-3 w-3 animate-spin" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
