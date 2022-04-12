module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
      extend: {
          opacity: ['disabled'],
      },
  },
  plugins: [require('@tailwindcss/forms'), require('tw-elements/dist/plugin')],
}
