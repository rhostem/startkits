/** @type {import("snowpack").SnowpackUserConfig } */
const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    // [
    //   '@snowpack/plugin-webpack',
    //   {
    //     extendConfig: (config) => {
    //       config.plugins.push(
    //         new BundleAnalyzerPlugin({
    //           analyzerMode: 'static',
    //           reportFilename: 'docs/bundleAnalyze.html',
    //           defaultSizes: 'parsed',
    //           openAnalyzer: false,
    //           generateStatsFile: true,
    //           statsFilename: 'docs/bundleAnalyze.json',
    //         }),
    //       );
    //       config.devtool = 'source-map';
    //       return config;
    //     },
    //   },
    // ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* use built-in bundler */
    bundle: true,
    minify: true,
    target: 'es2020',
    treeshake: true,
    splitting: true,
  },
  packageOptions: {
    source: 'remote',
    types: true, // Snowpack to install TypeScript types in your project.
  },
  devOptions: {},
  buildOptions: {
    sourcemap: true,
  },
  alias: {
    components: path.join(__dirname, 'src/components'),
    utils: path.join(__dirname, 'src/utils'),
  },
};
