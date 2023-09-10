/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        darkSlateGrey: " hsl(234, 29%, 20%)",
        charcoalGrey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
      },

      backgroundImage: {
        mobile: "url('/assets/images/illustration-sign-up-mobile.svg')",
        desktop: "url('/assets/images/illustration-sign-up-desktop.svg')",
      },
    },
  },
  plugins: [],
};
