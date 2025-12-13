import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ss: {
          bg: 'var(--ss-bg)',
          surface: 'var(--ss-surface)',
          surfaceAlt: 'var(--ss-surface-alt)',
          card: 'var(--ss-card)',
          cardSoft: 'var(--ss-card-soft)',
          primary: 'var(--ss-primary)',
          secondary: 'var(--ss-secondary)',
          accent: 'var(--ss-accent)',
          text: 'var(--ss-text)',
          muted: 'var(--ss-text-muted)',
        },
      },
    },
  },
  plugins: [],
};

export default config;
