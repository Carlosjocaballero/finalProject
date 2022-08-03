/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html'
  ],
  theme: {
    extend : {
      colors : {
        primary : "#2F333B",
        secondary : "#BCBECD"
      },
      fontFamily: {
        'title' : ['Josefin Sans', 'sans-serif'],
        'main-text' : ['Montserrat Alternates','sans-serif'],
      },
      fontSize: {
        'main-title' : '20rem',
        'main-mid' : '15rem'
      }
    }
  },
  plugins: [],
}
