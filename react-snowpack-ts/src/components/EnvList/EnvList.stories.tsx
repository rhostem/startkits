import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import EnvList from './index';

export default {
  title: 'EnvList',
  decorators: [withKnobs],
};

export const Default = () => <EnvList></EnvList>;
