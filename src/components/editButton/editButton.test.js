import React from 'react';

import { shallow } from 'enzyme';
import EditButton from './editButton';

describe('<EditButton />', () => {
  it('Renders without crashing', () => {
    shallow(<EditButton />);
  });
});
