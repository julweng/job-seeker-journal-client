import React from 'react';
import { shallow } from 'enzyme';

import MonthButton from './monthButton';

describe('<MonthButton />', () => {
  it('Renders without crashing', () => {
    shallow(<MonthButton />);
  });
});
