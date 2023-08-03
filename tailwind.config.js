/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        backgroundColor: "hsl(207, 26%, 17%)",
        otherColor: "hsl(209, 23%, 22%)",
      },
    },
  },
  plugins: [],
};
