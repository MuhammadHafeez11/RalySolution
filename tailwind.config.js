/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['var(--font-nunito-sans)', 'Nunito Sans', 'sans-serif'],
        'opensans': ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#024d94',
        'primary-yellow': '#f8d171',
        'text-gray': '#555',
        'light-bg': '#fafafa',
      },
      spacing: {
        '100': '100px',
      },
    },
  },
  plugins: [],
};