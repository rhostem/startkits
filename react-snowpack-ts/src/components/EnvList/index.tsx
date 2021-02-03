import React from 'react';

export default function index(): JSX.Element {
  return (
    <>
      <h1>Environment variable</h1>
      <p>
        SNOWPACK_PUBLIC_API_URL=
        <code>{import.meta.env.SNOWPACK_PUBLIC_API_URL}</code>
      </p>
    </>
  );
}
