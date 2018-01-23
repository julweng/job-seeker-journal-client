import React from 'react';

import { shallow } from 'enzyme';

import { ProgressBarChart } from './progressBarChart';

describe('<ProgressBarChart />', () => {
  it('Renders without crashing', () => {
    shallow(<ProgressBarChart />);
  });
});
