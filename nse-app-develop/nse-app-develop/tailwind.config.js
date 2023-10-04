module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669',
          50: '#59F9C8',
          100: '#45F9C1',
          200: '#1EF7B4',
          300: '#08E5A0',
          400: '#06BD85',
          500: '#059669',
          600: '#036043',
          700: '#01291D',
          800: '#000000',
          900: '#000000',
        },
        secondary: {
          DEFAULT: '#D92363',
          50: '#F5BFD2',
          100: '#F2ADC5',
          200: '#EC8AAD',
          300: '#E66794',
          400: '#E1447B',
          500: '#D92363',
          600: '#A91B4D',
          700: '#781337',
          800: '#480C21',
          900: '#18040B',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
