/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "576px" },

      md: { max: "960px" },

      lg: { max: "1440px" },
    },
  },
  plugins: [],
};
