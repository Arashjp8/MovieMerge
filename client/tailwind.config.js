/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "910px",
      // => @media (min-width: 768px) { ... }
      lg: "1200px",
      xl: "1550px",
      "2xl": "1700px",
    },
    extend: {},
  },
  plugins: [],
};
