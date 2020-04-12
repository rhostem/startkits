// https://github.com/zeit/next.js/tree/master/examples/with-universal-configuration
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.SITE_TITLE': `next.js starter ${prod ? '' : '(local)'}`,
  'process.env.BACKEND_URL': prod ? 'https://api.example.com' : 'https://localhost:8080',
}
