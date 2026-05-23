"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/project";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
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
   Our work
  </motion.p>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-3xl md:text-5xl font-bold text-foreground"
  >
    Selected Projects
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    className="mt-4 text-muted-foreground text-xs sm:text-md"
  >
     A collection of products we’ve designed and built to solve real business problems.
  </motion.p>
          {/* View all
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground
              hover:text-primary transition-colors duration-200 group flex-shrink-0"
          >
            All projects
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link> */}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/portfolio/${project.id}`} className="group block">

                <div
                  className="rounded-2xl border border-border bg-card
                    overflow-hidden transition-all duration-300
                    hover:border-primary/40 hover:shadow-md"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100
                        group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Category */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wider
                        bg-background/70 backdrop-blur border border-border text-muted-foreground">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Icon */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-primary/10 backdrop-blur
                        border border-primary/30 flex items-center justify-center">
                        <ArrowUpRight size={14} className="text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground mb-1">
                      {project.year}
                    </p>

                    <h3 className="font-[Syne] font-bold text-base text-foreground mb-1.5">
                      {project.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium
                            bg-muted text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}

                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] text-muted-foreground/60">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}