"use client";

import { motion } from "framer-motion";
import { MissionDialog } from "@/components/MissionDialog";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#F6EB61] via-[#FBDB65] via-30% via-[#F7A26A] to-[#E87A85] text-white overflow-hidden">
      {/* Subtle bottom fade to blue */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#A7C7E7]/20 to-transparent"></div>

      <div className="relative ss-container py-24 sm:py-32 flex flex-col gap-10 lg:flex-row lg:items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-slate-900"
        >
          <p className="uppercase tracking-wide text-sm font-semibold text-slate-700 mb-3">
            Nonprofit • Los Angeles
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Healing through Expression.
            <span className="block text-slate-900">
              Hope through Community.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-800">
            Smile Sunshine creates safe, judgment‑free spaces where
            vulnerable youth can express themselves, connect with mentors,
            and begin to heal.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#121212] text-white px-8 py-3 text-sm font-semibold hover:bg-white hover:text-[#121212] transition">
              Donate Now
            </button>
            <MissionDialog>
              <button className="rounded-full bg-white/15 border border-white/60 text-white px-8 py-3 text-sm backdrop-blur hover:bg-white/25 transition">
                Learn About Our Mission
              </button>
            </MissionDialog>
          </div>
        </motion.div>

        {/* Right: future YouTube & metrics */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:w-1/2 flex flex-col gap-6"
        >
          {/* YouTube placeholder */}
          <div className="relative aspect-video rounded-3xl bg-white/15 border border-white/40 backdrop-blur-md flex items-center justify-center text-center text-white/80 text-sm">
            <span>Future video: Sera introducing Smile Sunshine</span>
          </div>
          {/* Stats placeholder */}
          <div className="grid grid-cols-3 gap-4 text-white/90 text-xs sm:text-sm">
            <div className="rounded-2xl bg-black/25 px-4 py-3 backdrop-blur">
              <p className="font-semibold text-lg sm:text-xl">0 → 1</p>
              <p>Safe spaces built</p>
            </div>
            <div className="rounded-2xl bg-black/25 px-4 py-3 backdrop-blur">
              <p className="font-semibold text-lg sm:text-xl">100+</p>
              <p>Kids we aim to reach</p>
            </div>
            <div className="rounded-2xl bg-black/25 px-4 py-3 backdrop-blur">
              <p className="font-semibold text-lg sm:text-xl">LA</p>
              <p>First flagship city</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
