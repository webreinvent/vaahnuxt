const path = require('path');

// eslint-disable-next-line nuxt/no-cjs-in-config
module.exports = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
    },
  },
};
