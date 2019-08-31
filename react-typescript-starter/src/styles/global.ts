import { injectGlobal } from 'styled-components';
import { baseFontSize, baseLineHeight } from './typography';
import drawOutline from './mixin/drawOutline';

// tslint:disable-next-line
injectGlobal`
  ${drawOutline(/* true */)}

  * {
    box-sizing: border-box;
  }

  body {
    font-size: ${baseFontSize};
    line-height: ${baseLineHeight};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    position: relative;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
  }

  ol,
  ul {
    margin: 0;
  }

  li {
    list-style: none;
  }

  input[type=text] {
    ime-mode: desativated; ${/* 한글 자판 표시 */ ''}
  }

  input[type=password] {
    ime-mode: auto;
  }

  button {
    background: none;
    border: none;
  }
`;
