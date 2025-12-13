"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Palette, Users, Sun, HeartHandshake } from "lucide-react";
import { ProgramCard } from "./ProgramCard";
import { ProgramModal } from "./ProgramModal";

const programs = [
  {
    id: "safe-spaces",
    title: "Safe Spaces After School",
    icon: Home,
    cardDescription: "A warm, supervised space where youth ages 7–17 can decompress, talk, create, and feel safe.",
    modalDetails: [
      "Drop-in hours 3–7 PM",
      "Judgment-free support",
      "Weekly group circles",
      "Art + journal station",
      "Quiet decompression corner",
      "Trauma-informed staff"
    ]
  },
  {
    id: "creative-healing",
    title: "Creative Healing Lab",
    icon: Palette,
    cardDescription: "Healing through expression with art, music, journaling, and movement.",
    modalDetails: [
      "Art therapy",
      "Music / rhythm healing",
      "Movement + somatics",
      "Journaling + storytelling",
      "Photography exploration"
    ]
  },
  {
    id: "mentorship-circles",
    title: "Mentorship Circles",
    icon: Users,
    cardDescription: "Trained, caring adults offering guidance, connection, and emotional safety.",
    modalDetails: [
      "One-to-one matching",
      "Group mentorship",
      "Support for grief/anxiety",
      "Trusted adult listeners",
      "Youth empowerment"
    ]
  },
  {
    id: "weekend-empowerment",
    title: "Weekend Empowerment Days",
    icon: Sun,
    cardDescription: "Saturday workshops that build confidence, creativity, and community.",
    modalDetails: [
      "Half-day wellness workshops",
      "Community meals",
      "Guest speakers",
      "Connection activities"
    ]
  },
  {
    id: "family-support",
    title: "Family Support Pathways",
    icon: HeartHandshake,
    cardDescription: "Support for the whole household navigating emotional or practical challenges.",
    modalDetails: [
      "Parent guidance",
      "Resource navigation",
      "Crisis support",
      "Strengthening communication"
    ]
  }
];

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);

  return (
    <>
      <section id="programs" className="relative bg-gradient-to-br from-[#FFF9D9] to-[#FFE7B3] overflow-hidden">
        <FloatingParticles />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="ss-section text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Comprehensive support programs designed to heal, empower, and connect vulnerable youth with the care they deserve.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProgramCard
                  program={program}
                  onOpen={() => setSelectedProgram(program)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <ProgramModal
        program={selectedProgram}
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </>
  );
}
