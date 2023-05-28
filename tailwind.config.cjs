/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#3083FF",
        secondary: "#F5F6FB",
        "grey": "#939496",
        "black-200": "#1E242D",
        "white-100": "#f3f3f3",
        "white-200": "#F4F5FB",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'sm-max': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }

        'md-max': {'max': '960px'},

        'mdlg': {'max': '1240px'},
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};