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
    bundle: true,
    minify: true,
    treeshake: true,
    target: 'es2020',
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
    component: path.join(__dirname, 'src/component'),
    utils: path.join(__dirname, 'src/utils'),
  },
};
