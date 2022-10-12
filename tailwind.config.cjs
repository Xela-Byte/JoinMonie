const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#202022",
          200: "#2d2e32",
          300: "#25262a",
          400: "#0c0c0c8c",
        },
        primary: {
          100: "#1748D2",
        },
        secondary: {
          100: "#d92121",
          200: "#24204f",
          300: "#4caf50",
        },
        neutral: {
          100: "#fff",
          200: "#515151",
        },
      },
      fontFamily: {
        Poppins_semibold: ["Poppins-semibold"],
        Poppins_medium: ["Poppins-medium"],
        Poppins_regular: ["Poppins-regular"],
        Poppins_bold: ["Poppins-bold"],
        Poppins_extrabold: ["Poppins-extrabold"],
      },
      boxShadow: {
        neon: " 0px 0px 300px 199px rgba(102,46,255,1)",
      },
    },
  },
  plugins: [
    // require('daisyui'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".neo": {
          boxShadow: theme("boxShadow.neon"),
        },
        ".neon": {
          background: "transparent",
          "box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
          "backdrop-filter": "blur(20px)",
          "-webkit-backdrop-filter": "blur(20px)",
          border: "1px solid transparent",
        },
      });
    }),
  ],
};
