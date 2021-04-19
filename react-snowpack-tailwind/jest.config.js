// jest.config.js
const snowpackJestConfig = require('@snowpack/app-scripts-react/jest.config.js');

module.exports = {
  ...snowpackJestConfig(),
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^component(/?.*)$': '<rootDir>/src/component$1',
  },
};
