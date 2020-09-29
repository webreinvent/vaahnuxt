let fs = require('fs');
let path = require('path');

import config from './vaahnuxt/vaah.config';


let ENV;

ENV = 'localhost';
//ENV = 'develop';
//ENV = 'production';

/*
|--------------------------------------------------------------------------
| NuxtJs Configurations
|--------------------------------------------------------------------------
*/

let port;
let host;
let https;

if(ENV == 'localhost')
{

  port = 3000;
  host = 'localhost';
  https = false;
}

if(ENV == 'develop')
{

  //EDIT FOLLOWING SETTING
  port = 48100;
  host = 'develop.domain.com';
  https =  {
    key: '/path/to/ssl.key',
    cert: '/path/to/ssl.key.crt'
  };
}


if(ENV=='production')
{

  //EDIT FOLLOWING SETTING
  port = 49100;
  host = 'domain.com';
  https =  {
    key: '/path/to/ssl.key',
    cert: '/path/to/ssl.key.crt'
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

let css = [
  "~/node_modules/highlight.js/styles/github.css",
  "~/node_modules/bulma-helpers/bulma-helpers.sass",
  "@/assets/themes/scss/site.scss"
];

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

config.buefy = {
  materialDesignIcons: false,
  defaultIconPack: 'fas',
  defaultIconComponent: 'font-awesome-icon'
};

config.fontawesome = {
  imports: [
    //import whole set
    {
      set: '@fortawesome/free-solid-svg-icons',
      icons: ['fas']
    },
    {
      set: '@fortawesome/free-brands-svg-icons',
      icons: ['fab']
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
