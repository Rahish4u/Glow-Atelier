/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "left-to-right": "leftToRight 5s linear infinite",
      },
      keyframes: {
        leftToRight: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}

