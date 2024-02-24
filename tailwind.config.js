/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-purple': '#814ac8',
        'secondary-purple': '#ac7cea',
        'ascent-purple': '#974cf6',
        "background": "#fbfafd"
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'], // Enable borderColor variant with hover variant
      boxShadow: ['hover'], // Enable borderColor variant with hover variant
    },
  },
  plugins: [],
})

