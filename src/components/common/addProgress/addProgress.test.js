import React from 'react';

import { shallow } from 'enzyme';
import AddProgress from './addProgress';

describe('<AddProgress />', () => {
  it('Renders without crashing', () => {
    shallow(<AddProgress />);
  });
});
