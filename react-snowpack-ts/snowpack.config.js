/** @type {import("snowpack").SnowpackUserConfig } */

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
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
          return config;
        },
      },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    component: path.join(__dirname, 'src/component'),
    utils: path.join(__dirname, 'src/utils'),
  },
};
