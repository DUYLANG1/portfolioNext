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
      router.push(href as any);
      // Reset after a short delay to prevent stuck state
      setTimeout(() => setIsNavigating(false), 500);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-bold text-2xl cursor-pointer px-2 py-1 flex items-center gradient-text-primary tracking-tight"
              >
                DUYLANG
              </motion.div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1 bg-background/50 p-1 rounded-xl border border-white/5 backdrop-blur-sm">
              <button
                onClick={() => handleNavigation("/")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  pathname === "/"
                    ? "gradient-text-primary font-bold bg-white/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
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
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  pathname === "/projects"
                    ? "gradient-text-primary font-bold bg-white/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                } ${isNavigating ? "opacity-50" : ""}`}
                disabled={isNavigating}
              >
                Projects
                {isNavigating && pathname !== "/projects" && (
                  <Loader2 className="h-3 w-3 animate-spin" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-white/10 hover:glow-primary transition-all duration-300 border border-transparent hover:border-white/10 group"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 gradient-text-accent group-hover:rotate-90 transition-transform duration-500" />
              ) : (
                <Moon className="h-5 w-5 gradient-text-primary group-hover:-rotate-12 transition-transform duration-500" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsNavigating(!isNavigating)}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${isNavigating ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${isNavigating ? "opacity-0" : ""}`} />
                <span className={`w-full h-0.5 bg-foreground rounded-full transition-all duration-300 ${isNavigating ? "-rotate-45 -translate-y-2.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isNavigating ? "auto" : 0,
            opacity: isNavigating ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 bg-background/95 backdrop-blur-xl rounded-2xl border border-white/10 mt-2 p-4 shadow-xl">
            <button
              onClick={() => handleNavigation("/")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                pathname === "/"
                  ? "bg-gradient-primary/10 gradient-text-primary font-bold"
                  : "text-muted-foreground hover:bg-white/5"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/projects")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                pathname === "/projects"
                  ? "bg-gradient-primary/10 gradient-text-primary font-bold"
                  : "text-muted-foreground hover:bg-white/5"
              }`}
            >
              Projects
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
