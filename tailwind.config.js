/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        writs: {
          red: "#C90000",
          redDark: "#990000",
          redSoft: "#FFE5E5",

          blue: "#002B42",
          blueLight: "#E6F1F6",

          black: "#111111",
          white: "#FFFFFF",

          textSoft: "#6B7280",
          grayLight: "#F7F7F7",
          border: "#E5E7EB",
        },
      },
    },
  },
  plugins: [],
  plugins: [require("@tailwindcss/typography")],
};