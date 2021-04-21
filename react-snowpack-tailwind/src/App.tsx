import React, { useState, useEffect } from 'react';
import Header from './components/Header';

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
        <h1 className='bg-red-400 text-center p-5 text-2xl font-bold'>HMR</h1>
        <p className='animate-ping text-center m-10'>
          Page has been open for <code>{count}</code> seconds.
        </p>
      </main>
    </div>
  );
}
