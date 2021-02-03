import Header from 'components/Header';
import React, { useState, useEffect } from 'react';
import './App.css';
import EnvList from './components/EnvList';

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

        <EnvList></EnvList>
      </main>
    </div>
  );
}
