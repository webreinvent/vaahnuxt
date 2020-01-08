var fs = require('fs');
var path = require('path');

let ENV_DEV = true;

//Development Environment
let port = 49950;
let host = 'localhost';
let https = false;

//Production Environment
if(ENV_DEV==false)
{
  host = 'domain.com';
  https =  {
    key: fs.readFileSync(path.resolve(__dirname,
      'ssl-key-path-file.key')),
    cert: fs.readFileSync(path.resolve(__dirname,
      'ssl-crt-path-file.crt'))
  };
}


export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    port: port, // default: 3000
    host: host, // default: localhost,
    timing: false,
    https: https
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vaah'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/font-awesome',
    '@nuxtjs/markdownit',
    '@nuxtjs/sentry',
    '@nuxtjs/auth',
    '@nuxtjs/redirect-module',
    //'@nuxtjs/recaptcha',
    ['@nuxtjs/google-analytics',
      {
        id: '',
        debug: {
          enabled: false,
          sendHitTask: true
        },
      },

    ]

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
