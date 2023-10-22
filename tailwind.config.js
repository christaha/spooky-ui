/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
    theme: {
      extend: {
        colors: {
          'blue': '#1fb6ff',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'green': '#13ce66',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'purple': '#504099',
          'purple-light': '#974EC3',
          'gray-light': '#d3dce6',
        },
      },
    },
    plugins: [],
  }