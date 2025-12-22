"use client";

const MOCK_BOARD = [
  { name: "Sera Najarian", role: "Founder & Executive Director", quote: "Every child deserves a safe place to speak their truth." },
  { name: "Gor Gevorkyan", role: "Co-Founder & Technology Lead", quote: "We're using technology to build spaces where kids feel seen." },
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
            These are the humans guiding Smile Sunshine with integrity,
            transparency, and a deep commitment to vulnerable youth.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto"
        >
          {MOCK_BOARD.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              custom={index}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-br from-white via-white to-gray-50 text-slate-900 rounded-3xl shadow-lg shadow-black/5 p-8 flex flex-col gap-4 border border-white/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F6EB61] via-[#FBDB65] to-[#F7A26A] shadow-md" />
                <div>
                  <p className="font-bold text-base text-gray-900">{member.name}</p>
                  <p className="text-sm text-gray-600 font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed italic">
                "{member.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
