import React from 'react';
import { shallow } from 'enzyme';

import { ViewJob } from './viewJob';

describe('<ViewJob />', () => {
  it('Renders without crashing', () => {
    shallow(<ViewJob />);
  });
});
