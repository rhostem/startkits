/** @type {import("snowpack").SnowpackUserConfig } */
const path = require('path');

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  exclude: ['**/node_modules/**/*', '**/*.stories.*'],
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  packageOptions: {
    polyfillNode: true,
  },
  devOptions: {
    open: 'chromew',
  },
  buildOptions: {
    sourcemap: false,
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2019',
  },
  alias: {
    components: path.join(__dirname, 'src/components'),
    utils: path.join(__dirname, 'src/utils'),
  },
};
