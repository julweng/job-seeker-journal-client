import React from 'react';

import { shallow } from 'enzyme';

import UserHeader from './userHeader';

describe('<UserHeader />', () => {
  it('Renders without crashing', () => {
    shallow(<UserHeader />);
  });
});
