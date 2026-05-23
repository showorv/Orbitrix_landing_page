"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const steps = [
  {
    icon: "✦",
    title: "Discovery",
    description:
      "We understand your business goals, requirements, and challenges before starting.",
  },
  {
    icon: "◈",
    title: "Planning",
    description:
      "We define a clear roadmap, architecture, and execution strategy.",
  },
  {
    icon: "⬡",
    title: "Build",
    description:
      "We develop scalable, high-performance solutions using modern tech.",
  },
  {
    icon: "▲",
    title: "Deploy & Support",
    description:
      "We launch, monitor, and continuously improve your product.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 30%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const thresholds = [0.1, 0.35, 0.6, 0.85];
    return smoothProgress.on("change", (v) => {
      let active = -1;
      thresholds.forEach((t, i) => {
        if (v >= t) active = i;
      });
      setActiveStep(active);
    });
  }, [smoothProgress]);

  const getState = (i: number) => {
    if (i < activeStep) return "done";
    if (i === activeStep) return "active";
    return "idle";
  };

  return (
    <section ref={sectionRef} id="process" className="py-24 px-6">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-xs uppercase tracking-widest text-primary mb-3">
          How we work
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Our Process
        </h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground">
          A proven approach to design, build, and scale digital products.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">

        {/* Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-border">
          <motion.div
            className="w-full bg-primary origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {steps.map((step, i) => {
            const state = getState(i);
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* LEFT CARD (desktop only) */}
                <div
                  className={`hidden md:flex flex-1 ${
                    isLeft ? "justify-end pr-10" : "invisible"
                  }`}
                >
                  <StepCard step={step} index={i} state={state} />
                </div>

                {/* CENTER DOT */}
                <div
                  className={`absolute left-4 md:left-1/2 -translate-x-1/2 z-10
                  w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center
                  text-[10px] md:text-xs font-bold border-2 transition-all
                  ${
                    state === "active"
                      ? "border-primary text-primary bg-background"
                      : state === "done"
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  0{i + 1}
                </div>

                {/* RIGHT CARD */}
                <div
                  className={`flex-1 w-full md:w-auto pl-12 md:pl-10 ${
                    isLeft ? "md:invisible" : ""
                  }`}
                >
                  <StepCard step={step} index={i} state={state} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  state,
}: {
  step: (typeof steps)[0];
  index: number;
  state: "idle" | "active" | "done";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`w-full max-w-[320px] md:max-w-[360px]
        rounded-xl border p-4 md:p-5 transition-all
        ${
          state === "active"
            ? "border-primary/40 bg-background shadow-md"
            : state === "done"
            ? "border-primary/20 bg-background/70"
            : "border-border bg-background/50"
        }`}
    >
      {/* Accent */}
      <div
        className={`absolute top-0 left-0  h-[2px] transition-opacity duration-300
          ${
            state === "active"
              ? "opacity-100 bg-gradient-to-r from-transparent via-primary to-transparent"
              : "opacity-0"
          }`}
      />

      {/* Icon */}
      <div
        className={`w-7 h-7 md:w-8 md:h-8 rounded-md flex items-center justify-center mb-3 text-sm
        ${state === "active" ? "bg-primary/10" : "bg-muted"}`}
      >
        {step.icon}
      </div>

      <p
        className={`text-[10px] md:text-xs uppercase tracking-widest mb-1
        ${
          state === "active"
            ? "text-primary"
            : state === "done"
            ? "text-primary/70"
            : "text-muted-foreground"
        }`}
      >
        Step 0{index + 1}
      </p>

      <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">
        {step.title}
      </h3>

      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}