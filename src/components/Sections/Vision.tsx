"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/lib/useReveal";

export function Vision() {
  const { ref, containerVariants, itemVariants } = useReveal();

  return (
    <section className="bg-ss-surface">
      <div className="ss-section">
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            The Vision Ahead
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ss-muted">
            Building a movement, one safe space at a time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-ss-primary via-ss-accent to-ss-secondary h-full"></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Phase 1 */}
            <motion.div variants={itemVariants} className="relative flex items-center md:justify-between">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ss-primary rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="md:w-5/12 md:pr-8">
                <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ss-primary to-ss-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <h3 className="text-xl font-semibold">Phase 1: Digital Foundation</h3>
                  </div>
                  <p className="text-gray-600">
                    Launch our online platform, build community awareness, and establish partnerships with local organizations.
                    Create digital resources and virtual support groups to reach kids wherever they are.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-5/12"></div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div variants={itemVariants} className="relative flex items-center md:justify-between md:flex-row-reverse">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ss-accent rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="md:w-5/12 md:pl-8">
                <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ss-accent to-ss-secondary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <h3 className="text-xl font-semibold">Phase 2: First LA Space</h3>
                  </div>
                  <p className="text-gray-600">
                    Open our first physical location in Los Angeles, providing in-person mentorship, art therapy, and community events.
                    Focus on serving 100+ kids with comprehensive support programs.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-5/12"></div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div variants={itemVariants} className="relative flex items-center md:justify-between">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ss-secondary rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="md:w-5/12 md:pr-8">
                <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ss-secondary to-ss-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <h3 className="text-xl font-semibold">Phase 3: Owned Flagship Building</h3>
                  </div>
                  <p className="text-gray-600">
                    Establish a permanent, owned facility with expanded programs, research initiatives, and training for other organizations.
                    Scale to serve thousands of children across multiple locations.
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
