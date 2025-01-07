// Before: CommonJS Syntax
// const colors = require('tailwindcss/colors');

// After: ESM Syntax
import colors from 'tailwindcss/colors.js';

export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
  plugins: [],
};
