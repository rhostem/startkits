/** @type {import("snowpack").SnowpackUserConfig } */
const path = require('path');

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    ['@snowpack/plugin-webpack'],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  packageOptions: {
    polyfillNode: true,
  },
  devOptions: {
    open: 'chrome',
  },
  buildOptions: {
    sourcemap: false,
  },
  alias: {
    components: path.join(__dirname, 'src/components'),
    utils: path.join(__dirname, 'src/utils'),
  },
};
