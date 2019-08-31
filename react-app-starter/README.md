# react-app starter

This starter based on [create-react-app](https://github.com/facebookincubator/create-react-app).

## Features

- All features from create-react-app
- State management with Redux.
- Styling with styled-components.
- Test components with storybook in isolated enviromnent.
- Automatic code formatting with prettier.
- Analyzing bundle file with source-map-explorer.
- [Import module with absolut path](https://medium.com/@ktruong008/absolute-imports-with-create-react-app-4338fbca7e3d)

## Environment variables

This starter has 3 types of environment file, `.env.local`, `.env.staging`, `.env.production`. These files are used for development and build process.

Git repository should not add `.env.staging` and `.env.production` file because they may have sensitive security information.
