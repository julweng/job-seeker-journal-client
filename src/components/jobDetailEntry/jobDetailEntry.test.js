import React from 'react';
import { shallow } from 'enzyme';

import JobDetailEntry from './jobDetailEntry';

describe('<JobDetailEntry />', () => {
  it('Renders without crashing', () => {
    shallow(<JobDetailEntry />);
  });
});
