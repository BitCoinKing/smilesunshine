"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type ProgramItem = {
  title: string;
  short: string;
  long: string;
  features: string[];
};

const programs: ProgramItem[] = [
  {
    title: "Safe Spaces After School",
    short: "A warm, supervised sanctuary where youth can decompress, share, and heal together.",
    long: "Our after-school safe spaces provide emotional support, creative play, and restorative circles in a trauma-informed environment where youth ages 7–17 can feel truly heard and supported.",
    features: [
      "Drop-in hours 3–7 PM daily",
      "Trauma-informed facilitators",
      "Creative expression stations",
      "Restorative circle sessions",
      "Emotional regulation tools"
    ]
  },
  {
    title: "Creative Healing Lab",
    short: "Art therapy, music sessions, and movement workshops for emotional release.",
    long: "Our Creative Healing Lab blends expressive arts therapy, music sessions, storytelling workshops, and movement exercises to help youth unlock emotions and build confidence through creativity.",
    features: [
      "Weekly art therapy sessions",
      "Music and rhythm healing",
      "Movement and somatic work",
      "Journaling and storytelling",
      "Photography and self-expression"
    ]
  },
  {
    title: "Mentorship Circles",
    short: "Guided small groups with caring adults building trust and resilience.",
    long: "Small group mentorship circles led by trained adults help youth build trust, connection, self-awareness, and emotional resilience through weekly guided conversations and activities.",
    features: [
      "One-to-one matching available",
      "Small group dynamics (4–6 youth)",
      "Weekly guided sessions",
      "Emotional safety protocols",
      "Long-term relationship building"
    ]
  },
  {
    title: "Weekend Empowerment Days",
    short: "Themed Saturday workshops fostering confidence, creativity, and community.",
    long: "Our empowerment days offer themed weekend sessions focused on identity building, community service, creative expression labs, team-bonding activities, and confidence development.",
    features: [
      "Half-day wellness workshops",
      "Community service projects",
      "Identity and self-discovery",
      "Team-building activities",
      "Confidence-building exercises"
    ]
  },
  {
    title: "Family Support Pathways",
    short: "Comprehensive support for households navigating emotional challenges.",
    long: "Families receive personalized support including parent coaching, conflict resolution sessions, resource navigation, emotional guidance, and long-term planning tools.",
    features: [
      "Parent coaching sessions",
      "Family conflict resolution",
      "Resource navigation support",
      "Emotional guidance counseling",
      "Long-term planning assistance"
    ]
  }
];

// Floating particles component
function FloatingParticles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(255, 240, 180, ${0.15 + Math.random() * 0.2})`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
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
  );
}

export default function ProgramsSection() {
  const [active, setActive] = useState<ProgramItem | null>(null);

  return (
    <section id="programs" className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(180deg, #F6EB61 0%, #F4D98E 40%, #F3C2A0 100%)'
    }}>
      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Programs
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support programs designed to heal, empower, and connect vulnerable youth with the care they deserve.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {programs.map((program, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setActive(program)}
              className="cursor-pointer group"
            >
              <div
                className="h-full p-8 lg:p-10 rounded-3xl transition-all duration-500 group-hover:shadow-2xl"
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
                }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">{program.short}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #F6EB61, #F5C36A, #F29D77)'
                  }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              backdropFilter: 'blur(18px)',
              background: 'rgba(255, 240, 200, 0.35)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-2xl w-full mx-6"
            >
              <div
                className="relative p-8 lg:p-12 rounded-3xl shadow-2xl"
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActive(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.8)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  ✕
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {active.title}
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {active.long}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">What you'll experience:</h4>
                    <ul className="space-y-3">
                      {active.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-yellow-500 text-lg mt-1">✦</span>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
