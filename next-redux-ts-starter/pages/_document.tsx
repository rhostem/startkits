import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// import 'core-js/stable'

/**
 * custom document
 * https://github.com/zeit/next.js#custom-document
 *
 * with styled component
 * https://github.com/zeit/next.js/tree/master/examples/with-styled-components
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  get siteConfig() {
    // TODO:
    return {
      title: '',
      url: '',
      description: '',
    }
  }

  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, shrink-to-fit=no"
          />
          <meta name="robots" content="index,follow" />
          <meta name="format-detection" content="telephone=no" />
          {/* meta  */}
          <meta property="og:title" content={this.siteConfig.title} />
          <meta property="og:site_name" content={this.siteConfig.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={this.siteConfig.url} />
          <meta
            property="og:image"
            content="/public/android-chrome-512x512.png"
          />
          <meta
            property="og:description"
            content={this.siteConfig.description}
          />
          {/* 외부 스크립트, 스타일시트 */}
          {/* 구글 폰트 (https://fonts.google.com) */}
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700|Quicksand:400,500,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          {/* app icons */}
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
          {/* component styles (from styled component) */}
          {styleTags}
        </Head>
        <body>
          <div className="root">{main}</div>

          <div id="modalRoot"></div>

          <NextScript />
        </body>
      </Html>
    )
  }
}
