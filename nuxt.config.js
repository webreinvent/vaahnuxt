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
      './../../ssl/keys/c2417_1f2fd_8afdda87bd501f83e37582a98aa48669.key')),
    cert: fs.readFileSync(path.resolve(__dirname,
      './../../ssl/certs/demo_nuxt_vaah_dev_c2417_1f2fd_1589155199_d395bdedcb18f8578f62575590e53aaa.crt'))
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

let css = [];

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
