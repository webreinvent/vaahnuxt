let fs = require('fs');
let path = require('path');

import config from './vaahnuxt/vaah.config';


let ENV_DEV = true;

/*
|--------------------------------------------------------------------------
| NuxtJs Development Configurations
|--------------------------------------------------------------------------
*/
let port = 3000;
let host = 'localhost';
let https = false;

/*
|--------------------------------------------------------------------------
| NuxtJs Production Configurations
|--------------------------------------------------------------------------
*/
if(ENV_DEV==false)
{
  port = 49100;
  host = 'demo.nuxt.vaah.dev';
  https =  {
    key: fs.readFileSync(path.resolve(__dirname,
      'path-to-ssl.key')),
    cert: fs.readFileSync(path.resolve(__dirname,
      'path-to-ssl.crt'))
  };
}

/*
|--------------------------------------------------------------------------
| NuxtJs Configurations
|--------------------------------------------------------------------------
*/

config.mode = 'universal';

/*
|--------------------------------------------------------------------------
| NuxtJs Head Details
|--------------------------------------------------------------------------
*/
config.head = {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
};


/*
|--------------------------------------------------------------------------
| NuxtJs CSS
|--------------------------------------------------------------------------
*/

let css = ["@/assets/themes/default/scss/style.scss"];

config.css = config.css.concat(css);

/*
|--------------------------------------------------------------------------
| NuxtJs Loading
|--------------------------------------------------------------------------
*/

config.loading =  { color: '#7957d5', throttle: 0, height: '5px' };

/*
|--------------------------------------------------------------------------
| NuxtJs Server Configurations
|--------------------------------------------------------------------------
*/
config.server = {
  port: port, // default: 3000
  host: host, // default: localhost,
  timing: false,
  https: https
};


/*
|--------------------------------------------------------------------------
| NuxtJs Plugins
|--------------------------------------------------------------------------
*/
let plugins = [];

config.plugins = config.plugins.concat(plugins);


/*
|--------------------------------------------------------------------------
| NuxtJs Modules
|--------------------------------------------------------------------------
*/
let modules = [];

config.modules = config.modules.concat(modules);

config.webfontloader = {
  google: {
    families: ['Poppins:300,400,500,600,700,800&display=swap'] //Loads Poppins font containing weights 400 to 700
  }
};

config.markdownit = {
  "preset": "default",
    "linkify": true,
    "html": true,
    "breaks": true,
    "use": [
    "markdown-it-div",
    "markdown-it-attrs",
    "markdown-it-highlightjs"
  ]
};

config.fontawesome = {
  imports: [
    //import whole set
    {
      set: '@fortawesome/free-solid-svg-icons',
      icons: ['fas']
    },
  ]
};


/*
|--------------------------------------------------------------------------
| NuxtJs Build Modules
|--------------------------------------------------------------------------
*/
let buildModules = [];

config.buildModules = config.buildModules.concat(buildModules);


/*
|--------------------------------------------------------------------------
| NuxtJs Build
|--------------------------------------------------------------------------
*/
config.build = {
  extractCSS: true,
  /*
  ** You can extend webpack config here
  */
  extend (config, ctx) {
  },
  postcss: {
    preset: {
      features: {
        customProperties: false
      }
    }
  }
};

/*
|--------------------------------------------------------------------------
| NuxtJs Google Analytics
|--------------------------------------------------------------------------
*/
config.googleAnalytics = {
  id: '',
  "debug": {
    "enabled": false,
    "sendHitTask": true
  }
};

export default config;
