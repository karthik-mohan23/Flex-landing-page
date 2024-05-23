/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "#DCFCE7",
        500: "#22C55E",
      },
      gray: {
        100: "#EEF0F3",
        200: "#D5DAE1",
        400: "#8896AB",
        500: "#556987",
        800: "#333F51",
        900: "#2A3342",
      },
      white: {
        50: "#F0FDF4",
        900: "#FFFFFF",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
