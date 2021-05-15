/** @type {import("snowpack").SnowpackUserConfig } */
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          config.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              reportFilename: 'docs/bundleAnalyze.html',
              defaultSizes: 'parsed',
              openAnalyzer: false,
              generateStatsFile: true,
              statsFilename: 'docs/bundleAnalyze.json',
            }),
          );
          config.devtool = 'source-map';
          return config;
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  installOptions: {
    polyfillNode: true,
  },
  devOptions: {},
  buildOptions: {
    sourcemap: false,
  },
  alias: {
    components: path.join(__dirname, 'src/components'),
    utils: path.join(__dirname, 'src/utils'),
  },
};
