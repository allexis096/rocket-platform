const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      }
    },
    fontSize: {
      'h1Login': '3.375rem'
    },
    backgroundColor: {
      'primary': '#121214',
      'secondary': '#202024'
    },
    textColor: {
      'primary': '#e1e1e6',
      'placeholder': '#757575',
      'rocket': '#8464e5'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
