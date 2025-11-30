import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif']
      },
      colors: {
        primary: "#111827", // charcoal
        accent: "#b91c1c"   // roșu subtil (Swiss)
      }
    }
  },
  plugins: []
};

export default config;
