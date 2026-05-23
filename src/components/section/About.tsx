"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "2", label: "Founders" },
  { value: "100%", label: "Client Satisfaction" },
];

const founders = [
  {
    name: "Yousuf Showrov",
    role: "Co-Founder & Creative Director",
    initials: "YS",
  },
  {
    name: "Uday Rahman",
    role: "Co-Founder & Technical Lead",
    initials: "UR",
  },
];

const reasons = [
  {
    icon: "✦",
    title: "Founder-led execution",
    desc: "Every project is directly handled by the founders to ensure quality and accountability.",
  },
  {
    icon: "◈",
    title: "Strategy-driven development",
    desc: "We align design and engineering decisions with real business goals, not trends.",
  },
  {
    icon: "⬡",
    title: "Scalable architecture",
    desc: "We build systems that are fast, maintainable, and ready to grow with your business.",
  },
];

function Counter({ value }: { value: string }) {
  return (
    <span className="text-3xl md:text-4xl font-extrabold text-primary">
      {value}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="about" className="py-28 px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
         <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-xs uppercase tracking-[0.14em] text-primary mb-3 block"
  >
    Who we are
  </motion.p>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-3xl md:text-5xl font-bold text-foreground"
  >
    About us
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="mt-4 text-muted-foreground text-xs sm:text-md"
  >
       We are two founders building modern digital products with a focus on
          performance, design, and scalability.
  </motion.p>
      </motion.div>

      <div className="max-w-5xl mx-auto">

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-xl bg-background p-6 text-center"
            >
              <Counter value={s.value} />
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-widest text-primary mb-4">
              Our Mission
            </p>

            <p className="text-foreground text-lg leading-relaxed mb-6">
              We help startups and businesses turn ideas into scalable digital
              products that are fast, reliable, and built with purpose.
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed">
              From design to deployment, we take full responsibility for building
              systems that deliver real business impact.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Craft over shortcuts",
                "Clarity over complexity",
                "Results over assumptions",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FOUNDERS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-widest text-primary mb-2">
              Founders
            </p>

            {founders.map((f) => (
              <div
                key={f.name}
                className="flex items-center gap-4 border border-border rounded-xl bg-background p-5"
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center bg-primary/10 text-primary font-bold text-sm">
                  {f.initials}
                </div>

                <div>
                  <p className="font-semibold text-foreground">{f.name}</p>
                  <p className="text-xs text-muted-foreground">{f.role}</p>
                </div>
              </div>
            ))}

            <p className="text-xs text-muted-foreground mt-2">
              Based in Bangladesh · Working globally
            </p>
          </motion.div>
        </div>

        {/* WHY CHOOSE US */}
        <div>
          <p className="text-xs uppercase tracking-widest text-primary mb-6">
            Why Choose Us
          </p>

          <div className="grid md:grid-cols-3 gap-4">
         
            {reasons.map((r) => (
            
              <div
                key={r.title}
                className="border border-border rounded-xl bg-background p-6 hover:shadow-md hover:border-primary transition"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
                  {r.icon}
                </div>

                <h3 className="font-semibold text-foreground mb-2">
                  {r.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
  
      </div>
    </section>
  );
}