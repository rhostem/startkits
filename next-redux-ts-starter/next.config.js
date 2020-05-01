require('dotenv').config()

module.exports = {
  env: {
    API_ROOT: process.env.API_ROOT,
  },
  webpack: function (config, options) {
    return config
  },
}
