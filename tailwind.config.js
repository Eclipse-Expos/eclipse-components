/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#101011", // previous: #111
        primary: "#ffffff", // previous: #eee
        "eclipse-purple-base": "#622b81",
        "eclipse-purple-dark": "#390d3e",
        "eclipse-purple-black": "#141028",
        "eclipse-red": "#b01e53",
        "eclipse-orange": "#f26557",
        "eclipse-pink": "#e54291",
        "eclipse-green": "#a5d6af",
        "eclipse-cyan": "#58c3ba",
        "eclipse-blue-dark": "#0d3d60",
      },
      fontFamily: {
        righteous: ["Righteous", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
