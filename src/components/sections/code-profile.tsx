"use client";
import { motion } from "framer-motion";
import React from "react";

const codeLines = [
  { n: 1, c: "const" , cls: "text-blue-100"},
  { n: 1, c: " me" , cls: "text-pink-100"},
  { n: 1, c: " = {" },
  { n: 2, c: "  name:" },
  { n: 2, c: ' "DUYLANG",', cls: "text-yellow-500" },
  { n: 3, c: "  role:" },
  { n: 3, c: ' "ReactJS Developer",', cls: "text-yellow-500" },
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
  { n: 12, c: "  hireable:" , cls:"text-green-700"},
  { n: 12, c: " function() {" },
  { n: 13, c: "    // Reach out via email or LinkedIn", cls: "text-muted-foreground" },
  { n: 14, c: "    return" , cls: "text-blue-100"},
  { n: 14, c: " true;", cls: "text-red-500" },
  { n: 15, c: "  }" },
  { n: 16, c: "};" },
];

export function CodeProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-xl border bg-background/60 backdrop-blur-sm shadow p-4 font-mono text-sm overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="flex items-center mb-3 gap-2">
        <div className="flex gap-1">
          <span className="size-3 rounded-full bg-red-500" />
          <span className="size-3 rounded-full bg-yellow-500" />
          <span className="size-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-muted-foreground">portfolio.ts</span>
      </div>
      <pre className="m-0 leading-5">
        {codeLines.map((l, i) => (
          <div key={i} className="code-line flex">
            <span className="w-6 pr-2 text-right select-none text-muted-foreground/60">{l.n}</span>
            <span className={l.cls}>{l.c}</span>
            {i < codeLines.length - 1 && codeLines[i+1].n !== l.n && <span/>}
          </div>
        ))}
      </pre>
      <span className="absolute bottom-2 right-3 text-primary font-semibold animate-pulse">|</span>
    </motion.div>
  );
}
