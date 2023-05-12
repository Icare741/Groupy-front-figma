/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    mode: "jit",
    darkmode: false,
    extend: {
      colors: {
        graybackground: "#F1F4F8",

      },
    },
    plugins: [],

  }
}

