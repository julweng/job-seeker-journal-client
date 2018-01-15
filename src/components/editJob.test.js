import React from 'react';
import { shallow } from 'enzyme';

import EditJob from './editJob';

describe('<EditJob />', () => {
  it('Renders without crashing', () => {
    shallow(<EditJob />);
  });
});
