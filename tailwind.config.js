module.exports = {
  mode:"jit",
  purge: [
    './public/**/*.html',
     './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: '#ac4d95',
        "blue-fonce":"#338aca",
        "violet-clair":"#864a9a",
        "violet-fonce":"#534d9d",
        turquoise:"#2dbceb"
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
