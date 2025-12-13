"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

type MissionDialogProps = {
  children: React.ReactNode;
};

export function MissionDialog({ children }: MissionDialogProps) {
  const handleScrollTo = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" />

        {/* Centered content wrapper */}
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Scrollable glass card */}
          <div className="relative w-full max-w-xl sm:max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur-2xl">
            {/* Gradient halo */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,168,37,0.28),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(110,198,255,0.25),_transparent_55%)]" />

            <div className="relative flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6 sm:p-8">
                <div>
                  <Dialog.Title className="text-lg sm:text-xl font-semibold text-white">
                    Our Mission: Healing through Expression.
                  </Dialog.Title>
                  <Dialog.Description className="mt-2 text-sm text-ss-muted">
                    Smile Sunshine Org exists to create safe, judgment‑free
                    spaces where vulnerable youth can finally breathe, be
                    themselves, and feel deeply seen.
                  </Dialog.Description>
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

              {/* Body (no flex-1, card itself is scrolling) */}
              <div className="px-6 pb-4 pt-4 sm:px-8 sm:pb-6 space-y-4 text-sm text-ss-muted">
                <p>
                  Too many kids grow up carrying heavy stories in silence—sick
                  parents, unstable homes, grief, and trauma—without a safe
                  place to put those feelings. Smile Sunshine Org is building
                  spaces where they can talk, create, and connect without fear
                  of being judged or dismissed.
                </p>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ss-secondary">
                    What we do
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      <span className="text-ss-text">Safe Spaces:</span>{" "}
                      After‑school and weekend environments where youth
                      ages 7–17 can show up exactly as they are and feel
                      genuinely heard.
                    </li>
                    <li>
                      <span className="text-ss-text">Mentorship:</span>{" "}
                      Trained, caring adults who listen first, guide gently,
                      and stand beside kids navigating grief, anxiety,
                      illness in the family, or instability at home.
                    </li>
                    <li>
                      <span className="text-ss-text">Creative Healing:</span>{" "}
                      Art, journaling, music, and movement that help kids
                      express what words alone can't always hold.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ss-secondary">
                    Who we serve
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      Youth ages 7–17 from low‑income or under‑resourced
                      households in Los Angeles.
                    </li>
                    <li>
                      Kids impacted by serious illness in the family, loss of a
                      loved one, or domestic instability.
                    </li>
                    <li>
                      Young people who don't have another safe, consistent
                      place to talk about what they're going through.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ss-secondary">
                    Where we're going
                  </h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      <span className="text-ss-text">
                        Phase 1 – Digital Foundation:
                      </span>{" "}
                      Build our online platform, community, and support network
                      so families can find us and get help.
                    </li>
                    <li>
                      <span className="text-ss-text">
                        Phase 2 – First LA Space:
                      </span>{" "}
                      Open a warm, physical hub in the heart of Los Angeles
                      where kids can drop in after school and on weekends.
                    </li>
                    <li>
                      <span className="text-ss-text">
                        Phase 3 – Owned Flagship:
                      </span>{" "}
                      Create a permanent, community‑owned building dedicated
                      to youth healing, creativity, and connection.
                    </li>
                  </ul>
                </div>

                <p>
                  Every donation, every volunteer, and every share moves us
                  closer to a city where no child has to carry their story
                  alone.
                </p>
              </div>

              {/* Footer CTAs */}
              <div className="flex flex-wrap gap-3 border-t border-white/10 bg-white/5 px-6 py-4 sm:px-8 sm:py-5">
                {/* Primary: I Want to Help */}
                <Dialog.Close asChild>
                  <button
                    type="button"
                    onClick={() => handleScrollTo("donate")}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F6EB61] via-[#FBDB65] to-[#ffeaa7] px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6EB61]/80 focus-visible:ring-offset-0 transition"
                  >
                    I Want to Help
                  </button>
                </Dialog.Close>

                {/* Secondary: I Need Support */}
                <Dialog.Close asChild>
                  <button
                    type="button"
                    onClick={() => handleScrollTo("need-help")}
                    className="inline-flex items-center justify-center rounded-full border border-[#FBDB65] bg-[#FBDB65]/18 px-6 py-2.5 text-sm font-semibold text-[#FBDB65] backdrop-blur-sm hover:bg-[#FBDB65]/28 hover:text-[#FBDB65] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBDB65]/80 focus-visible:ring-offset-0 transition"
                  >
                    I Need Support
                  </button>
                </Dialog.Close>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MissionDialog;
