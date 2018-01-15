import React from 'react';

import { shallow } from 'enzyme';
import ProgressBar from './progressBar';

describe('<ProgressBar />', () => {
  it('Renders without crashing', () => {
    shallow(<ProgressBar />);
  });
});
