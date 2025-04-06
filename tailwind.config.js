import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", ...fontFamily.sans],
        serif: ["Neue Helvetica", ...fontFamily.serif],
        "serif-light": ["Neue Helvetica Light", ...fontFamily.serif],
      },
      colors: {
        "primary-blue": "#3030FC", // Custom color
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
