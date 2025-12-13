"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type Program = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  cardDescription: string;
  modalDetails: string[];
};

type ProgramModalProps = {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ProgramModal({ program, isOpen, onClose }: ProgramModalProps) {
  if (!program) return null;

  const Icon = program.icon;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-2xl max-h-[85vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur-2xl"
              >
                {/* Gradient halo */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,168,37,0.28),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(110,198,255,0.25),_transparent_55%)]" />

                <div className="relative flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F6EB61] to-[#F7A26A] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Dialog.Title className="text-lg sm:text-xl font-semibold text-white">
                          {program.title}
                        </Dialog.Title>
                        <Dialog.Description className="mt-2 text-sm text-ss-muted">
                          {program.cardDescription}
                        </Dialog.Description>
                      </div>
                    </div>

                    <Dialog.Close asChild>
                      <button
                        aria-label="Close"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white hover:bg-black/60 transition"
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Body */}
                  <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-8 space-y-4 text-sm text-ss-muted">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ss-secondary">
                      What this program includes:
                    </h3>
                    <ul className="list-disc space-y-2 pl-5">
                      {program.modalDetails.map((detail, index) => (
                        <li key={index} className="text-ss-text">{detail}</li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <p className="text-sm text-ss-muted">
                        Contact us to learn how you can participate in or support this program.
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-wrap gap-3 border-t border-white/10 px-6 py-4 sm:px-8 sm:py-5 bg-white/5">
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          // Scroll to contact section
                          setTimeout(() => {
                            const el = document.getElementById("need-help");
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                          }, 150);
                        }}
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F6EB61] via-[#FBDB65] to-[#ffeaa7] px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6EB61]/80 focus-visible:ring-offset-0 transition"
                      >
                        Get Involved
                      </button>
                    </Dialog.Close>

                    <Dialog.Close asChild>
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          // Scroll to donate section
                          setTimeout(() => {
                            const el = document.getElementById("donate");
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                          }, 150);
                        }}
                        className="inline-flex items-center justify-center rounded-full border border-[#FBDB65] bg-[#FBDB65]/18 px-6 py-2.5 text-sm font-semibold text-[#FBDB65] backdrop-blur-sm hover:bg-[#FBDB65]/28 hover:text-[#FBDB65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBDB65]/80 focus-visible:ring-offset-0 transition"
                      >
                        Support This Program
                      </button>
                    </Dialog.Close>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
