export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtSignalR',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios-accessor.ts', '@/plugins/axios.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],
  proxy: {
    '/json': {
      target: 'http://localhost:5000/',
      secure: false
    },
    '/api': {
      target: 'http://localhost:5000/',
      secure: false
      // credentials: true
    }
  },
  modules: [
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/proxy',
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: false
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:5000'
  },

  build: {}
}
