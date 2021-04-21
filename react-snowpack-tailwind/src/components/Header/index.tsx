import React from 'react';
import logo from './logo.svg';

export default function Header(): JSX.Element {
  return (
    <header className='flex p-2 justify-center items-center bg-gray-700 '>
      <img src={logo} className='h-40 w-20 animate-spin-slow' alt='logo' />
      <p className='flex'>
        <a className='text-blue-300 text-2xl'>Learn React</a>
      </p>
    </header>
  );
}
