import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: {
          100: "#E5E8EC",
          200: "#EEF1F5",
          300: "#EDF0F4",
          400: "#A1A1A1",
          900: "#2C2F33",
        },
        customGreen: {
          400: "#A1EA94",
          500: "#70DD85",
        },
        customPurple: {
          200: "#C2B4FF",
        },
        customPink: {
          500: "#E94C89",
        },
        customYellow: {
          400: "FEDB7B",
        },
        customRed: {
          400: "#FE5353",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
