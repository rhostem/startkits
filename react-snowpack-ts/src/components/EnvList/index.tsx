import React from 'react';

interface Props {}

const EnvList: React.FC<Props> = () => {
  return (
    <>
      <h1>
        <code>import-meta</code>
      </h1>
      <div>
        <h2>
          <code>env</code>
        </h2>
        <p>
          SNOWPACK_PUBLIC_API_URL=
          <code>{import.meta.env.SNOWPACK_PUBLIC_API_URL}</code>
        </p>
      </div>
      <div>
        <h2>
          <code>url</code>
        </h2>
        {import.meta.url}
      </div>
    </>
  );
};

export default EnvList;
