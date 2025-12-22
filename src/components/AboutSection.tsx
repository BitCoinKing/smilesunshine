"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 8 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      xMovement: Math.random() * 20 - 10,
      duration: 12 + Math.random() * 6,
      delay: Math.random() * 4,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative bg-[#020617] py-24 px-6 md:px-20">
      {/* Soft gradient halo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(246,235,97,0.15),_rgba(251,219,101,0.1),_transparent_70%)] blur-3xl"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F6EB61]/20 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, p.xMovement, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-4xl text-white space-y-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest text-[#F6EB61] font-medium"
        >
          ABOUT SMILE SUNSHINE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Creating the safe space every child deserves.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            Too many young people grow up carrying heavy stories in silence — unstable homes,
            illness in the family, domestic struggles, grief, or emotional hardship. Smile Sunshine
            was created to ensure no child navigates those feelings alone.
          </p>

          <p>
            We exist to build safe, judgment-free spaces — both digital and physical — where youth
            ages 7–17 can express themselves freely, connect with caring mentors, create through art
            and movement, and begin to heal.
          </p>

          <p>
            Our vision is simple: A world where every child feels seen, heard, supported, and safe to be themselves.
          </p>

          <p>
            As we grow, our programs will expand from online support → after-school sessions → a full
            community healing center in the heart of Los Angeles.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
