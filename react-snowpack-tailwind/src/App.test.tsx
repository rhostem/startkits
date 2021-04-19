import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App>', () => {
  it('renders learn react link', () => {
    render(<App />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  });
});
