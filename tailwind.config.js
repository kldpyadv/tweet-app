/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#1D9BF0',
        'secondary': '#16181C',
        'white': '#EFF3F4',
        'pink': '#F91980',
      },
    }
  },
  plugins: [require('flowbite/plugin')],
}

