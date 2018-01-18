import React from 'react';
import { shallow } from 'enzyme';

import UserNav from './userNav';

describe('<UserNav />', () => {
  it('Renders without crashing', () => {
    shallow(<UserNav />);
  });
});
