/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "golden-grass": {
          DEFAULT: "#DAA520",
          50: "#F5E5BC",
          100: "#F3DEAB",
          200: "#EDD087",
          300: "#E8C263",
          400: "#E3B440",
          500: "#DAA520",
          600: "#A98019",
          700: "#785B12",
          800: "#47360A",
          900: "#161103",
          950: "#000000",
        },
      },
      fontFamily: {
        Bernadette: ["Bernadette Rough", "sans-serif"],
        rancho: ["Rancho Regular"],
      },
    },
  },
  plugins: [],
};
