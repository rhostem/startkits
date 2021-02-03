module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
  overrides: [
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
      },
    },
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: ['*.json', '*.code-snippets'],
      options: {
        parser: 'json',
      },
    },
  ],
};
