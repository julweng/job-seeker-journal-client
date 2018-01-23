import React from 'react';
import { shallow } from 'enzyme';

import { MonthlyJobCollections } from './monthlyJobCollections';

describe('<MonthlyJobCollections />', () => {
  it('Renders without crashing', () => {
    shallow(<MonthlyJobCollections />);
  });
});
