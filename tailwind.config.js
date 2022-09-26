/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f4f8f9",
          100: "#dbf1fa",
          200: "#b1e1f4",
          300: "#7ec2e3",
          400: "#479fcc",
          500: "#347eb6",
          600: "#2c639d",
          700: "#254b7b",
          800: "#1a3358",
          900: "#101f39",
        },
      },
    },
  },
  plugins: [],
};
