const drawOutline = (isDebug?: boolean) => {
  return process.env.NODE_ENV !== 'production' && !!isDebug
    ? `
      * {
        outline: 1px solid palevioletred;
      }

      input {
        outline: 1px solid #0f0;
      }

      a {
        outline: 1px solid #00f;
      }

      button {
        outline: 1px solid #0ff;
      }

      li {
        outline: 1px solid #ff0;
      }

      span {
        outline: 1px solid #f0f;
      }
    `
    : '';
};

export default drawOutline;
