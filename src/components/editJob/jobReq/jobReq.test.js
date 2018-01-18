import React from 'react';

import { shallow } from 'enzyme';
import JobReq from './jobReq';

describe('<JobReq />', () => {
  it('Renders without crashing', () => {
    shallow(<JobReq />);
  });
});
