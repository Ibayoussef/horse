/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#D90000",
      },
      keyframes: {
        colors: {
          "0%": { color: "#ff8300", opacity: "1" },
          "25%": { color: "#ff8300", opacity: "0.7" },
          "50%": { color: "#ff8300", opacity: "0.9" },
          "75%": { color: "#ff8300", opacity: "0.5" },
          "100%": { color: "#ff8300" },
        },
      },
      animation: {
        colors: "colors 3s infinite",
      },
    },
  },
  plugins: [],
};
