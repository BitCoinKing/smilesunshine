"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";

export function Mission() {
  const { ref, containerVariants, itemVariants } = useReveal();

  return (
    <section id="mission" className="bg-ss-surface">
      <div className="ss-section text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our Mission
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ss-muted">
            At Smile Sunshine Org, we believe every child deserves a safe space to heal, grow, and express themselves freely.
            Through compassionate mentorship and creative outlets, we help vulnerable youth build confidence, resilience, and hope for the future.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          <motion.div variants={itemVariants} className="bg-white text-slate-900 rounded-3xl shadow-sm p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-ss-primary to-ss-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe Spaces</h3>
            <p className="text-gray-600">
              Judgment-free environments where kids can share their stories and feel truly heard.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white text-slate-900 rounded-3xl shadow-sm p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-ss-secondary to-ss-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.75 1.75 0 0 0 18.06 7H5.94a1.75 1.75 0 0 0-1.72 1.37L1.5 16H4v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm-7-9h3l1.5 4H12v-4zm-5 0h3v4H5.5l1.5-4z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
            <p className="text-gray-600">
              Connecting kids with caring adults who provide guidance and emotional support.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white text-slate-900 rounded-3xl shadow-sm p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-ss-accent to-ss-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative Expression</h3>
            <p className="text-gray-600">
              Art, music, and play as tools for emotional healing and self-discovery.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
