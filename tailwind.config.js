/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#23AFFF',
      'blueHover': '#3eb9ff',
      'grey100': '#ECF0F1',
      'grey300': '#BDC3C7',
      'grey-header': '#3B4452',
      'grey-body': '#7F8C8D',
      'grey-blue': '#B5CAD3',

    },

    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },

    container: {
      // padding: '10.63rem',
      center: true,
    },

    plugins: [
      require('@tailwindcss/forms'),
      // ...
    ],
    extend: {},
  },

}
