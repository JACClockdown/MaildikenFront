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
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.1.min.js' },
      { src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js' },
    ],
    link: [
      { 
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'  
      }
    ],
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/vendor/fontawesome-free/css/all.min.css',
    '@/assets/css/sb-admin-2.min.css'
  ],

  script:[
    '@/assets/vendor/jquery/jquery.min.js',
    '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
    '@/assets/vendor/jquery-easing/jquery.easing.min.js',
    '@/assets/js/sb-admin-2.min.js',
    '@/assets/vendor/chart.js/Chart.min.js',
    '@/assets/js/demo/chart-area-demo.js',
    '@/assets/js/demo/chart-pie-demo.js'

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
    '@nuxtjs/proxy',
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {

    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
      
    },

    strategies: {
      local: {
        endpoints: {
          login: { url: 'http://127.0.0.1:8000/api/auth/login', method: 'post', propertyName: 'access_token' },
          user:  { url: 'http://127.0.0.1:8000/api/auth/me', method: 'get', propertyName: false },
          logout:{ url: 'http://127.0.0.1:8000/api/auth/logout', method: 'post' }
        }
      }
    }
  }
  
}
