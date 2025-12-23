"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type MissionItem = {
  title: string;
  short: string;
  long: string;
};

const missionItems: MissionItem[] = [
  {
    title: "Safe Spaces",
    short: "Judgment-free environments where kids feel heard and supported.",
    long: "Smile Sunshine's Safe Spaces provide trauma-informed environments with trained facilitators, restorative circles, emotional regulation support, and trusted adults available for real-time connection."
  },
  {
    title: "Mentorship",
    short: "Connecting kids with caring adults who offer guidance and support.",
    long: "Mentorship includes weekly one-on-one sessions, parent partnership, identity development, crisis guidance, and long-term emotional growth planning."
  },
  {
    title: "Creative Expression",
    short: "Healing through art, music, storytelling, and movement.",
    long: "Through art therapy, music therapy, open expression labs, performance, and tactile creative tools, youth discover identity, self-worth, and emotional release."
  }
];

export function Mission() {
  const [active, setActive] = useState<MissionItem | null>(null);

  return (
    <div className="py-20 text-center relative">
      <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-12">
        At Smile Sunshine, every child deserves a safe space to heal, grow, and express.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {missionItems.map((item, i) => (
          <motion.div
            key={i}
            onClick={() => setActive(item)}
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="cursor-pointer p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10
                       shadow-xl hover:shadow-2xl hover:border-white/20
                       transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-gray-300">{item.short}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-10 max-w-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl text-white relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-white text-xl hover:opacity-70"
              >
                ×
              </button>

              <h3 className="text-3xl font-bold mb-4">{active.title}</h3>
              <p className="text-gray-200 leading-relaxed">{active.long}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
