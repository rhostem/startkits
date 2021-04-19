import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Header from './index';

export default {
  title: 'Header',
  decorators: [withKnobs],
};

export const Default = () => <Header></Header>;
