// server.js
const isDev = process.env.NODE_ENV !== 'production'
const port = isDev ? 3000 : 3003

const express = require('express')
const next = require('next')
const routes = require('./routes')
const app = next({ dev: isDev })
const handler = routes.getRequestHandler(app)

// With express
app.prepare().then(() => {
  express()
    .use(handler)
    .listen(port)
})
