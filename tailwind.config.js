const { colors } = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./design-system/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors,
        brand: {
          white: "#ffffff",
          pale: "#fafafa",
          cta: "#151a26",
          hover: "#2a324b",
          danger: "#e94f37",
          warning: "#ffc100",
          succed: "#419D78",
          DEFAULT: "#2a324b",
        },
      },
      aspectRatio: {
        crt: "4/3",
        panoramic: "21/9",
        mac: "16/10",
        ultrapanoramic: "32/9",
      },
      minHeight: {
        0: "0",
        20: "20vh",
        25: "25vh",
        40: "40vh",
        50: "50vh",
        60: "60vh",
        75: "75vh",
        80: "80vh",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@headlessui/tailwindcss"),
  ],
}
