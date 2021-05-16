const path = require('path');
const webpack = require('webpack');
const snowpackConfig = require('../snowpack.config');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  webpackFinal: async (config) => {
    // Assign aliases from snowpack.config.js
    config.resolve.alias = {
      ...config.resolve.alias,
      ...snowpackConfig.alias,
    };

    // Add __SNOWPACK_ENV__ global
    config.plugins.push(
      new webpack.DefinePlugin({
        __SNOWPACK_ENV__: JSON.stringify(
          Object.entries(process.env).reduce(
            (filtered, [key, value]) =>
              /^SNOWPACK_PUBLIC_.+/.test(key)
                ? { ...filtered, [key]: value }
                : filtered,
            {},
          ),
        ),
      }),
    );

    // Add rules for supporting import.meta
    config.module.rules.push({
      test: /\.[tj]sx?$/,
      loader: [
        require.resolve('@snowpack/plugin-webpack/plugins/import-meta-fix'),
        require.resolve(
          '@snowpack/plugin-webpack/plugins/proxy-import-resolve',
        ),
      ],
    });

    // add postcss-loader to use tailwind css
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
