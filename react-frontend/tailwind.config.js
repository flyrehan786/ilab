/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-color': '#0052CC',
        'light-gray': '#FAFBFC',
      },
      boxShadow: {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px',
      },
    },
  },
  plugins: [],
};
