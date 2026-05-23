"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20 sm:mt-0 px-4 sm:px-6"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2
          w-[70vw] h-[70vw] max-w-[500px] max-h-[500px]
          bg-primary/20 rounded-full blur-[100px]
          -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <span className="inline-block px-4 py-1.5 rounded-full animate-pulse border border-primary/20 bg-primary/10 text-[10px] sm:text-xs uppercase tracking-widest text-primary mb-4">
            Precision Digital Agency
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-foreground">
            We Build Products That Move at{" "}
            <span className="text-primary">Orbit Speed</span>
          </h1>

          <p className="mt-5 text-muted-foreground text-xs sm:text-lg">
            We help startups and businesses build high-performance web apps with modern tech.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#contact">
            <button className="rounded-full px-6 py-2 bg-primary text-primary-foreground cursor-pointer">
              Get Started
            </button>
            </Link>
            <Link href="#portfolio">
            <button className="rounded-full px-6 py-2 border border-border cursor-pointer">
              View Work
            </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT ORBIT */}
        <div className="relative flex items-center justify-center">

          {/* Orbit container (IMPORTANT) */}
          <div className="relative w-[70vw] h-[70vw] max-w-[420px] max-h-[420px]">

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[18vw] h-[18vw] max-w-[90px] max-h-[90px] rounded-full bg-primary/20 border border-border flex items-center justify-center">
                <span className="text-[10px] sm:text-sm font-bold text-foreground">
                  ORBITRIX
                </span>
              </div>
            </div>

            {/* Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0 border border-border rounded-full"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-primary text-[10px] sm:text-xs">
                Web
              </div>
            </motion.div>

            {/* Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute inset-[8%] border border-border/70 rounded-full"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-primary text-[9px] sm:text-xs">
                Automation
              </div>
            </motion.div>

            {/* Ring 3 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-[16%] border border-border/50 rounded-full"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-primary text-[9px] sm:text-xs whitespace-nowrap">
                Agentic AI
              </div>
            </motion.div>

            {/* Ring 4 (hide on very small screens) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="hidden sm:block absolute inset-[24%] border border-border/40 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary text-xs whitespace-nowrap">
                ERP
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}