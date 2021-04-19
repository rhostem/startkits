import { configure } from '@testing-library/react';
import '@testing-library/jest-dom';

configure({
  getElementError: (message: string) => {
    const error = new Error(message);
    error.name = 'TestingLibraryElementError';
    return error;
  },
});
