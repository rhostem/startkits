import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import SideBar from './SideBar';

storiesOf('SideBar', module)
  .add('default', () => <SideBar />)
  .add('props.title = Test', () => <SideBar title="test" />);
