"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Mission", href: "#mission" },
  { name: "Programs", href: "#programs" },
  { name: "Board", href: "#board" },
  { name: "Donate", href: "#donate" },
  { name: "Funding", href: "/funding" },
  { name: "I Need Help", href: "#need-help" },
];

export function Header() {
  return (
    <Disclosure as="header" className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050816cc] backdrop-blur-md">
      {({ open }) => (
        <>
          <div className="ss-container h-16 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <svg className="h-8 w-8 text-ss-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="currentColor" />
                  <path d="M12 2v4m0 8v4m8-8h-4m-8 0H4m15.364-2.636l-2.828 2.828m-8.484 0l-2.828-2.828M21 12h-4m-8 0H4m13.656 5.656l-2.828-2.828m-8.484 0l-2.828 2.828" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xl font-bold text-ss-text">Smile Sunshine Org</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-ss-text/80">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-ss-primary transition-colors focus-visible:ring-2 focus-visible:ring-ss-primary/70 focus-visible:outline-none rounded px-1"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:block">
              <button className="rounded-full bg-ss-primary text-black px-5 py-2 text-sm font-semibold hover:bg-yellow-400 transition">
                Donate
              </button>
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
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-ss-text hover:text-ss-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="px-3 py-2">
                <button className="w-full rounded-full bg-ss-primary text-black px-5 py-2 text-sm font-semibold hover:bg-yellow-400 transition">
                  Donate
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
