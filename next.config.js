

const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@component'] = path.join(__dirname, 'src/*');
    return config;
  },
};
