import React from 'react';
import { shallow } from 'enzyme';

import AddJob from './addJob';

describe('<AddJob />', () => {
  it('Renders without crashing', () => {
    shallow(<AddJob />);
  });
});
