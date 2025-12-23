"use client";

import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Mission", href: "/#mission" },
  { name: "Programs", href: "/#programs" },
  { name: "Board", href: "/#board" },
  { name: "Donate", href: "/#donate" },
  { name: "Funding", href: "/funding" },
  { name: "I Need Help", href: "/#need-help" },
];

export function Header() {
  return (
    <Disclosure as="header" className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050816cc] backdrop-blur-md">
      {({ open }) => (
        <>
          <div className="ss-container h-16 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <motion.svg
                  className="h-8 w-8 mr-2"
                  viewBox="0 0 100 100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <defs>
                    <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFF8C6" />
                      <stop offset="60%" stopColor="#F6EB61" />
                      <stop offset="100%" stopColor="#E6C24B" />
                    </radialGradient>
                  </defs>

                  <circle
                    cx="50"
                    cy="50"
                    r="20"
                    fill="url(#sunGradient)"
                    filter="drop-shadow(0 0 10px rgba(246,235,97,0.8)) drop-shadow(0 0 20px rgba(246,235,97,0.4))"
                  />

                  <g stroke="#F6EB61" strokeWidth="3" strokeLinecap="round">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <motion.line
                        key={i}
                        x1="50"
                        y1="5"
                        x2="50"
                        y2="18"
                        transform={`rotate(${i * 30} 50 50)`}
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 4,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </g>
                </motion.svg>
                <span className="text-xl font-bold text-ss-text">Smile Sunshine</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-ss-text/80">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-ss-primary transition-colors focus-visible:ring-2 focus-visible:ring-ss-primary/70 focus-visible:outline-none rounded px-1"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="hidden md:block">
              <Link href="/#donate">
                <motion.button
                  whileHover={{ scale: 1.07, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(246,235,97,0.0)",
                      "0 0 12px rgba(246,235,97,0.45)",
                      "0 0 0px rgba(246,235,97,0.0)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="rounded-full bg-gradient-to-r from-[#F6EB61] to-[#F4C542] text-black px-6 py-2 text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  Donate
                </motion.button>
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-ss-text hover:bg-white/10 hover:text-ss-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ss-primary">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 bg-[#050816cc] backdrop-blur-md border-t border-white/5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-ss-text hover:text-ss-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/#donate" className="block">
                  <button className="w-full rounded-full bg-ss-primary text-black px-5 py-2 text-sm font-semibold hover:bg-[#F7D73A] transition">
                    Donate
                  </button>
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
