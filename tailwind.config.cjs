const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ...colors, primary: "#4f46e5" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
