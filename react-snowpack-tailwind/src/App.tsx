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
    <div>
      <Header></Header>
      <main>
        <h1 className='bg-red-400 text-center p-5 text-2xl font-bold'>HMR</h1>
        <p className='text-center p-4'>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <div className='text-center'>
          <button className='btn-blue'>Blue Button</button>
        </div>

        <div className='bg-blue-400 text-center text-md font-bold text-white my-4 p-2 sm:p-4 md:p-6 lg:p-8 transition-all'>
          <p>This box has responsive spacing.</p>
          <pre className='text-sm mt-2'>p-2 sm:p-4 md:p-6 lg:p-8</pre>
        </div>
      </main>
    </div>
  );
}
