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
          // NOTE: optional chaining 문법 오류 때문에 babel-loader 직접 추가함.
          // 추가 없어도 빌드 가능하다면 삭제해도 됨
          config.module.rules.push({
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                targets: '> 0.25%, not dead',
                plugins: [
                  ['@babel/plugin-transform-runtime', { regenerator: true }],
                ],
              },
            },
          });

          config.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              reportFilename: 'docs/bundleAnalyze.html',
              defaultSizes: 'parsed',
              openAnalyzer: false,
              statsFilename: 'docs/bundleAnalyze.json',
              generateStatsFile: true,
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
  packageOptions: {
    polyfillNode: true,
  },
  devOptions: {
    open: 'chromew',
  },
  buildOptions: {
    sourcemap: false,
  },
  alias: {
    components: path.join(__dirname, 'src/components'),
    utils: path.join(__dirname, 'src/utils'),
  },
};
