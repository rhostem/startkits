const path = require('path');

const regex = /import\.meta/g;
require('dotenv').config();

/**
 * import.meta 코드 변환을 위한 storybook용 webpack 로더
 *
 * 참조) https://github.com/snowpackjs/snowpack/blob/main/plugins/plugin-webpack/plugins/import-meta-fix.js
 */
module.exports = function (source) {
  let found = false;
  let rewrittenSource = source.replace(regex, () => {
    found = true;
    return `({ env: __SNOWPACK_ENV__ })`;
  });

  if (found) {
    return `${rewrittenSource}`;
  } else {
    return source;
  }
};
