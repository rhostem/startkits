# next.js-starter

This starter app is based on [redux-saga example](https://github.com/zeit/next.js/blob/master/examples/with-redux-saga) of next.js repository.

## Features

- Redux and Redux-Saga
- storybook
- styled-component
- universal env config (process.env.NAME)
- webpack bundle analyzer
- eslint
- Automatic code formatting by prettier
- custom document with global style
- custom routing with express (optional)

### Redux

To connect a component to the store, Top level component(ie. components in `/page` folder) must be decorated by `withReduxSaga` hoc function. And another components can be connected with `connect` function of `redux`. (see `/components/template`)

### Environment variable

Environment varialbles are can be set with `/next/env-config.js` file.

After changing `env-config.js`, you must delete `/node_modules/.cache` folder. Because cache files of babel plugin are stored in there. ([link](https://github.com/zeit/next.js/tree/master/examples/with-universal-configuration#caveats))

### Custom routing with express

If you want to use customized routing, run app with `next/server.js`. This is based on [with-next-routes](https://github.com/zeit/next.js/blob/master/examples/with-next-routes/routes.js) example.