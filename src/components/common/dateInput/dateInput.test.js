import React from 'react';
import { shallow } from 'enzyme';

import DateInput from './dateInput';

describe('<DateInput />', () => {
  it('Renders without crashing', () => {
    shallow(<DateInput />);
  });
});
