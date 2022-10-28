/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'verde': '#acb404',
        'celeste': '#047c94',
        'azul': '#041c2c',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}
