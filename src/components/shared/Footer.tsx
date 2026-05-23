"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              ORBITRIX
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We build modern digital products that are fast, scalable, and
              designed to grow your business.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary">Home</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary">Portfolio</a></li>
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">
              Services
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Automation</li>
              <li>ERP Solutions</li>
              <li>Agentic AI</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@orbitrix.io" className="hover:text-primary">
                  hello@orbitrix.io
                </a>
              </li>
              <li>
                <a href="tel:01321066589" className="hover:text-primary">
                  01321066589
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/880XXXXXXXXXX"
                  target="_blank"
                  className="hover:text-primary"
                >
                  WhatsApp Chat
                </a>
              </li>
              <li>Bangladesh · Remote</li>
            </ul>
          </div>
        </div>

        {/* CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-muted/30"
        >
          <div>
            <h4 className="text-lg font-semibold text-foreground">
              Have a project in mind?
            </h4>
            <p className="text-sm text-muted-foreground">
              Let’s build something great together.
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
          >
            Start a Project
          </a>
        </motion.div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground border-t border-border pt-6">
          <p>
            © {new Date().getFullYear()} ORBITRIX. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}