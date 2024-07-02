/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
      colors: {
        "light-pink": "#F9F0FF",
        "grayish-purple": "#8C6991",
        "dark-purple": "#2F1533",
      },
    },
  },
  plugins: [],
};
