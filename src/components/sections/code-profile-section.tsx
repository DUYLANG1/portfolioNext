"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const codeLines = [
  { n: 1, c: "const", cls: "text-blue-400" },
  { n: 1, c: " me", cls: "text-pink-400" },
  { n: 1, c: " = {" },
  { n: 2, c: "  name:" },
  { n: 2, c: ' "DUYLANG",', cls: "text-yellow-500" },
  { n: 3, c: "  role:" },
  { n: 3, c: ' "Web Developer",', cls: "text-yellow-500" },
  { n: 4, c: "  skills:" },
  { n: 4, c: " [", cls: "text-pink-200" },
  { n: 5, c: '    "React", "TypeScript", "Node.js",', cls: "text-yellow-500" },
  { n: 6, c: '    "Next.js", "Express", "NestJS",', cls: "text-yellow-500" },
  { n: 7, c: '    "SQL", "NoSQL", "AWS"', cls: "text-yellow-500" },
  { n: 8, c: "  ],", cls: "text-pink-200" },
  { n: 9, c: "  hardWorker:" },
  { n: 9, c: " true,", cls: "text-red-500" },
  { n: 10, c: "  quickLearner:" },
  { n: 10, c: " true,", cls: "text-red-500" },
  { n: 11, c: "  problemSolver:" },
  { n: 11, c: " true,", cls: "text-red-500" },
  { n: 12, c: "  hireable:", cls: "text-green-700" },
  { n: 12, c: " function() {" },
  {
    n: 13,
    c: "    // Reach out via email or LinkedIn",
    cls: "text-muted-foreground",
  },
  { n: 14, c: "    return", cls: "text-blue-100" },
  { n: 14, c: " true;", cls: "text-red-500" },
  { n: 15, c: "  }" },
  { n: 16, c: "};" },
];

export function CodeProfileSection() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="hidden md:block py-12 md:py-20 lg:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto rounded-xl border bg-background/60 backdrop-blur-sm shadow-lg p-6 md:p-8 font-mono text-sm overflow-x-auto"
        >
          <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-primary/5 via-transparent to-primary/5 rounded-xl" />
          <div className="flex items-center mb-4 gap-2">
            <div className="flex gap-1.5">
              <span className="size-3 rounded-full bg-red-500" />
              <span className="size-3 rounded-full bg-yellow-500" />
              <span className="size-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-muted-foreground">portfolio.ts</span>
          </div>
          <pre className="m-0 leading-6 relative z-10">
            {codeLines.map((l, i) => (
              <div key={i} className="code-line flex">
                <span className="w-8 pr-3 text-right select-none text-muted-foreground/60">
                  {l.n}
                </span>
                <span className={l.cls}>{l.c}</span>
                {i === codeLines.length - 1 && (
                  <span className="text-primary font-semibold animate-pulse ml-0.5">
                    |
                  </span>
                )}
                {i < codeLines.length - 1 && codeLines[i + 1].n !== l.n && (
                  <span />
                )}
              </div>
            ))}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
