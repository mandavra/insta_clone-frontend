/** @type {import('tailwindcss').Config} */
export default {
  content: [join(__dirname, 'src/**/*.{js,jsx,ts,tsx,html}')],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography, tailwindForms],
};
