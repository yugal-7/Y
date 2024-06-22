/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],

  darkMode: 'class',

  safelist: [
      {
          pattern: /text-(red|green|blue)-(100|400)/,
          variants: ['group-hover']
      },
      {
          pattern: /bg-(red|green|blue)-(100|400)/,
          variants: ['group-hover']
      }
  ],

  theme: {

      screens: {
          xs: "614px",
          sm: "1002px",
          md: "1022px",
          lg: "1092px",
          xl: "1280px",
      },

      extend: {

          colors: {
              dim: {
                  50: "#fc0352",
                  100: "#fc0352",
                  200: "#fc0352",
                  300: "#fc0352",
                  400: "#fc0352",
                  500: "#fc0352",
                  600: "#fc0352",
                  700: "#fc0352",
                  800: "#fc0352",
                  900: "#fc0352",
              },
          },

      },
  },

  plugins: [
      require('@tailwindcss/forms')
  ],
}

