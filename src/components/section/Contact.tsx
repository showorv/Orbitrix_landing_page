"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projectTypes = [
  "Web Design & Development",
  "AI Automation",
  "ERP Solutions",
  "Agentic AI",

  "Other",
];

const contactInfo = [
  {
    icon: "✉",
    label: "hello@orbitrix.io",
  },
 
  {
    icon: "✆",
    label: "01321066589",
  },
  {
    icon: "◷",
    label: "24h Response Time",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success"
  >("idle");

  return (
    <section id="contact" className="py-28 px-6 relative">

      {/* HEADER */}
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
   get in touch
  </motion.p>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-3xl md:text-5xl font-bold text-foreground"
  >
    Contact Us
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="mt-4 text-muted-foreground text-xs sm:text-md"
  >
    Have an idea? Let’s turn it into a real digital product.
  </motion.p>
</motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
         

          <h3 className="text-3xl font-bold text-foreground mb-4">
            Let’s build something great together
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Share your idea and we’ll respond within 24 hours with clear next steps.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md border border-border bg-background flex items-center justify-center text-sm text-primary">
                  {item.icon}
                </div>

                <p className="text-sm text-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801782767557"
            target="_blank"
            className="inline-flex mt-6 items-center gap-2 px-4 py-2 rounded-full
              border border-border bg-background text-green-800 hover:bg-muted transition"
          >
            Chat on WhatsApp
          </a>

          <p className="text-xs text-muted-foreground mt-6">
            Based in Bangladesh · Working globally
          </p>
        </motion.div>

        {/* RIGHT SIDE - FORMSPREE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border border-border bg-background rounded-2xl p-8"
        >
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Message sent!
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                We’ll reply within 24 hours.
              </p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/maqkjvrk"
              method="POST"
              onSubmit={() => setStatus("loading")}
              className="space-y-5"
            >

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Your Name"
                  className="border border-border bg-background px-4 py-3 rounded-md text-sm"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="border border-border bg-background px-4 py-3 rounded-md text-sm"
                  required
                />
              </div>

              {/* PROJECT TYPE */}
              <select
                name="projectType"
                className="w-full border border-border bg-background px-4 py-3 rounded-md text-sm"
                required
              >
                <option value="">Select Project Type</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              {/* MESSAGE */}
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full border border-border bg-background px-4 py-3 rounded-md text-sm resize-none"
                required
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
                onSubmit={()=>setStatus("success")}
              >
                Send Message
              </button>

              <p className="text-xs text-muted-foreground text-center">
                No spam. Just real conversation.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}