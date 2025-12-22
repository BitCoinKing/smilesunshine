"use client";

import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("NEWSLETTER SUBSCRIBE:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="ss-container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="h-8 w-8 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="currentColor" />
                <path d="M12 2v4m0 8v4m8-8h-4m-8 0H4m15.364-2.636l-2.828 2.828m-8.484 0l-2.828-2.828M21 12h-4m-8 0H4m13.656 5.656l-2.828-2.828m-8.484 0l-2.828 2.828" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold">Smile Sunshine</span>
            </div>
            <p className="text-gray-400 text-sm">
              Creating safe, judgment-free spaces where vulnerable youth can express themselves,
              connect with mentors, and begin to heal.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#mission" className="text-gray-400 hover:text-white transition-colors">Mission</a>
              <a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a>
              <a href="#board" className="text-gray-400 hover:text-white transition-colors">Board</a>
              <a href="#donate" className="text-gray-400 hover:text-white transition-colors">Donate</a>
              <a href="#need-help" className="text-gray-400 hover:text-white transition-colors">I Need Help</a>
            </nav>
          </div>

          {/* Newsletter and Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            {isSubscribed ? (
              <p className="text-green-400 text-sm">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="mailto:info@smilesunshine.org" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 Smile Sunshine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
