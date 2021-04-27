export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DikenMail',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { 
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'  
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "tachyons/css/tachyons.min.css",
    "@/assets/css/styles.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'http://127.0.0.1:8000/api/auth/login', method: 'post', propertyName: 'data.access_token' },
          user:  { url: 'http://127.0.0.1:8000/api/auth/me', method: 'get', propertyName: 'data.user' },
          logout:{ url: 'http://127.0.0.1:8000/api/auth/auth/logout', method: 'post' }
        }
      }
    }
  }
  
}
