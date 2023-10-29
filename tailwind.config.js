/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      colors:{
        'ourpink': '#C8447B',
        'ourpurple': '#FFE5DA',
        'babypink': '#EFC0D2',
        'gradpink':'#8D0E0E',
        'gradred':'#7f1d1d',
        'gradblack':'#1c1917',
        'gradpurple':'#fffbd5',
        'hoverpink':'#B41C5B',
        'hoverpurple':'#705187',
        'tablepurple':'#7F6699',
        'tablepink':'#AA7CA4',
        'tablegrey':'#202020',
      },
      // backgroundImage: {
      //   'daysbackground': "url('images/TIMER 1.png')",
      //   'hoursbackground': "url('images/TIMER 2.png')",
      //   'minutesbackground': "url('images/TIMER 3.png')",
      //   'secondsbackground': "url('images/TIMER 4.png')", 
      //   'headerbackground' : "url('images/header3.png')",
      //   'quotebackground': "url('images/bw image .png')",
      //   'footerbackground': "url('images/footer2.png')",
      // },
      // fontFamily: {
        // 'fina-sans':['"Dancing Script"', cursive,...], 
      // },
    },
  },
  plugins: [],
}         