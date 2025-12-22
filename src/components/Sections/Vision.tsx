"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    phase: "1",
    title: "Digital Foundation",
    description: "Building the doorway where families first reach us for help. This stage awakens the community and prepares our support network."
  },
  {
    phase: "2",
    title: "First LA Safe Space",
    description: "Opening our first physical sanctuary where kids can talk, create, express, and heal."
  },
  {
    phase: "3",
    title: "Owned Flagship Building",
    description: "Creating a permanent home for thousands of children — a center for healing, creativity, and connection."
  }
];

// Floating particles component
function VisionParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#F6EB61' : i % 3 === 1 ? '#FBDB65' : '#F7A26A',
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 16 + Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 6,
          }}
        />
      ))}
    </div>
  );
}

// Timeline line component with scroll-linked animation
function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#F6EB61]/60 via-[#FBDB65]/60 to-[#E87A85]/60 blur-[0.5px]">
      <motion.div
        className="w-full bg-gradient-to-b from-[#F6EB61] via-[#FBDB65] to-[#E87A85] rounded-full blur-[0.3px]"
        style={{ height: lineHeight }}
      />
    </div>
  );
}

function TimelineCard({ phase, title, description, index }: { phase: string; title: string; description: string; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex items-center w-full max-w-4xl mx-auto"
    >
      {/* Clean card with more breathing room */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8
          ${isLeft ? 'mr-28 text-right' : 'ml-28'}`}
      >
        <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F6EB61] text-black">
            Phase {phase}
          </span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-ss-muted leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
}

export function Vision() {
  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Soft gradient halo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(246,235,97,0.12),_rgba(251,219,101,0.08),_transparent_70%)] blur-3xl"></div>

      <VisionParticles />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Vision Ahead
          </h2>
          <p className="text-lg text-ss-muted max-w-2xl mx-auto">
            Building a movement, one safe space at a time.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          <TimelineLine />

          <div className="space-y-20">
            {phases.map((phase, index) => (
              <TimelineCard
                key={phase.phase}
                phase={phase.phase}
                title={phase.title}
                description={phase.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
