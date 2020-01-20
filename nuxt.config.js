let fs = require('fs');
let path = require('path');

import config from './vaah.config';


let ENV_DEV = true;

/*
|--------------------------------------------------------------------------
| NuxtJs Development Configurations
|--------------------------------------------------------------------------
*/
let port = 49950;
let host = 'localhost';
let https = false;

/*
|--------------------------------------------------------------------------
| NuxtJs Production Configurations
|--------------------------------------------------------------------------
*/
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

config.plugins.concat(plugins);


/*
|--------------------------------------------------------------------------
| NuxtJs Modules
|--------------------------------------------------------------------------
*/
let modules = [];

config.modules.concat(modules);


/*
|--------------------------------------------------------------------------
| NuxtJs Build Modules
|--------------------------------------------------------------------------
*/
let buildModules = [];

config.buildModules.concat(buildModules);


/*
|--------------------------------------------------------------------------
| NuxtJs Build
|--------------------------------------------------------------------------
*/
config.build = {
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
