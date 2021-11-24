export default{
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vr-cafe-website',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'La plus grande et L\'unique des pyrénées-orientales dédiée à la Réalité Vituelle. Nouvelle génération d\'escape game en VR' },
      { name: 'format-detection', content: 'telephone=no' },
      {name:'facebook-domain-verification' ,content:"4ydruyoekxigb8i7dsfysxg8m7n59b"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxt/content',
    '@nuxt/image'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  content: {
    // Options
  },
  server:{
    port:8000,
    host:"0.0.0.0"
  }
}
