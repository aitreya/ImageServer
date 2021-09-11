module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {        
        base: ['1.5rem', { lineHeight: '2rem' }]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
