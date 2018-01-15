import React from 'react';

import { shallow } from 'enzyme';
import JobDetail from './jobDetail';

describe('<JobDetail />', () => {
  it('Renders without crashing', () => {
    shallow(<JobDetail />);
  });
});
