import React, { useState, useEffect } from 'react';
import Header from './components/Header';
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
    <div className=''>
      <Header></Header>

      <main className=''>
        <h1 className='bg-red-400 text-center p-5 text-2xl font-bold '>HMR</h1>
        <p className='block m-5 border-4 border-dashed'>
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
