const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '480px': '30rem',
        '352px': '22rem'
      }
    },
    fontSize: {
      'h1Login': '3.375rem',
      'small': '0.875rem'
    },
    backgroundColor: {
      'primary': '#121214',
      'secondary': '#202024',
      'rocket': '#8464e5',
      'github': '#29292e'
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
