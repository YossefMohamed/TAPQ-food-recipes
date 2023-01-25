/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#e97b3e",
        light: "white",
        tmain: "black",
        tsecondary: "white",
        tmuted: "#999797",
      },
    },
  },
  plugins: [],
};
