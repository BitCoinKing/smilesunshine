"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stages = [
  {
    id: 1,
    title: "Digital Foundation",
    goal: 300000,
    current: 0, // For now, set to 0 for empty bars
    description: "We are building the doorway into Smile Sunshine. Once funded, our digital programs launch so youth and families can reach us for help.",
    features: [
      "Online intake forms",
      "Digital support groups",
      "Mentor onboarding",
      "Parent/youth resource library",
      "Community outreach"
    ]
  },
  {
    id: 2,
    title: "First LA Safe Space",
    goal: 1000000,
    current: 0,
    description: "This stage brings Sera's vision to life — a physical, judgment-free space where kids can talk, create, and heal through expression.",
    features: [
      "After-school programs",
      "Mentorship circles",
      "Art & creative healing rooms",
      "Weekend programs",
      "On-site staff + trained facilitators"
    ]
  },
  {
    id: 3,
    title: "Permanent Flagship Building",
    goal: 5000000,
    current: 0,
    description: "Our long-term home in Los Angeles: a healing center where thousands of youth can find safety, creativity, and connection.",
    features: [
      "Permanent healing center",
      "Expanded program capacity",
      "Research initiatives",
      "Training programs",
      "Community partnerships"
    ]
  }
];

function ProgressBar({ goal, current }: { goal: number; current: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((current / goal) * 100);
    }, 500);
    return () => clearTimeout(timer);
  }, [current, goal]);

  return (
    <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-[#F6EB61] via-[#FBDB65] to-[#E87A85] rounded-full"
      />
    </div>
  );
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#F6EB61]/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

function StageCard({ stage, index }: { stage: typeof stages[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-2xl font-bold text-white mb-2">Stage {stage.id}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{stage.title}</h3>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-white">
            ${stage.current.toLocaleString()}
          </div>
          <div className="text-sm text-ss-muted">
            of ${stage.goal.toLocaleString()}
          </div>
        </div>
      </div>

      <ProgressBar goal={stage.goal} current={stage.current} />

      <p className="text-ss-muted mt-6 mb-6 leading-relaxed">
        {stage.description}
      </p>

      <div>
        <h4 className="text-sm font-semibold text-ss-secondary uppercase tracking-wide mb-3">
          What activates:
        </h4>
        <ul className="space-y-2">
          {stage.features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index * 0.2) + (i * 0.1) }}
              className="text-ss-text flex items-center"
            >
              <span className="w-2 h-2 bg-[#FBDB65] rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8 w-full bg-gradient-to-r from-[#F6EB61] via-[#FBDB65] to-[#F7A26A] text-slate-900 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        Support This Stage
      </motion.button>
    </motion.div>
  );
}

export default function FundingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0b1020] to-[#020617] relative">
      <FloatingParticles />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 px-6 md:px-16 pt-20 pb-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Funding Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl text-ss-muted max-w-2xl mx-auto"
          >
            Building Hope One Stage at a Time
          </motion.p>
        </div>
      </motion.header>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="px-6 md:px-16 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-ss-muted leading-relaxed mb-8">
            Smile Sunshine Org is a brand-new nonprofit on a mission to create safe, judgment-free healing spaces for vulnerable youth.
            We are at the beginning of our journey — no building yet, no physical space yet — just a powerful mission and a community ready to bring it to life.
          </p>
          <p className="text-ss-text font-medium">
            Your support determines how quickly each stage activates.
          </p>
        </div>
      </motion.section>

      {/* Stages */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {stages.map((stage, index) => (
            <StageCard key={stage.id} stage={stage} index={index} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="px-6 md:px-16 pb-20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-ss-muted mb-8">
            Every contribution brings us closer to creating lasting change in Los Angeles.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#F6EB61] via-[#FBDB65] to-[#F7A26A] text-slate-900 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
          >
            Start Donating Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
