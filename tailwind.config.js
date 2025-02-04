module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto Condensed', 'sans-serif'],
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
          'xs': '450px',
        },
      },
    },
    plugins: [],
  };