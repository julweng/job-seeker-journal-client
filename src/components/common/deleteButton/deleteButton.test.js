import React from 'react';

import { shallow } from 'enzyme';
import DeleteButton from './deleteButton';

describe('<DeleteButton />', () => {
  it('Renders without crashing', () => {
    shallow(<DeleteButton />);
  });
});
