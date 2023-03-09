/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily:{
      sans:['Georgia','sans-serif'],
      serif: ["Merriweather","serif"],
      display:["Oswald"]
    },
    fontSize:{
      sm:"0.8 rem",
      base:"1rem",
      lg:"1.15rem",
      xl:"1.25rem",
      "2xl":"1.563rem",
      "3xl":"1.953rem",
      "4xl":"2.441rem",
      "5xl":"3.052rem",
      "6xl":"3.5rem"
    },
    extend: {
      screens:{
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "2xl":"1536px"
      }
    },
  },
  plugins: [],
}
