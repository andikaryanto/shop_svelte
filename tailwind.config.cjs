/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["emerald", "forest", "dark", "light"],
    darkTheme: "dark",
    utils: true,
    base: true,
  },
  plugins: [
    // require('flowbite/plugin')
    // require('tw-elements/dist/plugin')
    require("daisyui"),
  ],
}
