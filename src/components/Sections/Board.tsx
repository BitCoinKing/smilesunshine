"use client";

const MOCK_BOARD = [
  { name: "Sera [Last Name]", role: "Founder & Executive Director", quote: "Every child deserves a safe place to speak their truth." },
  { name: "Gor Gevorkyan", role: "Co-Founder & Technology Lead", quote: "We're using technology to build spaces where kids feel seen." },
  { name: "Future Board Member", role: "Treasurer", quote: "Your donations are handled with radical transparency." },
  { name: "Future Board Member", role: "Community Advocate", quote: "We listen to families first." },
];

import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";

export function Board() {
  const { ref, containerVariants, itemVariants } = useReveal();

  return (
    <section id="board" className="bg-ss-surface">
      <div className="ss-section">
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="text-sm font-semibold text-ss-secondary uppercase tracking-[0.18em] mb-3">
            Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Board of Believers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ss-muted">
            These are the humans guiding Smile Sunshine Org with integrity,
            transparency, and a deep commitment to vulnerable youth.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid gap-6 sm:grid-cols-2"
        >
          {MOCK_BOARD.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              custom={index}
              className="bg-white text-slate-900 rounded-3xl shadow-sm p-6 flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-ss-primary to-ss-accent" />
                <div>
                  <p className="font-semibold text-sm">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                "{member.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
