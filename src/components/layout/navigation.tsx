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
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or system preference
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = stored === "dark" || (!stored && systemDark);

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

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
                className="font-bold text-xl cursor-pointer px-3 py-2 flex items-center gradient-text-primary"
              >
                DUYLANG
              </motion.div>
            </Link>
            <button
              onClick={() => handleNavigation("/")}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                pathname === "/"
                  ? "gradient-text-primary font-medium bg-gradient-primary/10 border border-primary/30 glow-primary"
                  : "text-muted-foreground hover:gradient-text-secondary hover:bg-muted/50"
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
                  ? "gradient-text-primary font-medium bg-gradient-primary/10 border border-primary/30 glow-primary"
                  : "text-muted-foreground hover:gradient-text-secondary hover:bg-muted/50"
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
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gradient-primary/10 hover:glow-primary transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              {isDark ? (
                <Sun className="h-5 w-5 gradient-text-accent" />
              ) : (
                <Moon className="h-5 w-5 gradient-text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
