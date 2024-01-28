const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@component'] = path.join(__dirname, 'src');
    config.resolve.alias['~component'] = path.join(__dirname, 'src'); // Modificación aquí
    config.resolve.alias['@component/styles'] = path.join(__dirname, 'src/styles'); // Alias para estilos comunes
    config.resolve.alias['@component/navbar'] = path.join(__dirname, 'src/components'); // Alias específico para el NavBar
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "fs": false,
      "tls": false,
      "net": false,
      "dns": false,
    };
    return config;
  },
};
