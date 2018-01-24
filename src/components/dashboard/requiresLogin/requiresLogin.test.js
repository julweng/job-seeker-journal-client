import React from 'react';

import { shallow } from 'enzyme';

import { RequiresLogin } from './progressBarChart';

describe('<RequiresLogin />', () => {
  it('Renders without crashing', () => {
    shallow(<RequiresLogin />);
  });
});
