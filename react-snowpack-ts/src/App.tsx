import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App(): JSX.Element {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <div> </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
      <main>
        <h1>HMR</h1>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          HMR <b>does not reset</b> app state.
        </p>

        <h1>environment variable</h1>
        <p>
          SNOWPACK_PUBLIC_API_URL=
          <code>{import.meta.env.SNOWPACK_PUBLIC_API_URL}</code>
        </p>
      </main>
    </div>
  );
}
