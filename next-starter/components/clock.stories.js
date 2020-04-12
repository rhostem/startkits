import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { Welcome } from '@storybook/react/demo';
import Clock from './clock'

storiesOf('clock', module)
  .add('default', () => <Clock />)
  .add('lastUpdate=now', () => <Clock lastUpdate={new Date()} />)
