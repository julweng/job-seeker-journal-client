import React from 'react';

import { shallow } from 'enzyme';
import JobItem from './jobItem';

describe('<JobItem />', () => {
  it('Renders without crashing', () => {
    shallow(<JobItem />);
  });
});
