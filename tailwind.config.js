/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        raspberry: { DEFAULT: "#E0337A", dark: "#C42B68", light: "#F05590" },
        carbon:    { DEFAULT: "#2B2230", light: "#3D3344" },
        cream:     { DEFAULT: "#FFFDFB" },
        blush:     { DEFAULT: "#F6D9E3", dark: "#EDCBD7" },
        peach:     { DEFAULT: "#FFD9C2" },
        gray:      { DEFAULT: "#6B6470", light: "#9B8E96" },
      },
      fontFamily: {
        display: ["Montserrat", "Helvetica Neue", "Arial", "sans-serif"],
        body:    ["Inter", "Montserrat", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.8rem,7vw,5.5rem)",  { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem,4.5vw,3.25rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.4rem,3vw,2rem)",    { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s ease forwards",
        "fade-in": "fade-in 0.55s ease forwards",
      },
    },
  },
  plugins: [],
};
