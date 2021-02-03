import Header from 'components/Header';
import React, { useState, useEffect } from 'react';
import './App.css';

export default function App(): JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // timer won't reset with HMR
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  // Return the App component.
  return (
    <div className="App">
      <Header></Header>

      <main>
        <h1>HMR</h1>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          HMR <b>does not reset</b> app state.
        </p>

        <h1>Environment variable</h1>
        <p>
          SNOWPACK_PUBLIC_API_URL=
          <code>{import.meta.env.SNOWPACK_PUBLIC_API_URL}</code>
        </p>
      </main>
    </div>
  );
}
