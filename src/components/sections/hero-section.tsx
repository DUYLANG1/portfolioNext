"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Avatar className="w-32 h-32 mx-auto mb-6">
              <AvatarImage src="/avatar.svg" alt="DUYLANG" />
              <AvatarFallback className="text-4xl font-bold">DL</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              DUYLANG Portfolio
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Badge variant="outline" className="text-lg px-4 py-2 mb-6">
                A LITTLE BIT ABOUT MYSELF
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                I have a strong passion for learning and exploring various
                fields, especially programming 🤷‍♂️
              </p>
              <p>
                I am fluent in{" "}
                <strong className="text-foreground">
                  Javascript and related frameworks
                </strong>
              </p>
              <p>
                My interests are building new{" "}
                <strong className="text-foreground">
                  Websites and new technology Products
                </strong>
              </p>
              <p>
                Whenever possible, I also apply my passion for developing
                products with{" "}
                <strong className="text-foreground">ReactJS</strong> and{" "}
                <strong className="text-foreground">NodeJS</strong>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
