import React from 'react';
import { shallow } from 'enzyme';

import { JobCollection } from './jobCollection';

describe('<JobCollection />', () => {
  it('Renders without crashing', () => {
    shallow(<JobCollection />);
  });
});
