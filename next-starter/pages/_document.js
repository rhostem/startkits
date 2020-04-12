import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import 'styles/global'
import 'isomorphic-fetch'
import es6promise from 'es6-promise'

es6promise.polyfill()

/**
 * custom document
 * https://github.com/zeit/next.js#custom-document
 *
 * with styled component
 * https://github.com/zeit/next.js/tree/master/examples/with-styled-components
 */
export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>{process.env.SITE_TITLE}</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}
