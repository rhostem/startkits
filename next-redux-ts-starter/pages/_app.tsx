import React from 'react'
import App, { AppProps } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import createStore from 'store/createStore'

type Props = AppProps & {
  store: IStore,
}
class CustomApp extends App<Props, {}> {
  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

const enhancher = compose(withRedux(createStore))

export default enhancher(CustomApp)
