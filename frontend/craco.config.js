// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss',{config: './tailwind.config.js'}),
          require('autoprefixer'),
        ],
      },
    },
  }