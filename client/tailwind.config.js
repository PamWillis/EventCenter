const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aboutUsHero': "url('../src/assets/home/team.jpg')",
        'eventsHero' : "url('../src/assets/home/eventsHero.jpg')",
        'vendorsHero' : "url('../src/assets/home/vendorsHero.jpg')",
        'loginHero' : "url('../src/assets/home/loginHero.jpg')",
        'signupHero' : "url('../src/assets/home/signupHero.jpg')"
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    boxShadow: {
      sm: "0 2px 4px 0 rgb(0 0 0 / 0.05)",
      // rest of the box shadow values
    },
    fontFamily: {
      Bree: ['Bree Serif', 'serif']
    }
  },
  plugins: [],
});

