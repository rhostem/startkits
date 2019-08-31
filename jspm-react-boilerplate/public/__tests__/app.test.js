import React from 'react';
import { shallow, mount } from 'enzyme';

jest.unmock('../appname');

import App from '../app';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(shallow(<AppName />).contains(
      <div className="AppName">
      </div>
    )).toBe(true);
  });
});
