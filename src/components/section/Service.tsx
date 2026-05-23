"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Building2, Bot } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "We build fast, scalable and modern web applications tailored to your business needs.",
    icon: Code,
  },
  {
    title: "Automation",
    description:
      "Streamline your workflows with smart automation that saves time and reduces manual work.",
    icon: Cpu,
  },
  {
    title: "ERP Solutions",
    description:
      "Custom ERP systems to manage operations, resources and business processes efficiently.",
    icon: Building2,
  },
  {
    title: "Agentic AI",
    description:
      "Intelligent AI agents that can automate tasks, make decisions and enhance productivity.",
    icon: Bot,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      
      {/* 🔥 Animated Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-15"
      >
        <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-xs uppercase tracking-[0.14em] text-primary mb-3 block"
  >
    What we do
  </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-foreground"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-muted-foreground text-xs sm:text-md"
        >
          We deliver powerful digital solutions to help businesses grow, automate and scale.
        </motion.p>
      </motion.div>

      {/* 🔥 Services Grid */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group rounded-2xl border border-border 
              bg-background/60 backdrop-blur-xl p-6 
              shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl 
              bg-primary/10 text-primary mb-4 group-hover:scale-110 transition">
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Subtle Hover Glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/20 opacity-0 
              group-hover:opacity-100 transition pointer-events-none" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}