"use client";

import { motion } from "framer-motion";

type Program = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  cardDescription: string;
  modalDetails: string[];
};

type ProgramCardProps = {
  program: Program;
  onOpen: () => void;
};

export function ProgramCard({ program, onOpen }: ProgramCardProps) {
  const Icon = program.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="
        relative bg-white/60 backdrop-blur-xl p-8 rounded-2xl shadow-md
        hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer
        before:absolute before:inset-0 before:bg-gradient-to-br
        before:from-white/30 before:to-transparent before:opacity-0
        hover:before:opacity-100 before:translate-x-[-100%]
        hover:before:translate-x-[100%] before:transition-all before:duration-700
      "
      onClick={onOpen}
    >
      <Icon className="w-12 h-12 text-transparent bg-gradient-to-br from-[#F6EB61] to-[#F7A26A] bg-clip-text" />
      <h3 className="mt-4 text-xl font-semibold text-neutral-900">{program.title}</h3>
      <p className="mt-2 text-neutral-700">{program.cardDescription}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        className="
          mt-5 px-6 py-2 rounded-full font-medium text-neutral-900
          bg-gradient-to-r from-[#F6EB61] to-[#F7A26A]
          shadow hover:brightness-110 transition
        "
      >
        Learn More
      </button>
    </motion.div>
  );
}
