/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
    },
    theme: {
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1080px",
        },
      },
    },
    extend: {
      colors: {
        primary: "#2F6B4F",
      },
    },
  },
  plugins: [],
};
