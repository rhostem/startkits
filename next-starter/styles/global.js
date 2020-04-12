import { normalize } from 'polished'
import { baseFontSize, baseLineHeight } from './typography'
import { injectGlobal } from 'styled-components'

injectGlobal`
  ${normalize()}
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${baseFontSize};
    line-height: ${baseLineHeight};
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    margin: 0;
  }

  li {
    list-style: none;
  }

  input[type="text"] {
    ime-mode: desativated;
  }

  input[type="passwrod"] {
    ime-mode: auto;
  }

  button {
    background: none;
    border: none;
  }
`
