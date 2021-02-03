import React from 'react';
import logo from './logo.svg';
import './style.css';

export default function Header(): JSX.Element {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />

      <p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </p>
    </header>
  );
}
