/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily:{
    'dm':["DM Sans", 'sans-serif'],
    },
    extend: {
      backgroundColor:{
      'soft-red': 'hsl(10, 79%, 65%)',
    },
    colors:{
      para: 'hsl(25, 47%, 15%)',
      text:'hsl(28, 10%, 53%)',
    },
    },
  },
  plugins: [],
}

