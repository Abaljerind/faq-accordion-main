/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        "work-sans": ["Work Sans"],
      },
      colors: {
        "light-pink": "#F9F0FF",
        "grayish-purple": "#8C6991",
        "dark-purple": "#2F1533",
        "active-state": "#AD28EB",
      },
      backgroundImage: {
        "pattern-desktop":
          "url('/assets/images/background-pattern-desktop.svg')",
        "pattern-mobile": "url('/assets/images/background-pattern-mobile.svg')",
        "icon-minus": "url('/assets/images/icon-minus.svg')",
        "icon-plus": "url('/assets/images/icon-plus.svg')",
        "icon-star": "url('/assets/images/icon-star.svg')",
      },
    },
  },
  plugins: [],
};
